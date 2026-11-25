import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

import { ease } from '../motion'

// Apparition douce quand l'élément entre à l'écran (une seule fois)
export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// Bouton "pilule" : la flèche orange pivote au survol
export function PillButton({ href, children, type = 'button', onClick }) {
  const cls =
    'group inline-flex min-h-11 items-center gap-4 rounded-full bg-ink py-1 pl-6 pr-1 text-sm font-semibold text-[#313030] transition-colors duration-200 hover:bg-white'
  const arrow = (
    <span className="grid size-9 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
      <ArrowUpRight size={18} aria-hidden="true" />
    </span>
  )
  return href ? (
    <a href={href} className={cls}>{children}{arrow}</a>
  ) : (
    <button type={type} onClick={onClick} className={cls}>{children}{arrow}</button>
  )
}
