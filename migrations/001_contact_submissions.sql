-- Run once against the 3.0-labs database:
--   psql "$DATABASE_URL" -f migrations/001_contact_submissions.sql

CREATE TABLE IF NOT EXISTS contact_submissions (
  id            BIGSERIAL PRIMARY KEY,
  name          TEXT        NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  email         TEXT        NOT NULL CHECK (char_length(email) BETWEEN 5 AND 200),
  company       TEXT        NOT NULL CHECK (char_length(company) BETWEEN 1 AND 160),
  role          TEXT        NOT NULL CHECK (char_length(role) BETWEEN 1 AND 120),
  ideal_start   TEXT        NOT NULL CHECK (char_length(ideal_start) BETWEEN 1 AND 64),
  project_brief TEXT        NOT NULL CHECK (char_length(project_brief) BETWEEN 10 AND 4000),
  source_ip     TEXT,
  user_agent    TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
  ON contact_submissions (created_at DESC);

CREATE INDEX IF NOT EXISTS contact_submissions_email_idx
  ON contact_submissions (email);
