/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import heroImg from '../assets/images/hero.jpg'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const stacks = [
  { name: 'React',      icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Tailwind',   icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'Vite',       icon: 'https://cdn.simpleicons.org/vite/646CFF' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Figma',      icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Node.js',    icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
]

const infos = [
  { label: 'FOCO',        value: 'Front-end Dev',    accent: '#8B5CF6' },
  { label: 'DISPONÍVEL',  value: 'Freelance & CLT',  accent: '#EC4899' },
  { label: 'EXPERIÊNCIA', value: '2024 — atual',     accent: '#8B5CF6' },
  { label: 'STACK',       value: 'React · Tailwind', accent: '#EC4899' },
]

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const imgX = useSpring(useTransform(mouseX, [-1, 1], [-15, 15]), { stiffness: 100, damping: 30 })
  const imgY = useSpring(useTransform(mouseY, [-1, 1], [-10, 10]), { stiffness: 100, damping: 30 })

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width * 2 - 1
    const y = (e.clientY - rect.top) / rect.height * 2 - 1
    mouseX.set(x)
    mouseY.set(y)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="flex flex-col justify-center px-6 pb-5 pt-24 relative z-10">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-3">

        {/* ── BANNER PRINCIPAL ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative rounded-2xl overflow-hidden"
          style={{
            height: '460px',
            border: '0.5px solid rgba(139,92,246,0.25)',
          }}
        >
          {/* Imagem de fundo com parallax */}
          <motion.img
            src={heroImg}
            alt="workspace"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              x: imgX,
              y: imgY,
              scale: 1.08,
            }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(17,24,39,0.97) 36%, rgba(17,24,39,0.25) 100%)',
            }}
          />

          {/* Tagline vertical */}
          <div
            className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none"
            style={{
              right: '40%',
              transform: 'translateY(-50%) rotate(90deg)',
              fontSize: '8px',
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            Front-end Developer — Creative Dev — Rio de Janeiro
          </div>

          {/* Estrelinhas decorativas */}
          <div className="absolute top-4 right-4 flex gap-2 items-center">
            <span style={{ fontSize: '18px', color: '#ffffff', filter: 'drop-shadow(0 0 6px #fff)' }}>✦</span>
            <span style={{ fontSize: '11px', color: '#a78bfa', filter: 'drop-shadow(0 0 5px #a78bfa)' }}>✦</span>
            <span style={{ fontSize: '14px', color: '#ffffff', filter: 'drop-shadow(0 0 6px #fff)' }}>⟡</span>
          </div>

          {/* ── CONTEÚDO ESQUERDO com stagger ── */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-center gap-3.5 pl-14"
            style={{ maxWidth: '52%' }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 1. Credential */}
            <motion.div variants={itemVariants} className="flex flex-col gap-1">
              <span style={{ fontSize: '10.5px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(139,92,246,0.95)' }}>
                Credential —
              </span>
              <span style={{ fontSize: '8.5px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
                Front-end Developer
              </span>
              <span style={{ fontSize: '8.5px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
                Creative Dev
              </span>
            </motion.div>

            {/* 2. Título */}
            <motion.div variants={itemVariants}>
              <h1
                className="font-display text-white leading-none"
                style={{ fontSize: 'clamp(52px, 6.5vw, 76px)', letterSpacing: '1px' }}
              >
                ERIKA<br />LAIANE
              </h1>
            </motion.div>

            {/* 3. Subtítulo gradiente animado */}
            <motion.div variants={itemVariants}>
              <p
                className="font-display animated-gradient-text"
                style={{ fontSize: '16px', letterSpacing: '2px' }}
              >
                WHERE CODE MEETS DESIGN.
              </p>
            </motion.div>

            {/* 4. Descrição */}
            <motion.div variants={itemVariants}>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: '12px', color: 'rgba(255,255,255,0.58)', maxWidth: '250px' }}
              >
                Desenvolvo interfaces que as pessoas sentem — não só veem.
              </p>
            </motion.div>

            {/* 5. Botões */}
            <motion.div variants={itemVariants} className="flex gap-3 mt-1">
              <a
                href="#projetos"
                className="relative group overflow-hidden font-body uppercase"
                style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  padding: '10px 22px',
                  border: '0.5px solid #8B5CF6',
                  color: '#fff',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                <span className="absolute inset-0 bg-purple-main translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">ver projetos</span>
              </a>
              <a
                href="#contato"
                className="font-body uppercase transition-all duration-300"
                style={{
                  fontSize: '10px',
                  letterSpacing: '2px',
                  padding: '10px 22px',
                  border: '0.5px solid rgba(139,92,246,0.3)',
                  color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.7)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                }}
              >
                contato →
              </a>
            </motion.div>

            {/* 6. Scroll hint */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mt-1">
              <div className="w-7 h-px bg-purple-main" />
              <span style={{ fontSize: '8px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                scroll to explore
              </span>
              <span style={{ color: '#8B5CF6', fontSize: '11px' }}>↓</span>
            </motion.div>
          </motion.div>

          {/* ── Cards flutuantes (direita) ── */}
          <div className="absolute bottom-4 right-4 flex flex-col gap-2 items-end">

            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ y: -2, boxShadow: '0 4px 20px rgba(236,72,153,0.2)' }}
              className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer"
              style={{
                background: 'rgba(17,24,39,0.85)',
                border: '0.5px solid rgba(236,72,153,0.3)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(236,72,153,0.7)'
                e.currentTarget.style.background = 'rgba(236,72,153,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(236,72,153,0.3)'
                e.currentTarget.style.background = 'rgba(17,24,39,0.85)'
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background: '#EC4899',
                  boxShadow: '0 0 6px rgba(236,72,153,0.8)',
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
              <span className="font-body text-white font-medium whitespace-nowrap" style={{ fontSize: '10px' }}>
                Open to work · Rio de Janeiro
              </span>
            </motion.div>

            {/* Featured card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ y: -2, boxShadow: '0 4px 24px rgba(139,92,246,0.2)' }}
              className="flex gap-3 items-center p-3 rounded-xl cursor-pointer"
              style={{
                background: 'rgba(17,24,39,0.85)',
                border: '0.5px solid rgba(139,92,246,0.3)',
                backdropFilter: 'blur(12px)',
                width: '220px',
                transition: 'border-color 0.3s, background 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.7)'
                e.currentTarget.style.background = 'rgba(139,92,246,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
                e.currentTarget.style.background = 'rgba(17,24,39,0.85)'
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center text-lg"
                style={{
                  background: 'rgba(139,92,246,0.12)',
                  border: '0.5px solid rgba(139,92,246,0.3)',
                }}
              >
                🎨
              </div>
              <div className="flex flex-col gap-1">
                <span style={{ fontSize: '7px', color: 'rgba(139,92,246,0.8)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                  Projeto em destaque
                </span>
                <span className="font-display text-white" style={{ fontSize: '14px', letterSpacing: '1px' }}>
                  KIRA NOX
                </span>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.28)' }}>
                  Sound Producer Portfolio
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── GRID INFERIOR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="grid gap-3"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {/* STACK */}
          <div
            className="rounded-2xl p-5"
            style={{
              background: 'rgba(22,27,39,0.6)',
              border: '0.5px solid rgba(139,92,246,0.15)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Stack & Ferramentas
            </p>
            <div className="grid grid-cols-2 gap-2">
              {stacks.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-250"
                  style={{ background: 'rgba(139,92,246,0.05)', border: '0.5px solid rgba(139,92,246,0.15)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.12)'
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.05)'
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.15)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <img
                    src={s.icon}
                    alt={s.name}
                    style={{ width: '18px', height: '18px', objectFit: 'contain', flexShrink: 0 }}
                  />
                  <span className="font-body text-white font-medium" style={{ fontSize: '11px' }}>
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div className="flex flex-col gap-2">
            <p style={{ fontSize: '8px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.35em', textTransform: 'uppercase' }}>
              Info
            </p>
            <div className="grid grid-cols-2 gap-2">
              {infos.map((info) => (
                <div
                  key={info.label}
                  className="px-3 py-2.5 relative overflow-hidden cursor-pointer group transition-all duration-300 rounded-xl"
                  style={{
                    background: 'rgba(22,27,39,0.6)',
                    border: '0.5px solid rgba(255,255,255,0.06)',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <p
                    className="font-body tracking-widest mb-1 uppercase"
                    style={{ fontSize: '7px', color: info.accent, letterSpacing: '0.2em' }}
                  >
                    {info.label}
                  </p>
                  <p className="font-body text-white font-medium" style={{ fontSize: '11px' }}>
                    {info.value}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ height: '1px', background: 'linear-gradient(90deg, #8B5CF6, #EC4899)' }}
                  />
                </div>
              ))}
            </div>

            {/* Wide card */}
            <div
              className="px-4 py-3 flex items-center justify-between relative overflow-hidden cursor-pointer group transition-all duration-300 rounded-xl"
              style={{
                background: 'rgba(22,27,39,0.6)',
                border: '0.5px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="flex flex-col gap-0.5">
                <span style={{ fontSize: '7px', color: 'rgba(139,92,246,0.7)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  Currently Building
                </span>
                <span className="font-body text-white font-medium" style={{ fontSize: '11px' }}>
                  Portfolio Pessoal · 2025
                </span>
              </div>
              <div className="flex gap-2">
                <span style={{ fontSize: '8px', color: 'rgba(139,92,246,0.7)', border: '0.5px solid rgba(139,92,246,0.3)', padding: '3px 8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  React
                </span>
                <span style={{ fontSize: '8px', color: 'rgba(139,92,246,0.7)', border: '0.5px solid rgba(139,92,246,0.3)', padding: '3px 8px', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Em progresso
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ height: '1px', background: 'linear-gradient(90deg, #8B5CF6, #EC4899)' }}
              />
            </div>
          </div>
        </motion.div>

      </div>

      <style>{`
        .animated-gradient-text {
          background: linear-gradient(90deg, #8B5CF6, #EC4899, #8B5CF6);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s linear infinite;
        }
        @keyframes gradientShift {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 6px rgba(236,72,153,0.8); }
          50%       { box-shadow: 0 0 12px rgba(236,72,153,1); }
        }
      `}</style>

    </section>
  )
}