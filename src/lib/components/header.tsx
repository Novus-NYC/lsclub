"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { clubInfo, nav, site } from "@/data/site"
import { Arrow, Chevron, SocialIcon } from "./icons"

/** The utility strip scrolls away; the green bar under it stays pinned. */
export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [info, setInfo] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuBtn = useRef<HTMLButtonElement>(null)
  const panel = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener("scroll", on, { passive: true })
    return () => window.removeEventListener("scroll", on)
  }, [])

  // Close menus on navigation.
  useEffect(() => {
    setOpen(false)
    setInfo(false)
  }, [pathname])

  // Mobile panel: lock scroll, Escape closes, focus moves in and back out.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    panel.current?.querySelector<HTMLElement>("a,button")?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        menuBtn.current?.focus()
      }
      if (e.key === "Tab" && panel.current) {
        const items = Array.from(panel.current.querySelectorAll<HTMLElement>("a,button"))
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener("keydown", onKey)
    }
  }, [open])

  // Club Info dropdown: click outside or Escape closes.
  useEffect(() => {
    if (!info) return
    const onDown = (e: MouseEvent) => {
      if (!infoRef.current?.contains(e.target as Node)) setInfo(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setInfo(false)
        infoRef.current?.querySelector("button")?.focus()
      }
    }
    document.addEventListener("mousedown", onDown)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("keydown", onKey)
    }
  }, [info])

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/")
  const infoCurrent = clubInfo.some((l) => isCurrent(l.href))

  return (
    <>
      <div className="hidden bg-ink text-chalk md:block">
        <div className="wrap flex min-h-11 items-center justify-between gap-4 text-[0.875rem]">
          <a href={site.fieldStatusUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-11 items-center gap-2 font-semibold">
            <span className="size-2 rounded-full bg-yellow" aria-hidden="true" />
            <span className="draw">Field status</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <div className="flex items-center">
            <ul className="flex items-center">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={`Livingston Soccer Club on ${s.label}`} className="grid size-11 place-items-center transition-colors hover:text-yellow">
                    <SocialIcon name={s.label} className="size-[1.125rem]" />
                  </a>
                </li>
              ))}
            </ul>
            <Link href="/sign-in" className="group ml-2 inline-flex min-h-11 items-center border-l border-chalk/25 pl-4 font-semibold">
              <span className="draw">Member sign in</span>
            </Link>
          </div>
        </div>
      </div>

      <header className="site-header sticky top-0 z-50 bg-pitch text-chalk" data-scrolled={scrolled}>
        <div className="wrap flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Livingston Soccer Club, home">
            <Image src="/crest.png" alt="" width={310} height={370} priority className="h-11 w-auto shrink-0 xs:h-12" />
            <span className="min-w-0 whitespace-nowrap font-display text-[1rem] leading-[0.98] xs:text-[1.3125rem]">
              Livingston
              <span className="block text-yellow">Soccer Club</span>
            </span>
          </Link>

          <nav aria-label="Main" className="hidden nav:block">
            <ul className="flex items-center">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="nav-link" aria-current={isCurrent(l.href) ? "page" : undefined}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li ref={infoRef} className="relative">
                <button type="button" className="nav-link gap-1" aria-expanded={info} aria-controls="club-info-menu" aria-current={infoCurrent ? "page" : undefined} onClick={() => setInfo((v) => !v)}>
                  Club Info <Chevron className={`transition-transform ${info ? "rotate-180" : ""}`} />
                </button>
                <ul id="club-info-menu" hidden={!info} className="absolute right-0 top-full mt-2 w-60 border-2 border-chalk/20 bg-pitch py-2 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.7)]">
                  {clubInfo.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="flex min-h-11 items-center px-4 font-semibold text-chalk/90 hover:bg-turf hover:text-chalk" aria-current={isCurrent(l.href) ? "page" : undefined}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--yellow max-xs:px-3.5 max-xs:text-[0.9375rem]">
              Registration
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <button
              ref={menuBtn}
              type="button"
              className="grid size-12 place-items-center border-2 border-chalk/30 nav:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
                <span className="h-0.5 bg-chalk" />
                <span className="h-0.5 bg-chalk" />
                <span className="h-0.5 bg-chalk" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panel}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-[60] overflow-y-auto bg-pitch text-chalk nav:hidden"
      >
        <div className="wrap flex h-[var(--header-h)] items-center justify-between">
          <span className="font-display text-[1.3125rem] leading-[0.95]">
            Livingston <span className="block text-yellow">Soccer Club</span>
          </span>
          <button
            type="button"
            className="grid size-12 place-items-center border-2 border-chalk/30"
            aria-label="Close menu"
            onClick={() => {
              setOpen(false)
              menuBtn.current?.focus()
            }}
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.25">
              <path d="M4 4l12 12M16 4 4 16" />
            </svg>
          </button>
        </div>
        <nav aria-label="Mobile" className="wrap pb-12 pt-4">
          <a href={site.fieldStatusUrl} target="_blank" rel="noreferrer" className="mb-4 flex min-h-12 items-center gap-3 font-semibold">
            <span className="size-2.5 rounded-full bg-yellow" aria-hidden="true" />
            Field status today <Arrow dir="out" className="text-yellow" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <ul className="border-t-2 border-chalk/20">
            {[{ label: "Home", href: "/" }, ...nav].map((l) => (
              <li key={l.href} className="border-b-2 border-chalk/20">
                <Link href={l.href} className="flex min-h-[3.75rem] items-center justify-between font-display text-[1.75rem] leading-none" aria-current={pathname === l.href ? "page" : undefined}>
                  {l.label}
                  <Arrow className="text-[1.25rem] text-yellow" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="label mt-8 text-yellow">Club Info</p>
          <ul className="mt-2 grid grid-cols-2 gap-x-4">
            {clubInfo.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="flex min-h-12 items-center text-[1.125rem] font-semibold">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/sign-in" className="flex min-h-12 items-center text-[1.125rem] font-semibold">
                Member sign in
              </Link>
            </li>
          </ul>
          <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--yellow mt-8 w-full">
            Registration <Arrow dir="out" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <ul className="mt-6 flex gap-2">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={`Livingston Soccer Club on ${s.label}`} className="grid size-12 place-items-center border-2 border-chalk/25">
                  <SocialIcon name={s.label} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
