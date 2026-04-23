export default function SectionHeader({ number, title, counter }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span style={{
        fontFamily: "'Courier New', monospace",
        fontSize: '11px',
        color: 'rgba(167,139,250,0.8)',
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}>
        ✦ {number} —
      </span>
      <span style={{
        fontFamily: "'Courier New', monospace",
        fontSize: '11px',
        color: 'rgba(167,139,250,0.8)',
        letterSpacing: '0.4em',
        textTransform: 'uppercase',
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}>
        {title}
      </span>

      <div style={{ flex: 1, height: '0.5px', background: 'rgba(139,92,246,0.25)' }} />

      {/* ✅ Contador — só aparece quando counter for passado */}
      {counter && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', whiteSpace: 'nowrap' }}>
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '32px',
            color: 'rgba(139,92,246,0.5)',
            lineHeight: 1,
            letterSpacing: '0.05em',
          }}>{counter}</span>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '9px',
            color: 'rgba(167,139,250,0.4)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>total repos</span>
        </div>
      )}
    </div>
  )
}