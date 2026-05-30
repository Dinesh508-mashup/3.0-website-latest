import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { PageFooter } from '@/shell/PageFooter';
import { PageHero } from '@/shell/PageHero';
import { PageNavbar } from '@/shell/PageNavbar';
import { Arrow, Eyebrow, NodeBadge } from '@/components';
import revisionPrepCover from '@/portfolio/assets/revision-prep.png';
import '@/portfolio/revision-prep/revision-prep.css';

/* ── Static data ───────────────────────────────────────────── */

const GOALS = [
  'Curriculum-aligned question banks',
  'Interactive Exam Practice Mode',
  'Real-time performance analytics',
  'Built-in Scientific Calculator (GDC)',
];

const CHALLENGES = [
  {
    label: 'Time Inefficiency',
    title: 'Time Inefficiency',
    text: 'Students spend 40% of their study time searching for relevant practice questions rather than actually solving them.',
  },
  {
    label: 'Curriculum Mismatch',
    title: 'Curriculum Mismatch',
    text: 'Generic study tools fail to account for the specific nuances of IB and Cambridge assessment criteria.',
  },
];

const SOLUTIONS = [
  {
    icon: '⚡',
    label: 'AI-Powered',
    title: 'AI-Powered Explanations',
    text: 'Dynamic step-by-step breakdowns that adapt to the student\'s current understanding level, ensuring no one is left behind.',
  },
  {
    icon: '📊',
    label: 'Predictive Analytics',
    title: 'Predictive Analytics',
    text: 'Identifying knowledge gaps before they become exam-day hurdles through continuous performance monitoring.',
  },
];

const ARCH_CONFIG = [
  {
    label: 'Input',
    items: ['Standard', 'Chapter', 'Topic', 'Difficulty', 'Criteria'],
  },
  {
    label: 'LLMs',
    items: ['Claude', 'DeepSeek', 'OpenAI'],
  },
  {
    label: 'Capabilities',
    items: ['Memory', 'Functions', 'RAG', 'Profile', 'Planning'],
  },
  {
    label: 'Tools',
    items: ['LangGraph'],
  },
];

const PIPELINE = [
  {
    num: '01',
    title: 'LangGraph Orchestrator',
    sub: 'System Manager',
    badge: 'Core',
    accent: true,
  },
  {
    num: '02',
    title: 'Thinking Layer',
    sub: 'Ideation & Context Engine',
  },
  {
    num: '03',
    title: 'OpenAI Vector DB',
    badge: 'Embeddings',
  },
  {
    num: '04',
    title: 'Ensemble Generation Layer',
  },
  {
    num: '05',
    title: 'Validation Layer',
    sub: 'Quality Assurance',
    badge: '↺ Feedback',
    badgeFeedback: true,
  },
  {
    num: '06',
    title: 'Solution Layer',
  },
  {
    num: '07',
    title: 'Image Generation Layer',
    sub: 'Visual Assets',
  },
  {
    num: '08',
    title: 'Storage Layer',
    badge: 'Database',
  },
];

const ARCH_ANNOTATIONS = [
  {
    label: 'Orchestrator',
    items: ['Coordination', 'State Flow'],
  },
  {
    label: 'Memory Layer',
    items: ['Memory Management'],
  },
  {
    label: 'Vector Store',
    items: ['Embeddings Index', 'Reuse Lookup'],
  },
  {
    label: 'Image Pipeline',
    items: ['Diagram Detection', 'Visual Asset Creation', 'Image-Question Linking'],
  },
];

const INTERFACES = [
  {
    num: '01',
    title: 'The Learning Gateway',
    desc: 'The initial landing experience focuses on clear curriculum selection, allowing students to immediately identify their path (IB vs Cambridge).',
    img: '/revision-prep/student-dash.png',
  },
  {
    num: '02',
    title: 'Precision Filtering',
    desc: 'A robust filtering system enables students to drill down into specific sub-topics, difficulty levels, and question types for targeted practice.',
    img: '/revision-prep/filters.png',
  },
  {
    num: '03',
    title: 'Guided Learning',
    desc: 'Every question features a detailed, step-by-step explanation that breaks down complex concepts into digestible logical steps.',
    img: '/revision-prep/explanation.png',
  },
  {
    num: '04',
    title: 'Practice Simulation',
    desc: 'The practice environment replicates real e-assessment conditions, including various questions and technical toolsets.',
    img: '/revision-prep/initial.png',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'RevisionPrep changed how I study for IB Physics. The step-by-step explanations are better than any textbook I\'ve used.',
    name: 'Sarah J.',
    role: 'IB Student, Grade 12',
    initials: 'SJ',
  },
  {
    quote:
      'As an educator, the curriculum mapping is a lifesaver. I can track exactly where my students are struggling in real-time.',
    name: 'David M.',
    role: 'Head of Mathematics, International School',
    initials: 'DM',
  },
];

