/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = ['sobre', 'projetos', 'contato']

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{
        background: 'rgba(17,24,39,0.7)',
        backdropFilter: 'blur(16px)',
        borderBottom: '0.5px solid rgba(139,92,246,0.1)',
      }}
    >
      {/* WRAPPER CENTRALIZADO */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div className="relative group cursor-pointer">
          <span className="font-logo text-white" style={{ fontSize: '20px' }}>
            Érika Laiane<span style={{ color: '#8B5CF6' }}>.</span>
          </span>
          <div
            className="absolute left-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            style={{ height: '1px', background: 'linear-gradient(90deg, #8B5CF6, #EC4899)', bottom: '-3px' }}
          />
        </div>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <li key={item} className="relative group">
              <a
                href={'#' + item}
                className="font-body transition-colors duration-300"
                style={{ color: 'rgba(232,228,240,0.45)', letterSpacing: '1.5px', textTransform: 'uppercase', fontSize: '11px', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8e4f0'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(232,228,240,0.45)'}
              >
                {item}
              </a>
              <span
                className="absolute left-0 h-px w-0 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ background: 'linear-gradient(90deg, #8B5CF6, #EC4899)', bottom: '-3px' }}
              />
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden md:block font-body transition-all duration-300"
          style={{
            fontSize: '11px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#a78bfa',
            border: '0.5px solid rgba(139,92,246,0.6)',
            padding: '8px 20px',
            borderRadius: '999px',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(139,92,246,0.15)'
            e.currentTarget.style.borderColor = '#a78bfa'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(139,92,246,0.6)'
          }}
        >
          Entre em Contato
        </a>

        {/* HAMBURGUER mobile */}
        <button
          className="md:hidden text-white"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex flex-col gap-1.5">
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
            <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
          </div>
        </button>

      </div>

      {/* MENU mobile */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 flex flex-col items-center gap-6 py-8"
          style={{ background: 'rgba(17,24,39,0.97)', backdropFilter: 'blur(12px)' }}
        >
          {links.map((item) => (
            <a
              key={item}
              href={'#' + item}
              onClick={() => setMenuOpen(false)}
              className="font-body transition-colors duration-300"
              style={{ color: 'rgba(232,228,240,0.45)', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

    </motion.nav>
  )
}