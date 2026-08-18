export function OrbitBackground({ className = "" }: { className?: string }) {
  const rings = [180, 300, 420, 540];
  const nodes = [
    { r: 180, angle: 35, size: 5 },
    { r: 180, angle: 200, size: 4 },
    { r: 300, angle: 100, size: 6 },
    { r: 300, angle: 250, size: 4 },
    { r: 420, angle: 15, size: 5 },
    { r: 420, angle: 160, size: 4 },
    { r: 540, angle: 60, size: 7 },
    { r: 540, angle: 300, size: 5 },
  ];

  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="orbit-spin relative h-[1100px] w-[1100px] shrink-0 -translate-y-1/3">
        <svg viewBox="-550 -550 1100 1100" className="h-full w-full overflow-visible">
          {rings.map((r) => (
            <circle
              key={r}
              cx="0"
              cy="0"
              r={r}
              fill="none"
              stroke="var(--border)"
              strokeWidth="1"
              opacity="0.6"
            />
          ))}
          {nodes.map((n, i) => {
            const rad = (n.angle * Math.PI) / 180;
            const cx = n.r * Math.cos(rad);
            const cy = n.r * Math.sin(rad);
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={n.size}
                fill={i % 2 === 0 ? "var(--primary)" : "var(--accent)"}
                opacity="0.85"
              />
            );
          })}
        </svg>
      </div>
      <style>{`
        .orbit-spin { animation: orbit-rotate 90s linear infinite; }
        @keyframes orbit-rotate { from { transform: translateY(-33%) rotate(0deg); } to { transform: translateY(-33%) rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .orbit-spin { animation: none; }
        }
      `}</style>
    </div>
  );
}
