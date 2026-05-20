// Neural-constellation orb cluster — replaces the prior pixel-block silhouette.
// Visual: central glowing core + two concentric rings of satellite nodes,
// connected by faint lines. Everything breathes, drifts, and flickers on
// staggered timings so the composition feels alive without being noisy.
//
// Export name preserved (PixelGradient) so existing imports in Hero.jsx
// continue to work unchanged.

const CX = 360;
const CY = 320;

const polar = (angleDeg, r) => {
  const a = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
};

const OUTER = [
  { angle: -90, r: 250 },
  { angle: -30, r: 250 },
  { angle: 30, r: 250 },
  { angle: 90, r: 250 },
  { angle: 150, r: 250 },
  { angle: 210, r: 250 },
];

const INNER = [
  { angle: -60, r: 140 },
  { angle: 30, r: 140 },
  { angle: 120, r: 140 },
  { angle: 210, r: 140 },
];

export function PixelGradient() {
  return (
    <div className="pixel-stage">
      <svg viewBox="0 0 720 640" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <radialGradient id="nc-core" cx="0.5" cy="0.5" r="0.55">
            <stop offset="0%" stopColor="#FFE5D2" />
            <stop offset="30%" stopColor="#F88E4B" />
            <stop offset="70%" stopColor="#BA2F58" />
            <stop offset="100%" stopColor="#5E1B3E" />
          </radialGradient>
          <radialGradient id="nc-node-warm" cx="0.4" cy="0.4" r="0.65">
            <stop offset="0%" stopColor="#FFD6B8" />
            <stop offset="55%" stopColor="#F88E4B" />
            <stop offset="100%" stopColor="#BA2F58" />
          </radialGradient>
          <radialGradient id="nc-node-cool" cx="0.4" cy="0.4" r="0.65">
            <stop offset="0%" stopColor="#F6B0C7" />
            <stop offset="55%" stopColor="#BA2F58" />
            <stop offset="100%" stopColor="#5E1B3E" />
          </radialGradient>
          <linearGradient id="nc-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F88E4B" stopOpacity="0" />
            <stop offset="50%" stopColor="#F88E4B" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#BA2F58" stopOpacity="0" />
          </linearGradient>
          <filter id="nc-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nc-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
        </defs>

        {/* Decorative orbits — slow counter-rotation */}
        <g className="nc-ring nc-ring-a" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          <circle cx={CX} cy={CY} r="280" fill="none" stroke="rgba(186,47,88,0.18)" strokeWidth="1" strokeDasharray="3 7" />
        </g>
        <g className="nc-ring nc-ring-b" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          <circle cx={CX} cy={CY} r="180" fill="none" stroke="rgba(248,142,75,0.16)" strokeWidth="1" strokeDasharray="2 6" />
        </g>

        {/* Connection lines — core → satellites, with traveling-dash pulse */}
        <g className="nc-lines">
          {OUTER.map((n, i) => {
            const p = polar(n.angle, n.r);
            return (
              <line
                key={`lo-${i}`}
                x1={CX}
                y1={CY}
                x2={p.x}
                y2={p.y}
                stroke="url(#nc-line)"
                strokeWidth="1.2"
                strokeDasharray="4 8"
                className="nc-line nc-line-out"
                style={{ animationDelay: `${i * 0.35}s` }}
              />
            );
          })}
          {INNER.map((n, i) => {
            const p = polar(n.angle, n.r);
            return (
              <line
                key={`li-${i}`}
                x1={CX}
                y1={CY}
                x2={p.x}
                y2={p.y}
                stroke="rgba(248,142,75,0.45)"
                strokeWidth="1.2"
                strokeDasharray="3 5"
                className="nc-line nc-line-in"
                style={{ animationDelay: `${0.15 + i * 0.25}s` }}
              />
            );
          })}
        </g>

        {/* Core orb — soft outer halo, mid body, inner highlight */}
        <g className="nc-core" style={{ transformOrigin: `${CX}px ${CY}px` }}>
          <circle cx={CX} cy={CY} r="120" fill="url(#nc-core)" opacity="0.32" filter="url(#nc-soft)" />
          <circle cx={CX} cy={CY} r="80" fill="url(#nc-core)" filter="url(#nc-glow)" />
          <circle cx={CX} cy={CY} r="52" fill="url(#nc-core)" />
          <circle cx={CX - 14} cy={CY - 16} r="18" fill="#FFE5D2" opacity="0.72" filter="url(#nc-soft)" />
        </g>

        {/* Inner ring of 4 nodes */}
        {INNER.map((n, i) => {
          const p = polar(n.angle, n.r);
          return (
            <g
              key={`in-${i}`}
              className={`nc-node nc-node-inner`}
              style={{ transformOrigin: `${p.x}px ${p.y}px`, animationDelay: `${i * 0.42}s` }}
            >
              <circle cx={p.x} cy={p.y} r="30" fill="url(#nc-node-warm)" opacity="0.28" filter="url(#nc-soft)" />
              <circle cx={p.x} cy={p.y} r="14" fill="url(#nc-node-warm)" />
              <circle cx={p.x - 3} cy={p.y - 3} r="4" fill="#FFE5D2" opacity="0.8" />
            </g>
          );
        })}

        {/* Outer ring of 6 nodes */}
        {OUTER.map((n, i) => {
          const p = polar(n.angle, n.r);
          const gradId = i % 2 === 0 ? 'nc-node-warm' : 'nc-node-cool';
          return (
            <g
              key={`on-${i}`}
              className="nc-node nc-node-outer"
              style={{ transformOrigin: `${p.x}px ${p.y}px`, animationDelay: `${0.18 + i * 0.55}s` }}
            >
              <circle cx={p.x} cy={p.y} r="26" fill={`url(#${gradId})`} opacity="0.22" filter="url(#nc-soft)" />
              <circle cx={p.x} cy={p.y} r="11" fill={`url(#${gradId})`} />
              <circle cx={p.x - 2} cy={p.y - 2} r="3" fill="#FFE5D2" opacity="0.85" />
            </g>
          );
        })}
      </svg>

      <style>{`
        /* ---- Core breath ---- */
        @keyframes ncCoreBreath {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.06); }
        }
        /* ---- Satellite drift (Y float + tiny scale) ---- */
        @keyframes ncNodeFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-6px) scale(1.06); }
        }
        /* ---- Soft random flicker (opacity heartbeat) ---- */
        @keyframes ncFlicker {
          0%, 100% { opacity: 1; }
          18%      { opacity: 0.75; }
          43%      { opacity: 1; }
          71%      { opacity: 0.6; }
          88%      { opacity: 0.95; }
        }
        /* ---- Slow orbit rotations ---- */
        @keyframes ncSpinCW  { to { transform: rotate(360deg); } }
        @keyframes ncSpinCCW { to { transform: rotate(-360deg); } }
        /* ---- Connection line travel — dash flowing toward core ---- */
        @keyframes ncDashFlow {
          0%   { stroke-dashoffset: 0;   stroke-opacity: 0.25; }
          50%                            { stroke-opacity: 0.65; }
          100% { stroke-dashoffset: -36; stroke-opacity: 0.25; }
        }

        .pixel-stage .nc-core {
          will-change: transform;
          animation: ncCoreBreath 4.4s ease-in-out infinite;
        }
        .pixel-stage .nc-node {
          will-change: transform, opacity;
          animation:
            ncNodeFloat 6s ease-in-out infinite,
            ncFlicker   4.6s ease-in-out infinite;
        }
        .pixel-stage .nc-node-inner { animation-duration: 5s, 3.8s; }
        .pixel-stage .nc-ring-a {
          will-change: transform;
          animation: ncSpinCW 42s linear infinite;
        }
        .pixel-stage .nc-ring-b {
          will-change: transform;
          animation: ncSpinCCW 32s linear infinite;
        }
        .pixel-stage .nc-line {
          animation: ncDashFlow 3.6s ease-in-out infinite;
        }
        .pixel-stage .nc-line-in { animation-duration: 2.8s; }

        /* Calm motion for users who request it */
        @media (prefers-reduced-motion: reduce) {
          .pixel-stage .nc-core,
          .pixel-stage .nc-node,
          .pixel-stage .nc-ring-a,
          .pixel-stage .nc-ring-b,
          .pixel-stage .nc-line { animation: none; }
        }
      `}</style>
    </div>
  );
}