/* ── Page component ─────────────────────────────────────────── */

export default function RevisionPrepPage() {
  useReveal();

  return (
    <>
      <title>RevisionPrep — Case Study · 3.0 Labs</title>
      <meta
        name="description"
        content="A high-performance revision platform for IB and Cambridge students featuring AI-powered explanations, curriculum-aligned question banks, and a multi-agent generation architecture."
      />

      <PageNavbar active="portfolio" />

      {/* ── 01 Hero ──────────────────────────────────────────── */}
      <div className="rp-hero-wrap">
      <PageHero
        index="01"
        kicker="RevisionPrep Platform Preview"
        title={{ before: 'Building a high-performance revision ', after: ' for IB and Cambridge students.' }}
        italicWord="platform"
        sub="Platform Dashboard — Centralized learning hub for students"
        meta={[
          ['Curriculum', 'IB & Cambridge'],
          ['AI Layer', 'Multi-Agent'],
          ['Core Tech', 'Question Engine'],
          ['Architecture', 'LangGraph'],
        ]}
      />
      </div>

      {/* ── 02 Cover ─────────────────────────────────────────── */}
      <section className="section rp-cover-section" data-screen-label="02 Cover">
        <div className="wrap">
          <div className="rp-cover-frame fade-up">
            <img
              src={revisionPrepCover}
              alt="RevisionPrep platform overview"
              loading="eager"
            />
          </div>
          <div className="filter-bar rp-tag-bar fade-up">
            {[
              'IB Curriculum',
              'Cambridge',
              'Question Banks',
              'AI Explanations',
              'Practice Mode',
              'Analytics',
              'GDC Calculator',
            ].map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 The Brief ─────────────────────────────────────── */}
      <section className="section paper" data-screen-label="03 The Brief">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>03 / The Brief</Eyebrow>
              <h2>Modernizing the Exam Preparation Experience</h2>
            </div>
          </div>
          <div className="rp-brief-body fade-up">
            <div className="rp-brief-text">
              <p>
                RevisionPrep approached us to design a platform that bridges the gap between
                static textbooks and the dynamic requirements of modern IB and Cambridge
                assessments.
              </p>
              <p>
                The primary challenge was to create a high-density data environment that
                remained intuitive for students aged 11–18. The platform needed to support
                complex mathematical notations, interactive graphing, and real-time feedback
                loops.
              </p>
            </div>
            <div>
              <div className="rp-goals-label">Project Goals</div>
              <div className="rp-goals-grid">
                {GOALS.map((goal) => (
                  <div className="rp-goal-card" key={goal}>
                    <span className="rp-goal-dot" aria-hidden="true" />
                    <span className="rp-goal-text">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 The Challenge ─────────────────────────────────── */}
      <section className="section" data-screen-label="04 The Challenge">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>04 / The Challenge</Eyebrow>
              <h2>Overcoming Academic Friction</h2>
            </div>
            <div className="right">
              Students often struggle with fragmented resources and a lack of real-time
              feedback during independent study.
            </div>
          </div>
          <div className="rp-challenge-grid">
            {CHALLENGES.map((c, i) => (
              <div
                className="rp-challenge-card fade-up"
                key={c.label}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="rp-ch-label">{c.label}</span>
                <h3 className="rp-ch-title">{c.title}</h3>
                <p className="rp-ch-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 The Solution ──────────────────────────────────── */}
      <section className="section paper" data-screen-label="05 The Solution">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>05 / The Solution</Eyebrow>
              <h2>A Unified Learning Ecosystem</h2>
            </div>
            <div className="right">
              RevisionPrep centralizes the entire revision lifecycle into a single,
              high-performance interface.
            </div>
          </div>
          <div className="rp-solution-grid">
            {SOLUTIONS.map((s, i) => (
              <div
                className="rp-solution-card fade-up"
                key={s.label}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="rp-sol-icon" aria-hidden="true">{s.icon}</div>
                <span className="rp-sol-label">{s.label}</span>
                <h3 className="rp-sol-title">{s.title}</h3>
                <p className="rp-sol-text">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 System Architecture ───────────────────────────── */}
      <section className="section rp-arch-section" data-screen-label="06 Architecture">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>06 / System Architecture</Eyebrow>
              <h2>IB Question Generation – Multi-Agent Architecture</h2>
            </div>
            <div className="right">
              A LangGraph-orchestrated pipeline that ideates, generates, validates and stores
              high-quality IB exam questions across specialised agents.
            </div>
          </div>

          {/* Config clusters */}
          <div className="rp-arch-config fade-up">
            {ARCH_CONFIG.map((cluster) => (
              <div className="rp-config-cluster" key={cluster.label}>
                <div className="rp-config-cluster-label">{cluster.label}</div>
                <div className="rp-config-pills">
                  {cluster.items.map((item) => (
                    <span className="rp-config-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Main pipeline + annotations */}
          <div className="rp-arch-flow">
            <div className="rp-pipeline fade-up">
              {PIPELINE.map((step, i) => (
                <div key={step.num}>
                  <div className="rp-pipeline-step">
                    <div className="rp-pipeline-step-num">{step.num}</div>
                    <div className={`rp-pipeline-step-body${step.accent ? ' accent' : ''}`}>
                      <div>
                        <div className="rp-pipeline-step-title">{step.title}</div>
                        {step.sub && (
                          <div className="rp-pipeline-step-sub">{step.sub}</div>
                        )}
                      </div>
                      {step.badge && (
                        <span
                          className={`rp-pipeline-step-badge${step.badgeFeedback ? ' feedback' : ''}`}
                        >
                          {step.badge}
                        </span>
                      )}
                    </div>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <div className="rp-pipeline-connector" />
                  )}
                </div>
              ))}
            </div>

            <div className="rp-arch-annotations fade-up" style={{ transitionDelay: '120ms' }}>
              {ARCH_ANNOTATIONS.map((ann) => (
                <div className="rp-arch-ann" key={ann.label}>
                  <div className="rp-arch-ann-label">{ann.label}</div>
                  <div className="rp-arch-ann-items">
                    {ann.items.map((item) => (
                      <span className="rp-arch-ann-item" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="rp-feedback-ann">
                <div className="rp-feedback-ann-label">↺ Feedback Loop</div>
                <div className="rp-feedback-ann-text">
                  Validation failures route back to the Ensemble Generation Layer for
                  iterative refinement until quality thresholds are met.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 Interface Deep-Dive ───────────────────────────── */}
      <section className="section paper" data-screen-label="07 Interface Deep-Dive">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>07 / Interface Deep-Dive</Eyebrow>
              <h2>Visualizing the Student Journey</h2>
            </div>
            <div className="right">
              A closer look at the core interfaces designed to facilitate a focused and
              effective revision experience.
            </div>
          </div>
          <div className="rp-interface-grid">
            {INTERFACES.map((iface, i) => (
              <div
                className="rp-interface-card fade-up"
                key={iface.num}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="frame">
                  <img
                    src={iface.img}
                    alt={iface.title}
                    className="rp-interface-img"
                  />
                </div>
                <div className="rp-interface-card-body">
                  <span className="rp-interface-card-num">{iface.num} / Interface</span>
                  <h3 className="rp-interface-card-title">{iface.title}</h3>
                  <p className="rp-interface-card-desc">{iface.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Testimonials ──────────────────────────────────── */}
      <section className="section" data-screen-label="08 Testimonials">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>08 / Testimonials</Eyebrow>
              <h2>Trusted by Students &amp; Educators</h2>
            </div>
          </div>
          <div className="rp-testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <div
                className="rp-testimonial-card fade-up"
                key={t.name}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="rp-testimonial-quote">{t.quote}</p>
                <div className="rp-testimonial-footer">
                  <div className="rp-testimonial-avatar" aria-hidden="true">
                    {t.initials}
                  </div>
                  <div>
                    <div className="rp-testimonial-name">{t.name}</div>
                    <div className="rp-testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
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
