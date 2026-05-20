// End-to-end test: invoke /api/contact handler with a real payload.
// Exercises validate → DB insert → SES email in one shot.
//   node scripts/test-e2e.js

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { EventEmitter } from 'node:events';

const __dirname = dirname(fileURLToPath(import.meta.url));

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

const { default: handler } = await import('../api/contact.js');

const payload = {
  name: 'E2E Test User',
  email: 'e2e-test@example.com',
  company: '3.0 Labs',
  role: 'QA bot',
  idealStart: 'Within 2 weeks',
  projectBrief:
    'End-to-end pipeline test from scripts/test-e2e.js. If you see this email AND a matching row in contact_submissions, the full chain works.',
};

class MockReq extends EventEmitter {
  constructor(body) {
    super();
    this.method = 'POST';
    this.url = '/api/contact';
    this.headers = {
      'content-type': 'application/json',
      'user-agent': 'scripts/test-e2e.js',
      'x-forwarded-for': '127.0.0.1',
    };
    this.socket = { remoteAddress: '127.0.0.1' };
    this._body = Buffer.from(JSON.stringify(body));
    queueMicrotask(() => {
      this.emit('data', this._body);
      this.emit('end');
    });
  }
}

class MockRes {
  constructor() {
    this.statusCode = 200;
    this.headers = {};
    this.body = null;
    this._resolved = false;
    this._resolve = null;
    this.done = new Promise((r) => { this._resolve = r; });
  }
  setHeader(k, v) { this.headers[k.toLowerCase()] = v; }
  getHeader(k) { return this.headers[k.toLowerCase()]; }
  status(code) { this.statusCode = code; return this; }
  json(obj) {
    if (!this.getHeader('content-type')) this.setHeader('content-type', 'application/json');
    this.body = obj;
    this.end();
    return this;
  }
  end() {
    if (this._resolved) return;
    this._resolved = true;
    this._resolve();
  }
  get writableEnded() { return this._resolved; }
}

const req = new MockReq(payload);
const res = new MockRes();

console.log('[e2e] invoking POST /api/contact with sample payload …');
await handler(req, res);
await res.done;

console.log(`[e2e] response status: ${res.statusCode}`);
console.log(`[e2e] response body:  `, res.body);

if (res.statusCode >= 200 && res.statusCode < 300 && res.body?.ok) {
  console.log('[e2e] ✓ DB row written. Email is best-effort — check inbox for confirmation.');
  process.exit(0);
} else {
  console.log('[e2e] ✗ submission failed');
  process.exit(1);
}
