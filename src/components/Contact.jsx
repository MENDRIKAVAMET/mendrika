import { useState } from 'react'
import { PillButton, Reveal } from './ui'
import { profile } from '../data'

const field = 'w-full min-h-11 rounded-2xl bg-card px-4 py-3 placeholder:text-muted/50 focus:bg-high focus:outline-none focus-visible:ring-2 focus-visible:ring-accent'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Sans serveur : le formulaire ouvre l'application mail du visiteur, message déjà rempli
  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `${f.get('message')}\n\n${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent('Message depuis ton portfolio')}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 pb-16 lg:px-16">
      <Reveal className="rounded-[40px] bg-low p-6 sm:p-10 lg:p-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Parlons de votre projet</h2>
            <a href={`mailto:${profile.email}`} className="break-all text-xl font-bold text-accent transition-colors hover:text-ink sm:text-3xl">{profile.email}</a>
            <div className="flex gap-6">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold hover:text-accent">GitHub</a>
              {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold hover:text-accent">LinkedIn</a>}
            </div>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-4 lg:col-span-6">
            <label className="flex flex-col gap-1 text-sm font-semibold text-muted">Nom
              <input name="name" required autoComplete="name" placeholder="Votre nom" className={`${field} text-base font-normal text-ink`} />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold text-muted">Email
              <input name="email" type="email" required autoComplete="email" placeholder="vous@exemple.com" className={`${field} text-base font-normal text-ink`} />
            </label>
            <label className="flex flex-col gap-1 text-sm font-semibold text-muted">Message
              <textarea name="message" required rows={4} placeholder="Parlez-moi de votre projet ou de votre offre" className={`${field} text-base font-normal text-ink`} />
            </label>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PillButton type="submit">Envoyer le message</PillButton>
              <p role="status" className="text-sm text-accent">{sent && "Votre application mail s'ouvre avec le message prêt à envoyer."}</p>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
