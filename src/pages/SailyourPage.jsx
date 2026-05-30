import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { PageFooter } from '@/shell/PageFooter';
import { PageHero } from '@/shell/PageHero';
import { PageNavbar } from '@/shell/PageNavbar';
import { Arrow, Eyebrow, NodeBadge } from '@/components';
import sailyourCover from '@/portfolio/assets/sailyour-ai.svg';
import '@/portfolio/sailyour/sailyour.css';

/* ── Static data ───────────────────────────────────────────── */

const OVERVIEW_CARDS = [
  { icon: '🎓', label: 'Industry',       value: 'EdTech / HRTech' },
  { icon: '🏛️', label: 'Target Users',   value: 'Colleges & Universities' },
  { icon: '🤖', label: 'Core Tech',       value: 'AI Video Analysis' },
  { icon: '📊', label: 'Primary Goal',    value: 'Placement Readiness' },
];

const SCREENS = [
  {
    label: 'Student View',
    title: 'Live AI Interview Session',
    desc: 'Sailyour live AI interview screen with avatar and video controls',
    img: '/sailyour/interview.png',
  },
  {
    label: 'Admin View',
    title: 'Admin Dashboard',
    desc: 'Sailyour admin panel showing student list and statistics',
    img: '/sailyour/admin.png',
  },
  {
    label: 'Placement View',
    title: 'Student Profile & Scores',
    desc: 'Sailyour student profile with radar chart and AI score',
    img: '/sailyour/dashboard.png',
  },
];

const FEATURES = [
  {
    icon: '🎥',
    title: 'AI Video Interviews',
    text: 'Students conduct live video interviews with an AI interviewer avatar. The system asks contextual follow-up questions and adapts to responses in real time.',
  },
  {
    icon: '📡',
    title: 'Computer Vision Scoring',
    text: 'The AI analyses posture, eye contact, confidence markers, and facial micro-expressions to generate a multidimensional professionalism score.',
  },
  {
    icon: '🕸️',
    title: 'Skill Radar Charts',
    text: 'Each student receives a spider/radar chart across six dimensions: Professionalism, Attitude, Creativity, Communication, Leadership, Teamwork, and Sociability.',
  },
  {
    icon: '📋',
    title: 'Project Manager Score',
    text: 'A composite management-readiness score presented as a gauge chart, benchmarked against domain averages for instant comparison.',
  },
  {
    icon: '📊',
    title: 'Admin Analytics Panel',
    text: 'Placement officers see cohort-level stats: total students, interviews conducted, pending requests, and aggregate score distributions — all in one place.',
  },
  {
    icon: '📝',
    title: 'AI Interview Summary',
    text: 'Each session ends with a structured AI-generated summary covering strengths, red flags, and coaching recommendations the student can act on immediately.',
  },
];

const SOLUTIONS = [
  {
    icon: '⚡',
    title: 'Real-time evaluation pipeline',
    text: 'Video frames are streamed to the AI engine mid-interview. Scores update live so admins see results the moment a session ends.',
  },
  {
    icon: '🧩',
    title: 'Modular domain system',
    text: 'Institutions can configure domain-specific question banks (Tech, Management, Finance) and profile types, keeping assessments relevant per cohort.',
  },
  {
    icon: '📤',
    title: 'Bulk student management',
    text: 'Admins can import hundreds of students via CSV, assign them to batches, and track completion status from a single dashboard view.',
  },
  {
    icon: '🔒',
    title: 'Session integrity controls',
    text: 'Anti-refresh guards and camera/mic state monitoring ensure data integrity throughout each interview session.',
  },
];

const METRICS = [
  { num: '7,265', label: 'Students onboarded' },
  { num: '3,671', label: 'Interviews conducted' },
  { num: '94%',   label: 'Completion rate' },
  { num: '4.8×',  label: 'Faster evaluations' },
];

const TESTIMONIAL =
  'Sailyour transformed how we prepare students for campus placements. What used to take our team weeks of manual scheduling now runs itself. The AI scores are surprisingly accurate — hiring partners have noticed the improvement in candidate quality.';

/* ── Page component ─────────────────────────────────────────── */

