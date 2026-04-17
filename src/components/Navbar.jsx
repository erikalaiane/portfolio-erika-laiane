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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
      style={{ background: 'rgba(11,11,15,0.7)', backdropFilter: 'blur(12px)' }}
    >
    <span className="font-logo font-normal text-white text-lg tracking-wide">
    erika laiane<span className="text-purple-main">.</span>
    </span>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((item) => (
            <li key={item} className="relative group">
            
            <a href={'#' + item}
                className="text-neutral-400 hover:text-white text-sm transition-colors duration-300"
            >
                {item}
            </a>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-main rounded-full transition-all duration-300 group-hover:w-full" />
            </li>
        ))}
        </ul>

      <a href="#contato" className="hidden md:block text-sm px-5 py-2 rounded-full border border-purple-main text-purple-light hover:bg-purple-main hover:text-white transition-all duration-300">
        Entre em Contato
      </a>

      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="flex flex-col gap-1.5">
          <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
          <span className="block w-6 h-0.5 bg-white transition-all duration-300" />
        </div>
      </button>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 flex flex-col items-center gap-6 py-8"
          style={{ background: 'rgba(11,11,15,0.95)', backdropFilter: 'blur(12px)' }}
        >
          {links.map((item) => (
            <a key={item} href={'#' + item} onClick={() => setMenuOpen(false)} className="text-neutral-400 hover:text-white text-sm transition-colors duration-300">
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}