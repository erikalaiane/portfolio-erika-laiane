/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import contactImg from '../assets/images/contact.webp'
import SectionHeader from '../components/SectionHeader'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mlgazoqn'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
}

const socialLinks = [
  { label: 'GitHub',    handle: '@erikalaiane',          url: 'https://github.com/erikalaiane',                  icon: 'https://cdn.simpleicons.org/github/ffffff',   color: '#c4b5fd' },
  { label: 'LinkedIn',  handle: 'erika-laiane-azevedo',  url: 'https://www.linkedin.com/in/erika-laiane-azevedo', icon: null, svg: <svg viewBox="0 0 24 24" width="13" height="13" fill="#38bdf8"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, color: '#38bdf8' },
  { label: 'Instagram', handle: '@laianerika',            url: 'https://www.instagram.com/laianerika/',            icon: 'https://cdn.simpleicons.org/instagram/f472b6', color: '#f472b6' },
  { label: 'Email',     handle: 'erikalaianeazevedo...', url: 'mailto:erikalaianeazevedosantos@gmail.com',         icon: 'https://cdn.simpleicons.org/gmail/fb923c',     color: '#fb923c' },
]

// Estados do formulário
const STATUS = {
  IDLE: 'idle',
  SENDING: 'sending',
  SUCCESS: 'success',
  ERROR: 'error',
}

