import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { PageFooter } from '@/shell/PageFooter';
import { PageHero } from '@/shell/PageHero';
import { PageNavbar } from '@/shell/PageNavbar';
import { Arrow, Eyebrow } from '@/components';
import fundpitchCover from '@/portfolio/assets/fundpitch.svg';
import '@/portfolio/fundpitch/fundpitch.css';

/* ── Static data ───────────────────────────────────────────── */

const SOLUTION_POINTS = [
  'Secure environment for sharing business & financial data',
  'Financial experts can review and analyze company data',
  'All stakeholders collaborate in one unified platform',
  'Structured interaction via expressions of interest',
];

const ROLES = [
  { num: '01', icon: '🏢', name: 'Company' },
  { num: '02', icon: '🏦', name: 'Merchant Banker' },
  { num: '03', icon: '💼', name: 'Advisor / SME' },
  { num: '04', icon: '⚙️', name: 'Service Provider' },
  { num: '05', icon: '📦', name: 'Product Client' },
  { num: '06', icon: '💰', name: 'Investor' },
];

const COMPANY_FEATURES = [
  {
    num: '01',
    title: 'Company profile',
    text: 'Create rich profiles with business verticals, ownership, and team details',
  },
  {
    num: '02',
    title: 'Document vault',
    text: 'Upload financials, pitch decks, and cap tables in a secure repository',
  },
  {
    num: '03',
    title: 'Stakeholder invites',
    text: 'Bring in advisors, bankers, and investors to review your materials',
  },
  {
    num: '04',
    title: 'Deal tracking',
    text: 'Monitor expressions of interest and track collaboration progress',
  },
];

const METRICS = [
  { num: '10+',  label: 'Modules' },
  { num: '6+',   label: 'User Roles' },
  { num: '100%', label: 'SEBI Compliant' },
  { num: '∞',    label: 'Scalable' },
];

const INSIGHTS = [
  {
    category: 'Strengths',
    type: 'strengths',
    items: [
      'Secure & structured platform',
      'Clear target audience',
      'Strong real-world use case',
    ],
  },
  {
    category: 'Opportunities',
    type: 'opportunities',
    items: [
      'Growing startup ecosystem',
      'Analytics integrations',
      'Global market expansion',
    ],
  },
  {
    category: 'Challenges',
    type: 'challenges',
    items: [
      'Invite-only limits early reach',
      'Requires financial literacy',
    ],
  },
  {
    category: 'UX Insights',
    type: 'ux',
    items: [
      'Clean, professional interface',
      'Structured business flow',
      'Room for mobile enhancement',
    ],
  },
];

/* ── Page component ─────────────────────────────────────────── */

