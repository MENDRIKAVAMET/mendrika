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
            Développeur junior, je cherche une équipe où progresser en livrant du vrai code. Mon terrain de jeu : Spring Boot, NestJS, React, Angular, Flutter. Français, malgache et anglais au quotidien, et des notions d'allemand.
          </p>
          <PillButton href="#contact">Me contacter</PillButton>
        </Reveal>
      </div>
    </section>
  )
}