export default function Contact() {
  const [status, setStatus] = useState(STATUS.IDLE)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [repoCount, setRepoCount] = useState(null)

  useEffect(() => {
    const token = import.meta.env.VITE_GITHUB_TOKEN
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    fetch('https://api.github.com/users/erikalaiane', { headers })
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) setRepoCount(data.public_repos) })
      .catch(() => {})
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(STATUS.SENDING)

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      })

      if (response.ok) {
        setStatus(STATUS.SUCCESS)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(STATUS.IDLE), 5000)
      } else {
        setStatus(STATUS.ERROR)
        setTimeout(() => setStatus(STATUS.IDLE), 4000)
      }
    } catch {
      setStatus(STATUS.ERROR)
      setTimeout(() => setStatus(STATUS.IDLE), 4000)
    }
  }

  const isSending = status === STATUS.SENDING
  const isSuccess = status === STATUS.SUCCESS
  const isError   = status === STATUS.ERROR

  return (
    <section
      id="contato"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'rgba(13,17,23,0.82)' }}
    >
      <div className="absolute top-8 left-0 right-0 text-center select-none pointer-events-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(80px, 18vw, 220px)',
          color: 'rgba(139,92,246,0.05)',
          letterSpacing: '0.1em', lineHeight: 1,
        }}>
        CONTATO
      </div>

      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.07)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(244,114,182,0.05)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader number="04" title="contato" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── COLUNA ESQUERDA — formulário ── */}
          <motion.div className="lg:col-span-7 flex flex-col gap-6"
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            <div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '10px', color: '#a78bfa',
                letterSpacing: '0.3em', textTransform: 'uppercase',
                fontWeight: 700, marginBottom: '12px',
              }}>✦ manda uma mensagem</div>
              <h3 style={{
                fontFamily: "'Abril Fatface', serif",
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: '#F5F3FF',  /* ✅ branco com tom roxo — mais suave que #fff puro */
                lineHeight: 1.05, marginBottom: '16px',
              }}>
                Vamos<br />
                <span style={{ color: '#a78bfa' }}>conversar</span>
                <span style={{ color: '#f472b6' }}>.</span>
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '15px',
                /* ✅ opacity 0.85 — muito mais legível que 0.75 */
                color: 'rgba(232,228,240,0.85)',
                lineHeight: '1.8', maxWidth: '420px',
              }}>
                Freela, estágio, collab ou só uma ideia louca sobre design e código —
                minha caixa de entrada está aberta. ✦
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'name',  label: 'Nome',  placeholder: 'Seu nome',      type: 'text'  },
                  { name: 'email', label: 'Email', placeholder: 'seu@email.com', type: 'email' },
                ].map((field) => (
                  <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '10px', color: '#c4b5fd',
                      letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700,
                    }}>{field.label}</label>
                    <input
                      type={field.type} name={field.name}
                      value={form[field.name]} onChange={handleChange}
                      placeholder={field.placeholder} required
                      disabled={isSending}
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(139,92,246,0.25)',
                        borderRadius: '6px', padding: '13px 16px',
                        /* ✅ cor do texto do input mais forte */
                        color: '#F0ECFF',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '14px', outline: 'none',
                        transition: 'border-color 0.25s, background 0.25s',
                        opacity: isSending ? 0.6 : 1,
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(167,139,250,0.7)'
                        e.target.style.background = 'rgba(139,92,246,0.08)'
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(139,92,246,0.25)'
                        e.target.style.background = 'rgba(255,255,255,0.04)'
                      }}
                    />
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '10px', color: '#c4b5fd',
                  letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700,
                }}>Mensagem</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Conta o que você tem em mente..."
                  required rows={6} disabled={isSending}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(139,92,246,0.25)',
                    borderRadius: '6px', padding: '13px 16px',
                    color: '#F0ECFF',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px', outline: 'none', resize: 'vertical',
                    transition: 'border-color 0.25s, background 0.25s',
                    lineHeight: '1.7',
                    opacity: isSending ? 0.6 : 1,
                  }}
                  onFocus={e => {
                    e.target.style.borderColor = 'rgba(167,139,250,0.7)'
                    e.target.style.background = 'rgba(139,92,246,0.08)'
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(139,92,246,0.25)'
                    e.target.style.background = 'rgba(255,255,255,0.04)'
                  }}
                />
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <button
                  type="submit"
                  disabled={isSending || isSuccess}
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '12px', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    border: '1.5px solid',
                    borderColor: isSuccess ? '#4ade80' : isError ? '#f87171' : '#8B5CF6',
                    padding: '15px 36px',
                    cursor: isSending ? 'not-allowed' : 'pointer',
                    background: isSuccess
                      ? 'rgba(74,222,128,0.15)'
                      : isError
                        ? 'rgba(248,113,113,0.12)'
                        : 'rgba(139,92,246,0.15)',
                    transition: 'all 0.3s', borderRadius: '4px',
                    opacity: isSending ? 0.7 : 1,
                  }}
                  onMouseEnter={e => {
                    if (!isSending && !isSuccess) {
                      e.currentTarget.style.background = 'rgba(139,92,246,0.3)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isSending && !isSuccess) {
                      e.currentTarget.style.background = 'rgba(139,92,246,0.15)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {isSending ? '✦ Enviando...' : isSuccess ? '✦ Enviado!' : isError ? 'Tentar novamente' : 'Enviar mensagem →'}
                </button>

                {isSuccess && (
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '12px', color: '#4ade80', fontWeight: 600,
                    letterSpacing: '0.1em', animation: 'fadeIn 0.3s ease',
                  }}>
                    Mensagem recebida! Respondo em breve ✦
                  </span>
                )}

                {isError && (
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '12px', color: '#f87171', fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}>
                    Algo deu errado. Tente novamente.
                  </span>
                )}
              </div>

              {/* ✅ Nota atualizada — sem mais referência ao mailto */}
              <p style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '10px',
                color: 'rgba(232,228,240,0.45)', /* ✅ mais legível que 0.3 */
                letterSpacing: '0.1em',
              }}>
                * Sua mensagem chega direto no meu email via Formspree. Respondo em até 48h.
              </p>
            </form>

            <div style={{ height: '1px', background: 'linear-gradient(to right, rgba(139,92,246,0.3), transparent)' }} />

            <div style={{
              padding: '24px',
              background: 'rgba(139,92,246,0.06)',
              border: '1px solid rgba(139,92,246,0.2)',
              borderLeft: '3px solid #a78bfa',
              borderRadius: '6px', position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: '-10px', right: '20px',
                fontFamily: 'Georgia, serif', fontSize: '80px',
                color: 'rgba(167,139,250,0.08)', lineHeight: 1, userSelect: 'none',
              }}>"</div>
              <p style={{
                fontFamily: "'Abril Fatface', serif", fontStyle: 'italic',
                fontSize: '18px', color: '#c4b5fd', lineHeight: '1.6', position: 'relative',
              }}>
                Programar é arte disfarçada de ciência.
              </p>
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '10px', color: 'rgba(232,228,240,0.5)', /* ✅ */
                letterSpacing: '0.2em', display: 'block', marginTop: '10px', fontWeight: 600,
              }}>— ÉRIKA LAIANE · RJ, 2025</span>
            </div>
          </motion.div>

          {/* ── COLUNA DIREITA ── */}
          <motion.div className="lg:col-span-5 flex flex-col gap-5"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full pointer-events-none"
                style={{ border: '1px solid rgba(139,92,246,0.25)', borderRadius: '8px' }} />
              <div className="relative overflow-hidden" style={{ borderRadius: '8px', aspectRatio: '4/5' }}>
                <img
                  src={contactImg}
                  alt="Érika Laiane"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                  style={{ filter: 'contrast(1.1) brightness(0.8) saturate(0.9)' }}
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, rgba(5,2,20,0.95) 0%, rgba(5,2,20,0.4) 45%, rgba(5,2,20,0.1) 100%)'
                }} />

                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2"
                  style={{
                    background: 'rgba(10,10,20,0.8)', backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(74,222,128,0.4)', borderRadius: '4px',
                  }}>
                  <span style={{
                    width: '7px', height: '7px', borderRadius: '50%',
                    background: '#4ade80', boxShadow: '0 0 8px #4ade80',
                    display: 'inline-block', animation: 'blink 2s ease-in-out infinite',
                  }} />
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '10px', color: '#4ade80',
                    letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700,
                  }}>Open to work</span>
                </div>

                <div className="absolute top-4 right-4 px-3 py-2"
                  style={{
                    background: 'rgba(10,10,20,0.8)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(167,139,250,0.4)', borderRadius: '4px',
                  }}>
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '10px', color: '#c4b5fd',
                    letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700,
                  }}>Front-End Dev</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '10px', color: '#a78bfa',
                    letterSpacing: '0.3em', textTransform: 'uppercase',
                    marginBottom: '8px', fontWeight: 700,
                  }}>Ao código</div>
                  <h2 style={{
                    fontFamily: "'Abril Fatface', serif",
                    fontSize: 'clamp(26px, 3.5vw, 40px)',
                    color: '#F5F3FF', /* ✅ */
                    lineHeight: 1.05,
                    textShadow: '0 2px 20px rgba(0,0,0,0.8)',
                  }}>
                    Vamos criar<br />
                    <span style={{ color: '#a78bfa' }}>algo juntos</span>
                    <span style={{ color: '#f472b6' }}>?</span>
                  </h2>

                  <div className="flex gap-5 mt-4">
                    {[
                      { num: repoCount !== null ? `${repoCount}+` : '...', label: 'repositórios' },
                      { num: '3+', label: 'ano dev' },
                      { num: '∞',  label: 'criatividade' },
                    ].map((s) => (
                      <div key={s.label}>
                        <div style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: '22px', color: '#ffffff', lineHeight: 1,
                          transition: 'opacity 0.3s',
                          opacity: s.num === '...' ? 0.4 : 1,
                        }}>{s.num}</div>
                        <div style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: '9px', color: 'rgba(196,181,253,0.8)', /* ✅ mais legível */
                          letterSpacing: '0.15em', textTransform: 'uppercase',
                        }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    padding: '14px 16px',
                    background: `${link.color}0d`,
                    border: `1px solid ${link.color}40`,
                    borderRadius: '6px',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'transform 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.borderColor = `${link.color}80`
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = `${link.color}40`
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    {link.svg ? link.svg : (
                      <img src={link.icon} alt={link.label}
                        style={{ width: '13px', height: '13px', objectFit: 'contain' }} />
                    )}
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '9px', color: link.color,
                      letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700,
                    }}>{link.label}</span>
                  </div>
                  <div style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px', color: '#F0ECFF', /* ✅ */
                    fontWeight: 600, lineHeight: 1.3,
                  }}>{link.handle}</div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        input::placeholder, textarea::placeholder {
          color: rgba(232,228,240,0.3); font-style: italic;
        }
        input:disabled, textarea:disabled {
          cursor: not-allowed;
        }
      `}</style>
    </section>
  )
}