import { Code2, Database, Leaf, Server, Smartphone, LayoutDashboard } from 'lucide-react'
import { Reveal } from './ui'

const stack = [
  ['Spring Boot', Leaf], ['NestJS', Server], ['React', Code2],
  ['Angular', LayoutDashboard], ['Flutter', Smartphone], ['PostgreSQL', Database],
]

// La liste est dupliquée pour que la boucle CSS soit sans coupure
function Row({ hidden }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-10 pr-10">
      {stack.map(([name, Icon]) => (
        <li key={name} className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
          <Icon size={24} className="text-accent" aria-hidden="true" />{name}
        </li>
      ))}
    </ul>
  )
}

export default function TechStrip() {
  return (
    <section aria-label="Technologies" className="mx-auto mt-10 max-w-7xl px-5 lg:px-16">
      <Reveal className="overflow-hidden rounded-[2rem] bg-low p-6 lg:p-10">
        <p className="mb-6 text-sm font-semibold text-muted">Technologies que j'utilise</p>
        <div className="group flex w-max animate-marquee hover:[animation-play-state:paused]">
          <Row /><Row hidden />
        </div>
      </Reveal>
    </section>
  )
}
