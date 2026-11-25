import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { PillButton, Reveal } from './ui'
import { ease } from '../motion'
import { profile, specialties } from '../data'

const word = {
  hidden: { y: '110%' },
  show: (i) => ({ y: 0, transition: { duration: 0.75, ease, delay: 0.1 + i * 0.12 } }),
}

const clock = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Indian/Antananarivo', hour: '2-digit', minute: '2-digit' })

function LocalTime() {
  const [t, setT] = useState(() => clock.format(new Date()))
  useEffect(() => {
    const id = setInterval(() => setT(clock.format(new Date())), 20000)
    return () => clearInterval(id)
  }, [])
  return <p className="font-mono text-sm font-semibold">Il est {t} à Fianarantsoa</p>
}

export default function Hero() {
  return (
    <section id="accueil" className="rounded-b-[40px] bg-accent text-bg">
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-8 lg:px-16">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="inline-flex items-center gap-2 rounded-full bg-bg px-4 py-2 text-sm font-semibold text-ink">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full rounded-full bg-green-400 opacity-75 motion-safe:animate-ping" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-green-400" />
                </span>
                Disponible pour un premier poste
              </p>
              <LocalTime />
            </div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-3 text-lg font-semibold">
              Salut, je suis Mendrika
            </motion.p>
            <h1 className="text-[46px] font-extrabold leading-[0.98] tracking-tighter sm:text-7xl lg:text-8xl">
              {['Développeur', 'Full-Stack'].map((w, i) => (
                <span key={w} className="block overflow-hidden pb-2">
                  <motion.span className="inline-block" variants={word} custom={i} initial="hidden" animate="show">{w}</motion.span>
                </span>
              ))}
            </h1>
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mt-10 flex flex-wrap items-center gap-3">
              <PillButton href="#projets" tone="dark">Voir mes projets</PillButton>
              <a href="#contact" className="inline-flex min-h-11 items-center rounded-full border-2 border-bg px-6 text-sm font-semibold transition-colors hover:bg-bg hover:text-ink">Me contacter</a>
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
            <div className="rounded-[2rem] bg-bg p-6 text-ink">
              <p className="text-xl font-semibold tracking-tight">Développeur full-stack. J'aime les applications qui servent vraiment à quelque chose.</p>
            </div>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
          {specialties.map((s, i) => (
            <li key={s}>
              <Reveal delay={i * 0.08} className="border-t-2 border-bg pt-4 text-lg font-bold tracking-tight">{s}</Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
