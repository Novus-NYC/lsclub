import Link from "next/link"
import { site, type NavLink } from "@/data/site"
import { Arrow } from "./icons"

/** Yellow band before the footer: register, plus where to go next from this page. */
export default function NextSteps({ links, title = "Ready for the season?" }: { links: NavLink[]; title?: string }) {
  return (
    <section aria-labelledby="next-steps" className="on-chalk bg-yellow text-pitch">
      <div className="wrap grid12 gap-y-8 py-[var(--s-tight)]">
        <div className="col-span-12 lg:col-span-5">
          <h2 id="next-steps" className="t-h2">
            {title}
          </h2>
          <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--pitch mt-7">
            Registration <Arrow dir="out" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <nav aria-label="Related pages" className="col-span-12 lg:col-span-6 lg:col-start-7">
          <ul className="border-t-2 border-pitch">
            {links.map((l) => (
              <li key={l.href} className="border-b-2 border-pitch">
                <Link href={l.href} className="group flex min-h-[4rem] items-center justify-between gap-4 py-3 font-display text-[clamp(1.5rem,1.1rem+1.4vw,2.375rem)] leading-none">
                  <span className="draw">{l.label}</span>
                  <Arrow className="text-[0.7em] transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
