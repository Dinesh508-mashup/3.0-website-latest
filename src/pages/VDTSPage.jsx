import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { PageFooter } from '@/shell/PageFooter';
import { PageHero } from '@/shell/PageHero';
import { PageNavbar } from '@/shell/PageNavbar';
import { Arrow, Eyebrow, NodeBadge } from '@/components';
import vdtsCover from '@/portfolio/assets/vdts.svg';
import '@/portfolio/vdts/vdts.css';

/* ── Static data ───────────────────────────────────────────── */

const OBJECTIVES = [
  { num: '01', title: 'Centralize incident tracking across organizations' },
  { num: '02', title: 'Desktop & Mobile responsive design' },
  { num: '03', title: 'Admin, Consultant & Client roles' },
];

const CHALLENGES = [
  {
    label: 'Poor Visibility',
    title: 'Poor Visibility',
    text: 'No unified view of ticket status or progress across teams, leading to blind spots in operations.',
  },
  {
    label: 'Resolution Delays',
    title: 'Resolution Delays',
    text: 'Scattered channels meant tickets fell through the cracks, extending resolution times significantly.',
  },
  {
    label: 'No Accountability',
    title: 'No Accountability',
    text: 'Without clear ownership tracking, it was impossible to hold teams accountable for incident handling.',
  },
  {
    label: 'Fragmented Communication',
    title: 'Fragmented Communication',
    text: 'Email, calls, and separate portals created communication silos between teams and clients.',
  },
];

const SOLUTIONS = [
  {
    num: '01',
    title: 'Unified Ticket System',
    text: 'Single portal for all incident management — replacing email, calls, and disconnected tools.',
  },
  {
    num: '02',
    title: 'Structured Workflows',
    text: 'Defined stages from ticket creation to closure, ensuring consistency and reducing ambiguity.',
  },
  {
    num: '03',
    title: 'Real-Time Visibility',
    text: 'Live status tracking and dashboard views so every stakeholder sees the full picture instantly.',
  },
  {
    num: '04',
    title: 'Controlled Communication',
    text: 'Structured channels between users prevent miscommunication and maintain audit trails.',
  },
];

const ROLES = [
  {
    icon: '🛡️',
    name: 'VDTS Admin',
    items: [
      'Manages incoming tickets',
      'Assigns to consultants',
      'Monitors system activity',
      'Oversees resolution pipeline',
    ],
  },
  {
    icon: '⚙️',
    name: 'VDTS Consultant',
    items: [
      'Works on assigned tickets',
      'Communicates with clients',
      'Delivers solutions',
      'Requests clarity when needed',
    ],
  },
  {
    icon: '👤',
    name: 'VDTS Client',
    items: [
      'Raises requests via portal',
      'Provides additional info',
      'Reviews resolutions',
      'Confirms ticket closure',
    ],
  },
];

const FEATURES = [
  {
    num: '01',
    title: 'Centralized Ticket System',
    text: 'Each ticket tracked with a unique ID and full lifecycle data — from creation to closure.',
  },
  {
    num: '02',
    title: 'Status-Driven Dashboard',
    text: 'Real-time overview of all tickets based on their current stage for instant decision-making.',
  },
  {
    num: '03',
    title: 'Advanced Filtering & Search',
    text: 'Quickly locate tickets using department, category, service, or keywords.',
  },
  {
    num: '04',
    title: 'Clarity Workflow',
    text: 'Consultants can request additional information without breaking the process flow.',
  },
  {
    num: '05',
    title: 'Client Approval Before Closure',
    text: 'Every issue must be resolved satisfactorily before a ticket can be closed.',
  },
  {
    num: '06',
    title: 'Responsive Experience',
    text: 'Optimized for desktop with table views and mobile with card-based layouts.',
  },
];

const LIFECYCLE = [
  {
    num: '01',
    stage: 'Stage 1',
    title: 'Ticket Created',
    desc: 'Client submits incident request via the portal',
  },
  {
    num: '02',
    stage: 'Stage 2',
    title: 'Admin Assigns',
    desc: 'Logs, categorizes, and assigns the ticket',
  },
  {
    num: '03',
    stage: 'Stage 3',
    title: 'Consultant Processes',
    desc: 'Investigates the issue and works on resolution',
  },
  {
    num: '04',
    stage: 'Stage 4',
    title: 'Clarity Requested',
    desc: 'Additional info requested from client if needed',
  },
  {
    num: '05',
    stage: 'Stage 5',
    title: 'Solution Provided',
    desc: 'Consultant delivers the resolution to client',
  },
  {
    num: '06',
    stage: 'Stage 6',
    title: 'Client Confirms',
    desc: 'Reviews and confirms satisfactory closure',
  },
];

