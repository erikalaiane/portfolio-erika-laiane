import { useEffect, useRef } from 'react'

function starPath(cx, cy, r1, r2) {
  const points = []
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4 - Math.PI / 2
    const r = i % 2 === 0 ? r1 : r2
    points.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)])
  }
  return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ') + ' Z'
}

function diamondPath(cx, cy, r1, r2) {
  return `M${cx},${cy - r1} L${cx + r2},${cy} L${cx},${cy + r1} L${cx - r2},${cy} Z`
}

export default function StarsBg() {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    // ✅ Usa só a viewport — correto para position: fixed
    const W = window.innerWidth
    const H = window.innerHeight

    svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
    svg.setAttribute('width', W)
    svg.setAttribute('height', H)

    // ✦ estrelas de 4 pontas
    for (let i = 0; i < 38; i++) {
      const x = Math.random() * W
      const y = Math.random() * H
      const size = 3 + Math.random() * 5
      const opacity = 0.25 + Math.random() * 0.45
      const delay = Math.random() * 6
      const duration = 2.5 + Math.random() * 3.5
      const color = Math.random() > 0.55 ? '#a78bfa' : '#ffffff'

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('d', starPath(x, y, size, size * 0.28))
      path.setAttribute('fill', color)
      path.style.cssText = `opacity:0;animation:twinkle ${duration}s ease-in-out ${delay}s infinite;--peak:${opacity};`
      svg.appendChild(path)
    }

    // ⟡ losangos finos
    for (let i = 0; i < 28; i++) {
      const x = Math.random() * W
      const y = Math.random() * H
      const r1 = 5 + Math.random() * 7
      const r2 = 1 + Math.random() * 2
      const opacity = 0.15 + Math.random() * 0.3
      const delay = Math.random() * 7
      const duration = 3 + Math.random() * 4
      const color = Math.random() > 0.5 ? '#c4b5fd' : '#ffffff'

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      path.setAttribute('d', diamondPath(x, y, r1, r2))
      path.setAttribute('fill', color)
      path.style.cssText = `opacity:0;animation:twinkle ${duration}s ease-in-out ${delay}s infinite;--peak:${opacity};`
      svg.appendChild(path)
    }

    // pontinhos sutis de fundo
    for (let i = 0; i < 45; i++) {
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      c.setAttribute('cx', Math.random() * W)
      c.setAttribute('cy', Math.random() * H)
      c.setAttribute('r', 0.7 + Math.random() * 1.1)
      c.setAttribute('fill', '#ffffff')
      const opacity = 0.08 + Math.random() * 0.2
      const delay = Math.random() * 9
      const duration = 3 + Math.random() * 5
      c.style.cssText = `opacity:0;animation:twinkle ${duration}s ease-in-out ${delay}s infinite;--peak:${opacity};`
      svg.appendChild(c)
    }

    // ✅ Recalcula se a janela for redimensionada
    function handleResize() {
      const newW = window.innerWidth
      const newH = window.innerHeight
      svg.setAttribute('viewBox', `0 0 ${newW} ${newH}`)
      svg.setAttribute('width', newW)
      svg.setAttribute('height', newH)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      while (svg.firstChild) svg.removeChild(svg.firstChild)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: var(--peak, 0.4); }
        }
      `}</style>
      <svg
        ref={svgRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
        xmlns="http://www.w3.org/2000/svg"
      />
    </>
  )
}