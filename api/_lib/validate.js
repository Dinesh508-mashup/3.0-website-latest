/**
 * @typedef {Object} ContactSubmissionInput
 * @property {string} name
 * @property {string} email
 * @property {string} company
 * @property {string} role
 * @property {string} idealStart
 * @property {string} projectBrief
 */

/** Allowed values for the "Ideal start" dropdown. Mirror these on the client. */
export const IDEAL_START_OPTIONS = Object.freeze([
  'As soon as possible',
  'Within 2 weeks',
  'Within a month',
  'Just exploring',
  'Not sure yet',
]);

const FIELD_LIMITS = Object.freeze({
  name: { min: 1, max: 120 },
  email: { min: 5, max: 200 },
  company: { min: 1, max: 160 },
  role: { min: 1, max: 120 },
  idealStart: { min: 1, max: 64 },
  projectBrief: { min: 10, max: 4000 },
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
// Strip ASCII control characters except tab (\x09) and newline (\x0A).
// eslint-disable-next-line no-control-regex
const CONTROL_RE = /[\x00-\x08\x0B-\x1F\x7F]/g;

function sanitize(raw) {
  if (typeof raw !== 'string') return '';
  return raw.replace(CONTROL_RE, '').trim();
}

/**
 * @param {unknown} body
 * @returns {{ data: ContactSubmissionInput | null, errors: Record<string, string> }}
 */
export function validateContactSubmission(body) {
  /** @type {Record<string, string>} */
  const errors = {};

  if (!body || typeof body !== 'object') {
    return { data: null, errors: { _form: 'Invalid request body.' } };
  }

  const src = /** @type {Record<string, unknown>} */ (body);

  const name = sanitize(src.name);
  const email = sanitize(src.email).toLowerCase();
  const company = sanitize(src.company);
  const role = sanitize(src.role);
  const idealStart = sanitize(src.idealStart);
  const projectBrief = sanitize(src.projectBrief);

  const required = { name, email, company, role, idealStart, projectBrief };

  for (const [key, value] of Object.entries(required)) {
    const limit = FIELD_LIMITS[/** @type {keyof typeof FIELD_LIMITS} */ (key)];
    if (!value || value.length < limit.min) {
      errors[key] = 'This field is required.';
      continue;
    }
    if (value.length > limit.max) {
      errors[key] = `Please keep this under ${limit.max} characters.`;
    }
  }

  if (!errors.email && !EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!errors.idealStart && !IDEAL_START_OPTIONS.includes(idealStart)) {
    errors.idealStart = 'Please choose one of the listed options.';
  }
  if (!errors.projectBrief && projectBrief.length < 10) {
    errors.projectBrief = 'Please share at least a sentence about the project.';
  }

  if (Object.keys(errors).length > 0) {
    return { data: null, errors };
  }

  return {
    data: { name, email, company, role, idealStart, projectBrief },
    errors: {},
  };
}
