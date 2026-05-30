import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { PageFooter } from '@/shell/PageFooter';
import { PageHero } from '@/shell/PageHero';
import { PageNavbar } from '@/shell/PageNavbar';
import { Arrow, Eyebrow, NodeBadge } from '@/components';
import bfsiCover from '@/portfolio/assets/bfsi.svg';
import '@/portfolio/bfsi/bfsi.css';

/* ── Static data ───────────────────────────────────────────── */

const AI_FEATURES = [
  {
    label: 'Automated',
    title: 'Automated Workflows',
    text: 'End-to-end interview workflows without manual setup.',
  },
  {
    label: 'Voice',
    title: 'Voice-Based Interaction',
    text: 'Natural voice-driven candidate conversations.',
  },
  {
    label: 'Analysis',
    title: 'Response Analysis',
    text: 'Capture and analyse responses in real-time.',
  },
  {
    label: 'Scoring',
    title: 'Standardized Scoring',
    text: 'Fair, consistent scoring across every candidate.',
  },
];

const PLATFORM = [
  {
    num: '01',
    tag: 'Onboarding',
    title: 'Student Onboarding',
    desc: 'Streamlined onboarding and rich student profiles.',
  },
  {
    num: '02',
    tag: 'Tracking',
    title: 'Skill Tracking',
    desc: 'Skill and activity tracking across the program.',
  },
  {
    num: '03',
    tag: 'Dashboards',
    title: 'Program & College Dashboards',
    desc: 'Real-time visibility for every stakeholder.',
  },
  {
    num: '04',
    tag: 'Reporting',
    title: 'CSR & Analytics Reporting',
    desc: 'Outcome reports for CSR partners and government.',
  },
  {
    num: '05',
    tag: 'Hiring',
    title: 'Recruiter Access',
    desc: 'Companies can discover and shortlist top candidates.',
  },
];

const SCALE = [
  ['10,300+', 'Students Onboarded'],
  ['40+', 'Colleges Connected'],
  ['50,000+', 'Minutes of Interviews'],
];

const CONTEXT = [
  [
    '01',
    'Unified Student Tracking',
    'A unified system to track student progress across the BFSI Minor Degree Program delivered through 40+ colleges in Telangana.',
  ],
  [
    '02',
    'CSR & Program Reporting',
    'Reliable data for CSR and program reporting to fulfil compliance obligations for global financial institution partners.',
  ],
  [
    '03',
    'Talent Access for Companies',
    'A structured way for companies to access talent emerging from the BFSI program, moving beyond unverified placement fair lists.',
  ],
];

/* ── Page component ─────────────────────────────────────────── */

