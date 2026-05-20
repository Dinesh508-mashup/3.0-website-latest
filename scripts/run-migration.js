// Apply migrations/001_contact_submissions.sql against DATABASE_URL.
//   node scripts/run-migration.js

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import pg from 'pg';

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

const sqlPath = resolve(__dirname, '..', 'migrations', '001_contact_submissions.sql');
const sql = readFileSync(sqlPath, 'utf8');

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 5_000,
});

try {
  await client.connect();
  console.log('[migrate] connected, applying 001_contact_submissions.sql …');
  await client.query(sql);
  console.log('[migrate] ✓ migration applied');
  process.exit(0);
} catch (err) {
  console.error('[migrate] ✗ failed');
  console.error(err.message);
  process.exit(1);
} finally {
  await client.end().catch(() => {});
}
