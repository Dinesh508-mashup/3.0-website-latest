import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { Arrow, Eyebrow, NodeBadge } from '@/components';
import { PageNavbar } from '@/shell/PageNavbar';
import { PageFooter } from '@/shell/PageFooter';
import { PageCTA } from '@/shell/PageCTA';

function FullStackVisualLarge() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="fsa" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFD6B8" />
          <stop offset="1" stopColor="#F88E4B" />
        </linearGradient>
      </defs>
      <g>
        <rect x="40" y="60" width="280" height="200" rx="14" fill="rgba(255,249,245,0.7)" stroke="#111111" strokeWidth="1.5" />
        <rect x="40" y="60" width="280" height="22" rx="14" fill="#111111" />
        <rect x="40" y="73" width="280" height="9" fill="#111111" />
        <circle cx="54" cy="71" r="3" fill="#FFD6B8" />
        <circle cx="66" cy="71" r="3" fill="#F6B0C7" />
        <circle cx="78" cy="71" r="3" fill="#F88E4B" />
        <rect x="58" y="100" width="100" height="10" rx="3" fill="#111111" />
        <rect x="58" y="118" width="220" height="6" rx="2" fill="rgba(17,17,17,0.25)" />
        <rect x="58" y="130" width="180" height="6" rx="2" fill="rgba(17,17,17,0.25)" />
        <rect x="58" y="160" width="70" height="26" rx="13" fill="#111111" />
        <rect x="138" y="160" width="70" height="26" rx="13" fill="none" stroke="#111111" strokeWidth="1.2" />
        <rect x="58" y="200" width="244" height="44" rx="10" fill="rgba(248,142,75,0.10)" stroke="#111111" strokeWidth="1" />

        <rect x="140" y="140" width="280" height="170" rx="14" fill="#fff" stroke="#111111" strokeWidth="1.5" className="float-c" />
        <rect x="160" y="160" width="80" height="80" rx="14" fill="url(#fsa)" stroke="#111111" strokeWidth="1" />
        <rect x="252" y="160" width="148" height="24" rx="6" fill="#111111" />
        <rect x="252" y="194" width="148" height="6" rx="2" fill="rgba(17,17,17,0.3)" />
        <rect x="252" y="206" width="120" height="6" rx="2" fill="rgba(17,17,17,0.3)" />
        <rect x="160" y="260" width="240" height="34" rx="8" fill="rgba(17,17,17,0.06)" stroke="#111111" strokeWidth="1" />
        <circle cx="178" cy="277" r="6" fill="#F88E4B" className="pulse-dot" />
        <rect x="196" y="271" width="120" height="6" rx="2" fill="#111111" />
        <rect x="196" y="283" width="80" height="5" rx="2" fill="rgba(17,17,17,0.4)" />
      </g>
    </svg>
  );
}

