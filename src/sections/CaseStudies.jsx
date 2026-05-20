import { Link } from 'react-router-dom';
import { Eyebrow } from '@/components';

function CaseVisualA() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--cream)', padding: 24 }}>
      <svg viewBox="0 0 360 240" style={{ width: '100%', height: '100%' }}>
        <rect x="20" y="20" width="180" height="200" rx="14" fill="#fff" stroke="#111111" strokeWidth="1.2" />
        <rect x="36" y="36" width="120" height="12" rx="3" fill="#111111" />
        <rect x="36" y="58" width="148" height="6" rx="2" fill="rgba(17,17,17,0.2)" />
        <rect x="36" y="72" width="100" height="6" rx="2" fill="rgba(17,17,17,0.2)" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(36, ${100 + i * 38})`}>
            <rect width="148" height="28" rx="6" fill="#FFD6B8" stroke="#111111" strokeWidth="1" />
            <circle cx="14" cy="14" r="5" fill="#111111" />
            <rect x="28" y="10" width="80" height="8" rx="2" fill="rgba(17,17,17,0.7)" />
          </g>
        ))}
        <rect x="220" y="20" width="120" height="100" rx="12" fill="#F88E4B" stroke="#111111" strokeWidth="1.2" className="float-a" />
        <rect x="240" y="40" width="60" height="8" rx="2" fill="#111111" />
        <rect x="240" y="56" width="80" height="6" rx="2" fill="rgba(17,17,17,0.5)" />
        <circle cx="280" cy="92" r="14" fill="#fff" stroke="#111111" strokeWidth="1" />
        <rect x="220" y="138" width="120" height="82" rx="12" fill="#111111" />
        <rect x="236" y="156" width="60" height="8" rx="2" fill="#fff" />
        <rect x="236" y="172" width="88" height="6" rx="2" fill="rgba(255,255,255,0.5)" />
        <rect x="236" y="192" width="60" height="20" rx="10" fill="#F6B0C7" />
      </svg>
    </div>
  );
}

function CaseVisualB() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#FBE9D6', padding: 24 }}>
      <svg viewBox="0 0 360 240" style={{ width: '100%', height: '100%' }}>
        <rect x="40" y="30" width="180" height="100" rx="12" fill="#fff" stroke="#111111" strokeWidth="1.2" className="float-b" />
        <rect x="58" y="48" width="60" height="60" rx="10" fill="#FFD6B8" stroke="#111111" strokeWidth="1" />
        <rect x="130" y="52" width="80" height="8" rx="2" fill="#111111" />
        <rect x="130" y="68" width="60" height="6" rx="2" fill="rgba(17,17,17,0.5)" />
        <rect x="130" y="82" width="44" height="16" rx="8" fill="#111111" />
        <g transform="translate(220, 60)" className="float-c">
          <rect width="120" height="160" rx="14" fill="#FAF3EC" stroke="#111111" strokeWidth="1.2" />
          {[...Array(20)].map((_, i) => {
            const x = (i % 5) * 22 + 10;
            const y = Math.floor(i / 5) * 22 + 10;
            const c = ['#F88E4B', '#F6B0C7', '#FFD6B8', '#111111'][i % 4];
            return <rect key={i} x={x} y={y} width="14" height="14" rx="3" fill={c} opacity={0.8} />;
          })}
        </g>
        <rect x="40" y="160" width="120" height="40" rx="20" fill="#fff" stroke="#111111" strokeWidth="1.2" />
        <circle cx="60" cy="180" r="6" fill="#111111" className="pulse-dot" />
        <rect x="76" y="174" width="60" height="6" rx="2" fill="#111111" />
        <rect x="76" y="184" width="40" height="6" rx="2" fill="rgba(17,17,17,0.5)" />
      </svg>
    </div>
  );
}

function CaseVisualC() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: 'var(--lav)', padding: 24 }}>
      <svg viewBox="0 0 360 240" style={{ width: '100%', height: '100%' }}>
        <defs>
          <linearGradient id="cgrad" x1="0" x2="1">
            <stop offset="0" stopColor="#F88E4B" />
            <stop offset="1" stopColor="#BA2F58" />
          </linearGradient>
        </defs>
        {[...Array(40)].map((_, i) => {
          const x = (i % 10) * 32 + 20;
          const y = Math.floor(i / 10) * 36 + 20;
          const show = Math.random() < 0.55;
          if (!show) return null;
          return <rect key={i} x={x} y={y} width="26" height="26" rx="7" fill="url(#cgrad)" opacity={0.85} />;
        })}
        <g transform="translate(60, 130)">
          <rect width="240" height="80" rx="14" fill="#fff" stroke="#111111" strokeWidth="1.2" />
          <rect x="18" y="18" width="18" height="18" rx="9" fill="#111111" />
          <rect x="44" y="20" width="180" height="6" rx="2" fill="#111111" />
          <rect x="44" y="32" width="140" height="6" rx="2" fill="rgba(17,17,17,0.4)" />
          <rect x="44" y="50" width="80" height="20" rx="10" fill="#F88E4B" stroke="#111111" strokeWidth="1" />
          <rect x="132" y="50" width="60" height="20" rx="10" fill="none" stroke="#111111" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

function CaseVisualD() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: '#111111', padding: 24 }}>
      <svg viewBox="0 0 360 240" style={{ width: '100%', height: '100%' }}>
        <rect x="20" y="20" width="320" height="40" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <circle cx="42" cy="40" r="6" fill="#F88E4B" className="pulse-dot" />
        <rect x="56" y="36" width="80" height="8" rx="2" fill="#fff" />
        <rect x="240" y="32" width="80" height="16" rx="8" fill="#F6B0C7" />
        <rect x="20" y="76" width="200" height="144" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
        <polyline points="32,200 60,170 90,180 120,140 150,160 180,110 210,130" fill="none" stroke="#F88E4B" strokeWidth="2" />
        <polyline points="32,210 60,195 90,200 120,175 150,180 180,150 210,165" fill="none" stroke="#FFD6B8" strokeWidth="2" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(232, ${76 + i * 36})`}>
            <rect width="108" height="28" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <rect x="10" y="10" width="36" height="8" rx="2" fill="#fff" opacity="0.8" />
            <rect x="60" y="8" width="38" height="12" rx="6" fill="#F88E4B" opacity="0.85" />
          </g>
        ))}
      </svg>
    </div>
  );
}

