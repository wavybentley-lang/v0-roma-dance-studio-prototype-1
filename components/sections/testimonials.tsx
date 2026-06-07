import { Star } from "lucide-react"

const reviews = [
  {
    name: "Paola Sorvillo",
    time: "4 anni fa",
    text:
      "Ottima scuola di ballo, insegnanti professionali e disponibili. Ambiente serio e confortevole. Consiglio vivamente il corso di danza aerea.",
  },
  {
    name: "Iolanda Manna",
    time: "4 anni fa",
    text:
      "Una vera accademia di insegnanti qualificati. Professionalità, serietà e gentilezza fanno di questa scuola una realtà di riferimento sul territorio.",
  },
  {
    name: "Virginia Fierro",
    time: "4 anni fa",
    text:
      "Ottima struttura che offre svariati corsi, danza classica, hip-pop, latino, danza aerea. Insegnati preparati ed altamente qualificati. Stupendo il corso di danza aerea. Consiglio vivamente questa struttura.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-[#050505] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 px-4 text-left lg:px-0 lg:text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">Recensioni Google verificate</p>
          <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-center">Dicono di noi</h2>
          <p className="max-w-none text-lg text-pretty text-muted-foreground lg:mx-auto lg:max-w-2xl">
            Le parole di chi vive ogni giorno l'esperienza Roma Dance Studio.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-xl border border-[rgba(212,175,55,0.25)] bg-[#0A0A0A] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex gap-1 text-[#D4AF37]" aria-label="5 stelle">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={17} fill="currentColor" />
                  ))}
                </div>
                <span className="rounded-full border border-[rgba(212,175,55,0.25)] px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#D4AF37] uppercase">
                  Recensione Google
                </span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-white/88">{review.text}</p>
              <div className="mt-6 border-t border-[rgba(212,175,55,0.15)] pt-4">
                <div className="font-serif text-xl font-semibold text-white">{review.name}</div>
                <div className="mt-1 text-xs font-medium tracking-[0.14em] text-white/45 uppercase">{review.time}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
