/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const USERNAME = 'erikalaiane'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
}

const langColors = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  HTML:       '#E34F26',
  CSS:        '#1572B6',
  Python:     '#3776AB',
  Shell:      '#89e051',
  Vue:        '#42b883',
  default:    '#a78bfa',
}

function getLangColor(lang) {
  return langColors[lang] || langColors.default
}

function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: "'Courier New', monospace",
      fontSize: '10px', color: 'rgba(167,139,250,0.6)',
      letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px'
    }}>{children}</div>
  )
}

// ── ORBITAL ACTIVITY ─────────────────────────────────────
function OrbitalActivity({ contributions, repoCount, languages }) {
  const topLangs = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)

  const total = topLangs.reduce((s, [, v]) => s + v, 0)

  const ringDots = [
    { r: 45, angle: -90,  color: '#a78bfa', size: 8 },
    { r: 45, angle: 30,   color: '#a78bfa', size: 5, opacity: 0.5 },
    { r: 70, angle: 200,  color: '#EC4899', size: 8 },
    { r: 70, angle: -30,  color: '#a78bfa', size: 5, opacity: 0.5 },
    { r: 70, angle: 120,  color: '#a78bfa', size: 5, opacity: 0.5 },
    { r: 95, angle: -120, color: '#a78bfa', size: 5, opacity: 0.5 },
    { r: 95, angle: 60,   color: '#a78bfa', size: 8 },
    { r: 95, angle: 170,  color: '#EC4899', size: 5, opacity: 0.5 },
  ]

  function dotPos(r, angleDeg) {
    const rad = (angleDeg * Math.PI) / 180
    return { x: r * Math.cos(rad), y: r * Math.sin(rad) }
  }

  return (
    <div style={{
      padding: '28px',
      background: 'rgba(139,92,246,0.04)',
      border: '0.5px solid rgba(139,92,246,0.15)',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      height: '100%',
      boxSizing: 'border-box',
    }}>

      {/* Diagrama orbital SVG */}
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          fontFamily: "'Courier New', monospace",
          fontSize: '72px', fontWeight: 700,
          color: 'rgba(139,92,246,0.04)',
          letterSpacing: '0.05em',
          bottom: '-10px', left: '-4px',
          pointerEvents: 'none', lineHeight: 1,
          userSelect: 'none',
        }}>GH</div>

        <svg width="220" height="220" viewBox="-110 -110 220 220" style={{ overflow: 'visible' }}>
          {[45, 70, 95].map(r => (
            <circle key={r} cx="0" cy="0" r={r}
              fill="none"
              stroke="rgba(139,92,246,0.18)"
              strokeWidth="0.5"
            />
          ))}

          {ringDots.map((d, i) => {
            const { x, y } = dotPos(d.r, d.angle)
            return (
              <circle key={i}
                cx={x} cy={y} r={d.size / 2}
                fill={d.color}
                opacity={d.opacity ?? 1}
                style={{
                  filter: d.opacity ? 'none' : `drop-shadow(0 0 4px ${d.color}aa)`,
                }}
              />
            )
          })}

          <text x="38" y="-88"
            fontFamily="'Courier New', monospace"
            fontSize="8" fill="rgba(255,255,255,0.3)"
            letterSpacing="0.15em">
            {contributions ?? '—'} commits
          </text>
          <text x="-95" y="30"
            fontFamily="'Courier New', monospace"
            fontSize="8" fill="rgba(255,255,255,0.25)"
            letterSpacing="0.15em">
            último ano
          </text>

          <circle cx="0" cy="0" r="18"
            fill="rgba(139,92,246,0.15)"
            stroke="rgba(167,139,250,0.5)"
            strokeWidth="0.5"
          />
          <text x="0" y="5"
            textAnchor="middle"
            fontFamily="'Courier New', monospace"
            fontSize="13" fill="rgba(167,139,250,0.8)">
            ⌥
          </text>
        </svg>
      </div>

      {/* Stats numéricos — maiores */}
      <div style={{ display: 'flex', gap: '32px' }}>
        <div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '56px', color: '#a78bfa', lineHeight: 1,
            filter: 'drop-shadow(0 0 14px rgba(167,139,250,0.5))',
          }}>{contributions ?? '—'}</div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '10px', color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '4px',
          }}>Contribuições</div>
        </div>
        <div>
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '56px', color: '#EC4899', lineHeight: 1,
            filter: 'drop-shadow(0 0 14px rgba(236,72,153,0.5))',
          }}>{repoCount ?? '—'}</div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '10px', color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.25em', textTransform: 'uppercase', marginTop: '4px',
          }}>Repositórios</div>
        </div>
      </div>

      {/* Barra de linguagens */}
      {topLangs.length > 0 && (
        <div>
          <div style={{
            height: '4px', borderRadius: '2px',
            display: 'flex', overflow: 'hidden', gap: '2px',
            marginBottom: '12px',
          }}>
            {topLangs.map(([lang, bytes]) => (
              <div key={lang} style={{
                height: '100%',
                width: `${(bytes / total) * 100}%`,
                background: getLangColor(lang),
                borderRadius: '2px',
                flexShrink: 0,
              }} />
            ))}
            <div style={{
              flex: 1, height: '100%',
              background: langColors.default,
              borderRadius: '2px',
              opacity: 0.4,
            }} />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 18px' }}>
            {topLangs.map(([lang]) => (
              <div key={lang} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: getLangColor(lang), flexShrink: 0,
                  boxShadow: `0 0 4px ${getLangColor(lang)}80`,
                }} />
                <span style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.12em',
                }}>{lang}</span>
              </div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: langColors.default, flexShrink: 0, opacity: 0.4,
              }} />
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '11px', color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.12em',
              }}>outros</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── README SNIPPET ────────────────────────────────────────