function WorkflowVisualLarge() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="wfa" x1="0" x2="1">
          <stop offset="0" stopColor="#F88E4B" />
          <stop offset="1" stopColor="#BA2F58" />
        </linearGradient>
      </defs>
      <g stroke="rgba(17,17,17,0.10)" strokeDasharray="4 6" fill="none">
        <line x1="40" y1="100" x2="440" y2="100" />
        <line x1="40" y1="180" x2="440" y2="180" />
        <line x1="40" y1="260" x2="440" y2="260" />
      </g>
      <g stroke="#111111" strokeWidth="1.2" fill="none" strokeDasharray="2 4">
        <path d="M120 100 Q200 100 220 180" />
        <path d="M120 260 Q200 260 220 180" />
        <path d="M260 180 Q340 100 380 100" />
        <path d="M260 180 Q340 260 380 260" />
      </g>
      {[
        [80, 100, 'trigger'],
        [80, 260, 'input'],
        [400, 100, 'action'],
        [400, 260, 'store'],
      ].map(([x, y, l], i) => (
        <g key={i}>
          <rect x={x - 40} y={y - 22} width="80" height="44" rx="12" fill="#fff" stroke="#111111" strokeWidth="1.4" />
          <circle cx={x - 24} cy={y} r="5" fill={['#F88E4B', '#F6B0C7', '#FFD6B8', '#BA2F58'][i]} />
          <text x={x + 6} y={y + 4} fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#111111">
            {l}
          </text>
        </g>
      ))}
      <g>
        <circle cx="240" cy="180" r="50" fill="url(#wfa)" stroke="#111111" strokeWidth="1.4" />
        <circle cx="240" cy="180" r="36" fill="none" stroke="#fff" strokeOpacity="0.5" strokeDasharray="2 4" />
        <text x="240" y="178" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#fff">
          DECIDE
        </text>
        <text x="240" y="194" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="rgba(255,255,255,0.7)">
          model · evals
        </text>
        <circle cx="240" cy="180" r="6" fill="#fff" className="pulse-dot" />
      </g>
      <g transform="translate(40, 310)">
        <rect width="400" height="28" rx="8" fill="rgba(17,17,17,0.04)" stroke="#111111" strokeWidth="1" />
        <rect x="6" y="6" width="280" height="16" rx="6" fill="url(#wfa)" />
        <text x="296" y="19" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#111111">
          eval 94.2%
        </text>
      </g>
    </svg>
  );
}

function AgentVisualLarge() {
  return (
    <svg viewBox="0 0 480 360" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="aga" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#BA2F58" />
          <stop offset="1" stopColor="#F88E4B" />
        </linearGradient>
      </defs>
      <ellipse cx="240" cy="180" rx="170" ry="100" fill="none" stroke="rgba(17,17,17,0.45)" strokeDasharray="3 5" />
      <ellipse cx="240" cy="180" rx="115" ry="68" fill="none" stroke="rgba(17,17,17,0.22)" strokeDasharray="3 5" />
      <circle cx="240" cy="180" r="52" fill="url(#aga)" stroke="#111111" strokeWidth="1.4" />
      <text x="240" y="174" fontSize="12" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#fff">
        AGENT
      </text>
      <text x="240" y="190" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="rgba(255,255,255,0.7)">
        plan · act · reflect
      </text>
      {[
        [70, 180, 'api'],
        [410, 180, 'fs'],
        [240, 80, 'db'],
        [240, 280, 'ui'],
        [355, 100, 'log'],
        [125, 260, 'mem'],
        [125, 100, 'web'],
        [355, 260, 'calc'],
      ].map(([x, y, l], i) => (
        <g key={i} className={i % 2 ? 'float-a' : 'float-b'}>
          <rect x={x - 22} y={y - 16} width="44" height="32" rx="9" fill="#fff" stroke="#111111" strokeWidth="1.2" />
          <circle cx={x - 13} cy={y} r="3.5" fill="#111111" />
          <text x={x + 2} y={y + 4} fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#111111">
            {l}
          </text>
        </g>
      ))}
      <g>
        <path d="M186 132 Q170 100 200 90" stroke="#111111" strokeWidth="1.2" fill="none" strokeDasharray="2 3" />
        <polygon points="198,86 206,92 200,98" fill="#111111" />
      </g>
    </svg>
  );
}

