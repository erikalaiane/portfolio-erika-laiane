export default function Footer() {
  const year = new Date().getFullYear()

  const navLinks = [
    { label: 'Sobre',    href: '#sobre'    },
    { label: 'GitHub',   href: '#github'   },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Contato',  href: '#contato'  },
  ]

  const socialLinks = [
    { label: 'GitHub',    handle: '@erikalaiane',         href: 'https://github.com/erikalaiane'                  },
    { label: 'LinkedIn',  handle: 'erika-laiane-azevedo', href: 'https://www.linkedin.com/in/erika-laiane-azevedo' },
    { label: 'Instagram', handle: '@laianerika',           href: 'https://www.instagram.com/laianerika/'           },
    { label: 'Email',     handle: 'disponível',            href: 'mailto:erikalaianeazevedosantos@gmail.com'       },
  ]

  return (
    <footer style={{ background: '#080810', overflow: 'hidden' }}>

      {/* ── NOME CENTRAL ── */}
      <div style={{
        borderTop: '0.5px solid rgba(139,92,246,0.2)',
        padding: '48px 48px 32px',
        textAlign: 'center',
        position: 'relative',
      }}>

        {/* Ghost text */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(60px, 12vw, 130px)',
          fontWeight: 700,
          color: 'rgba(139,92,246,0.04)',
          letterSpacing: '-3px',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
        }}>
          ÉRIKA LAIANE
        </div>

        {/* Estrelinhas direita */}
        <div style={{ position: 'absolute', top: '20px', right: '48px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ color: '#8B5CF6', fontSize: '9px', opacity: 0.3, animation: 'ftTwinkle 3s ease-in-out 1s infinite' }}>✦</span>
          <span style={{ color: '#8B5CF6', fontSize: '13px', opacity: 0.5, animation: 'ftTwinkle 3s ease-in-out 0s infinite' }}>✦</span>
          <span style={{ color: '#EC4899', fontSize: '9px', opacity: 0.3, animation: 'ftTwinkle 3s ease-in-out 2s infinite' }}>✦</span>
        </div>

        {/* Estrelinhas esquerda */}
        <div style={{ position: 'absolute', top: '20px', left: '48px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span style={{ color: '#EC4899', fontSize: '9px', opacity: 0.3, animation: 'ftTwinkle 3s ease-in-out 2s infinite' }}>✦</span>
          <span style={{ color: '#8B5CF6', fontSize: '13px', opacity: 0.5, animation: 'ftTwinkle 3s ease-in-out 0s infinite' }}>✦</span>
          <span style={{ color: '#8B5CF6', fontSize: '9px', opacity: 0.3, animation: 'ftTwinkle 3s ease-in-out 1s infinite' }}>✦</span>
        </div>

        {/* Nome */}
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(48px, 8vw, 88px)',
          fontWeight: 700,
          color: '#F0EAD6',
          lineHeight: 1,
          letterSpacing: '-2px',
          position: 'relative',
          zIndex: 2,
        }}>
          ÉRIKA <span style={{ color: '#8B5CF6' }}>LAIANE</span>
        </div>

        {/* Tagline */}
        <div style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '4px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
          marginTop: '12px',
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}>
          <span style={{ display: 'block', width: '24px', height: '0.5px', background: '#8B5CF6' }} />
          Front-End Developer · Creative Dev · Rio de Janeiro
          <span style={{ display: 'block', width: '24px', height: '0.5px', background: '#8B5CF6' }} />
        </div>

        {/* Status pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          border: '0.5px solid rgba(74,222,128,0.3)',
          borderRadius: '999px',
          marginTop: '16px',
          position: 'relative',
          zIndex: 2,
        }}>
          <span style={{
            width: '6px', height: '6px',
            borderRadius: '50%',
            background: '#4ade80',
            boxShadow: '0 0 6px #4ade80',
            animation: 'ftBlink 2s ease-in-out infinite',
            display: 'block', flexShrink: 0,
          }} />
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase',
            color: '#4ade80',
          }}>Open to work</span>
        </div>
      </div>

      {/* ── DIVISOR ── */}
      <div style={{ margin: '0 48px', height: '0.5px', background: 'rgba(139,92,246,0.12)' }} />

      {/* ── TRÊS COLUNAS CENTRALIZADAS ── */}
      <div style={{
        padding: '32px 48px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
        maxWidth: '800px',
        margin: '0 auto',
      }}>

        {/* Navegação */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '9px', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(139,92,246,0.6)',
            marginBottom: '14px',
          }}>✦ Navegação</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  letterSpacing: '1px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#F0EAD6'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Redes */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '9px', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(139,92,246,0.6)',
            marginBottom: '14px',
          }}>✦ Redes</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.3)',
                  textDecoration: 'none',
                  letterSpacing: '0.5px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#8B5CF6'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
              >
                {link.handle}
              </a>
            ))}
          </div>
        </div>

        {/* Filosofia */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '9px', fontWeight: 700,
            letterSpacing: '3px', textTransform: 'uppercase',
            color: 'rgba(139,92,246,0.6)',
            marginBottom: '14px',
          }}>✦ Filosofia</div>
          <p style={{
            fontFamily: "'Abril Fatface', serif",
            fontStyle: 'italic',
            fontSize: '13px',
            color: 'rgba(167,139,250,0.5)',
            lineHeight: 1.7,
          }}>
            "Programar é arte<br />disfarçada de ciência."
          </p>
        </div>
      </div>

      {/* ── DIVISOR ── */}
      <div style={{ margin: '0 48px', height: '0.5px', background: 'rgba(139,92,246,0.12)' }} />

      {/* ── RODAPÉ FINAL ── */}
      <div style={{
        padding: '16px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
      }}>
        <span style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.1)',
        }}>
          © {year} <span style={{ color: 'rgba(139,92,246,0.4)' }}>Érika Laiane</span> · Todos os direitos reservados
        </span>
        <span style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '10px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          Feito com <span style={{ color: 'rgba(236,72,153,0.4)' }}>♥</span> e React · RJ, Brasil
        </span>
      </div>

      <style>{`
        @keyframes ftBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        @keyframes ftTwinkle {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 0.8; }
        }
      `}</style>
    </footer>
  )
}