function ReadmeSnippet() {
  return (
    <div style={{
      background: 'rgba(0,0,0,0.25)',
      border: '0.5px solid rgba(139,92,246,0.2)',
      borderRadius: '6px',
      overflow: 'hidden',
    }}>
      {/* Barra de título estilo editor */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '8px 14px',
        borderBottom: '0.5px solid rgba(139,92,246,0.15)',
        background: 'rgba(139,92,246,0.06)',
      }}>
        {['#EC4899', '#a78bfa', '#89e051'].map((c, i) => (
          <div key={i} style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: c, opacity: 0.7,
          }} />
        ))}
        <span style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '9px', color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.15em', marginLeft: '6px',
        }}>readme.md</span>
      </div>

      {/* Código com syntax highlight manual */}
      <pre style={{
        margin: 0, padding: '16px',
        fontFamily: "'Courier New', monospace",
        fontSize: '11px', lineHeight: '1.9',
        color: 'rgba(232,228,240,0.6)',
        overflowX: 'auto',
        whiteSpace: 'pre',
      }}>
        <span style={{ color: '#a78bfa' }}>const </span>
        <span style={{ color: '#c4b5fd' }}>erika</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}> = {'{'}</span>
        {'\n'}
        <span style={{ color: 'rgba(255,255,255,0.35)' }}>  pronouns</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>: </span>
        <span style={{ color: '#86efac' }}>"ela/dela"</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>,</span>
        {'\n'}
        <span style={{ color: 'rgba(255,255,255,0.35)' }}>  code</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>: </span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>['</span>
        <span style={{ color: '#86efac' }}>JavaScript</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>', '</span>
        <span style={{ color: '#86efac' }}>HTML</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>', '</span>
        <span style={{ color: '#86efac' }}>CSS</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>'],</span>
        {'\n'}
        <span style={{ color: 'rgba(255,255,255,0.35)' }}>  focus</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>: </span>
        <span style={{ color: '#86efac' }}>"Front-End com forte senso estético"</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>,</span>
        {'\n'}
        <span style={{ color: 'rgba(255,255,255,0.35)' }}>  passion</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>: </span>
        <span style={{ color: '#86efac' }}>"Unir criatividade artística com código"</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>,</span>
        {'\n'}
        <span style={{ color: 'rgba(255,255,255,0.35)' }}>  funFact</span>
        <span style={{ color: 'rgba(255,255,255,0.25)' }}>: </span>
        <span style={{ color: '#fde68a' }}>"Transformo pixels em experiências!"</span>
        {'\n'}
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>{'}'}</span>
      </pre>
    </div>
  )
}