export default function BFSISkillPortalPage() {
  useReveal();

  return (
    <>
      <title>BFSI Skill Portal — Case Study · 3.0 Labs</title>
      <meta
        name="description"
        content="A centralized platform supporting the BFSI Minor Degree Program — combining student tracking, structured evaluation, CSR reporting, and hiring access in one unified system."
      />

      <PageNavbar active="portfolio" />

      {/* ── 01 Hero ──────────────────────────────────────────── */}
      <PageHero
        index="01"
        kicker="Government of Telangana Initiative"
        title={{ before: 'BFSI Skill ', after: '' }}
        italicWord="Portal"
        sub="A centralized platform supporting the BFSI Minor Degree Program — combining student tracking, structured evaluation, CSR reporting, and hiring access in one unified system."
        meta={[
          ['Launched by', 'CM Revanth Reddy'],
          ['Students', '10,300+'],
          ['Colleges', '40+'],
          ['Interviews', '50K+ min'],
        ]}
      />

      {/* ── 02 Launch Moment ─────────────────────────────────── */}
      <section className="section portfolio-next" data-screen-label="02 Launch Moment">
        <div className="wrap">
          <div className="bfsi-launch-card fade-up">
            <div className="bfsi-launch-text">
              <Eyebrow>Launch Moment</Eyebrow>
              <h2>
                Official Launch of the
                <br />
                <span className="ital-gradient">BFSI Skill Portal</span>
              </h2>
            </div>
            <div className="bfsi-launch-photo">
              <img src="/Cm Photo.jpeg" alt="Official Launch of the BFSI Skill Portal" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Cover ─────────────────────────────────────────── */}
      <section className="section bfsi-cover-section" data-screen-label="03 Cover">
        <div className="wrap">
          <div className="bfsi-cover-frame fade-up">
            <img
              src={bfsiCover}
              alt="BFSI Skill Portal — product overview"
              loading="eager"
            />
          </div>
          <div className="filter-bar bfsi-tag-bar fade-up">
            {[
              'Student Tracking',
              'Skill Tracking',
              'College Dashboards',
              'CSR Reporting',
              'Recruiter Access',
              'AI Interviews',
            ].map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 AI Interview Layer ─────────────────────────────── */}
      <section className="section paper" data-screen-label="04 AI Interview Layer">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>04 / AI Interview Layer</Eyebrow>
              <h2>Intelligent. At Scale.</h2>
            </div>
            <div className="right">
              Automated end-to-end interview workflows with voice-based interaction, real-time
              response analysis, and standardised scoring — without any manual setup.
            </div>
          </div>
          <div className="bfsi-challenge-grid">
            {AI_FEATURES.map((c, i) => (
              <div
                className="bfsi-challenge-card fade-up"
                key={c.label}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="bch-label">{c.label}</span>
                <h3 className="bch-title">{c.title}</h3>
                <p className="bch-text">{c.text}</p>
                <div className="bch-dot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 The Platform ───────────────────────────────────── */}
      <section className="section" data-screen-label="05 Platform">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>05 / The Platform</Eyebrow>
              <h2>One System. Every Stakeholder.</h2>
            </div>
            <div className="right">
              A centralized platform to support the BFSI Minor Degree Program initiated by the
              Government of Telangana. The platform combines student tracking, structured
              evaluation, CSR reporting, and hiring access in a single system.
            </div>
          </div>
          <div className="bfsi-modules-grid">
            {PLATFORM.map((mod, i) => (
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

      {/* ── 06 Platform Snapshots ────────────────────────────── */}
      <section className="section paper" data-screen-label="06 Platform Snapshots">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>06 / Platform Snapshots</Eyebrow>
              <h2>Screens built for every role</h2>
            </div>
            <div className="right">
              Each stakeholder surface uses the same design system while exposing only the data
              and actions relevant to that role.
            </div>
          </div>

          <div className="bfsi-snapshots-grid fade-up">
            {[
              { src: '/student.png',       alt: 'Student Dashboard',   title: 'Student Dashboard',   caption: 'Tracking progress and skills' },
              { src: '/district.png',      alt: 'District Dashboard',  title: 'District Dashboard',  caption: 'Insights across colleges' },
              { src: '/main-dashboard.png', alt: 'Analytics View',     title: 'Analytics View',      caption: 'Outcome tracking for stakeholders' },
            ].map((s, i) => (
              <div className="bfsi-snapshot-item" key={s.title} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="bfsi-snapshot-img-wrap">
                  <img src={s.src} alt={s.alt} className="bfsi-snapshot-img" />
                </div>
                <h3 className="bfsi-snapshot-title">{s.title}</h3>
                <p className="bfsi-snapshot-caption">{s.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Scale & Impact ────────────────────────────────── */}
      <section className="section" data-screen-label="07 Scale & Impact">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>07 / Scale &amp; Impact</Eyebrow>
              <h2>Built for Real-World Scale</h2>
            </div>
          </div>
          <div className="stats-grid">
            {SCALE.map(([num, label], i) => (
              <div
                className="stat-card fade-up"
                key={label}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="num">{num}</div>
                <div className="label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Context ───────────────────────────────────────── */}
      <section className="section paper" data-screen-label="08 Context">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>08 / Context</Eyebrow>
              <h2>The program behind the platform</h2>
            </div>
            <div className="right">
              The BFSI Minor Degree Program is supported by HSBC, JPMorgan Chase, State Street,
              and London Stock Exchange Group — delivered across 40+ colleges in Telangana.
            </div>
          </div>
          <div className="portfolio-process-grid">
            {CONTEXT.map(([num, title, text], i) => (
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

      {/* ── 09 Back to portfolio ─────────────────────────────── */}
      <section className="section" data-screen-label="09 Back">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Link to="/portfolio" className="btn btn-dark fade-up">
            Back to portfolio <Arrow />
          </Link>
        </div>
      </section>

      <PageFooter />
    </>
  );
}
