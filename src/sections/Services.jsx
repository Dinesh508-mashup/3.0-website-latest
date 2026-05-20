import { Arrow } from '@/components';

function ServiceCard({ tone, tag, title, desc, children }) {
  return (
    <div className={`service-card ${tone}`}>
      <div>
        <div className="row" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="tag">{tag}</span>
          <span className="pill-tag">Available</span>
        </div>
        <h3 className="h">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
      <div className="visual">{children}</div>
      <a href="#cta" className="service-cta">
        Let&apos;s Collaborate
        <Arrow />
      </a>
    </div>
  );
}

function FullStackVisual() {
  return (
    <svg viewBox="0 0 320 220" style={{ width: '100%', height: '100%' }}>
      <g>
        <rect x="20" y="40" width="220" height="150" rx="14" fill="rgba(255,255,255,0.7)" stroke="#111111" strokeWidth="1.5" />
        <rect x="20" y="40" width="220" height="22" rx="14" fill="rgba(17,17,17,0.9)" />
        <rect x="20" y="55" width="220" height="7" fill="rgba(17,17,17,0.9)" />
        <circle cx="34" cy="51" r="3" fill="#FFD6B8" />
        <circle cx="46" cy="51" r="3" fill="#FFD6B8" />
        <circle cx="58" cy="51" r="3" fill="#F6B0C7" />
        <rect x="36" y="78" width="100" height="10" rx="3" fill="#111111" />
        <rect x="36" y="94" width="160" height="6" rx="2" fill="rgba(17,17,17,0.25)" />
        <rect x="36" y="106" width="130" height="6" rx="2" fill="rgba(17,17,17,0.25)" />
        <rect x="36" y="132" width="60" height="22" rx="11" fill="#111111" />
        <rect x="104" y="132" width="60" height="22" rx="11" fill="none" stroke="#111111" strokeWidth="1.2" />

        <rect x="80" y="80" width="220" height="120" rx="14" fill="rgba(255,255,255,0.95)" stroke="#111111" strokeWidth="1.5" className="float-c" />
        <rect x="96" y="96" width="60" height="60" rx="10" fill="#FFD6B8" stroke="#111111" strokeWidth="1" />
        <rect x="168" y="96" width="60" height="28" rx="6" fill="#111111" />
        <rect x="168" y="128" width="120" height="6" rx="2" fill="rgba(17,17,17,0.25)" />
        <rect x="168" y="140" width="80" height="6" rx="2" fill="rgba(17,17,17,0.25)" />
        <rect x="96" y="168" width="190" height="20" rx="6" fill="rgba(17,17,17,0.07)" stroke="#111111" strokeWidth="1" />
      </g>
    </svg>
  );
}

function WorkflowVisual() {
  return (
    <svg viewBox="0 0 320 220" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="wgrad" x1="0" x2="1">
          <stop offset="0" stopColor="#F88E4B" />
          <stop offset="1" stopColor="#BA2F58" />
        </linearGradient>
      </defs>
      {[
        [40, 50, 'input'],
        [40, 170, 'trigger'],
        [160, 110, 'agent'],
        [280, 50, 'output'],
        [280, 170, 'store'],
      ].map(([x, y, l], i) => (
        <g key={i}>
          <rect x={x - 36} y={y - 18} width="72" height="36" rx="10" fill="rgba(255,255,255,0.85)" stroke="#111111" strokeWidth="1.2" />
          <text x={x} y={y + 4} fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="#111111">
            {l}
          </text>
        </g>
      ))}
      <circle cx="160" cy="110" r="34" fill="url(#wgrad)" stroke="#111111" strokeWidth="1.2" />
      <circle cx="160" cy="110" r="6" fill="#111111" className="pulse-dot" />
      <g stroke="#111111" strokeWidth="1.2" fill="none" strokeDasharray="2 3">
        <path d="M76 50 Q120 50 130 100" />
        <path d="M76 170 Q120 170 130 120" />
        <path d="M190 100 Q230 50 244 50" />
        <path d="M190 120 Q230 170 244 170" />
      </g>
    </svg>
  );
}

function AgentVisual() {
  return (
    <svg viewBox="0 0 320 220" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="agrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#BA2F58" />
          <stop offset="1" stopColor="#F88E4B" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="110" rx="120" ry="70" fill="none" stroke="#111111" strokeOpacity="0.5" strokeDasharray="3 5" />
      <ellipse cx="160" cy="110" rx="80" ry="46" fill="none" stroke="#111111" strokeOpacity="0.25" strokeDasharray="3 5" />
      <circle cx="160" cy="110" r="36" fill="url(#agrad)" stroke="#111111" strokeWidth="1.2" />
      <text x="160" y="105" fontSize="11" textAnchor="middle" fontFamily="JetBrains Mono, monospace">
        AGENT
      </text>
      <text x="160" y="120" fontSize="9" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fill="rgba(17,17,17,0.6)">
        v3.0
      </text>
      {[
        [40, 110],
        [280, 110],
        [160, 40],
        [160, 180],
        [250, 60],
        [70, 160],
      ].map(([x, y], i) => (
        <g key={i} className={i % 2 ? 'float-a' : 'float-b'}>
          <rect x={x - 12} y={y - 12} width="24" height="24" rx="6" fill="#fff" stroke="#111111" strokeWidth="1.2" />
          <circle cx={x} cy={y} r="3" fill="#111111" />
        </g>
      ))}
    </svg>
  );
}

export function Services() {
  return (
    <section className="section" id="services" data-screen-label="04 Services">
      <div className="wrap">
        <div className="services-grid fade-up">
          <ServiceCard
            tone="pink"
            tag="Track 01"
            title="Full-Stack Apps"
            desc="Production web + mobile applications. From schema to ship — typed, observable, and ready to grow."
          >
            <FullStackVisual />
          </ServiceCard>
          <ServiceCard
            tone="lav"
            tag="Track 02"
            title="AI Workflows"
            desc="LLM-powered pipelines that compress hours of human work into seconds. Designed for reliability, not demos."
          >
            <WorkflowVisual />
          </ServiceCard>
          <ServiceCard
            tone="sky"
            tag="Track 03"
            title="Autonomous Agents"
            desc="Goal-directed agents that plan, act, and self-correct across tools, APIs, and your own product surface."
          >
            <AgentVisual />
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