const DESIGN_DECISIONS = [
  {
    title: 'Status-First Dashboard',
    text: 'Prioritized visibility of ticket states to enable faster decision-making. The dashboard is the central hub for all user types.',
    line: 'Faster decisions through instant status recognition',
  },
  {
    title: 'Context-Aware UI',
    text: 'Desktop supports bulk management with data tables, while mobile is optimized for quick actions with card-based views.',
    line: 'Device-optimized, not just responsive',
  },
  {
    title: 'Visual Hierarchy & Color Coding',
    text: 'Status-based colors help users quickly scan and understand ticket states at a glance, reducing cognitive load.',
    line: 'Scan first, read second',
  },
  {
    title: 'Efficient Navigation',
    text: 'Advanced filters and search reduce the effort needed to locate specific tickets across large datasets.',
    line: 'Find any ticket in under 3 seconds',
  },
];

/* ── Page component ─────────────────────────────────────────── */

export default function VDTSPage() {
  useReveal();

  return (
    <>
      <title>VDTS — Case Study · 3.0 Labs</title>
      <meta
        name="description"
        content="A centralized Incident Management System for VDTS — streamlining ticket creation, assignment, tracking, and resolution across Admin, Consultant, and Client roles."
      />

      <PageNavbar active="portfolio" />

      {/* ── 01 Hero ──────────────────────────────────────────── */}
      <div className="vdts-hero-wrap">
        <PageHero
          index="01"
          kicker="Incident Management System"
          title={{
            before: 'A centralized ticket management ',
            after: ' that streamlines incident resolution across organizations — from creation to closure.',
          }}
          italicWord="platform"
          sub="One platform to unify ticket creation, assignment, tracking, and resolution — across every team and device."
          meta={[
            ['Client', 'VDTS'],
            ['Type', 'Enterprise IMS'],
            ['Platform', 'Web + Mobile'],
            ['Roles', '3 User Types'],
          ]}
        />
      </div>

      {/* ── 02 Cover + Description ───────────────────────────── */}
      <section className="section vdts-cover-section" data-screen-label="02 Cover">
        <div className="wrap">
          <div className="vdts-cover-frame fade-up">
            <img
              src={vdtsCover}
              alt="VDTS Incident Management System dashboard"
              loading="eager"
            />
          </div>
          <div className="filter-bar vdts-tag-bar fade-up">
            {[
              'Incident Management',
              'Ticket System',
              'Admin Portal',
              'Consultant Flow',
              'Client Portal',
              'Web + Mobile',
            ].map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="vdts-desc-grid fade-up">
            <div className="vdts-desc-text">
              <p>
                VDTS is a corporate IT service provider that required a structured system to
                manage incident requests across organizations. The project focused on designing
                a web-based Incident Management System (IMS) that works seamlessly across
                desktop and mobile devices.
              </p>
              <p>
                The platform enables teams to track, manage, and resolve incidents efficiently
                through a centralized interface — replacing fragmented workflows with a single
                source of truth.
              </p>
            </div>
            <div className="vdts-quote">
              <p className="vdts-quote-text">
                "One platform to unify ticket creation, assignment, tracking, and resolution —
                across every team and device."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Platform Screens ──────────────────────────────── */}
      <section className="section paper" data-screen-label="03 Platform Screens">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>03 / Platform Screens</Eyebrow>
              <h2>Designed for Every Role</h2>
            </div>
            <div className="right">
              A consistent interface across Admin, Consultant, and Client — optimized for both
              desktop and mobile workflows.
            </div>
          </div>
          <div className="vdts-screens-frame fade-up">
            <img src="/vdts-cover.png" alt="VDTS platform screens — Admin, Consultant, and Client views" />
          </div>
        </div>
      </section>

      {/* ── 04 Objectives ────────────────────────────────────── */}
      <section className="section paper" data-screen-label="03 Objectives">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>03 / Objectives</Eyebrow>
              <h2>What We Set Out to Build</h2>
            </div>
          </div>
          <div className="portfolio-process-grid vdts-obj-grid">
            {OBJECTIVES.map((obj, i) => (
              <div
                className="portfolio-process-card fade-up"
                key={obj.num}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <NodeBadge num={obj.num} accent />
                <h3>{obj.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Challenge ─────────────────────────────────────── */}
      <section className="section" data-screen-label="04 Challenge">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>04 / Challenge</Eyebrow>
              <h2>The Challenge We Faced</h2>
            </div>
            <div className="right">
              Organizations were handling incident requests through multiple disconnected
              channels. There was no single system to track the complete lifecycle of a request.
            </div>
          </div>
          <div className="vdts-challenge-grid">
            {CHALLENGES.map((c, i) => (
              <div
                className="vdts-challenge-card fade-up"
                key={c.label}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="vdts-ch-label">{c.label}</span>
                <h3 className="vdts-ch-title">{c.title}</h3>
                <p className="vdts-ch-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05 Solution ──────────────────────────────────────── */}
      <section className="section paper" data-screen-label="05 Solution">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>05 / Solution</Eyebrow>
              <h2>A Centralized IMS Platform</h2>
            </div>
            <div className="right">
              A centralized platform designed to streamline the entire incident lifecycle —
              from ticket creation to resolution.
            </div>
          </div>
          <div className="vdts-inline-decision fade-up">
            <span className="vdts-inline-decision-icon" aria-hidden="true">💡</span>
            <div>
              <span className="vdts-inline-decision-label">Design Decision</span>
              <p className="vdts-inline-decision-text">
                Single-channel ticket intake via portal ensures consistency, reduces
                complexity, and creates a reliable audit trail.
              </p>
            </div>
          </div>
          <div className="vdts-sol-grid">
            {SOLUTIONS.map((s, i) => (
              <div
                className="vdts-sol-card fade-up"
                key={s.title}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="vdts-sol-num">{s.num}</span>
                <h3 className="vdts-sol-title">{s.title}</h3>
                <p className="vdts-sol-text">{s.text}</p>
                <div className="vdts-sol-dot" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 User Roles ────────────────────────────────────── */}
      <section className="section" data-screen-label="06 User Roles">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>06 / User Roles</Eyebrow>
              <h2>Designed for Three Core Roles</h2>
            </div>
            <div className="right">
              Each user type has a tailored experience optimized for their specific workflows
              and responsibilities.
            </div>
          </div>
          <div className="vdts-roles-grid">
            {ROLES.map((role, i) => (
              <div
                className="vdts-role-card fade-up"
                key={role.name}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="vdts-role-icon-wrap" aria-hidden="true">
                  {role.icon}
                </div>
                <h3 className="vdts-role-name">{role.name}</h3>
                <div className="vdts-role-divider" />
                <ul className="vdts-role-list">
                  {role.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 Features ──────────────────────────────────────── */}
      <section className="section paper" data-screen-label="07 Features">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>07 / Features</Eyebrow>
              <h2>Built for Efficiency</h2>
            </div>
            <div className="right">
              Every feature was designed to reduce friction, improve visibility, and accelerate
              incident resolution.
            </div>
          </div>
          <div className="portfolio-process-grid vdts-features-grid">
            {FEATURES.map((f, i) => (
              <div
                className="portfolio-process-card fade-up"
                key={f.num}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <NodeBadge num={f.num} accent />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Lifecycle ─────────────────────────────────────── */}
      <section className="section" data-screen-label="08 Lifecycle">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>08 / Lifecycle</Eyebrow>
              <h2>A Structured Lifecycle</h2>
            </div>
            <div className="right">
              The system follows a clear, structured lifecycle ensuring no ticket is left
              incomplete or unresolved.
            </div>
          </div>
          <div className="process-strip vdts-lifecycle-strip fade-up">
            {LIFECYCLE.map((step, i) => (
              <div className="proc-step" key={step.num}>
                <NodeBadge num={step.num} accent={i === 0 || i === LIFECYCLE.length - 1} />
                <span className="pk">{step.stage}</span>
                <span className="pt">{step.title}</span>
                <span className="pd">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 09 Design Decisions ──────────────────────────────── */}
      <section className="section paper" data-screen-label="09 Design Decisions">
        <div className="wrap">
          <div className="sec-head fade-up">
            <div>
              <Eyebrow>09 / Design Decisions</Eyebrow>
              <h2>Intentional Design Decisions</h2>
            </div>
            <div className="right">
              Every design choice was driven by the goal of reducing complexity and increasing
              clarity for all user types.
            </div>
          </div>
          <div className="vdts-design-grid">
            {DESIGN_DECISIONS.map((d, i) => (
              <div
                className="vdts-design-card fade-up"
                key={d.title}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="vdts-design-title">{d.title}</h3>
                <p className="vdts-design-text">{d.text}</p>
                <span className="vdts-design-line">{d.line}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10 Key Results ───────────────────────────────────── */}
      <section className="section" data-screen-label="10 Results">
        <div className="wrap">
          <div className="vdts-results-card fade-up">
            <Eyebrow>10 / Key Results</Eyebrow>
            <h2>Key Results</h2>
            <p>
              The platform transformed how VDTS handles incidents — moving from scattered,
              disconnected processes to a single unified system with complete visibility.
            </p>
          </div>
        </div>
      </section>

      {/* ── 11 Back to portfolio ─────────────────────────────── */}
      <section className="section portfolio-next" data-screen-label="11 CTA">
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
