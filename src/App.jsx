import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarsBg from './components/StarsBg'
import Marquee from './components/Marquee'
import About from './components/About'
import GitHubStats from './components/GitHubStats'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ background: '#111827', minHeight: '100vh', position: 'relative' }}>
      <StarsBg />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <GitHubStats />
      <Projects />
      <Contact />
    </div>
  )
}