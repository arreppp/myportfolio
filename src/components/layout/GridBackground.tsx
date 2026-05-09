export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Perspective grid SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="gridFade" cx="50%" cy="60%" r="70%">
            <stop offset="0%"   stopColor="#00e5ff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Horizontal perspective lines converging at vanishing point (720, 420) */}
        {Array.from({ length: 18 }, (_, i) => {
          const y = 420 + (i - 9) * 60
          return (
            <line
              key={`h${i}`}
              x1="0" y1={y}
              x2="1440" y2={y}
              stroke="#00e5ff"
              strokeWidth="0.5"
              strokeOpacity={0.06 + Math.abs(i - 9) * 0.005}
            />
          )
        })}

        {/* Vertical perspective lines converging at vanishing point */}
        {Array.from({ length: 24 }, (_, i) => {
          const x = (i / 23) * 1440
          return (
            <line
              key={`v${i}`}
              x1={720} y1={420}
              x2={x}   y2={900}
              stroke="#00e5ff"
              strokeWidth="0.5"
              strokeOpacity="0.08"
            />
          )
        })}

        {/* Horizon glow */}
        <line
          x1="0" y1="420"
          x2="1440" y2="420"
          stroke="#00e5ff"
          strokeWidth="1"
          strokeOpacity="0.2"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.1;0.35;0.1"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>

        <rect x="0" y="0" width="1440" height="900" fill="url(#gridFade)" />
      </svg>

      {/* Subtle flat grid overlay */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-40"
        style={{ backgroundSize: '40px 40px' }}
      />
    </div>
  )
}
