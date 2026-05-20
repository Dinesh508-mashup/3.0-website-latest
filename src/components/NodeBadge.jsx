export function NodeBadge({ num, size = 60, accent = false }) {
  return (
    <div className={`node-badge ${accent ? 'accent' : ''}`} style={{ width: size, height: size }}>
      <div className="nb-inner">
        <span className="nb-num">{num}</span>
      </div>
    </div>
  );
}
