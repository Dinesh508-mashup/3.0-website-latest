const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const MIN_GAP_MS = 4_000;

/** @type {Map<string, { count: number, windowStart: number, last: number }>} */
const hits = new Map();

function gc(now) {
  if (hits.size < 500) return;
  for (const [key, value] of hits) {
    if (now - value.windowStart > WINDOW_MS * 5) hits.delete(key);
  }
}

/**
 * In-memory per-IP rate limit. Survives only within a single serverless instance,
 * which is enough as basic spam prevention. Replace with KV/Redis for stronger guarantees.
 *
 * @param {string} ip
 * @returns {{ ok: boolean, retryAfterSeconds?: number, reason?: string }}
 */
export function rateLimit(ip) {
  const now = Date.now();
  gc(now);

  const entry = hits.get(ip);

  if (!entry) {
    hits.set(ip, { count: 1, windowStart: now, last: now });
    return { ok: true };
  }

  if (now - entry.last < MIN_GAP_MS) {
    return {
      ok: false,
      retryAfterSeconds: Math.ceil((MIN_GAP_MS - (now - entry.last)) / 1000),
      reason: 'Please wait a moment before submitting again.',
    };
  }

  if (now - entry.windowStart > WINDOW_MS) {
    entry.count = 1;
    entry.windowStart = now;
    entry.last = now;
    return { ok: true };
  }

  entry.count += 1;
  entry.last = now;

  if (entry.count > MAX_PER_WINDOW) {
    return {
      ok: false,
      retryAfterSeconds: Math.ceil((WINDOW_MS - (now - entry.windowStart)) / 1000),
      reason: 'Too many submissions. Please try again in a minute.',
    };
  }

  return { ok: true };
}

/** @param {{ headers: Record<string, string | string[] | undefined>, socket?: { remoteAddress?: string } }} req */
export function getClientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length > 0) return fwd.split(',')[0].trim();
  if (Array.isArray(fwd) && fwd.length > 0) return String(fwd[0]).split(',')[0].trim();
  const real = req.headers['x-real-ip'];
  if (typeof real === 'string' && real.length > 0) return real;
  return req.socket?.remoteAddress || 'unknown';
}