const SERVICE_BLOCKS = [
  {
    id: 'fullstack',
    nav: 'Full-Stack Apps',
    num: '01',
    tone: 'pink',
    title: 'Full-Stack Product Engineering',
    description:
      'We design and engineer complete, production-ready products — covering frontend, backend, data, and infrastructure.',
    expandedLead: 'Our work spans:',
    bullets: [
      'modern web and mobile applications',
      'scalable APIs and backend systems',
      'clean architecture designed to evolve over time',
    ],
    expandedTail:
      "Whether it's an early version or a growing product, we focus on building systems that are reliable, maintainable, and ready to scale.",
    placeholder: 'FULL-STACK / web · mobile · api · infra',
    placeholderAccent: 'peach',
    Visual: FullStackVisualLarge,
  },
  {
    id: 'ai-workflows',
    nav: 'AI Workflows',
    num: '02',
    tone: 'lav',
    title: 'AI Workflows & Intelligent Automation',
    description:
      "We build workflows where systems don't just execute steps, but make informed decisions along the way.",
    expandedLead: 'This includes:',
    bullets: [
      'automating complex, multi-step processes',
      'integrating intelligence into existing products',
      'reducing manual effort across operations and user flows',
    ],
    expandedTail:
      'These workflows sit between traditional applications and fully autonomous systems — adding leverage without unnecessary complexity.',
    placeholder: 'AI WORKFLOW / triggers · models · evals',
    placeholderAccent: 'rose',
    Visual: WorkflowVisualLarge,
  },
  {
    id: 'agents',
    nav: 'Autonomous Agents',
    num: '03',
    tone: 'sky',
    title: 'Autonomous AI Agents',
    description:
      'We engineer agents that can reason, act, and operate independently within defined boundaries.',
    expandedLead: 'These agents are designed to:',
    bullets: [
      'handle complex tasks end to end',
      'interact with tools, data, and systems',
      'adapt based on context and feedback',
    ],
    expandedTail:
      'They go beyond simple automation, enabling products to perform work that previously required constant human involvement.',
    placeholder: 'AGENT / planner · tools · memory',
    placeholderAccent: 'cream',
    Visual: AgentVisualLarge,
  },
];

