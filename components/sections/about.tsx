"use client"

import Image from "next/image"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-secondary">
            <Image
              src="/romadancestudio/chisiamo.jpg"
              alt="Roma Dance Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">FORMIAMO ARTISTI, ISPIRIAMO PERSONE</p>
            <h2 className="mb-6 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Chi Siamo
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-pretty text-foreground">
              <p>
                Roma Dance Studio e uno spazio dedicato alla crescita artistica, dove ogni percorso nasce per aiutare ogni allievo a esprimere il proprio potenziale.
              </p>
              <p>
                La nostra scuola a Roma unisce formazione, disciplina ed energia creativa in un ambiente professionale, elegante ed esclusivo.
              </p>
              <p>
                Danza, canto, recitazione, musical theatre, musica e pole dance convivono in un ambiente accogliente e professionale, dove tecnica e passione crescono insieme.
              </p>
              <p>
                Ogni lezione e progettata per accompagnare gli allievi passo dopo passo, valorizzando talento, identita artistica e fiducia in scena.
              </p>
              <p>
                Il nostro obiettivo e trasformare l'entusiasmo iniziale in esperienza concreta, emozione condivisa e crescita continua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
