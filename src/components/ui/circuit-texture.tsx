export function CircuitTexture({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1200 800"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="url(#circuitGrad)" strokeWidth="1" opacity="0.35">
        <path d="M-50 650 L300 400 L600 500 L1000 200 L1300 350" />
        <path d="M-50 750 L250 550 L550 620 L900 380 L1300 500" />
        <path d="M100 -50 L350 250 L250 500 L500 800" />
        <path d="M900 -50 L850 250 L1100 450 L1050 800" />
      </g>
      <g fill="url(#circuitGrad)" opacity="0.6">
        <circle cx="300" cy="400" r="3.5" />
        <circle cx="600" cy="500" r="3.5" />
        <circle cx="1000" cy="200" r="3.5" />
        <circle cx="550" cy="620" r="3.5" />
        <circle cx="350" cy="250" r="3.5" />
        <circle cx="850" cy="250" r="3.5" />
        <circle cx="1100" cy="450" r="3.5" />
      </g>
      <defs>
        <linearGradient id="circuitGrad" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7b72ff" />
          <stop offset="100%" stopColor="#2fe0b0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
