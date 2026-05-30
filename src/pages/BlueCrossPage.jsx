import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { PageFooter } from '@/shell/PageFooter';
import { PageHero } from '@/shell/PageHero';
import { PageNavbar } from '@/shell/PageNavbar';
import { PageCTA } from '@/shell/PageCTA';
import { Arrow, Eyebrow, ImgPlaceholder, NodeBadge } from '@/components';
import blueCrossCover from '@/portfolio/assets/blue-cross.svg';
import '@/portfolio/blue-cross/blue-cross.css';

/* ── Static data ───────────────────────────────────────────── */

const CHALLENGES = [
  {
    label: 'Field Staff',
    title: 'Real-Time Field Operations',
    text: 'Field workers use the mobile app to update capture, release, and shelter tasks in real time. This helps the team stay organized and every animal record is tracked properly without paperwork.',
  },
  {
    label: 'Veterinary Doctors',
    title: 'Medical Records in One Place',
    text: "Doctors can record surgery details, health status, and treatment updates directly from the app. This keeps every animal's medical history clear, accurate, and easy to access when needed.",
  },
  {
    label: 'Management & Admin',
    title: 'Centralized Web Dashboard',
    text: 'The web dashboard allows management to monitor teams, vehicles, schedules, and reports from one place. This makes planning easier and helps the organization run daily operations smoothly.',
  },
  {
    label: 'Reporting & Tracking',
    title: 'Smart Analytics & Reports',
    text: 'All capture, release, and surgery data is stored automatically in the system. With proper reports and analytics, the organization can track progress, improve planning, and work more efficiently.',
  },
];

const MODULES = [
  {
    num: '01',
    tag: 'Field',
    title: 'Animal Capture',
    desc: 'Field teams log every capture with location, time, and animal details directly from the mobile app.',
  },
  {
    num: '02',
    tag: 'Medical',
    title: 'Veterinary Care',
    desc: 'Complete surgery and medical records are maintained per animal, accessible to all authorized vets.',
  },
  {
    num: '03',
    tag: 'Logistics',
    title: 'Vehicle Tracking',
    desc: 'Monitor all field vehicles and their routes from the admin dashboard in real time.',
  },
  {
    num: '04',
    tag: 'Release',
    title: 'Release Management',
    desc: 'Track every animal released back to the community with health status and sterilization details.',
  },
  {
    num: '05',
    tag: 'Analytics',
    title: 'Analytics Dashboard',
    desc: 'Comprehensive reports on operations, progress tracking, and performance metrics at a glance.',
  },
  {
    num: '06',
    tag: 'Alerts',
    title: 'Real-time Alerts',
    desc: 'Instant notifications for task updates, medical urgencies, and operational changes.',
  },
];

const IMPACT = [
  ['Hindi', 'Supported language'],
  ['English', 'Supported language'],
  ['Telugu', 'Supported language'],
  ['iOS', 'Available on'],
  ['Android', 'Available on'],
];

const PROCESS = [
  [
    '01',
    'Works in Every Language You Speak',
    'The app supports English, Hindi, and Telugu — ensuring every team member can use it comfortably in their native language.',
  ],
  [
    '02',
    'Supports Both Versions',
    'Available on iOS and Android — download now and get started.',
  ],
  [
    '03',
    'Clear Reports & Better Decisions',
    'All capture, release, and surgery data is stored automatically in the system. With proper reports and analytics, the organization can track progress, improve planning, and work more efficiently.',
  ],
];

/* ── Page component ─────────────────────────────────────────── */