// `slug` matches the section id on /portfolio so deep-links scroll to the right case.
const CASES = [
  {
    id: 'BFSI',
    slug: 'bfsi',
    title: 'BFSI Skill Portal',
    meta: '2025 · Edtech · AI',
    desc: "A skilling platform for India's banking workforce — adaptive paths, in-app coaching, and assessment by an evaluator agent.",
    tags: ['LLM', 'Web', 'Assessment'],
    Visual: CaseVisualA,
  },
  {
    id: 'BCH',
    slug: 'blue-cross',
    title: 'Blue Cross Hyderabad',
    meta: '2024 · Healthcare · Ops',
    desc: "Operations OS for one of India's largest animal shelters — case intake, triage, donor flows, all unified.",
    tags: ['Full-Stack', 'Ops', 'Mobile'],
    Visual: CaseVisualB,
  },
  {
    id: 'FP',
    slug: 'fundpitch',
    title: 'FundPitch',
    meta: '2024 · Fintech · SaaS',
    desc: 'An AI deal-room for founders — pitch analysis, investor matching, and a writing copilot that actually understands your raise.',
    tags: ['Agents', 'RAG', 'SaaS'],
    Visual: CaseVisualC,
  },
  {
    id: 'VDTS',
    slug: 'vdts',
    title: 'VDTS',
    meta: '2023 · Mobility · AI',
    desc: 'Vehicle diagnostics + tracking system with on-device inference. Real-time fleet decisions where reception is patchy.',
    tags: ['Edge', 'IoT', 'Vision'],
    Visual: CaseVisualD,
  },
];

export function CaseStudies() {
  return (
    <section className="section" id="case" data-screen-label="05 Case Studies">
      <div className="wrap">
        <div className="section-head fade-up">
          <div>
            <Eyebrow>05 / Work</Eyebrow>
            <h2>Case studies</h2>
          </div>
          <div className="right">
            Four recent builds across fintech, healthcare, mobility and edtech — each one a
            different shape of &ldquo;AI inside a real product.&rdquo;
          </div>
        </div>

        <div className="cs-grid">
          {CASES.map((c, i) => (
            <Link
              className="cs-card fade-up"
              key={c.id}
              to={`/portfolio#${c.slug}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="frame">
                <c.Visual />
              </div>
              <div className="body">
                <div className="row1">
                  <span className="meta">{c.meta}</span>
                  <span className="meta">↗ Read</span>
                </div>
                <h3 className="h">{c.title}</h3>
                <p className="desc">{c.desc}</p>
                <div className="tags">
                  {c.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
