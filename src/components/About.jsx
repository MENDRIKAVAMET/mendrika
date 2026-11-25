import { PillButton, Reveal } from './ui'

export default function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-7xl px-5 py-20 lg:px-16">
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">Créer des applications qui simplifient le quotidien</h2>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col items-start gap-6 lg:col-span-6 lg:pt-6">
          <p className="max-w-prose text-lg leading-7 text-muted">
            Titulaire d'une licence en informatique de l'EMIT à Fianarantsoa, Madagascar, je parle français, malgache et allemand. Je conçois des solutions web et mobiles concrètes et je recherche un premier poste de développeur.
          </p>
          <PillButton href="#contact">Me contacter</PillButton>
        </Reveal>
      </div>
    </section>
  )
}
