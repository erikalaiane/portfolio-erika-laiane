/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import projKira from '../assets/images/proj-kira.webp'
import projAcelera from '../assets/images/proj-acelera.webp'
import projHofin from '../assets/images/proj-hofin.webp'
import projCards from '../assets/images/proj-cards.webp'
import projMusic from '../assets/images/proj-music.webp'
import projXg from '../assets/images/proj-xg.webp'
import projStyle from '../assets/images/proj-style.webp'

const projects = [
  {
    title: 'Kira Nox',
    featured: true,
    type: 'Sound Producer Portfolio',
    year: '2026',
    desc: 'Interface imersiva com foco em identidade visual e experiência do usuário, explorando glassmorphism e tipografia expressiva.',
    longDesc: 'Projeto focado na construção de uma experiência visual marcante para uma produtora musical experimental. O design combina elementos vintage com glassmorphism moderno, utilizando animações, tipografia forte e composição estratégica para guiar o usuário e criar uma navegação envolvente.',
    stack: ['React', 'Vite', 'Tailwind'],
    cover: projKira,
    github: 'https://github.com/erikalaiane/kira-nox',
    demo: 'https://erikalaiane.github.io/kira-nox/',
  },
  {
    title: 'Acelera Club',
    featured: true,
    type: 'Automotive Experience Platform',
    year: '2025',
    desc: 'Plataforma com foco em experiência visual e organização de conteúdo inspirada no universo automobilístico.',
    longDesc: 'Projeto conceitual inspirado na Fórmula 1, com foco em hierarquia visual, contraste e organização de informações. A interface foi pensada para guiar o usuário por diferentes seções (eventos, marketplace e planos), utilizando uma estrutura modular e escalável.',
    stack: ['React', 'Vite', 'Tailwind'],
    cover: projAcelera,
    github: 'https://github.com/erikalaiane/acelera-club',
    demo: 'https://erikalaiane.github.io/acelera-club/',
  },
  {
    title: 'Hofin Real Estate',
    featured: false,
    type: 'Minimalist Landing Page',
    year: '2025',
    desc: 'Landing page com foco em tipografia, espaçamento e experiência visual limpa.',
    longDesc: 'Projeto focado em design minimalista para o setor imobiliário. A interface utiliza hierarquia tipográfica, espaçamento e cores neutras para transmitir confiança, clareza e sofisticação.',
    stack: ['React', 'Tailwind'],
    cover: projHofin,
    github: 'https://github.com/erikalaiane/hofin-real-estate-website',
    demo: null,
  },
  {
    title: 'Cards Layout',
    featured: false,
    type: 'UI Experiment',
    year: '2025',
    desc: 'Exploração de layouts dinâmicos com foco em microinterações e composição visual.',
    longDesc: 'Experimento de interface explorando diferentes composições de cards e interações. O projeto destaca microinterações, efeitos de hover e organização visual não convencional.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    cover: projCards,
    github: 'https://github.com/erikalaiane/card-layout',
    demo: null,
  },
  {
    title: 'Music Player',
    featured: false,
    type: 'UI Component',
    year: '2025',
    desc: 'Componente interativo com foco em animação e feedback visual.',
    longDesc: 'Player de música com interface customizada, incluindo animações suaves, barra de progresso e transições entre estados, focado em experiência do usuário.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    cover: projMusic,
    github: 'https://github.com/erikalaiane/music-player',
    demo: null,
  },
  {
    title: 'XG Gala Hero',
    featured: false,
    type: 'Hero Section',
    year: '2025',
    desc: 'Hero section com forte identidade visual e impacto estético.',
    longDesc: 'Projeto conceitual inspirado em estética futurista, com foco em tipografia marcante, efeitos visuais e composição dramática para causar impacto imediato.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    cover: projXg,
    github: 'https://github.com/erikalaiane/xg-gala-hero',
    demo: null,
  },
  {
    title: 'StyleSync',
    featured: false,
    type: 'Fashion Landing Page',
    year: '2025',
    desc: 'Landing page com estética editorial e composição visual ousada.',
    longDesc: 'Projeto voltado para identidade visual forte no segmento de moda. Explora assimetria, tipografia expressiva e cores contrastantes para criar uma presença marcante.',
    stack: ['HTML', 'CSS'],
    cover: projStyle,
    github: 'https://github.com/erikalaiane/stylesync-landing',
    demo: null,
  },
]

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(7,9,15,0.85)', backdropFilter: 'blur(12px)' }}
        />

        <motion.div
          className="relative z-10 w-full overflow-hidden"
          style={{
            maxWidth: '760px',
            background: 'rgba(17,24,39,0.98)',
            border: '0.5px solid rgba(139,92,246,0.3)',
            borderRadius: '20px',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden" style={{ height: '320px' }}>
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(17,24,39,0.1) 0%, rgba(17,24,39,0.95) 100%)',
              }}
            />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex items-center justify-center transition-all duration-200"
              style={{
                width: '36px', height: '36px',
                background: 'rgba(11,11,15,0.8)',
                border: '0.5px solid rgba(139,92,246,0.4)',
                borderRadius: '50%',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '16px', cursor: 'pointer',
                backdropFilter: 'blur(8px)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.8)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
            >✕</button>

            <div className="absolute bottom-4 left-6 flex items-center gap-2">
              <div className="px-3 py-1"
                style={{ background: 'rgba(11,11,15,0.8)', border: '0.5px solid rgba(139,92,246,0.4)', backdropFilter: 'blur(8px)', borderRadius: '4px' }}>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: '9px', color: '#a78bfa', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
                  {project.type}
                </span>
              </div>
              {project.featured && (
                <div className="px-3 py-1 flex items-center gap-1"
                  style={{ background: 'rgba(236,72,153,0.15)', border: '0.5px solid rgba(236,72,153,0.6)', backdropFilter: 'blur(8px)', borderRadius: '4px' }}>
                  <span style={{ color: '#f472b6', fontSize: '8px' }}>✦</span>
                  <span style={{ fontFamily: "'Courier New', monospace", fontSize: '9px', color: '#f472b6', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                    destaque
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="p-8 flex flex-col gap-5">
            <div className="flex items-start justify-between">
              <div>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '40px', color: '#f8f4ff', letterSpacing: '0.05em', lineHeight: 1 }}>
                  {project.title}
                </h2>
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', color: 'rgba(167,139,250,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>
                  {project.year}
                </span>
              </div>
              <div className="flex gap-1.5 mt-1">
                <div style={{ width: '10px', height: '10px', background: 'rgba(139,92,246,0.6)' }} />
                <div style={{ width: '10px', height: '10px', border: '0.5px solid rgba(139,92,246,0.4)' }} />
                <div style={{ width: '10px', height: '10px', border: '0.5px solid rgba(139,92,246,0.4)' }} />
              </div>
            </div>

            <div style={{ height: '0.5px', background: 'rgba(139,92,246,0.15)' }} />

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(232,228,240,0.7)', lineHeight: '1.8' }}>
              {project.longDesc}
            </p>

            <div className="flex flex-col gap-2">
              <span style={{ fontFamily: "'Courier New', monospace", fontSize: '10px', color: 'rgba(167,139,250,0.6)', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} style={{ fontFamily: "'Courier New', monospace", fontSize: '10px', color: '#a78bfa', border: '0.5px solid rgba(139,92,246,0.35)', padding: '4px 12px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '4px', fontWeight: 500, background: 'rgba(139,92,246,0.06)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ height: '0.5px', background: 'rgba(139,92,246,0.15)' }} />

            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noreferrer"
                className="relative group overflow-hidden flex items-center gap-2"
                style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', color: '#fff', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', border: '0.5px solid #8B5CF6', padding: '12px 24px', fontWeight: 600 }}>
                <span className="absolute inset-0 bg-purple-main translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">GitHub ↗</span>
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer"
                  className="relative group overflow-hidden flex items-center gap-2"
                  style={{ fontFamily: "'Courier New', monospace", fontSize: '11px', color: '#EC4899', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', border: '0.5px solid rgba(236,72,153,0.5)', padding: '12px 24px', fontWeight: 600 }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(236,72,153,0.1)'; e.currentTarget.style.borderColor = '#EC4899' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(236,72,153,0.5)' }}>
                  Ver Demo ↗
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Projects() {
  const trackRef = useRef(null)
  const [selected, setSelected] = useState(null)
  const [repoCount, setRepoCount] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/erikalaiane')
      .then(r => r.json())
      .then(data => {
        if (data.public_repos) {
          setRepoCount(String(data.public_repos).padStart(2, '0'))
        }
      })
      .catch(() => setRepoCount(String(projects.length).padStart(2, '0')))
  }, [])

  return (
    <>
      <section
        id="projetos"
        className="relative w-full pt-5 pb-5 overflow-hidden"
        style={{ background: '#111827' }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          style={{ background: 'rgba(139,92,246,0.06)' }}
        />
        <div
          className="absolute top-8 left-0 right-0 text-center select-none pointer-events-none"
          style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(80px, 18vw, 220px)', color: 'rgba(139,92,246,0.04)', letterSpacing: '0.1em', lineHeight: 1 }}
        >
          PROJETOS
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              number="03"
              title="principais projetos"
              counter={repoCount}
            />
          </motion.div>

          <div className="flex items-center gap-3 mb-8">
            <span style={{ fontFamily: "'Courier New', monospace", fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              Clique para ver detalhes · Passe o mouse para pausar
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
              <div
                key={index}
                className="flex-shrink-0 group cursor-pointer"
                style={{ width: '320px' }}
                onClick={() => setSelected(project)}
              >
                <div
                  className="overflow-hidden transition-all duration-300 group-hover:scale-[1.02] flex flex-col"
                  style={{
                    background: project.featured ? 'rgba(30,20,50,0.95)' : 'rgba(22,27,39,0.9)',
                    border: project.featured ? '0.5px solid rgba(236,72,153,0.3)' : '0.5px solid rgba(139,92,246,0.2)',
                    borderRadius: '16px',
                    willChange: 'transform',
                    height: '460px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = project.featured ? 'rgba(236,72,153,0.6)' : 'rgba(139,92,246,0.5)'
                    e.currentTarget.style.boxShadow = project.featured ? '0 20px 40px rgba(236,72,153,0.1)' : '0 20px 40px rgba(139,92,246,0.12)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = project.featured ? 'rgba(236,72,153,0.3)' : 'rgba(139,92,246,0.2)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="relative overflow-hidden flex-shrink-0" style={{ height: '200px' }}>
                    <img
                      src={project.cover} alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(11,11,15,0.4)' }} />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: '10px', color: '#fff', letterSpacing: '0.3em', textTransform: 'uppercase', background: 'rgba(139,92,246,0.7)', padding: '8px 16px', backdropFilter: 'blur(4px)' }}>
                        Ver detalhes →
                      </span>
                    </div>

                    {/* Badge tipo — esquerda */}
                    <div className="absolute top-3 left-3 px-2 py-1"
                      style={{ background: 'rgba(11,11,15,0.8)', border: '0.5px solid rgba(139,92,246,0.4)', backdropFilter: 'blur(8px)', borderRadius: '4px' }}>
                      <span style={{ fontFamily: "'Courier New', monospace", fontSize: '9px', color: '#a78bfa', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        {project.type}
                      </span>
                    </div>

                    {/* Badge destaque — direita */}
                    {project.featured && (
                      <div className="absolute top-3 right-3 px-2 py-1 flex items-center gap-1"
                        style={{ background: 'rgba(236,72,153,0.15)', border: '0.5px solid rgba(236,72,153,0.6)', backdropFilter: 'blur(8px)', borderRadius: '4px' }}>
                        <span style={{ color: '#f472b6', fontSize: '8px' }}>✦</span>
                        <span style={{ fontFamily: "'Courier New', monospace", fontSize: '8px', color: '#f472b6', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>
                          destaque
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col gap-3 flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#f8f4ff', letterSpacing: '0.05em', lineHeight: 1 }}>
                          {project.title}
                        </h3>
                        <span style={{ fontFamily: "'Courier New', monospace", fontSize: '10px', color: 'rgba(167,139,250,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>
                          {project.year}
                        </span>
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block"
                        style={{ color: project.featured ? '#EC4899' : '#8B5CF6', fontSize: '18px' }}>→</span>
                    </div>

                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(232,228,240,0.65)', lineHeight: '1.7', flex: 1 }}>
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span key={tech} style={{ fontFamily: "'Courier New', monospace", fontSize: '9px', color: '#a78bfa', border: '0.5px solid rgba(139,92,246,0.3)', padding: '3px 8px', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: '4px', fontWeight: 500 }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div style={{ height: '0.5px', background: 'rgba(139,92,246,0.15)' }} />

                    <div className="flex items-center gap-4">
                      <a href={project.github} target="_blank" rel="noreferrer"
                        style={{ fontFamily: "'Courier New', monospace", fontSize: '10px', color: '#a78bfa', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600 }}
                        onClick={(e) => e.stopPropagation()}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#c4b5fd')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#a78bfa')}>
                        GitHub ↗
                      </a>
                      {project.demo && (
                        <>
                          <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '10px' }}>|</span>
                          <a href={project.demo} target="_blank" rel="noreferrer"
                            style={{ fontFamily: "'Courier New', monospace", fontSize: '10px', color: '#EC4899', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s', fontWeight: 600 }}
                            onClick={(e) => e.stopPropagation()}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#f472b6')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#EC4899')}>
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

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}