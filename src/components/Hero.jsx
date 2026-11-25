import { motion } from 'framer-motion'
import { PillButton, Reveal } from './ui'
import { ease } from '../motion'
import { profile, specialties } from '../data'

const word = {
  hidden: { y: '110%' },
  show: (i) => ({ y: 0, transition: { duration: 0.75, ease, delay: 0.1 + i * 0.12 } }),
}

export default function Hero() {
  return (
    <section id="accueil" className="rounded-b-[40px] bg-low">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-8 lg:px-16">
        <div className="grid items-end gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4 text-sm font-semibold text-accent">
              Salut, je suis Mendrika
            </motion.p>
            <h1 className="text-[44px] font-extrabold leading-[1.05] tracking-tighter sm:text-7xl">
              {['Développeur', 'Full-Stack'].map((w, i) => (
                <span key={w} className="block overflow-hidden pb-1">
                  <motion.span className="inline-block" variants={word} custom={i} initial="hidden" animate="show">{w}</motion.span>
                </span>
              ))}
            </h1>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-10 flex flex-wrap items-center gap-3">
              <PillButton href="#projets">Voir mes projets</PillButton>
              <a href="#contact" className="inline-flex min-h-11 items-center rounded-full bg-high px-6 text-sm font-semibold transition-colors hover:bg-[#3a3939]">Me contacter</a>
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-5">
            <motion.img
              src={profile.portrait}
              width="600" height="800" fetchPriority="high"
              alt="Portrait de Mendrika"
              initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease }}
              className="aspect-[3/4] max-h-[460px] w-full rounded-[2rem] bg-card object-cover object-top"
            />
            <div className="rounded-[2rem] bg-card p-6">
              <p className="mb-1 text-xl font-semibold tracking-tight">Du code propre pour des applications utiles.</p>
              <p className="text-sm text-muted">Titulaire d'une licence en informatique de l'EMIT, je conçois des interfaces claires et des API fiables depuis Fianarantsoa, Madagascar.</p>
            </div>
          </div>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {specialties.map((s, i) => (
            <li key={s}>
              <Reveal delay={i * 0.08} className="h-full rounded-[2rem] bg-card p-6 text-lg font-semibold tracking-tight">{s}</Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
