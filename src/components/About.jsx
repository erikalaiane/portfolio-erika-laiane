/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import aboutImg from '../assets/images/about.jpg'
import SectionHeader from '../components/SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  })
}

const skills = [
  { name: 'React',       icon: 'https://cdn.simpleicons.org/react/61DAFB',             area: 'Front-End'   },
  { name: 'JavaScript',  icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',        area: 'Front-End'   },
  { name: 'HTML5',       icon: 'https://cdn.simpleicons.org/html5/E34F26',             area: 'Front-End'   },
  { name: 'CSS3',        icon: null,    svg: <svg viewBox="0 0 24 24" width="16" height="16" fill="#1572B6"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.413l.213 2.622 10.125 0-.255 2.716-6.64 0 .24 2.573 6.182 0-.366 3.523-3.9 1.033-3.38-.937-.235-2.621-2.44 0 .5 5.045 5.57 1.622 5.64-1.626.78-7.63z"/></svg>,
  area: 'Front-End'},
  { name: 'Tailwind',    icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',       area: 'Front-End'   },
  { name: 'Python',      icon: 'https://cdn.simpleicons.org/python/3776AB',            area: 'Back-End'    },
  { name: 'MySQL',       icon: 'https://cdn.simpleicons.org/mysql/4479A1',             area: 'Back-End'    },
  { name: 'Git',         icon: 'https://cdn.simpleicons.org/git/F05032',               area: 'Ferramentas' },
  { name: 'GitHub',      icon: 'https://cdn.simpleicons.org/github/ffffff',            area: 'Ferramentas' },
  { name: 'Figma',       icon: 'https://cdn.simpleicons.org/figma/F24E1E',             area: 'Ferramentas' },
  { name: 'VS Code',     icon: null,  svg: <svg viewBox="0 0 24 24" width="16" height="16" fill="#007ACC"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.881V4.119a1.5 1.5 0 0 0-.85-1.532zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/></svg>,
  area: 'Ferramentas'},
  { name: 'Vite',        icon: 'https://cdn.simpleicons.org/vite/646CFF',              area: 'Ferramentas' },
]

const skillAreas = ['Front-End', 'Back-End', 'Ferramentas']

const areaColors = {
  'Front-End':   '#a78bfa',
  'Back-End':    '#38bdf8',
  'Ferramentas': '#f472b6',
}

const experience = [
  {
    year: '2024 – atual',
    role: 'Dev Front-End Jr · Freelancer',
    desc: 'Aplicações web com React.js e Tailwind. Componentes reutilizáveis, código limpo, versionamento com Git.',
    tag: 'Freelance',
    color: '#a78bfa',
  },
  {
    year: '2024',
    role: 'Back-End Acadêmico',
    desc: 'APIs REST em Python, operações CRUD com SQL, integração front-end e back-end.',
    tag: 'Acadêmico',
    color: '#38bdf8',
  },
]

const education = [
  {
    year: '2024 – 2026',
    course: 'Análise e Desenvolvimento de Sistemas',
    place: 'UNICARIOCA · Rio de Janeiro',
    icon: '🎓',
  },
]

const facts = [
  { label: '📍 Localização',       value: 'Rio de Janeiro' },
  { label: '🎯 Foco',       value: 'Front-End + UI' },
  { label: '✦ Status',     value: 'Open to work', highlight: true },
  { label: '⏱ Disponível', value: '40h · Remoto' },
]

const interests = [
  { icon: '🎨', label: 'Pintura & Ilustração' },
  { icon: '🏎️', label: 'Fórmula 1' },
  { icon: '💻', label: 'UI Design' },
  { icon: '📚', label: 'Leitura' },
  { icon: '🎬', label: 'Filmes' },
  { icon: '🎵', label: 'Música' },
]

function SectionLabel({ children }) {
  return (
    <div style={{
      fontFamily: "'Courier New', monospace",
      fontSize: '10px', color: 'rgba(167,139,250,0.6)',
      letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px'
    }}>{children}</div>
  )
}

export default function About() {
  return (
    <section
      id="sobre"
      className="relative pt-12 pb-9 px-6 overflow-hidden"
      style={{ background: 'rgba(17,24,39,0.82)' }}
    >
      {/* Título editorial gigante no fundo */}
      <div
        className="absolute top-8 left-0 right-0 text-center select-none pointer-events-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(80px, 18vw, 220px)',
          color: 'rgba(139,92,246,0.04)',
          letterSpacing: '0.1em',
          lineHeight: 1,
        }}
      >
        SOBRE MIM
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Cabeçalho da seção */}
       <SectionHeader number="01" title="sobre" />

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── COLUNA ESQUERDA ── */}
          <motion.div
            className="lg:col-span-4 flex flex-col gap-5"
            variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            {/* Imagem com moldura */}
            <div className="relative">
              <div
                className="absolute -top-3 -left-3 w-full h-full pointer-events-none"
                style={{ border: '1px solid rgba(139,92,246,0.2)', borderRadius: '4px' }}
              />
              <div className="relative overflow-hidden" style={{ borderRadius: '4px', aspectRatio: '3/4' }}>
                <img
                  src={aboutImg}
                  alt="Érika Laiane"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.05) brightness(0.88)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(10,5,30,0.75) 0%, transparent 55%)' }}
                />
                <div
                  className="absolute bottom-4 left-4 right-4"
                  style={{
                    background: 'rgba(139,92,246,0.15)',
                    backdropFilter: 'blur(12px)',
                    border: '0.5px solid rgba(139,92,246,0.35)',
                    borderRadius: '4px',
                    padding: '10px 14px',
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span style={{
                      width: '7px', height: '7px', borderRadius: '50%',
                      background: '#4ade80', boxShadow: '0 0 8px #4ade80',
                      display: 'inline-block', animation: 'blink 2s ease-in-out infinite',
                    }} />
                    <span style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '10px', color: 'rgba(255,255,255,0.9)',
                      letterSpacing: '0.2em', textTransform: 'uppercase'
                    }}>Open to work</span>
                  </div>
                  <div style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '9px', color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.1em', marginTop: '4px'
                  }}>📍 Rio de Janeiro · Remoto</div>
                </div>
              </div>
            </div>

            {/* Tags soft skills */}
            <div className="flex flex-wrap gap-2">
              {['Criativa', 'Proativa', 'Autodidata', 'Team player'].map((tag) => (
                <span key={tag} style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '11px', fontWeight: 600,
                  color: '#c4b5fd',
                  border: '1px solid rgba(139,92,246,0.45)',
                  background: 'rgba(139,92,246,0.08)',
                  padding: '5px 12px', borderRadius: '2px',
                  letterSpacing: '0.1em',
                }}>#{tag}</span>
              ))}
            </div>

            {/* Facts */}
            <div style={{
              background: 'rgba(139,92,246,0.04)',
              border: '0.5px solid rgba(139,92,246,0.2)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              {facts.map((f, i) => (
                <div key={f.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '12px 16px',
                  borderBottom: i < facts.length - 1 ? '0.5px solid rgba(139,92,246,0.12)' : 'none',
                }}>
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '10px', color: 'rgba(167,139,250,0.6)',
                    letterSpacing: '0.15em', textTransform: 'uppercase'
                  }}>{f.label}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    color: f.highlight ? '#4ade80' : 'rgba(232,228,240,0.85)',
                    fontWeight: f.highlight ? 600 : 400,
                  }}>{f.value}</span>
                </div>
              ))}
            </div>

            {/* Links sociais */}
            <div className="flex flex-col gap-2">
              {[
                { label: 'GitHub',   url: 'https://github.com/erikalaiane' },
                { label: 'LinkedIn', url: 'https://www.linkedin.com/in/erika-laiane-azevedo' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '11px 14px',
                    background: 'rgba(139,92,246,0.04)',
                    border: '0.5px solid rgba(139,92,246,0.2)',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'border-color 0.25s, background 0.25s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'
                    e.currentTarget.style.background = 'rgba(139,92,246,0.1)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                    e.currentTarget.style.background = 'rgba(139,92,246,0.04)'
                  }}
                >
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '11px', fontWeight: 600,
                    color: '#c4b5fd',
                    letterSpacing: '0.15em', textTransform: 'uppercase'
                  }}>{link.label}</span>
                  <span style={{ color: 'rgba(167,139,250,0.6)', fontSize: '14px' }}>↗</span>
                </a>
              ))}
            </div>

            {/* Interesses */}
            <div style={{
              background: 'rgba(139,92,246,0.04)',
              border: '0.5px solid rgba(139,92,246,0.2)',
              borderRadius: '4px',
              padding: '16px',
            }}>
              <SectionLabel>✦ interesses Pessoais</SectionLabel>
              <div className="grid grid-cols-2 gap-2">
                {interests.map((item) => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 12px',
                    background: 'rgba(139,92,246,0.06)',
                    border: '0.5px solid rgba(139,92,246,0.15)',
                    borderRadius: '4px',
                  }}>
                    <span style={{ fontSize: '16px', lineHeight: 1 }}>{item.icon}</span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '11px', color: 'rgba(232,228,240,0.75)',
                      lineHeight: 1.3,
                    }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── COLUNA DIREITA ── */}
          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* Nome + bio */}
            <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 style={{
                fontFamily: "'Abril Fatface', serif",
                fontSize: 'clamp(36px, 5.5vw, 68px)',
                color: '#f8f4ff', lineHeight: 1.05, marginBottom: '18px',
              }}>
                Olá, eu sou<br />
                <span style={{ color: '#a78bfa' }}>Érika Laiane</span>
                <span style={{ color: 'rgba(167,139,250,0.4)' }}>.</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <p style={{ fontSize: '14px', color: 'rgba(232,228,240,0.7)', lineHeight: '1.9', fontFamily: "'Inter', sans-serif" }}>
                  Estudante de{' '}
                  <strong style={{ color: '#f0ecff', fontWeight: 600 }}>Análise e Desenvolvimento de Sistemas</strong>{' '}
                  com sede de aprender e criar. Desde cedo me dividi entre dois mundos — a{' '}
                  <em style={{ color: '#a78bfa' }}>arte</em>, com seus pincéis e paletas, e a{' '}
                  <em style={{ color: '#a78bfa' }}>tecnologia</em>, com sua lógica e possibilidades.
                  No Front-End encontrei o lugar onde os dois se encontram.
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(232,228,240,0.7)', lineHeight: '1.9', fontFamily: "'Inter', sans-serif" }}>
                  Acredito que uma boa interface não precisa escolher entre{' '}
                  <strong style={{ color: '#f0ecff', fontWeight: 600 }}>funcionar bem</strong>{' '}
                  e <strong style={{ color: '#f0ecff', fontWeight: 600 }}>ser bonita</strong>.
                  Cada projeto é uma tela em branco — e eu levo isso ao pé da letra.
                </p>
                <p style={{ fontSize: '14px', color: 'rgba(232,228,240,0.7)', lineHeight: '1.9', fontFamily: "'Inter', sans-serif" }}>
                  Baseada no{' '}
                  <strong style={{ color: '#f0ecff', fontWeight: 600 }}>Rio de Janeiro</strong>,
                  aberta a estágios, freelas e projetos criativos. Se você tem uma ideia com personalidade,
                  a gente tem muito a conversar. 🎨
                </p>
              </div>
            </motion.div>

            {/* ── SKILLS COM ÍCONES ── */}
            <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionLabel>✦ habilidades</SectionLabel>

              {/* Uma linha por área */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {skillAreas.map((area) => (
                  <div key={area}>
                    {/* Label da área com cor própria */}
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '10px', fontWeight: 700,
                      color: areaColors[area],
                      letterSpacing: '0.25em', textTransform: 'uppercase',
                      marginBottom: '8px',
                      display: 'flex', alignItems: 'center', gap: '8px',
                    }}>
                      <span style={{
                        display: 'inline-block', width: '20px', height: '1px',
                        background: areaColors[area], opacity: 0.6,
                      }} />
                      {area}
                    </div>

                    {/* Tags com ícone */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {skills.filter(s => s.area === area).map((s) => (
                        <div
                          key={s.name}
                          style={{
                            display: 'flex', alignItems: 'center', gap: '7px',
                            padding: '7px 14px',
                            background: 'rgba(139,92,246,0.06)',
                            border: `0.5px solid rgba(139,92,246,0.2)`,
                            borderRadius: '4px',
                            transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
                            cursor: 'default',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.borderColor = areaColors[area] + '80'
                            e.currentTarget.style.background = areaColors[area] + '14'
                            e.currentTarget.style.transform = 'translateY(-2px)'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                            e.currentTarget.style.background = 'rgba(139,92,246,0.06)'
                            e.currentTarget.style.transform = 'translateY(0)'
                          }}
                        >
                          {s.svg ? s.svg : (
                            <img
                              src={s.icon}
                              alt={s.name}
                              style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                            />
                          )}
                          <span style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '13px', fontWeight: 500,
                            color: 'rgba(232,228,240,0.85)',
                          }}>{s.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experiência */}
            <motion.div variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionLabel>✦ experiência</SectionLabel>
              <div className="flex flex-col gap-3">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '20px',
                      background: 'rgba(139,92,246,0.04)',
                      border: '0.5px solid rgba(139,92,246,0.15)',
                      borderLeft: `2px solid ${exp.color}`,
                      borderRadius: '4px',
                      transition: 'background 0.25s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.09)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(139,92,246,0.04)'}
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <span style={{ fontSize: '15px', fontWeight: 700, color: '#f0ecff', fontFamily: "'Inter', sans-serif" }}>
                        {exp.role}
                      </span>
                      <span style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '11px', fontWeight: 700,
                        color: exp.color,
                        background: `${exp.color}18`,
                        border: `1.5px solid ${exp.color}`,
                        padding: '4px 10px', borderRadius: '2px',
                        whiteSpace: 'nowrap', letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}>{exp.tag}</span>
                    </div>
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '10px', color: 'rgba(167,139,250,0.6)',
                      letterSpacing: '0.1em', marginBottom: '10px', fontWeight: 600,
                    }}>{exp.year}</div>
                    <div style={{ fontSize: '13px', color: 'rgba(232,228,240,0.75)', fontFamily: "'Inter', sans-serif", lineHeight: '1.7' }}>
                      {exp.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Educação */}
            <motion.div variants={fadeUp} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <SectionLabel>✦ educação</SectionLabel>
              {education.map((edu, i) => (
                <div key={i}
                  style={{
                    padding: '20px',
                    background: 'rgba(139,92,246,0.04)',
                    border: '0.5px solid rgba(139,92,246,0.15)',
                    borderLeft: '2px solid #f472b6',
                    borderRadius: '4px',
                    display: 'flex', gap: '16px', alignItems: 'flex-start',
                    transition: 'background 0.25s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(139,92,246,0.09)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(139,92,246,0.04)'}
                >
                  <span style={{ fontSize: '24px', lineHeight: 1, marginTop: '2px' }}>{edu.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#f0ecff', fontFamily: "'Inter', sans-serif", marginBottom: '4px' }}>
                      {edu.course}
                    </div>
                    <div style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: '10px', color: 'rgba(167,139,250,0.6)',
                      letterSpacing: '0.1em', marginBottom: '6px', fontWeight: 600,
                    }}>{edu.year}</div>
                    <div style={{ fontSize: '13px', color: 'rgba(232,228,240,0.75)', fontFamily: "'Inter', sans-serif" }}>
                      {edu.place}
                    </div>
                  </div>
                  <span style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '11px', fontWeight: 700,
                    color: '#f472b6',
                    background: 'rgba(244,114,182,0.1)',
                    border: '1.5px solid #f472b6',
                    padding: '4px 10px', borderRadius: '2px',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}>Em curso</span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
      `}</style>
    </section>
  )
}