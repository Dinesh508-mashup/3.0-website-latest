import { Link } from 'react-router-dom';
import { Arrow, Eyebrow } from '@/components';

function FloaterShapesShell() {
  return (
    <svg viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="sfg1" x1="0" x2="1">
          <stop offset="0" stopColor="#FFD6B8" />
          <stop offset="1" stopColor="#F88E4B" />
        </linearGradient>
        <linearGradient id="sfg2" x1="0" x2="1">
          <stop offset="0" stopColor="#F88E4B" />
          <stop offset="1" stopColor="#BA2F58" />
        </linearGradient>
      </defs>
      <g className="float-a">
        <rect x="120" y="120" width="80" height="80" rx="18" fill="url(#sfg1)" stroke="#111111" strokeWidth="1" />
      </g>
      <g className="float-b">
        <rect x="1200" y="200" width="60" height="60" rx="14" fill="url(#sfg2)" stroke="#111111" strokeWidth="1" />
      </g>
      <g className="float-c">
        <rect x="180" y="500" width="44" height="44" rx="10" fill="#FAF3EC" stroke="#111111" strokeWidth="1" />
      </g>
      <g className="float-a">
        <rect x="1260" y="540" width="100" height="100" rx="20" fill="url(#sfg1)" stroke="#111111" strokeWidth="1" opacity="0.85" />
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

function ActionLink({ action, dark }) {
  if (!action) return null;
  const cls = dark ? 'btn btn-dark' : 'btn btn-ghost';
  const isExternal = /^(mailto:|tel:|https?:|#)/.test(action.href);
  if (isExternal) {
    return (
      <a href={action.href} className={cls}>
        {action.label} <Arrow />
      </a>
    );
  }
  return (
    <Link to={action.href} className={cls}>
      {action.label} <Arrow />
    </Link>
  );
}

export function PageCTA({
  kicker = 'Engage',
  title,
  italic,
  sub,
  primary = { href: '/contact', label: "Let's collaborate" },
  secondary = { href: '/portfolio', label: 'See recent work' },
}) {
  return (
    <section className="cta-section page-cta" data-screen-label="CTA">
      <div className="cta-floaters" aria-hidden="true">
        <FloaterShapesShell />
      </div>
      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <Eyebrow>{kicker}</Eyebrow>
        <h2 className="fade-up" style={{ marginTop: 16 }}>
          {title}
          <br />
          {italic ? <span className="ital-gradient">{italic}</span> : null}
        </h2>
        {sub ? <p className="cta-text fade-up">{sub}</p> : null}
        <div
          className="fade-up"
          style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}
        >
          <ActionLink action={primary} dark />
          <ActionLink action={secondary} dark={false} />
        </div>
      </div>
    </section>
  );
}