function ServicesHero() {
  return (
    <section className="page-hero" data-screen-label="01 Hero">
      <div className="wrap">
        <div className="page-hero-grid fade-up">
          <div className="col">
            <Eyebrow>Services · 01 / Capabilities</Eyebrow>
            <h1 className="page-h1">
              Our
              <br />
              <span className="ital">Capabilities</span>
            </h1>
          </div>
          <div className="col" style={{ paddingBottom: 6 }}>
            <p className="page-sub" style={{ marginTop: 0, maxWidth: 540 }}>
              We design and build scalable full-stack products, intelligent AI workflows, and
              autonomous agents that transform how software operates and grows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceNav() {
  const [active, setActive] = useState('fullstack');
  useEffect(() => {
    const ids = SERVICE_BLOCKS.map((s) => s.id);
    const onScroll = () => {
      const y = window.scrollY + 240;
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="svc-nav-shell" data-screen-label="02 Service Nav">
      <div className="wrap">
        <div className="svc-nav fade-up">
          {SERVICE_BLOCKS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => jump(e, s.id)}
              className={`svc-nav-item ${active === s.id ? 'on' : ''}`}
            >
              <span className="svc-nav-num">{s.num}</span>
              <span className="svc-nav-label">{s.nav}</span>
              <Arrow size={14} />
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .svc-nav-shell { position: sticky; top: 88px; z-index: 30; padding: 14px 0 0; }
        .svc-nav {
          display: flex; gap: 6px; flex-wrap: wrap;
          padding: 8px;
          background: rgba(255,249,245,0.85);
          backdrop-filter: blur(12px) saturate(140%);
          -webkit-backdrop-filter: blur(12px) saturate(140%);
          border: var(--bd);
          border-radius: var(--r-pill);
          width: fit-content;
          margin: 0 auto;
          box-shadow: 0 12px 30px -18px rgba(186,47,88,0.18), 0 24px 60px -30px rgba(248,142,75,0.18);
        }
        .svc-nav-item {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 10px 18px;
          border-radius: 999px;
          font-size: 14px; color: var(--ink); opacity: 0.78;
          transition: all 0.25s cubic-bezier(.2,.7,.2,1);
        }
        .svc-nav-item .svc-nav-num {
          font-family: "JetBrains Mono", monospace; font-size: 10px;
          letter-spacing: 0.14em; opacity: 0.5;
        }
        .svc-nav-item:hover { opacity: 1; background: rgba(17,17,17,0.06); }
        .svc-nav-item.on { opacity: 1; background: var(--ink); color: #fff; }
        .svc-nav-item.on .svc-nav-num { opacity: 0.6; color: #fff; }
        .svc-nav-item .arrow { transition: transform 0.3s; }
        .svc-nav-item:hover .arrow { transform: translateX(3px); }
        @media (max-width: 720px) {
          .svc-nav-shell { position: relative; top: 0; }
          .svc-nav { width: 100%; }
          .svc-nav-item { flex: 1 1 auto; justify-content: space-between; }
        }
      `}</style>
    </div>
  );
}

function ServiceBlock({ block, reverse }) {
  return (
    <div
      id={block.id}
      className={`svc-block fade-up ${reverse ? 'reverse' : ''}`}
      data-screen-label={`${block.num} ${block.nav}`}
    >
      <div className={`svc-block-content ${block.tone}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="svc-tag">Service · {block.num}</span>
          <NodeBadge num={block.num} accent />
        </div>
        <h2 className="svc-h">{block.title}</h2>
        <p className="svc-desc">{block.description}</p>

        <div className="svc-expanded">
          <div className="svc-expanded-lead">{block.expandedLead}</div>
          <ul className="svc-bullets">
            {block.bullets.map((b, i) => (
              <li key={i}>
                <span className="svc-b-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="svc-tail">{block.expandedTail}</p>
        </div>

        <div className="svc-cta-wrap">
          <Link to="/contact" className="svc-cta">
            Connect to team
            <Arrow />
          </Link>
        </div>
      </div>

      <div className="svc-block-visual">
        <div className="svc-vh">
          <span className="svc-vk">{block.placeholder}</span>
          <span className="svc-vk">v3.0</span>
        </div>
        <div className="svc-canvas">
          <block.Visual />
        </div>
      </div>
    </div>
  );
}

function ServiceBlocks() {
  return (
    <section className="section" data-screen-label="03 Services" style={{ paddingTop: 56 }}>
      <div className="wrap">
        <div className="svc-blocks">
          {SERVICE_BLOCKS.map((b, i) => (
            <ServiceBlock key={b.id} block={b} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
      <style>{`
        .svc-blocks { display: flex; flex-direction: column; gap: 80px; }
        .svc-block {
          display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 36px;
          align-items: stretch;
        }
        .svc-block.reverse { grid-template-columns: 1.05fr 0.95fr; }
        .svc-block.reverse .svc-block-content { order: 2; }
        .svc-block.reverse .svc-block-visual  { order: 1; }
        @media (max-width: 980px) {
          .svc-block, .svc-block.reverse { grid-template-columns: 1fr; gap: 22px; }
          .svc-block.reverse .svc-block-content { order: 0; }
          .svc-block.reverse .svc-block-visual { order: 0; }
        }
        .svc-block-content {
          border: var(--bd); border-radius: var(--r-card);
          padding: 40px;
          display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          transition: transform 0.5s cubic-bezier(.2,.7,.2,1), box-shadow 0.5s;
        }
        .svc-block:hover .svc-block-content { transform: translateY(-3px); box-shadow: 0 30px 60px -28px rgba(186,47,88,0.20); }
        .svc-block-content.pink { background: linear-gradient(160deg, #FFE3CB 0%, #FFD6B8 100%); }
        .svc-block-content.lav  { background: linear-gradient(160deg, #F8C2D2 0%, #F6B0C7 100%); }
        .svc-block-content.sky  { background: linear-gradient(160deg, #FBE9D6 0%, #F6D2C0 100%); }
        .svc-tag {
          font-family: "JetBrains Mono", monospace; font-size: 11px;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink);
          opacity: 0.7;
        }
        .svc-h {
          font-family: "Space Grotesk", sans-serif; font-weight: 500;
          font-size: clamp(32px, 3.8vw, 48px);
          line-height: 1; letter-spacing: -0.035em;
          margin: 14px 0 0; max-width: 460px;
          text-wrap: pretty;
        }
        .svc-desc {
          font-size: 17px; color: var(--ink);
          opacity: 0.82; max-width: 460px; margin-top: 18px; line-height: 1.5;
        }
        .svc-expanded {
          margin-top: 26px; padding-top: 24px;
          border-top: 1px solid rgba(17,17,17,0.18);
          display: flex; flex-direction: column; gap: 16px;
          max-width: 460px;
        }
        .svc-expanded-lead {
          font-family: "Space Grotesk", sans-serif; font-size: 16px;
          letter-spacing: -0.015em; color: var(--ink); opacity: 0.85;
        }
        .svc-bullets {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-direction: column; gap: 0;
        }
        .svc-bullets li {
          display: flex; gap: 14px; align-items: flex-start;
          padding: 12px 0;
          border-top: 1px solid rgba(17,17,17,0.18);
          font-size: 15px; color: var(--ink); opacity: 0.9;
          line-height: 1.4;
        }
        .svc-bullets li:last-child { border-bottom: 1px solid rgba(17,17,17,0.18); }
        .svc-bullets .svc-b-num {
          font-family: "JetBrains Mono", monospace; font-size: 11px;
          letter-spacing: 0.12em; opacity: 0.55;
          flex: 0 0 28px;
          padding-top: 2px;
        }
        .svc-tail {
          font-size: 15px; color: var(--ink); opacity: 0.82;
          line-height: 1.55;
          margin-top: 4px;
        }
        .svc-cta-wrap { margin-top: 28px; }
        .svc-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 22px;
          background: var(--ink); color: #fff;
          border: 1px solid var(--ink);
          border-radius: 999px;
          font-size: 15px; line-height: 1;
          transition: transform 0.3s cubic-bezier(.2,.7,.2,1), background 0.25s, box-shadow 0.25s;
        }
        .svc-cta:hover {
          transform: translateY(-2px); background: var(--ink-2);
          box-shadow: 0 14px 30px -10px var(--orange-glow), 0 0 0 1px rgba(248,142,75,0.45);
        }
        .svc-cta .arrow { transition: transform 0.3s; }
        .svc-cta:hover .arrow { transform: translateX(3px); }

        .svc-block-visual {
          border: var(--bd); border-radius: var(--r-card);
          background: #fff;
          padding: 28px;
          display: flex; flex-direction: column; gap: 18px;
          overflow: hidden;
          position: relative;
        }
        .svc-vh {
          display: flex; justify-content: space-between; align-items: center;
        }
        .svc-vk {
          font-family: "JetBrains Mono", monospace; font-size: 11px;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-soft);
        }
        .svc-canvas {
          flex: 1; min-height: 340px;
          border: 1px solid rgba(17,17,17,0.12);
          border-radius: 20px;
          background: var(--bg);
          overflow: hidden;
          position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .svc-canvas > svg { width: 100%; height: 100%; display: block; }
      `}</style>
    </section>
  );
}

export default function ServicesPage() {
  useReveal();
  return (
    <>
      <title>Services — 3.0 Labs</title>
      <meta
        name="description"
        content="Full-stack products, AI workflows, and autonomous agents. We design and build software that transforms how products operate and grow."
      />
      <PageNavbar active="services" />
      <ServicesHero />
      <ServiceNav />
      <ServiceBlocks />
      <PageCTA
        kicker="04 / Engage"
        title="Have a build in mind?"
        italic="Let's talk shape."
        sub="One short note is enough. We'll come back with a fit assessment and a concrete next step within one working day."
        primary={{ href: '/contact', label: 'Connect to team' }}
        secondary={{ href: '/portfolio', label: 'See recent work' }}
      />
      <PageFooter />
    </>
  );
}
