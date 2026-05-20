// Verify the contact_submissions table exists with the expected columns.
//   node scripts/check-db.js

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

const REQUIRED_COLUMNS = [
  'id',
  'name',
  'email',
  'company',
  'role',
  'ideal_start',
  'project_brief',
  'source_ip',
  'user_agent',
  'created_at',
];

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 5_000,
});

try {
  await client.connect();

  const tableRes = await client.query(
    `SELECT 1 FROM information_schema.tables
       WHERE table_schema = 'public' AND table_name = 'contact_submissions'`,
  );
  if (tableRes.rowCount === 0) {
    console.log('✗ Table "contact_submissions" does NOT exist.');
    console.log('  → Run: psql "$DATABASE_URL" -f migrations/001_contact_submissions.sql');
    process.exit(2);
  }

  const colsRes = await client.query(
    `SELECT column_name FROM information_schema.columns
       WHERE table_schema = 'public' AND table_name = 'contact_submissions'`,
  );
  const existing = new Set(colsRes.rows.map((r) => r.column_name));
  const missing = REQUIRED_COLUMNS.filter((c) => !existing.has(c));

  if (missing.length > 0) {
    console.log('✗ Table exists but is missing columns:', missing.join(', '));
    process.exit(3);
  }

  const countRes = await client.query('SELECT COUNT(*)::int AS n FROM contact_submissions');
  console.log('✓ Table "contact_submissions" exists with all required columns');
  console.log(`  Row count: ${countRes.rows[0].n}`);
  process.exit(0);
} catch (err) {
  console.error('✗ DB check failed');
  console.error(err.message);
  process.exit(1);
} finally {
  await client.end().catch(() => {});
}
