import { motion } from 'framer-motion'
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

export default function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-7xl px-5 pb-20 lg:px-16">
      <Reveal className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Projets récents</h2>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease }}
            whileHover={{ y: -6 }}
            className="group flex flex-col rounded-[2rem] bg-low p-6 transition-colors duration-300 hover:bg-card"
          >
            <div className="mb-6 overflow-hidden rounded-[1.25rem] bg-high"><Cover project={p} /></div>
            <h3 className="mb-2 text-2xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mb-5 text-muted">{p.description}</p>
            <ul className="mb-6 flex flex-wrap gap-2">
              {p.tags.map((t) => <li key={t} className="rounded-full bg-high px-3 py-1 text-xs font-semibold">{t}</li>)}
            </ul>
            <div className="mt-auto flex gap-5">
              {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 font-semibold text-accent hover:text-ink">Voir le code <ArrowUpRight size={18} aria-hidden="true" /></a>}
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 font-semibold text-accent hover:text-ink">Voir le site <ArrowUpRight size={18} aria-hidden="true" /></a>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
