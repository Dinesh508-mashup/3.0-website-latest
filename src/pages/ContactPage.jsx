import { useRef, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { Arrow, Eyebrow } from '@/components';
import { PageNavbar } from '@/shell/PageNavbar';
import { PageHero } from '@/shell/PageHero';
import { PageFooter } from '@/shell/PageFooter';

/** Must stay in sync with api/_lib/validate.js → IDEAL_START_OPTIONS. */
const IDEAL_START_OPTIONS = [
  'As soon as possible',
  'Within 2 weeks',
  'Within a month',
  'Just exploring',
  'Not sure yet',
];

const TO_EMAIL = import.meta.env.VITE_CONTACT_EMAIL_TO || 'nithin@threepointolabs.com';

const MIN_SUBMIT_GAP_MS = 4000;

/**
 * @typedef {'idle'|'sending'|'success'|'error'} SubmitStatus
 */

function ContactSection() {
  const formRef = useRef(null);
  const lastSubmitAt = useRef(0);
  /** @type {[SubmitStatus, (s: SubmitStatus) => void]} */
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  /** @type {[Record<string,string>, (e: Record<string,string>) => void]} */
  const [fieldErrors, setFieldErrors] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    const now = Date.now();
    if (now - lastSubmitAt.current < MIN_SUBMIT_GAP_MS) {
      setStatus('error');
      setErrorMsg('Please wait a moment before submitting again.');
      return;
    }

    const fd = new FormData(formRef.current);
    const payload = {
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      company: String(fd.get('company') || '').trim(),
      role: String(fd.get('role') || '').trim(),
      idealStart: String(fd.get('idealStart') || '').trim(),
      projectBrief: String(fd.get('projectBrief') || '').trim(),
      website: String(fd.get('website') || ''),
    };

    const clientErrors = {};
    if (!payload.name) clientErrors.name = 'This field is required.';
    if (!payload.email) clientErrors.email = 'This field is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(payload.email))
      clientErrors.email = 'Please enter a valid email address.';
    if (!payload.company) clientErrors.company = 'This field is required.';
    if (!payload.role) clientErrors.role = 'This field is required.';
    if (!payload.idealStart || !IDEAL_START_OPTIONS.includes(payload.idealStart))
      clientErrors.idealStart = 'Please choose one of the listed options.';
    if (!payload.projectBrief) clientErrors.projectBrief = 'This field is required.';
    else if (payload.projectBrief.length < 10)
      clientErrors.projectBrief = 'Please share at least a sentence about the project.';

    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setStatus('error');
      setErrorMsg('Please fix the highlighted fields and try again.');
      return;
    }

    setFieldErrors({});
    setStatus('sending');
    setErrorMsg('');
    lastSubmitAt.current = now;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      let body = null;
      try {
        body = await res.json();
      } catch {
        body = null;
      }

      if (!res.ok || !body?.ok) {
        if (body?.fieldErrors && typeof body.fieldErrors === 'object') {
          setFieldErrors(body.fieldErrors);
        }
        setStatus('error');
        setErrorMsg(
          body?.error || 'Could not send your brief. Please try again, or email us directly.',
        );
        return;
      }

      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('Contact form send failed:', err);
      setStatus('error');
      setErrorMsg('Could not reach our server. Please try again, or email us directly.');
    }
  };

  const sending = status === 'sending';
  const sent = status === 'success';
  const errored = status === 'error';
  const disabled = sending || sent;

  return (
    <section className="section" data-screen-label="02 Form">
      <div className="wrap">
        <form ref={formRef} className="contact-form-card fade-up" onSubmit={submit} noValidate>
          <Eyebrow>02 / Project brief</Eyebrow>
          <h3>Send us a brief.</h3>
          <p style={{ color: 'var(--ink-soft)', marginTop: 12, fontSize: 15, maxWidth: 460 }}>
            Don&apos;t worry about being polished — bullets are fine. We&apos;ll come back with a
            fit assessment and a concrete next step.
          </p>

          {/* Honeypot — invisible to humans, bots fill it in. */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '-10000px',
              top: 'auto',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
          >
            <label htmlFor="cf-website">Website</label>
            <input
              id="cf-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="cf-name">Your name</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                placeholder="Aarav Mehta"
                required
                disabled={disabled}
                autoComplete="name"
                aria-invalid={fieldErrors.name ? 'true' : undefined}
              />
              {fieldErrors.name && <FieldError>{fieldErrors.name}</FieldError>}
            </div>
            <div className="form-field">
              <label htmlFor="cf-email">Work email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                disabled={disabled}
                autoComplete="email"
                aria-invalid={fieldErrors.email ? 'true' : undefined}
              />
              {fieldErrors.email && <FieldError>{fieldErrors.email}</FieldError>}
            </div>
            <div className="form-field">
              <label htmlFor="cf-co">Company</label>
              <input
                id="cf-co"
                name="company"
                type="text"
                placeholder="3.0 Labs"
                required
                disabled={disabled}
                autoComplete="organization"
                aria-invalid={fieldErrors.company ? 'true' : undefined}
              />
              {fieldErrors.company && <FieldError>{fieldErrors.company}</FieldError>}
            </div>
            <div className="form-field">
              <label htmlFor="cf-role">Your role</label>
              <input
                id="cf-role"
                name="role"
                type="text"
                placeholder="Founder / PM / Eng lead"
                required
                disabled={disabled}
                autoComplete="organization-title"
                aria-invalid={fieldErrors.role ? 'true' : undefined}
              />
              {fieldErrors.role && <FieldError>{fieldErrors.role}</FieldError>}
            </div>

            <div className="form-field full">
              <label htmlFor="cf-when">Ideal start</label>
              <select
                id="cf-when"
                name="idealStart"
                defaultValue=""
                required
                disabled={disabled}
                aria-invalid={fieldErrors.idealStart ? 'true' : undefined}
              >
                <option value="" disabled>
                  Select one…
                </option>
                {IDEAL_START_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {fieldErrors.idealStart && <FieldError>{fieldErrors.idealStart}</FieldError>}
            </div>

            <div className="form-field full">
              <label htmlFor="cf-brief">Project brief</label>
              <textarea
                id="cf-brief"
                name="projectBrief"
                rows="6"
                placeholder="One paragraph on the problem, who feels it, and what 'shipped' looks like for you. Links welcome."
                required
                disabled={disabled}
                aria-describedby="cf-brief-help"
                aria-invalid={fieldErrors.projectBrief ? 'true' : undefined}
              ></textarea>
              <p
                id="cf-brief-help"
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 11,
                  letterSpacing: '0.06em',
                  color: 'var(--ink-soft)',
                  marginTop: 6,
                  lineHeight: 1.5,
                }}
              >
                One paragraph on the problem, who feels it, and what &apos;shipped&apos; looks like
                for you. Links welcome.
              </p>
              {fieldErrors.projectBrief && <FieldError>{fieldErrors.projectBrief}</FieldError>}
            </div>
          </div>

          <button type="submit" className="btn-submit" disabled={disabled} aria-live="polite">
            {sending && 'Sending…'}
            {sent && "Thanks — we'll be in touch within one working day."}
            {!sending && !sent && (
              <>
                Send brief <Arrow size={16} />
              </>
            )}
          </button>

          {errored && (
            <p
              role="alert"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 12,
                letterSpacing: '0.06em',
                color: '#BA2F58',
                marginTop: 12,
                lineHeight: 1.5,
              }}
            >
              {errorMsg}
            </p>
          )}

          <p
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 11,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-soft)',
              marginTop: 14,
            }}
          >
            ↳ Or write directly:{' '}
            <a href={`mailto:${TO_EMAIL}`} style={{ borderBottom: '1px solid var(--ink-soft)' }}>
              {TO_EMAIL}
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}

function FieldError({ children }) {
  return (
    <span
      style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 11,
        letterSpacing: '0.06em',
        color: '#BA2F58',
        marginTop: 2,
      }}
    >
      {children}
    </span>
  );
}

export default function ContactPage() {
  useReveal();
  return (
    <>
      <title>Contact — 3.0 Labs</title>
      <meta
        name="description"
        content="Tell us what you're trying to build. One short note is enough — we read every message and reply within one working day."
      />
      <PageNavbar active="contact" />
      <PageHero
        index="01"
        kicker="Contact · 01 / Get in touch"
        title={{ before: "Tell us what you're ", after: '.' }}
        italicWord="trying to build"
        sub="One short note is enough. We read every message, route it to the producer who fits, and reply within one working day — usually the same."
      />
      <ContactSection />
      <PageFooter />
    </>
  );
}
