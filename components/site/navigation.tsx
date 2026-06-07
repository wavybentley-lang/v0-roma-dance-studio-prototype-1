"use client"

import { ChevronRight, Menu, X } from "lucide-react"
import { useRef } from "react"

import { brand, type NavLink } from "@/lib/site-config"

type NavigationProps = {
  navLinks: NavLink[]
  activeSection: string | null
  isScrolled: boolean
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export function Navigation({
  navLinks,
  activeSection,
  isScrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavigationProps) {
  const touchStartXRef = useRef<number | null>(null)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${mobileMenuOpen ? "z-[9500]" : "z-50"} ${
        isScrolled
          ? "border-b border-[#C0152A]/20 bg-[#0A0A0A] shadow-[0_18px_60px_rgba(10,10,10,0.95)] backdrop-blur-md"
          : "border-b border-[#C0152A]/10 bg-[#0F0F0F] backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between gap-5 py-5 sm:h-32 lg:h-32">
          <a href="#" className="relative z-[60] flex max-w-[260px] flex-col items-start leading-none sm:max-w-[320px]">
            <span className="pointer-events-none absolute -left-8 top-1/2 h-24 w-56 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,185,120,0.18)_0%,rgba(158,111,111,0.08)_38%,transparent_72%)] blur-xl" />
            <span className="relative mb-1.5 border-l border-white/40 pl-3 text-[8px] font-semibold tracking-[0.38em] text-white/70 uppercase sm:text-[9px]">
              SCUOLA DI DANZA
            </span>
            <span
              className="relative font-serif text-[2.35rem] leading-[0.82] font-semibold tracking-wide text-[#F5F5F5] italic sm:text-[3.05rem]"
              style={{ textShadow: "0 0 28px rgba(216,185,120,0.22)" }}
            >
              {brand.name}
            </span>
            <span className="relative mt-2 self-end font-serif text-[0.95rem] leading-none text-white/80 italic sm:text-[1.05rem]">
              {brand.tagline}
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-[12px] font-semibold tracking-[0.16em] uppercase transition-all duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-white after:transition-all after:duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "text-[#F5F5F5] after:w-full after:opacity-80"
                      : "text-[#F5F5F5]/62 after:w-0 after:opacity-0 hover:text-[#F5F5F5] hover:after:w-full hover:after:opacity-55"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contatti"
              className="rounded-full border-2 border-white px-6 py-2 font-semibold text-white transition-all hover:bg-white hover:text-[#0F0F0F]"
            >
              Iscriviti Ora
            </a>
          </div>

          <button
            className="z-[9520] rounded-full border border-[#C0152A]/30 bg-[#0F0F0F] p-2 text-[#F5F5F5] shadow-lg shadow-black/40 backdrop-blur-md transition-all duration-300 hover:border-[#C0152A]/60 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[9500] flex min-h-[100dvh] w-screen items-center justify-center bg-[rgba(10,10,10,0.95)] px-4 py-20 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        onTouchStart={(event) => {
          touchStartXRef.current = event.touches[0].clientX
        }}
        onTouchEnd={(event) => {
          if (touchStartXRef.current !== null) {
            const delta = event.changedTouches[0].clientX - touchStartXRef.current
            if (delta > 60) setMobileMenuOpen(false)
            touchStartXRef.current = null
          }
        }}
      >
        <div
          className={`relative w-[calc(100%-32px)] max-w-[430px] overflow-hidden rounded-[1.35rem] border border-white/20 bg-[#0F0F0F] p-6 shadow-[0_24px_70px_rgba(10,10,10,0.95)] transition-all duration-300 sm:p-7 ${
            mobileMenuOpen ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-95 opacity-0"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-36 rounded-full bg-[radial-gradient(circle,rgba(216,185,120,0.18)_0%,rgba(158,111,111,0.08)_42%,transparent_72%)] blur-2xl" />
          <div className="relative mb-6 border-b border-white/15 pb-6 text-center">
            <p className="text-[8px] font-semibold tracking-[0.38em] text-white/70 uppercase">SCUOLA DI DANZA</p>
            <p
              className="mt-2 font-serif text-[2.75rem] leading-[0.82] font-semibold tracking-wide text-[#F5F5F5] italic"
              style={{ textShadow: "0 0 28px rgba(216,185,120,0.22)" }}
            >
              {brand.name}
            </p>
            <p className="mt-3 font-serif text-[1.05rem] text-white/80 italic">{brand.tagline}</p>
          </div>
          <div className="relative flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex min-h-14 items-center justify-between rounded-xl border border-white/15 bg-[#1A1A1A]/88 px-4 py-3.5 text-sm font-semibold tracking-[0.14em] text-[#F5F5F5]/82 uppercase shadow-sm shadow-black/20 transition-all duration-300 hover:border-white/40 hover:bg-[#1A1A1A] hover:text-[#F5F5F5] active:scale-[0.99]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ChevronRight size={17} className="text-white/60 transition-transform group-hover:translate-x-0.5 group-hover:text-white" />
              </a>
            ))}
            <a
              href="#contatti"
              className="rounded-full border-2 border-white px-6 py-2 font-semibold text-white transition-all hover:bg-white hover:text-[#0F0F0F]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Iscriviti Ora
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
