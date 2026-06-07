"use client"

import { ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"
import { type Dispatch, type ReactNode, type SetStateAction, useState } from "react"

import { brand } from "@/lib/site-config"

const courseOptions = [
  "Danza",
  "Canto",
  "Recitazione",
  "Musical Theatre",
  "Musica",
  "Pole Dance",
  "Programmi Bambini",
  "Programmi Teen",
  "Programmi Adulti",
  "Lezione di Prova",
]

type ContactSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  formSubmitted: boolean
  setFormSubmitted: (submitted: boolean) => void
  formErrors: { [key: string]: boolean }
  setFormErrors: Dispatch<SetStateAction<{ [key: string]: boolean }>>
  formNetworkError: boolean
  setFormNetworkError: (error: boolean) => void
}

export function ContactSection({
  isVisible,
  setSectionRef,
  formSubmitted,
  setFormSubmitted,
  formErrors,
  setFormErrors,
  formNetworkError,
  setFormNetworkError,
}: ContactSectionProps) {
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState("")

  return (
    <section
      id="contatti"
      ref={(element) => setSectionRef("contatti", element)}
      style={{ background: "radial-gradient(ellipse at 30% 70%, #141414 0%, #0F0F0F 55%, #0A0A0A 100%)" }}
      className={`relative border-t border-border bg-[#050505] transition-all duration-700 ${
        courseDropdownOpen ? "z-[10000]" : "z-10"
      } ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative overflow-hidden py-24">
        <Image
          src="/contactformimage.jpg"
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover object-center opacity-55"
          style={{ maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.2) 100%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.85) 75%, #050505 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 px-4 text-left lg:px-0 lg:text-center">
            <h2 className="mb-4 text-left font-serif text-4xl font-bold text-foreground sm:text-5xl md:text-6xl lg:text-center">
              Vuoi provare un <span className="text-primary">corso</span>?
            </h2>
            <p className="max-w-none text-lg text-pretty text-foreground lg:mx-auto lg:max-w-2xl">
              Scrivici e il team di Roma Dance Studio ti aiutera a scegliere il percorso piu adatto a te. Ti rispondiamo con orari, disponibilita e i prossimi passi per iniziare.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {formSubmitted ? (
              <div className="py-8 text-center">
                <p className="font-sans text-lg text-primary">Grazie! Il tuo messaggio e stato inviato. Ti risponderemo al piu presto.</p>
                <button onClick={() => setFormSubmitted(false)} className="mt-4 cursor-pointer font-sans text-sm text-muted-foreground underline">
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={async (event) => {
                  event.preventDefault()
                  const form = event.currentTarget
                  const nome = (form.elements.namedItem("nome") as HTMLInputElement).value.trim()
                  const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim()
                  const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value.trim()
                  const corso = (form.elements.namedItem("corso") as HTMLInputElement).value
                  const errors: { [key: string]: boolean } = {}
                  if (!nome) errors.nome = true
                  if (!email) errors.email = true
                  if (!telefono) errors.telefono = true
                  if (!corso) errors.corso = true
                  if (Object.keys(errors).length > 0) {
                    setFormErrors(errors)
                    return
                  }
                  setFormErrors({})
                  setFormNetworkError(false)
                  setFormSubmitted(true)
                  form.reset()
                  setSelectedCourse("")
                }}
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <TextInput id="name" name="nome" label="Nome" placeholder="Il tuo nome" hasError={formErrors.nome} setFormErrors={setFormErrors} />
                  <TextInput id="email" name="email" label="Email" placeholder="La tua email" type="email" hasError={formErrors.email} setFormErrors={setFormErrors} />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <TextInput id="phone" name="telefono" label="Telefono" placeholder="Il tuo numero" type="tel" hasError={formErrors.telefono} setFormErrors={setFormErrors} />
                  <div>
                    <label htmlFor="course" className="mb-2 block text-[12px] font-semibold tracking-wider text-white uppercase">
                      Corso di Interesse
                    </label>
                    <div
                      className="relative z-[10010]"
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setCourseDropdownOpen(false)
                      }}
                    >
                      <input type="hidden" name="corso" value={selectedCourse} />
                      <button
                        id="course"
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl bg-[#0A0A0A] px-4 py-3 text-left text-white shadow-[0_12px_32px_rgba(0,0,0,0.32)] transition-[border-color,box-shadow] hover:border-[#D4AF37]/40 focus:border-[rgba(212,175,55,0.75)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12),0_12px_32px_rgba(0,0,0,0.32)] focus:outline-none"
                        style={{ border: `1px solid ${formErrors.corso ? "var(--template-error)" : "rgba(212,175,55,0.25)"}` }}
                        onClick={() => {
                          setCourseDropdownOpen((open) => !open)
                          setFormErrors((previous) => ({ ...previous, corso: false }))
                        }}
                        aria-haspopup="listbox"
                        aria-expanded={courseDropdownOpen}
                      >
                        <span className={selectedCourse ? "text-white" : "text-white/60"}>{selectedCourse || "Seleziona un corso"}</span>
                        <ChevronDown
                          size={16}
                          className={`ml-3 shrink-0 text-[#D4AF37] transition-transform ${courseDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      {courseDropdownOpen && (
                        <div
                          className="absolute right-0 left-0 z-[10020] mt-2 overflow-hidden rounded-xl bg-[#0A0A0A] shadow-[0_22px_60px_rgba(0,0,0,0.72)]"
                          style={{ border: "1px solid rgba(212,175,55,0.25)" }}
                          role="listbox"
                        >
                          {courseOptions.map((course) => (
                            <button
                              key={course}
                              type="button"
                              className="block min-h-12 w-full border-b border-[rgba(212,175,55,0.15)] bg-[#0A0A0A] px-4 py-3 text-left text-sm font-semibold tracking-wide text-white transition-colors duration-200 last:border-b-0 hover:bg-[rgba(212,175,55,0.14)] hover:text-white focus:bg-[rgba(212,175,55,0.14)] focus:text-white focus:outline-none"
                              onClick={() => {
                                setSelectedCourse(course)
                                setCourseDropdownOpen(false)
                                setFormErrors((previous) => ({ ...previous, corso: false }))
                              }}
                              role="option"
                              aria-selected={selectedCourse === course}
                            >
                              {course}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-[12px] font-semibold tracking-wider text-white uppercase">
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="messaggio"
                    rows={4}
                    className="w-full resize-none rounded-xl border bg-[#0A0A0A] px-4 py-3 text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow] placeholder:text-[rgba(255,255,255,0.55)] focus:border-[rgba(212,175,55,0.75)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12),0_12px_32px_rgba(0,0,0,0.28)] focus:outline-none"
                    style={{ borderColor: "rgba(212,175,55,0.25)" }}
                    placeholder="Raccontaci di te..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-full bg-primary py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-[#A93226] hover:shadow-primary/35 active:translate-y-0 active:scale-[0.99]"
                >
                  Invia Messaggio
                </button>
                <a
                  href={brand.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366] bg-[#25D366] py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5 hover:bg-[#1DB954] hover:shadow-[#25D366]/35 active:translate-y-0 active:scale-[0.99]"
                >
                  <MessageCircle size={20} />
                  Scrivici su WhatsApp
                </a>
                {formNetworkError && <p className="mt-3 font-sans text-sm text-[var(--template-error)]">Si e verificato un errore. Riprova o scrivici direttamente.</p>}
              </form>
            )}

            <div className="space-y-8">
              <div>
                <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Contatti</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4" id="sedi">
                    <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <div className="mb-2 font-semibold text-foreground">Indirizzo</div>
                      <div className="text-foreground">{brand.primaryLocation}, {brand.secondaryLocation}, {brand.cityLine}</div>
                    </div>
                  </div>
                  <ContactLink href={brand.phoneHref} icon={<Phone className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="Telefono" value={brand.phone} />
                  <ContactLink href={brand.emailHref} icon={<Mail className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="Email" value={brand.email} />
                  <ContactLink href={brand.whatsappHref} icon={<MessageCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary transition-transform group-hover:scale-110" />} label="WhatsApp" value={brand.phone} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 bg-[#050505] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">Dove Siamo</h3>
          <div className="aspect-video w-full overflow-hidden rounded-sm border border-border md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.6795809908203!2d12.4490219!3d41.8136625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13258b484eeaa0d5%3A0x9c2b12bb25d4364!2sScuola%20di%20ballo%20DanceAsFire%20The%20Club!5e0!3m2!1sen!2sit!4v1780835906833!5m2!1sen!2sit!4v1780835906833!5m2!1sen!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function TextInput({
  id,
  name,
  label,
  placeholder,
  hasError,
  setFormErrors,
  type = "text",
}: {
  id: string
  name: string
  label: string
  placeholder: string
  hasError?: boolean
  setFormErrors: Dispatch<SetStateAction<{ [key: string]: boolean }>>
  type?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[12px] font-semibold tracking-wider text-white uppercase">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="w-full rounded-xl bg-[#0A0A0A] px-4 py-3 text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition-[border-color,box-shadow] placeholder:text-[rgba(255,255,255,0.55)] focus:border-[rgba(212,175,55,0.75)] focus:shadow-[0_0_0_3px_rgba(212,175,55,0.12),0_12px_32px_rgba(0,0,0,0.28)] focus:outline-none"
        style={{ border: `1px solid ${hasError ? "var(--template-error)" : "rgba(212,175,55,0.25)"}` }}
        onFocus={() => setFormErrors((previous) => ({ ...previous, [name]: false }))}
        placeholder={placeholder}
      />
    </div>
  )
}

function ContactLink({ href, icon, label, value }: { href: string; icon: ReactNode; label: string; value: string }) {
  const content = (
    <>
      {icon}
      <div>
        <div className="font-semibold text-foreground transition-colors group-hover:text-primary">{label}</div>
        <div className="text-foreground transition-colors group-hover:text-primary">{value}</div>
      </div>
    </>
  )

  if (href === "#") {
    return <div className="group flex items-start gap-4">{content}</div>
  }

  return (
    <a href={href} className="group flex cursor-pointer items-start gap-4">
      {content}
    </a>
  )
}
