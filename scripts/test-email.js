// Standalone SES sanity check.
//   node scripts/test-email.js
//
// Loads .env, sends one fake brief to NOTIFICATION_TO_EMAIL via SES SMTP.
// Exits 0 on success, 1 on failure. No web server, no DB needed.

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { sendBriefNotification } from '../api/_lib/email.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Minimal .env loader so this script runs without an extra dep.
function loadEnvFile(path) {
  let raw;
  try {
    raw = readFileSync(path, 'utf8');
  } catch {
    return;
  }
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile(resolve(__dirname, '..', '.env'));

const samplePayload = {
  id: 'TEST',
  createdAt: new Date(),
  name: 'Aarav Mehta',
  email: 'aarav@example.com',
  company: '3.0 Labs',
  role: 'Founder / PM / Eng lead',
  idealStart: 'Within 2 weeks',
  projectBrief:
    'This is a test brief sent from scripts/test-email.js to verify SES SMTP credentials. ' +
    'If you are reading this in your inbox, the integration works.',
  sourceIp: '127.0.0.1',
  userAgent: 'scripts/test-email.js',
};

try {
  console.log('[test-email] sending to', process.env.NOTIFICATION_TO_EMAIL || 'nithin@threepointolabs.com');
  console.log('[test-email] from        ', process.env.SENDER_EMAIL);
  console.log('[test-email] region      ', process.env.SES_REGION || 'us-east-1 (default)');
  await sendBriefNotification(samplePayload);
  console.log('[test-email] ✓ sent successfully');
  process.exit(0);
} catch (err) {
  console.error('[test-email] ✗ failed');
  console.error(err);
  process.exit(1);
}