export default function BlueCrossPage() {
  useReveal();

  return (
    <>
      <title>Blue Cross Hyderabad — Case Study · 3.0 Labs</title>
      <meta
        name="description"
        content="An end-to-end platform to support Animal Birth Control and Anti-Rabies Vaccination programs for Blue Cross of Hyderabad."
      />

      <PageNavbar active="portfolio" />

      {/* ── 01 Hero ──────────────────────────────────────────── */}
      <PageHero
        index="02"
        kicker="Case Study / Blue Cross Hyderabad"
        title={{ before: 'Blue Cross ', after: '' }}
        italicWord="Hyderabad"
        sub="An end-to-end platform to support Animal Birth Control (ABC) and Anti-Rabies Vaccination (ARV) programs, aligned with guidelines from the Animal Welfare Board of India and recent directives from the Supreme Court of India. The system enabled a complete digital transformation of operations for Blue Cross of Hyderabad."
        meta={[
          ['Client', 'Blue Cross Hyderabad'],
          ['Year', '2024'],
          ['Type', 'Field Ops + NGO'],
          ['Status', 'Live'],
        ]}
      />

      {/* ── 02 Cover ─────────────────────────────────────────── */}
      <section className="section bc-cover-section" data-screen-label="02 Cover">
        <div className="wrap">
          <div className="bc-cover-frame fade-up">
            <img
              src={blueCrossCover}
              alt="Blue Cross Hyderabad — platform overview"
              loading="eager"
            />
          </div>
          <div className="filter-bar bc-tag-bar fade-up">
            {[
              'Animal Capture',
              'Veterinary Care',
              'Vehicle Tracking',
              'Release Management',
              'Analytics Dashboard',
              'Real-time Alerts',
            ].map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 Platform Features ─────────────────────────────── */}
      <section className="section paper" data-screen-label="03 Platform Features">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>03 / Platform Features</Eyebrow>
              <h2>Everything You Need, All in One Place</h2>
            </div>
            <div className="right">
              Designed for every role in the organization — from field staff to veterinary doctors
              to management.
            </div>
          </div>
          <div className="bc-challenge-grid">
            {CHALLENGES.map((c, i) => (
              <div
                className="bc-challenge-card fade-up"
                key={c.label}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="bcc-label">{c.label}</span>
                <h3 className="bcc-title">{c.title}</h3>
                <p className="bcc-text">{c.text}</p>
                <div className="bcc-dot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Built for Animal Welfare ───────────────────────── */}
      <section className="section" data-screen-label="04 Animal Welfare">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>04 / Built for Animal Welfare</Eyebrow>
              <h2>Built for Animal Welfare at Scale</h2>
            </div>
            <div className="right">
              End-to-end tools for every stage of the animal birth control program — from capture
              to care to community release.
            </div>
          </div>
          <div className="bc-modules-grid">
            {MODULES.map((mod, i) => (
              <div
                className="portfolio-process-card fade-up"
                key={mod.num}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <NodeBadge num={mod.num} accent />
                <div>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 11,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-soft)',
                      display: 'block',
                    }}
                  >
                    {mod.tag}
                  </span>
                  <h3 style={{ marginTop: 8 }}>{mod.title}</h3>
                </div>
                <p>{mod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Multilingual Support ──────────────────────────── */}
      <section className="section" data-screen-label="05 Multilingual Support">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>05 / Multilingual Support</Eyebrow>
              <h2>Works in Every Language You Speak</h2>
            </div>
            <div className="right">
              Built for every team member — available in three languages and on both major mobile
              platforms.
            </div>
          </div>
          <div className="bc-support-row fade-up">
            <div className="bc-support-group">
              <p className="bc-support-label">Supported Languages</p>
              <div className="bc-support-cards">
                {['Hindi', 'English', 'Telugu'].map((lang) => (
                  <div className="stat-card" key={lang}>
                    <div className="num">{lang}</div>
                    <div className="label">Supported language</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bc-support-group">
              <p className="bc-support-label">Available On</p>
              <div className="bc-support-cards">
                {['iOS', 'Android'].map((platform) => (
                  <div className="stat-card" key={platform}>
                    <div className="num">{platform}</div>
                    <div className="label">Available on</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 Smart Analytics ───────────────────────────────── */}
      <section className="section paper" data-screen-label="07 Smart Analytics">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>07 / Smart Analytics</Eyebrow>
              <h2>Smart Analytics & Reports</h2>
            </div>
            <div className="right">
              All capture, release, and surgery data is stored automatically in the system. With
              proper reports and analytics, the organization can track progress, improve planning,
              and work more efficiently.
            </div>
          </div>
          <div className="portfolio-process-grid">
            {PROCESS.map(([num, title, text], i) => (
              <div
                className="portfolio-process-card fade-up"
                key={num}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <NodeBadge num={num} accent />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Next project ──────────────────────────────────── */}
      <section className="section portfolio-next" data-screen-label="08 Next">
        <div className="wrap">
          <div className="portfolio-next-card fade-up">
            <div>
              <Eyebrow>Next</Eyebrow>
              <h2>
                See the next
                <br />
                <span className="ital-gradient">case study</span>
              </h2>
            </div>
            <p>
              Revision Prep — a curriculum-aligned practice platform with AI explanations, precision
              filtering, and guided learning flows for competitive exam students.
            </p>
            <Link to="/portfolio" className="btn btn-dark">
              Back to portfolio <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <PageCTA
        kicker="Engage"
        title="Running a complex"
        italic="field operation?"
        sub="We build platforms that digitise operational complexity — from dispatch and tracking to compliance reporting. Let's talk."
        primary={{ href: '/contact', label: 'Start a project' }}
        secondary={{ href: '/portfolio', label: 'See all work' }}
      />

      <PageFooter />
    </>
  );
}
