import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StarsBg from './components/StarsBg'

export default function App() {
  return (
    <div style={{ background: '#111827', minHeight: '100vh', position: 'relative' }}>
      <StarsBg />
      <Navbar />
      <Hero />
    </div>
  )
}