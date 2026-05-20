import pg from 'pg';

const { Pool } = pg;

/**
 * @typedef {Object} ContactSubmissionRow
 * @property {number} id
 * @property {string} name
 * @property {string} email
 * @property {string} company
 * @property {string} role
 * @property {string} ideal_start
 * @property {string} project_brief
 * @property {Date}   created_at
 */

let pool;

export function getPool() {
  if (pool) return pool;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not configured');
  }

  pool = new Pool({
    connectionString,
    max: 3,
    idleTimeoutMillis: 10_000,
    connectionTimeoutMillis: 5_000,
    ssl: connectionString.includes('sslmode=require') ? { rejectUnauthorized: false } : false,
  });

  pool.on('error', (err) => {
    console.error('[db] idle client error', err);
  });

  return pool;
}
