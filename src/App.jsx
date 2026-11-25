import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStrip from './components/TechStrip'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    // reducedMotion="user" : les animations de mouvement sont coupées si le visiteur l'a demandé
    <MotionConfig reducedMotion="user">
      <Header />
      <main className="pt-20">
        <Hero />
        <TechStrip />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-accent px-5 pb-8 text-center text-sm font-semibold text-bg">
        Mendrika · Fianarantsoa, Madagascar · © {new Date().getFullYear()}
      </footer>
    </MotionConfig>
  )
}
