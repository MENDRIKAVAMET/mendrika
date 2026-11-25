import { useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './ui'
import { ease } from '../motion'
import { projects } from '../data'

function Cover({ project }) {
  if (project.image) {
    return <img src={project.image} alt={`Aperçu du projet ${project.title}`} loading="lazy" decoding="async" width="800" height="500" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
  }
  return (
    <div className="grid aspect-[16/10] w-full place-items-center bg-high text-8xl font-extrabold text-accent transition-transform duration-500 group-hover:scale-105" aria-hidden="true">
      {project.title[0]}
    </div>
  )
}

const Tags = ({ tags, className = '' }) => (
  <ul className={`flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm text-muted ${className}`}>
    {tags.map((t) => <li key={t}>{t}</li>)}
  </ul>
)

function Featured({ p }) {
  const link = 'inline-flex min-h-11 items-center gap-1 font-semibold text-accent hover:text-ink'
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, ease }}
      className="group grid gap-8 rounded-[2rem] bg-low p-6 lg:grid-cols-12 lg:p-10"
    >
      <div className="overflow-hidden rounded-[1.25rem] bg-high lg:col-span-7"><Cover project={p} /></div>
      <div className="flex flex-col lg:col-span-5">
        <p className="mb-4 font-mono text-sm text-accent">Projet phare</p>
        <h3 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{p.title}</h3>
        <p className="mb-6 text-lg text-muted">{p.description}</p>
        <Tags tags={p.tags} className="mb-8" />
        <div className="mt-auto flex gap-5">
          {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className={link}>Voir le code <ArrowUpRight size={18} aria-hidden="true" /></a>}
          {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className={link}>Voir le site <ArrowUpRight size={18} aria-hidden="true" /></a>}
        </div>
      </div>
    </motion.article>
  )
}

function Row({ p, onActive }) {
  const href = p.repo || p.live
  const Tag = href ? 'a' : 'div'
  const props = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <li className="border-t border-high last:border-b" onMouseEnter={() => onActive(p)} onFocus={() => onActive(p)} onBlur={() => onActive(null)}>
      <Tag {...props} className="group flex min-h-11 items-center justify-between gap-4 py-6">
        <h3 className="text-3xl font-bold tracking-tight transition-all duration-300 group-hover:translate-x-3 group-hover:text-accent sm:text-5xl">{p.title}</h3>
        <div className="flex items-center gap-6">
          <Tags tags={p.tags} className="hidden lg:flex" />
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-high transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent" aria-hidden="true">
            <ArrowUpRight size={20} />
          </span>
        </div>
      </Tag>
    </li>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects
  const [hover, setHover] = useState(null)
  const x = useSpring(useMotionValue(0), { stiffness: 260, damping: 30 })
  const y = useSpring(useMotionValue(0), { stiffness: 260, damping: 30 })

  return (
    <section id="projets" className="mx-auto max-w-7xl px-5 pb-20 lg:px-16">
      <Reveal className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Projets récents</h2>
      </Reveal>
      <Featured p={featured} />
      {rest.length > 0 && (
        <>
          <p className="mb-4 mt-14 font-mono text-sm text-muted">Autres projets</p>
          <ul onMouseMove={(e) => { x.set(e.clientX + 28); y.set(e.clientY - 90) }} onMouseLeave={() => setHover(null)}>
            {rest.map((p) => <Row key={p.title} p={p} onActive={setHover} />)}
          </ul>
          {/* Aperçu qui suit la souris (écrans avec souris uniquement) */}
          <AnimatePresence>
            {hover?.image && (
              <motion.img
                key={hover.title} src={hover.image} alt="" aria-hidden="true"
                style={{ x, y }}
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.2 }}
                className="pointer-events-none fixed left-0 top-0 z-40 hidden w-72 rounded-2xl pointer-fine:block"
              />
            )}
          </AnimatePresence>
        </>
      )}
    </section>
  )
}
