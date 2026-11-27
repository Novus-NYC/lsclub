"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { fall2026 } from "@/data/site"

/** Fall champions. Desktop: the team sheet on the left, one big photo on the right that follows
 *  whichever team you point at or pick. Phones: a strip of photo cards you swipe through. */
export default function Champions() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = fall2026.length
    const next = e.key === "ArrowDown" || e.key === "ArrowRight" ? (i + 1) % n : e.key === "ArrowUp" || e.key === "ArrowLeft" ? (i - 1 + n) % n : e.key === "Home" ? 0 : e.key === "End" ? n - 1 : -1
    if (next < 0) return
    e.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <>
      {/* Phones and small tablets */}
      <ul className="champs mt-8 md:hidden">
        {fall2026.map((t) => (
          <li key={t.team} className="champ">
            <Link href="/news/fall-2026-travel-champions" className="group block">
              <div className="duo duo--deep relative" style={{ aspectRatio: "4 / 3" }}>
                <Image src={t.photo.src} alt={t.photo.alt} fill sizes="84vw" quality={85} className="object-cover" />
                <p className="absolute inset-x-0 bottom-0 z-[1] p-4 font-display text-[1.75rem] leading-[0.95] text-chalk">{t.team}</p>
              </div>
              <p className="mt-3 text-[1.0625rem] font-semibold text-pitch">{t.result}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Tablets up */}
      <div className="mt-[clamp(2.5rem,5vw,4rem)] hidden grid-cols-12 items-start gap-x-[var(--gutter)] md:grid">
        <div role="tablist" aria-label="Fall 2026 champion teams" aria-orientation="vertical" className="col-span-5 border-t-2 border-pitch lg:col-span-4">
          {fall2026.map((t, i) => {
            const on = i === active
            return (
              <button
                key={t.team}
                ref={(el) => {
                  tabs.current[i] = el
                }}
                id={`champ-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls={`champ-panel-${i}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className="champ-tab group relative block w-full border-b-2 border-pitch/20 py-[clamp(1rem,1.8vw,1.5rem)] pl-6 text-left"
                data-on={on}
              >
                <span aria-hidden="true" className="champ-tab__mark absolute bottom-[clamp(1rem,1.8vw,1.5rem)] left-0 top-[clamp(1rem,1.8vw,1.5rem)] w-[6px] bg-yellow" />
                <span className="block font-display text-[clamp(1.75rem,1rem+2vw,3rem)] leading-none">{t.team}</span>
                <span className="mt-2 block text-[1rem] font-semibold">{t.result}</span>
              </button>
            )
          })}
        </div>

        <div className="relative col-span-7 -mr-[var(--gutter)] lg:col-span-8">
          <div className="relative overflow-hidden bg-pitch" style={{ aspectRatio: "3 / 2" }}>
            {fall2026.map((t, i) => (
              <div key={t.team} id={`champ-panel-${i}`} role="tabpanel" aria-labelledby={`champ-tab-${i}`} className="champ-panel absolute inset-0" data-on={i === active}>
                <Image src={t.photo.src} alt={t.photo.alt} fill sizes="(min-width: 1024px) 64vw, 58vw" quality={85} className="object-cover" />
              </div>
            ))}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(12,31,21,0.85),transparent_42%)]" />
            <p aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 p-[clamp(1.25rem,2.5vw,2.25rem)] font-display text-[clamp(2.5rem,1rem+4vw,5.5rem)] leading-[0.9] text-chalk">
              {fall2026[active].team}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