function RepoCard({ repo, delay }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      variants={fadeUp} custom={delay} initial="hidden" whileInView="visible" viewport={{ once: true }}
      style={{
        display: 'flex', flexDirection: 'column', gap: '10px',
        padding: '18px',
        background: 'rgba(139,92,246,0.04)',
        border: '0.5px solid rgba(139,92,246,0.15)',
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'border-color 0.25s, background 0.25s, transform 0.25s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(139,92,246,0.45)'
        e.currentTarget.style.background = 'rgba(139,92,246,0.09)'
        e.currentTarget.style.transform = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'
        e.currentTarget.style.background = 'rgba(139,92,246,0.04)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '13px', fontWeight: 700,
          color: '#c4b5fd', letterSpacing: '0.05em',
        }}>{repo.name}</span>
        <span style={{ color: 'rgba(167,139,250,0.5)', fontSize: '14px' }}>↗</span>
      </div>

      <p style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '12px', color: 'rgba(232,228,240,0.55)',
        lineHeight: '1.6', flex: 1,
        display: '-webkit-box', WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>
        {repo.description || 'Sem descrição'}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {repo.language && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: getLangColor(repo.language),
              display: 'inline-block',
              boxShadow: `0 0 5px ${getLangColor(repo.language)}70`,
            }} />
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '10px', color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.1em',
            }}>{repo.language}</span>
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ color: '#a78bfa', fontSize: '11px' }}>✦</span>
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '10px', color: 'rgba(255,255,255,0.35)',
          }}>{repo.stargazers_count}</span>
        </div>
      </div>
    </motion.a>
  )
}

