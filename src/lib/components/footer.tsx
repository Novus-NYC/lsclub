import Image from "next/image"
import Link from "next/link"
import { board, clubInfo, nav, site } from "@/data/site"
import { Arrow, CenterCircle, SocialIcon } from "./icons"

const reach = board.filter((b) => ["President", "Travel Director", "KinderKickers", "Referee Coordinator"].includes(b.role))

/** The end of every page: the pitch's far touchline. Registration, who to email, every page. */
export default function Footer() {
  return (
    <footer className="relative overflow-clip bg-pitch text-chalk">
      <CenterCircle className="pointer-events-none absolute -right-[18rem] -top-[10rem] w-[44rem] text-chalk/10 max-md:-right-[22rem] max-md:w-[34rem]" />

      <div className="wrap relative pt-[var(--s-normal)]">
        <div className="grid12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <p className="label text-yellow">Who runs the club</p>
            <p className="mt-4 max-w-[14ch] font-display text-[clamp(2.25rem,1rem+4.2vw,4.75rem)] leading-[0.98]">
              Livingston Soccer Club is a volunteer organization.
            </p>
            <p className="t-lede mt-6 max-w-[36rem] text-chalk/90">
              All Board Members volunteer their time for the benefit of the children who play in our club.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--yellow">
                Registration <Arrow dir="out" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/coaches-corner" className="btn btn--chalk">
                Volunteer to coach <Arrow />
              </Link>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-8 lg:col-span-4 lg:col-start-9">
            <h2 className="label text-yellow">Email the board</h2>
            <dl className="mt-3 border-t-2 border-chalk/20">
              {reach.map((b) => (
                <div key={b.role} className="flex flex-wrap items-baseline justify-between gap-x-4 border-b-2 border-chalk/20 py-1">
                  <dt className="text-[0.9375rem] text-mint">{b.role}</dt>
                  <dd>
                    <a href={`mailto:${b.email}`} className="group inline-flex min-h-11 items-center font-semibold">
                      <span className="draw">{b.email}</span>
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <Link href="/contacts" className="group mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-yellow">
              <span className="draw">All contacts and grade coordinators</span> <Arrow />
            </Link>
          </div>
        </div>

        <div className="mt-[var(--s-tight)] grid grid-cols-2 gap-x-[var(--gutter)] gap-y-10 border-t-2 border-chalk/20 pt-10 lg:grid-cols-12">
          <nav aria-label="Footer: Programs" className="lg:col-span-3">
            <h2 className="label text-yellow">Programs</h2>
            <ul className="mt-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex min-h-11 items-center text-[1.0625rem]">
                    <span className="draw">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Footer: Club Info" className="lg:col-span-3">
            <h2 className="label text-yellow">Club Info</h2>
            <ul className="mt-3">
              {[{ label: "Home", href: "/" }, ...clubInfo].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex min-h-11 items-center text-[1.0625rem]">
                    <span className="draw">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 lg:col-span-5 lg:col-start-8">
            <h2 className="label text-yellow">Mail</h2>
            <address className="mt-4 text-[1.0625rem] not-italic leading-relaxed">
              {site.name}
              <br />
              {site.address.line1}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </address>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href={site.storeUrl} target="_blank" rel="noreferrer" className="group inline-flex min-h-11 items-center gap-2 font-semibold">
                <span className="draw">LSC Spirit Wear store</span> <Arrow dir="out" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <ul className="-ml-3 flex">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" aria-label={`Livingston Soccer Club on ${s.label}`} className="grid size-11 place-items-center transition-colors hover:text-yellow">
                      <SocialIcon name={s.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t-2 border-chalk/20 py-5 text-[0.9375rem] text-mint">
          <p className="flex items-center gap-3">
            <Image src="/crest.png" alt="" width={310} height={370} className="h-9 w-auto" />
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
          </p>
          <a href="https://novusnyc.org" target="_blank" rel="noreferrer" className="group inline-flex min-h-11 items-center font-semibold text-yellow">
            <span className="draw">Made by Novus</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
