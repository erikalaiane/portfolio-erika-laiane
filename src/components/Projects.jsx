/* eslint-disable no-unused-vars */
import { useRef } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Kira Nox',
    type: 'Sound Producer Portfolio',
    year: '2026',
    desc: 'Portfólio fictício de uma produtora musical experimental com design vintage, glassmorphism e carrosséis animados.',
    stack: ['React', 'Vite', 'Tailwind'],
    cover: '/src/assets/images/proj-kira.jpg',
    github: 'https://github.com/erikalaiane/kira-nox',
    demo: 'https://erikalaiane.github.io/kira-nox/',
  },
  {
    title: 'Acelera Club',
    type: 'Hub de Automobilismo',
    year: '2025',
    desc: 'Hub fictício de automobilismo do Rio de Janeiro com simuladores, marketplace e sistema de assinatura.',
    stack: ['React', 'Vite', 'Tailwind'],
    cover: '/src/assets/images/proj-acelera.jpg',
    github: 'https://github.com/erikalaiane/acelera-club',
    demo: 'https://erikalaiane.github.io/acelera-club/',
  },
  {
    title: 'Hofin Real Estate',
    type: 'Landing Page Minimalista',
    year: '2025',
    desc: 'Website imobiliário com estética minimalista e foco em tipografia e espaçamento.',
    stack: ['React', 'Tailwind'],
    cover: '/src/assets/images/proj-hofin.jpg',
    github: 'https://github.com/erikalaiane/hofin-real-estate-website',
    demo: null,
  },
  {
    title: 'Cards Layout',
    type: 'UI Experiment',
    year: '2025',
    desc: 'Experimento de layout com cards interativos e composição visual criativa.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    cover: '/src/assets/images/proj-cards.jpg',
    github: 'https://github.com/erikalaiane/card-layout',
    demo: null,
  },
  {
    title: 'Music Player',
    type: 'UI Component',
    year: '2025',
    desc: 'Player de música com interface customizada e animações suaves.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    cover: '/src/assets/images/proj-music.jpg',
    github: 'https://github.com/erikalaiane/music-player',
    demo: null,
  },
  {
    title: 'XG Gala Hero',
    type: 'Hero Section',
    year: '2025',
    desc: 'Hero section conceitual inspirada no álbum GALA do grupo XG.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    cover: '/src/assets/images/proj-xg.jpg',
    github: 'https://github.com/erikalaiane/xg-gala-hero',
    demo: null,
  },
  {
    title: 'StyleSync',
    type: 'Landing Page',
    year: '2025',
    desc: 'Landing page de moda com identidade visual forte e layout editorial.',
    stack: ['HTML', 'CSS'],
    cover: '/src/assets/images/proj-style.jpg',
    github: 'https://github.com/erikalaiane/stylesync-landing',
    demo: null,
  },
]

export default function Projects() {
  const trackRef = useRef(null)

  return (
    <section
      id="projetos"
      className="relative w-full overflow-hidden"
      style={{ background: '#111827' }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.06)' }}
      />

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
        PROJETOS
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="flex items-end justify-between mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px" style={{ background: '#8B5CF6' }} />
              <span
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: '11px',
                  color: 'rgba(167,139,250,0.8)',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                02 — works
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(40px, 6vw, 64px)',
                color: '#f8f4ff',
                letterSpacing: '0.05em',
                lineHeight: 1,
              }}
            >
              PROJETOS
            </h2>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '11px',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              Total
            </span>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '48px',
                color: '#8B5CF6',
                lineHeight: 1,
              }}
            >
              07
            </span>
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: '10px',
                color: 'rgba(255,255,255,0.3)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
              }}
            >
              Projetos
            </span>
          </div>
        </motion.div>

        <div className="flex items-center gap-3 mb-8">
          <span
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '10px',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
            }}
          >
            Passe o mouse para pausar
          </span>
          <span style={{ color: '#8B5CF6', fontSize: '12px' }}>→</span>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-5 pb-4 w-max"
          style={{ animation: 'projectsMarquee 55s linear infinite' }}
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {[...projects, ...projects].map((project, index) => (
            <div key={index} className="flex-shrink-0 group" style={{ width: '320px' }}>
              <div
                className="overflow-hidden transition-all duration-300 group-hover:scale-[1.02] flex flex-col"
                style={{
                  background: 'rgba(22,27,39,0.9)',
                  border: '0.5px solid rgba(139,92,246,0.2)',
                  borderRadius: '16px',
                  willChange: 'transform',
                  height: '460px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.5)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(139,92,246,0.12)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.2)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: '200px' }}>
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'rgba(11,11,15,0.4)' }}
                  />
                  <div
                    className="absolute top-3 left-3 px-2 py-1"
                    style={{
                      background: 'rgba(11,11,15,0.8)',
                      border: '0.5px solid rgba(139,92,246,0.4)',
                      backdropFilter: 'blur(8px)',
                      borderRadius: '4px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '9px',
                        color: '#a78bfa',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                      }}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: '24px',
                          color: '#f8f4ff',
                          letterSpacing: '0.05em',
                          lineHeight: 1,
                        }}
                      >
                        {project.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: '10px',
                          color: 'rgba(167,139,250,0.7)',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          fontWeight: 500,
                        }}
                      >
                        {project.year}
                      </span>
                    </div>
                    <span
                      className="group-hover:translate-x-1 transition-transform duration-300 inline-block"
                      style={{ color: '#8B5CF6', fontSize: '18px' }}
                    >
                      →
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '12px',
                      color: 'rgba(232,228,240,0.65)',
                      lineHeight: '1.7',
                      flex: 1,
                    }}
                  >
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: '9px',
                          color: '#a78bfa',
                          border: '0.5px solid rgba(139,92,246,0.3)',
                          padding: '3px 8px',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          borderRadius: '4px',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ height: '0.5px', background: 'rgba(139,92,246,0.15)' }} />

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: '10px',
                        color: '#a78bfa',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        fontWeight: 600,
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#c4b5fd')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#a78bfa')}
                    >
                      GitHub ↗
                    </a>
                    {project.demo && (
                      <>
                        <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '10px' }}>|</span>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontFamily: "'Courier New', monospace",
                            fontSize: '10px',
                            color: '#EC4899',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                            fontWeight: 600,
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#f472b6')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#EC4899')}
                        >
                          Demo ↗
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes projectsMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}