// ── COMPONENTE PRINCIPAL ──────────────────────────────────
export default function GitHubStats() {
  const [profile, setProfile]             = useState(null)
  const [repos, setRepos]                 = useState([])
  const [contributions, setContributions] = useState(null)
  const [languages, setLanguages]         = useState({})
  const [loading, setLoading]             = useState(true)

  useEffect(() => {
    async function fetchAll() {
      try {
        const profileRes = await fetch(`https://api.github.com/users/${USERNAME}`)
        const profileData = await profileRes.json()
        setProfile(profileData)

        const reposRes = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=30`
        )
        const reposData = await reposRes.json()
        const ownRepos = reposData.filter(r => !r.fork)
        setRepos(ownRepos.slice(0, 6))

        try {
          const langTotals = {}
          await Promise.all(
            ownRepos.slice(0, 15).map(async repo => {
              const res = await fetch(
                `https://api.github.com/repos/${USERNAME}/${repo.name}/languages`
              )
              const data = await res.json()
              Object.entries(data).forEach(([lang, bytes]) => {
                langTotals[lang] = (langTotals[lang] || 0) + bytes
              })
            })
          )
          setLanguages(langTotals)
        } catch (e) {
          console.warn('Languages API indisponível:', e)
        }

        try {
          const contribRes = await fetch(
            `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`
          )
          const contribData = await contribRes.json()
          const total =
            contribData.total?.lastYear ??
            contribData.total?.[new Date().getFullYear()] ??
            null
          if (total !== null) setContributions(total)
        } catch (e) {
          console.warn('Contributions API indisponível:', e)
        }

      } catch (err) {
        console.error('GitHub API error:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchAll()
  }, [])

  return (
    <section
      id="github"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: 'rgba(17,24,39,0.82)' }}
    >
      {/* Título editorial gigante no fundo */}
      <div
        className="absolute top-8 left-0 right-0 text-center select-none pointer-events-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(80px, 18vw, 220px)',
          color: 'rgba(139,92,246,0.04)',
          letterSpacing: '0.1em', lineHeight: 1,
        }}
      >
        GITHUB
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(236,72,153,0.05)' }} />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Cabeçalho */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <span style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '10px', color: 'rgba(167,139,250,0.7)',
            letterSpacing: '0.3em', textTransform: 'uppercase',
          }}>✦ 02 — github</span>
          <div style={{ flex: 1, height: '0.5px', background: 'rgba(139,92,246,0.2)' }} />
        </motion.div>

        {loading ? (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            fontFamily: "'Courier New', monospace",
            fontSize: '11px', color: 'rgba(167,139,250,0.5)',
            letterSpacing: '0.3em', textTransform: 'uppercase',
          }}>
            <span style={{ animation: 'pulse 1.5s ease-in-out infinite', color: '#a78bfa' }}>✦</span>
            Carregando dados do GitHub...
          </div>
        ) : (
          <div className="flex flex-col gap-12">

            {/* ── ORBITAL + PERFIL ── alinhados pela altura */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              alignItems: 'stretch',
            }}>

              {/* Orbital — coluna esquerda */}
              <motion.div
                variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <SectionLabel>✦ atividade · último ano</SectionLabel>
                <div style={{ flex: 1 }}>
                  <OrbitalActivity
                    contributions={contributions}
                    repoCount={profile?.public_repos}
                    languages={languages}
                  />
                </div>
              </motion.div>

              {/* Perfil — coluna direita */}
              <motion.div
                variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <SectionLabel>✦ perfil</SectionLabel>
                <div style={{
                  flex: 1,
                  padding: '28px',
                  background: 'rgba(139,92,246,0.04)',
                  border: '0.5px solid rgba(139,92,246,0.2)',
                  borderLeft: '2px solid #a78bfa',
                  borderRadius: '8px',
                  display: 'flex', flexDirection: 'column', gap: '18px',
                }}>

                  {/* Avatar + nome */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {profile?.avatar_url ? (
                      <img
                        src={profile.avatar_url}
                        alt={USERNAME}
                        style={{
                          width: '64px', height: '64px',
                          borderRadius: '50%',
                          border: '1.5px solid rgba(139,92,246,0.5)',
                          objectFit: 'cover',
                          flexShrink: 0,
                        }}
                      />
                    ) : (
                      <div style={{
                        width: '64px', height: '64px', borderRadius: '50%',
                        background: 'rgba(139,92,246,0.15)',
                        border: '1.5px solid rgba(139,92,246,0.4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '24px', color: '#a78bfa',
                        flexShrink: 0,
                      }}>EL</div>
                    )}
                    <div>
                      <div style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '28px', color: '#f8f4ff',
                        letterSpacing: '0.05em', lineHeight: 1,
                      }}>@erikalaiane</div>
                      <div style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '11px', color: 'rgba(232,228,240,0.5)',
                        lineHeight: '1.6', marginTop: '4px',
                      }}>
                        {profile?.bio || 'Front-end Developer · Creative Dev · Rio de Janeiro'}
                      </div>
                    </div>
                  </div>

                  {/* Meta */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {profile?.blog && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: '#a78bfa', fontSize: '11px' }}>✦</span>
                        <span style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                        }}>{profile.blog}</span>
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#EC4899', fontSize: '11px' }}>✦</span>
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                      }}>📍 {profile?.location || 'Rio de Janeiro'}</span>
                    </div>
                  </div>

                  {/* README snippet */}
                  <ReadmeSnippet />

                  {/* Botão */}
                  <a
                    href={`https://github.com/${USERNAME}`}
                    target="_blank"
                    rel="noreferrer"
                    className="relative group overflow-hidden"
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: "'Courier New', monospace",
                      fontSize: '10px', fontWeight: 700,
                      color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase',
                      textDecoration: 'none',
                      border: '0.5px solid #8B5CF6',
                      padding: '12px 24px',
                      marginTop: 'auto',
                    }}
                  >
                    <span className="absolute inset-0 bg-purple-main translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative">Ver GitHub ↗</span>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* ── REPOS RECENTES ── */}
            {repos.length > 0 && (
              <div>
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <SectionLabel>✦ repositórios recentes</SectionLabel>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {repos.map((repo, i) => (
                    <RepoCard key={repo.id} repo={repo} delay={i + 1} />
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}