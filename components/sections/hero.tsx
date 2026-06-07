import { ChevronRight, MessageCircle } from "lucide-react"

import { stats } from "@/lib/site-config"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" style={{ background: "radial-gradient(ellipse at 70% 30%, #5C1535 0%, #3D0D26 50%, #250818 100%)" }}>
      <canvas id="bokehCanvas" className="pointer-events-none absolute inset-0 z-[1] h-full w-full" />


      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 75% 25%, rgba(192,21,42,0.22) 0%, rgba(139,14,30,0.12) 40%, transparent 65%), linear-gradient(135deg, rgba(15,15,15,0.98) 0%, rgba(22,22,22,0.95) 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 15% 80%, rgba(192,21,42,0.08) 0%, transparent 30%), radial-gradient(circle at 90% 15%, rgba(139,14,30,0.10) 0%, transparent 35%)",
        }}
      />

      <div
        className="absolute inset-y-0 right-0 z-0 w-full [background-position:center_8%] sm:[background-position:center_15%] lg:w-[62%]"
        style={{
          backgroundImage: "url('/romadancestudio/hero.jpg')",
          backgroundPosition: "center 15%",
          backgroundSize: "cover",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background: [
              "linear-gradient(to right, #0F0F0F 0%, #0F0F0F 2%, rgba(15,15,15,0.95) 15%, rgba(15,15,15,0.6) 35%, rgba(15,15,15,0.0) 55%)",
              "linear-gradient(to left, #0F0F0F 0%, rgba(15,15,15,0.95) 8%, rgba(15,15,15,0.4) 22%, transparent 40%)",
              "linear-gradient(to bottom, #0F0F0F 0%, rgba(15,15,15,0.8) 8%, transparent 25%)",
              "linear-gradient(to top, #0F0F0F 0%, rgba(15,15,15,0.9) 12%, rgba(15,15,15,0.3) 28%, transparent 45%)",
            ].join(", ")
          }}
        />
      </div>

      <div className="relative z-10 ml-0 max-w-7xl px-4 pt-32 pb-24 text-left sm:px-6 sm:pt-36 sm:pb-28 lg:mx-auto lg:w-1/2 lg:px-8 lg:py-0">
        <h1 className="animate-fade-in-up animate-delay-200 mb-6 max-w-none font-serif text-4xl leading-tight font-bold text-white sm:text-5xl lg:max-w-xl lg:text-6xl">
          Coltiviamo talento, disciplina ed emozione
        </h1>
        <p className="animate-fade-in-up animate-delay-200 mb-10 max-w-none text-base leading-relaxed text-pretty text-white sm:text-lg lg:max-w-xl lg:text-xl">
          Dalla tecnica accademica alla danza moderna, accompagniamo ogni allievo in un percorso di crescita artistica fatto di movimento, musica e presenza scenica.
        </p>
        <div className="animate-fade-in-up animate-delay-300 flex flex-col justify-start gap-4 sm:flex-row">
          <a
            href="#corsi"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F5F5F5]/60 bg-transparent px-8 py-4 text-lg font-semibold text-[#F5F5F5] shadow-sm transition-all hover:bg-[#FFFFFF]/10"
          >
            Inizia il tuo percorso
            <ChevronRight size={20} />
          </a>
          <a
            href="#contatti"
            className="rounded-full border border-[#F5F5F5]/60 bg-card/70 px-8 py-4 text-lg font-semibold text-[#F5F5F5] shadow-sm transition-all hover:bg-[#FFFFFF]/10"
          >
            <span className="inline-flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Contattaci
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-foreground/50 pt-2">
          <div className="h-2 w-1 rounded-full bg-foreground/70" />
        </div>
      </div>
    </section>
  )
}

export function StatsStrip() {
  return (
    <section
      className="border-y border-[#D8B978]/18 py-10 sm:py-14"
      style={{ background: "linear-gradient(135deg, #141414 0%, #1A1A1A 50%, #141414 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 text-center min-[420px]:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 shadow-sm backdrop-blur-sm"
            >
              <div className="mb-1 font-serif text-3xl font-semibold text-[#C0152A] sm:text-4xl">{stat.number}</div>
              <div className="text-xs font-medium tracking-[0.18em] text-white/50 uppercase sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
