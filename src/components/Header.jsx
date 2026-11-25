import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { PillButton } from './ui'

const links = [
  ['accueil', 'Accueil'],
  ['a-propos', 'À propos'],
  ['projets', 'Projets'],
  ['contact', 'Contact'],
]

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

const ids = links.map(([id]) => id)

export default function Header() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-16">
        <a href="#accueil" className="text-xl font-bold tracking-tight">Mendrika</a>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'page' : undefined} className="relative rounded-full px-4 py-1.5 text-sm font-semibold">
              {active === id && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-high" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />
              )}
              <span className={`relative transition-colors ${active === id ? 'text-ink' : 'text-muted hover:text-ink'}`}>{label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PillButton href="#contact">Me contacter</PillButton>
          <button type="button" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="grid size-11 place-items-center md:hidden">
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Menu mobile" className="overflow-hidden bg-low md:hidden" initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} transition={{ duration: 0.3 }}>
            <ul className="flex flex-col px-5 pb-4">
              {links.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="flex min-h-12 items-center text-lg font-semibold">{label}</a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
