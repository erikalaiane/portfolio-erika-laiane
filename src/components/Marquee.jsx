export default function Marquee() {
  const items = [
    'React', 'Tailwind CSS', 'Vite', 'JavaScript',
    'Node.js', 'Python', 'Figma', 'UI Design', 'Front-end', 'Creative Dev',
  ]

  const repeated = [...items, ...items, ...items, ...items] // 4x = -25%

  return (
    <div
      className="relative w-full overflow-hidden py-4"
      style={{
        borderTop: '0.5px solid rgba(139,92,246,0.15)',
        borderBottom: '0.5px solid rgba(139,92,246,0.15)',
        background: 'rgba(17,24,39,0.6)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* fade nas laterais */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #111827, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #111827, transparent)' }} />

      {/* TRACK */}
      <div className="flex items-center whitespace-nowrap w-max"
        style={{ animation: 'marqueeScroll 30s linear infinite' }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-body uppercase"
              style={{
                fontSize: '11px',
                color: 'rgba(232,228,240,0.35)',
                letterSpacing: '0.25em',
                padding: '0 20px',
              }}
            >
              {item}
            </span>
            <span
              style={{
                fontSize: '13px',
                color: i % 3 === 0 ? '#a78bfa' : 'rgba(255,255,255,0.2)',
                display: 'inline-block',
                animation: `starSpin ${2 + (i % 3)}s linear infinite`,
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        @keyframes starSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}