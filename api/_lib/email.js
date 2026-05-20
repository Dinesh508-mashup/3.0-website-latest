import nodemailer from 'nodemailer';

/**
 * @typedef {Object} BriefNotificationPayload
 * @property {number|string|null} id
 * @property {Date|string|null}   createdAt
 * @property {string} name
 * @property {string} email
 * @property {string} company
 * @property {string} role
 * @property {string} idealStart
 * @property {string} projectBrief
 * @property {string} [sourceIp]
 * @property {string} [userAgent]
 */

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  const user = process.env.SES_USER;
  const pass = process.env.SES_PASSWORD;
  const region = process.env.SES_REGION || 'us-east-1';

  if (!user || !pass) {
    throw new Error('SES_USER / SES_PASSWORD are not configured');
  }

  transporter = nodemailer.createTransport({
    host: `email-smtp.${region}.amazonaws.com`,
    port: 587,
    secure: false,
    requireTLS: true,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 8_000,
    socketTimeout: 10_000,
  });

  return transporter;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderHtml(p) {
  const briefHtml = escapeHtml(p.projectBrief).replace(/\n/g, '<br>');
  const row = (label, value) => `
    <tr>
      <td style="padding:6px 14px 6px 0;color:#5F5F5F;font:500 12px/1.4 'JetBrains Mono',monospace;letter-spacing:0.08em;text-transform:uppercase;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
      <td style="padding:6px 0;color:#111;font:400 15px/1.5 'Inter Tight',system-ui,sans-serif;">${value}</td>
    </tr>`;

  return `<!doctype html>
<html>
  <body style="margin:0;background:#FFF9F5;font-family:'Inter Tight',system-ui,sans-serif;color:#111;">
    <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
      <div style="font:500 11px/1 'JetBrains Mono',monospace;letter-spacing:0.14em;text-transform:uppercase;color:#BA2F58;">New project brief</div>
      <h1 style="margin:8px 0 24px;font:500 28px/1.1 'Space Grotesk',sans-serif;letter-spacing:-0.02em;">${escapeHtml(p.name)} · ${escapeHtml(p.company)}</h1>
      <div style="border:1.5px solid #111;border-radius:20px;background:#fff;padding:24px;">
        <table style="border-collapse:collapse;width:100%;">
          ${row('Name', escapeHtml(p.name))}
          ${row('Email', `<a href="mailto:${escapeHtml(p.email)}" style="color:#BA2F58;text-decoration:none;border-bottom:1px solid #BA2F58;">${escapeHtml(p.email)}</a>`)}
          ${row('Company', escapeHtml(p.company))}
          ${row('Role', escapeHtml(p.role))}
          ${row('Ideal start', escapeHtml(p.idealStart))}
        </table>
        <div style="margin-top:18px;padding-top:18px;border-top:1px solid rgba(17,17,17,0.08);">
          <div style="font:500 11px/1 'JetBrains Mono',monospace;letter-spacing:0.14em;text-transform:uppercase;color:#5F5F5F;margin-bottom:10px;">Project brief</div>
          <div style="font:400 15px/1.6 'Inter Tight',system-ui,sans-serif;white-space:pre-wrap;">${briefHtml}</div>
        </div>
      </div>
      <p style="margin:18px 0 0;font:500 11px/1.6 'JetBrains Mono',monospace;letter-spacing:0.08em;color:#8A8A8A;">
        Submission #${escapeHtml(p.id ?? '—')} · ${escapeHtml(p.createdAt ? new Date(p.createdAt).toISOString() : '')}
        ${p.sourceIp ? `<br>From: ${escapeHtml(p.sourceIp)}` : ''}
      </p>
    </div>
  </body>
</html>`;
}

function renderText(p) {
  return [
    `New project brief from ${p.name} (${p.company})`,
    '',
    `Name:         ${p.name}`,
    `Email:        ${p.email}`,
    `Company:      ${p.company}`,
    `Role:         ${p.role}`,
    `Ideal start:  ${p.idealStart}`,
    '',
    'Project brief:',
    p.projectBrief,
    '',
    `Submission #${p.id ?? '—'} · ${p.createdAt ? new Date(p.createdAt).toISOString() : ''}`,
    p.sourceIp ? `From IP: ${p.sourceIp}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

/**
 * Fire-and-await SES SMTP notification. Throws on failure — caller decides
 * whether to surface the error or swallow it.
 *
 * @param {BriefNotificationPayload} payload
 */
export async function sendBriefNotification(payload) {
  const from = process.env.SENDER_EMAIL;
  const to = process.env.NOTIFICATION_TO_EMAIL || 'nithin@threepointolabs.com';
  if (!from) throw new Error('SENDER_EMAIL is not configured');

  const tx = getTransporter();
  await tx.sendMail({
    from: `"3.0 Labs · Brief" <${from}>`,
    to,
    replyTo: `"${payload.name}" <${payload.email}>`,
    subject: `New brief — ${payload.name} (${payload.company})`,
    text: renderText(payload),
    html: renderHtml(payload),
    headers: {
      'X-Contact-Submission-Id': String(payload.id ?? ''),
    },
  });
}
