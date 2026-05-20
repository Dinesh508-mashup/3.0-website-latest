const FILLS = {
  peach: ['#FFE3CB', '#FFD6B8'],
  rose: ['#F8C2D2', '#F6B0C7'],
  cream: ['#FBE9D6', '#F4ECE3'],
  ink: ['#111111', '#1A1A1A'],
};

export function ImgPlaceholder({ label, height = 280, accent = 'peach' }) {
  const [a, b] = FILLS[accent] || FILLS.peach;
  const dark = accent === 'ink';
  return (
    <div
      className="img-ph"
      style={{
        height,
        background: `linear-gradient(160deg, ${a}, ${b})`,
        color: dark ? '#fff' : '#111111',
      }}
    >
      <svg
        className="img-ph-stripes"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {[...Array(20)].map((_, i) => (
          <line
            key={i}
            x1={i * 24}
            y1="0"
            x2={i * 24 - 60}
            y2="100"
            stroke={dark ? 'rgba(255,255,255,0.08)' : 'rgba(17,17,17,0.07)'}
            strokeWidth="14"
          />
        ))}
      </svg>
      <span className="img-ph-label font-mono">{label}</span>
    </div>
  );
}
