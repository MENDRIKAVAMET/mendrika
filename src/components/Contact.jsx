import { useState } from 'react'
import { PillButton, Reveal } from './ui'
import { profile } from '../data'

const field = 'w-full min-h-11 rounded-2xl bg-bg px-4 py-3 text-base font-normal text-ink placeholder:text-muted/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white'
const label = 'flex flex-col gap-1 text-sm font-bold'

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
    <section id="contact" className="px-5 pb-16 lg:px-16">
      <Reveal className="panel mx-auto max-w-7xl rounded-[40px] p-6 text-white sm:p-10 lg:p-16">
        <h2 className="text-4xl font-extrabold leading-none tracking-tighter sm:text-7xl">Parlons de votre projet</h2>
        <a href={`mailto:${profile.email}`} className="mt-8 inline-block break-all text-2xl font-bold underline decoration-2 underline-offset-8 transition-opacity hover:opacity-70 sm:text-5xl">{profile.email}</a>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="flex gap-6 font-semibold lg:col-span-4 lg:flex-col lg:gap-2">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">GitHub</a>
            {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline-offset-4 hover:underline">LinkedIn</a>}
          </div>

          <form onSubmit={submit} className="flex flex-col gap-4 lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className={label}>Nom
                <input name="name" required autoComplete="name" placeholder="Votre nom" className={field} />
              </label>
              <label className={label}>Email
                <input name="email" type="email" required autoComplete="email" placeholder="vous@exemple.com" className={field} />
              </label>
            </div>
            <label className={label}>Message
              <textarea name="message" required rows={4} placeholder="Parlez-moi de votre projet ou de votre offre" className={field} />
            </label>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <PillButton type="submit" tone="dark">Envoyer le message</PillButton>
              <p role="status" className="text-sm font-semibold">{sent && "Votre application mail s'ouvre avec le message prêt à envoyer."}</p>
            </div>
          </form>
        </div>
      </Reveal>
    </section>
  )
}
