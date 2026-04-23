import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarsBg from './components/StarsBg'
import Marquee from './components/Marquee'
import About from './components/About'
import Projects from './components/Projects'

export default function App() {
  return (
    <div style={{ background: '#111827', minHeight: '100vh', position: 'relative' }}>
      <StarsBg />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
    </div>
  )
}