import { Link } from 'react-router-dom';
import { Arrow, Eyebrow } from '@/components';

function FloaterShapes() {
  return (
    <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="fg1" x1="0" x2="1">
          <stop offset="0" stopColor="#FFD6B8" />
          <stop offset="1" stopColor="#F88E4B" />
        </linearGradient>
        <linearGradient id="fg2" x1="0" x2="1">
          <stop offset="0" stopColor="#F88E4B" />
          <stop offset="1" stopColor="#BA2F58" />
        </linearGradient>
      </defs>
      <g className="float-a">
        <rect x="120" y="120" width="80" height="80" rx="18" fill="url(#fg1)" stroke="#111111" strokeWidth="1" />
      </g>
      <g className="float-b">
        <rect x="1200" y="200" width="60" height="60" rx="14" fill="url(#fg2)" stroke="#111111" strokeWidth="1" />
      </g>
      <g className="float-c">
        <rect x="180" y="500" width="44" height="44" rx="10" fill="#FAF3EC" stroke="#111111" strokeWidth="1" />
      </g>
      <g className="float-a">
        <rect x="1260" y="540" width="100" height="100" rx="20" fill="url(#fg1)" stroke="#111111" strokeWidth="1" opacity="0.85" />
      </g>
      <g className="float-b">
        <circle cx="80" cy="380" r="10" fill="#111111" />
      </g>
      <g className="float-c">
        <circle cx="1380" cy="80" r="14" fill="#F6B0C7" stroke="#111111" strokeWidth="1" />
      </g>
    </svg>
  );
}

export function CTA() {
  return (
    <section className="cta-section" id="cta" data-screen-label="06 CTA">
      <div className="cta-floaters" aria-hidden="true">
        <FloaterShapes />
      </div>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <Eyebrow>06 / Engage</Eyebrow>
        <h2 className="fade-up" style={{ marginTop: 16 }}>
          Engineering
          <br />
          <span className="ital-gradient">intelligent</span> systems.
        </h2>
        <p className="cta-text fade-up">
          Ready to move beyond ordinary software? We design scalable products, AI-driven workflows,
          and autonomous agents that engage users, streamline operations, and turn bold ideas into
          lasting digital impact.
        </p>
        <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn btn-dark">
            Let&apos;s collaborate <Arrow />
          </Link>
          <a href="#case" className="btn btn-ghost">
            See recent work <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
