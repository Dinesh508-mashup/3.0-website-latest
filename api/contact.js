import { getPool } from './_lib/db.js';
import { validateContactSubmission } from './_lib/validate.js';
import { getClientIp, rateLimit } from './_lib/rateLimit.js';
import { sendBriefNotification } from './_lib/email.js';

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string' && req.body.length > 0) {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return new Promise((resolve) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 64_000) {
        req.destroy();
        resolve(null);
      }
    });
    req.on('end', () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch {
        resolve(null);
      }
    });
    req.on('error', () => resolve(null));
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const ip = getClientIp(req);
  const limit = rateLimit(ip);
  if (!limit.ok) {
    if (limit.retryAfterSeconds) {
      res.setHeader('Retry-After', String(limit.retryAfterSeconds));
    }
    return res.status(429).json({ ok: false, error: limit.reason || 'Too many requests.' });
  }

  const body = await readJsonBody(req);
  if (body === null) {
    return res.status(400).json({ ok: false, error: 'Invalid JSON body.' });
  }

  // Honeypot: any value here means a bot filled an invisible field.
  if (typeof body === 'object' && body && typeof body.website === 'string' && body.website.length > 0) {
    return res.status(200).json({ ok: true, id: null });
  }

  const { data, errors } = validateContactSubmission(body);
  if (!data) {
    return res.status(400).json({ ok: false, error: 'Validation failed.', fieldErrors: errors });
  }

  const userAgent =
    typeof req.headers['user-agent'] === 'string' ? req.headers['user-agent'].slice(0, 500) : null;

  let inserted;
  try {
    const pool = getPool();
    const result = await pool.query(
      `INSERT INTO contact_submissions
         (name, email, company, role, ideal_start, project_brief, source_ip, user_agent)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, created_at`,
      [
        data.name,
        data.email,
        data.company,
        data.role,
        data.idealStart,
        data.projectBrief,
        ip,
        userAgent,
      ],
    );
    inserted = result.rows[0];
  } catch (err) {
    console.error('[api/contact] insert failed', err);
    return res
      .status(500)
      .json({ ok: false, error: 'We could not save your brief right now. Please try again shortly.' });
  }

  // Best-effort SES notification. Never block or fail the request on email errors —
  // the DB row is the source of truth and the user has already been told it landed.
  try {
    await sendBriefNotification({
      id: inserted.id,
      createdAt: inserted.created_at,
      name: data.name,
      email: data.email,
      company: data.company,
      role: data.role,
      idealStart: data.idealStart,
      projectBrief: data.projectBrief,
      sourceIp: ip,
      userAgent: userAgent || undefined,
    });
  } catch (mailErr) {
    console.error('[api/contact] notification email failed', mailErr);
  }

  return res.status(201).json({
    ok: true,
    id: inserted.id,
    createdAt: inserted.created_at,
  });
}