export default function SailyourPage() {
  useReveal();

  return (
    <>
      <title>Sailyour — Case Study · 3.0 Labs</title>
      <meta
        name="description"
        content="Sailyour — a full-stack AI-powered mock interview platform for colleges and universities. AI video analysis, computer vision scoring, radar charts, and admin analytics."
      />

      <PageNavbar active="portfolio" />

      {/* ── 01 Hero ──────────────────────────────────────────── */}
      <PageHero
        index="01"
        kicker="AI-Powered Interview Prep Platform"
        title={{ before: 'Sailyour — ', after: ' Interview Prep' }}
        italicWord="AI-Powered"
        sub="We designed and built Sailyour, a full-stack SaaS platform that helps educational institutions conduct AI-driven mock interviews, evaluate student performance, and generate actionable insights for placement teams."
        meta={[
          ['Industry',  'EdTech / HRTech'],
          ['Target',    'Colleges & Universities'],
          ['Core Tech', 'AI Video Analysis'],
          ['Goal',      'Placement Readiness'],
        ]}
      />

      {/* ── 02 Cover ─────────────────────────────────────────── */}
      <section className="section sy-cover-section" data-screen-label="02 Cover">
        <div className="wrap">
          <div className="sy-cover-frame fade-up">
            <img
              src={sailyourCover}
              alt="Sailyour dashboard — student profile with AI scores"
              loading="eager"
            />
          </div>
          <div className="sy-cover-row fade-up">
            <div className="filter-bar">
              {[
                'AI Interviews',
                'Computer Vision',
                'Radar Charts',
                'Admin Analytics',
                'Skill Scoring',
                'SaaS Platform',
              ].map((tag) => (
                <span className="chip" key={tag}>{tag}</span>
              ))}
            </div>
            <div className="sy-stat-pill">
              <span className="sy-stat-pill-emoji" aria-hidden="true">🎯</span>
              <span>7,265 Students onboarded</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Overview ──────────────────────────────────────── */}
      <section className="section paper" data-screen-label="03 Overview">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>03 / Overview</Eyebrow>
              <h2>Preparing students for real-world hiring</h2>
            </div>
            <div className="right">
              Sailyour is an AI-driven interview preparation platform designed for colleges and
              universities. It automates mock interviews, assesses communication and soft skills
              using computer vision, and gives placement officers a bird's-eye view of cohort
              readiness.
            </div>
          </div>
          <div className="sy-overview-grid">
            {OVERVIEW_CARDS.map((card, i) => (
              <div
                className="sy-overview-card fade-up"
                key={card.label}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="sy-ov-icon" aria-hidden="true">{card.icon}</span>
                <span className="sy-ov-label">{card.label}</span>
                <p className="sy-ov-value">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Product Screens ───────────────────────────────── */}
      <section className="section" data-screen-label="04 Product Screens">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>04 / Product Screens</Eyebrow>
              <h2>Designed for clarity</h2>
            </div>
            <div className="right">
              Three primary views built for admins, students, and AI assessors.
            </div>
          </div>
          <div className="sy-screens-grid">
            {SCREENS.map((screen, i) => (
              <div
                className="sy-screen-card fade-up"
                key={screen.title}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="frame">
                  <img
                    src={screen.img}
                    alt={screen.desc}
                    className="sy-screen-img"
                  />
                </div>
                <div className="sy-screen-card-body">
                  <span className="sy-screen-chip">{screen.label}</span>
                  <h3 className="sy-screen-title">{screen.title}</h3>
                  <p className="sy-screen-desc">{screen.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Features ──────────────────────────────────────── */}
      <section className="section paper" data-screen-label="05 Features">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>05 / Features</Eyebrow>
              <h2>Everything a placement team needs</h2>
            </div>
            <div className="right">
              Six core modules working together to automate the entire
              interview-to-insight pipeline.
            </div>
          </div>
          <div className="sy-features-grid">
            {FEATURES.map((feat, i) => (
              <div
                className="sy-feature-card fade-up"
                key={feat.title}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="sy-feature-icon" aria-hidden="true">{feat.icon}</span>
                <h3 className="sy-feature-title">{feat.title}</h3>
                <p className="sy-feature-text">{feat.text}</p>
                <div className="sy-feature-dot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Solution ──────────────────────────────────────── */}
      <section className="section" data-screen-label="06 Solution">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>06 / Solution</Eyebrow>
              <h2>From chaos to clarity</h2>
            </div>
            <div className="right">
              We architected Sailyour as a three-layer platform — a student-facing interview
              app, an AI analysis engine, and an admin intelligence layer — all connected via
              a real-time API backbone.
            </div>
          </div>
          <div className="sy-sol-screen fade-up">
            <img
              src="/sailyour/admin.png"
              alt="Sailyour admin panel with student management"
              className="sy-sol-screen-img"
            />
          </div>
          <div className="sy-sol-grid">
            {SOLUTIONS.map((sol, i) => (
              <div
                className="sy-sol-card fade-up"
                key={sol.title}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="sy-sol-icon-wrap" aria-hidden="true">{sol.icon}</div>
                <h3 className="sy-sol-title">{sol.title}</h3>
                <p className="sy-sol-text">{sol.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Results ───────────────────────────────────────── */}
      <section className="section paper" data-screen-label="07 Results">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>07 / Results</Eyebrow>
              <h2>Numbers that speak</h2>
            </div>
          </div>
          <div className="sy-metrics-grid">
            {METRICS.map((m, i) => (
              <div
                className="sy-metric-card fade-up"
                key={m.label}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="sy-metric-num">{m.num}</div>
                <div className="sy-metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Testimonial ───────────────────────────────────── */}
      <section className="section" data-screen-label="08 Testimonial">
        <div className="wrap">
          <div className="sy-testimonial-card fade-up">
            <div className="sy-testimonial-mark" aria-hidden="true">"</div>
            <p className="sy-testimonial-text">{TESTIMONIAL}</p>
            <span className="sy-testimonial-eyebrow">Placement Officer — Partner Institution</span>
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