export default function FundPitchPage() {
  useReveal();

  return (
    <>
      <title>FundPitch — Case Study · 3.0 Labs</title>
      <meta
        name="description"
        content="FundPitch — an invite-only SEBI-compliant platform connecting growth-stage companies with merchant bankers, investment bankers, and financial partners."
      />

      <PageNavbar active="portfolio" />

      {/* ── 01 Hero ──────────────────────────────────────────── */}
      <div className="fp-hero-wrap">
        <PageHero
          index="01"
          kicker="FundPitch — FinTech Deal Platform"
          title={{
            before: 'An invite-only digital ',
            after: ' that connects companies with SEBI-registered merchant bankers, investment bankers, and financial partners.',
          }}
          italicWord="platform"
          sub="It helps businesses securely share important information and collaborate with the right stakeholders to support their growth and funding journey."
          meta={[
            ['Client',   'FundPitch'],
            ['Industry', 'FinTech'],
            ['Platform', 'Web App'],
            ['Role',     'Design & Dev'],
          ]}
        />
      </div>

      {/* ── 02 Cover ─────────────────────────────────────────── */}
      <section className="section fp-cover-section" data-screen-label="02 Cover">
        <div className="wrap">
          <div className="fp-cover-frame fade-up">
            <img
              src={fundpitchCover}
              alt="FundPitch — deal room platform overview"
              loading="eager"
            />
          </div>
          <div className="filter-bar fp-tag-bar fade-up">
            {[
              'Invite-Only',
              'SEBI Compliant',
              'Deal Room',
              'Document Vault',
              'FinTech SaaS',
              'Multi-Role',
            ].map((tag) => (
              <span className="chip" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Problem & Solution ────────────────────────────── */}
      <section className="section paper" data-screen-label="03 Problem & Solution">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>03 / Problem &amp; Solution</Eyebrow>
              <h2>The Problem &amp; Solution</h2>
            </div>
            <div className="right">
              Growth-stage companies struggle to connect with financial partners. We built a
              structured bridge.
            </div>
          </div>
          <div className="fp-ps-card fade-up">
            {/* Problem panel */}
            <div className="fp-problem-panel">
              <span className="fp-panel-label">Problem</span>
              <div className="fp-problem-item">
                <span className="fp-item-dot" aria-hidden="true" />
                Growth-stage companies struggle to connect with financial partners.
              </div>
            </div>
            {/* Solution panel */}
            <div className="fp-solution-panel">
              <span className="fp-panel-label">Solution</span>
              {SOLUTION_POINTS.map((point) => (
                <div className="fp-solution-item" key={point}>
                  <span className="fp-item-dot" aria-hidden="true" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 User Roles (dark section) ─────────────────────── */}
      <section
        className="section fp-dark-section"
        data-screen-label="04 User Roles"
      >
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>04 / User Roles</Eyebrow>
              <h2>Built for 6 distinct user roles</h2>
            </div>
            <div className="right">
              Seamless, interactive modules designed for real-time collaboration and structured
              workflows.
            </div>
          </div>
          <div className="fp-roles-grid">
            {ROLES.map((role, i) => (
              <div
                className="fp-role-card fade-up"
                key={role.name}
                data-num={role.num}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="fp-role-num">{role.num}</span>
                <span className="fp-role-icon" aria-hidden="true">{role.icon}</span>
                <h3 className="fp-role-name">{role.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Company Perspective ───────────────────────────── */}
      <section className="section paper" data-screen-label="05 Company Perspective">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>05 / Company Perspective</Eyebrow>
              <h2>Company perspective</h2>
            </div>
            <div className="right">
              How companies present and manage their profiles.
            </div>
          </div>
          <div className="fp-company-features-grid">
            {COMPANY_FEATURES.map((feat, i) => (
              <div
                className="fp-company-feature-card fade-up"
                key={feat.num}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="fp-feature-num">{feat.num}</span>
                <h3 className="fp-feature-title">{feat.title}</h3>
                <p className="fp-feature-text">{feat.text}</p>
                <div className="fp-feature-dot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Impact & Takeaways ────────────────────────────── */}
      <section className="section" data-screen-label="06 Impact">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>06 / Impact &amp; Takeaways</Eyebrow>
              <h2>Impact &amp; Takeaways</h2>
            </div>
            <div className="right">
              How FundPitch connects companies with financial partners — securely and at scale.
            </div>
          </div>
          <div className="fp-metrics-grid">
            {METRICS.map((m, i) => (
              <div
                className="fp-metric-card fade-up"
                key={m.label}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="fp-metric-num">{m.num}</div>
                <div className="fp-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Insights ──────────────────────────────────────── */}
      <section className="section paper" data-screen-label="07 Insights">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>07 / Insights</Eyebrow>
              <h2>Insights</h2>
            </div>
          </div>
          <div className="fp-insights-grid">
            {INSIGHTS.map((insight, i) => (
              <div
                className="fp-insight-card fade-up"
                key={insight.category}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className={`fp-insight-category ${insight.type}`}>
                  {insight.category}
                </span>
                <ul className="fp-insight-list">
                  {insight.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Final Takeaway ────────────────────────────────── */}
      <section className="section" data-screen-label="08 Final Takeaway">
        <div className="wrap">
          <div className="fp-takeaway-card fade-up">
            <Eyebrow>08 / Key Takeaway</Eyebrow>
            <h2 className="fp-takeaway-heading">Key Takeaway</h2>
            <p className="fp-takeaway-body">
              FundPitch isn't just file-sharing — it's a collaboration ecosystem for companies
              and financial professionals.
            </p>
            <a
              href="#"
              className="fp-takeaway-cta"
              aria-label="Visit FundPitch platform"
            >
              Visit FundPitch
              <span className="fp-takeaway-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 09 Back to portfolio ─────────────────────────────── */}
      <section className="section portfolio-next" data-screen-label="09 CTA">
        <div className="wrap">
          <div className="portfolio-next-card fade-up">
            <div>
              <Eyebrow>Explore More</Eyebrow>
              <h2>
                See all
                <br />
                <span className="ital-gradient">case studies</span>
              </h2>
            </div>
            <p>
              Seven production builds across AI learning, government skilling, NGO field
              operations, agritech, and fintech — each one solving a real operational problem.
            </p>
            <Link to="/portfolio" className="btn btn-dark">
              Back to portfolio <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <PageFooter />
    </>
  );
}
