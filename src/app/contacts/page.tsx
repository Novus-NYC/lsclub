import type { Metadata } from "next"
import Link from "next/link"
import { board, site } from "@/data/site"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"

export const metadata: Metadata = {
  title: "Contacts",
  description: "Email the Livingston Soccer Club board: president, vice president, treasurer, secretary, referee coordinator, KinderKickers, travel director and webmaster.",
}

export default function Contacts() {
  return (
    <>
      <PageHeader
        title="Contacts"
        label="Club Info"
        intro="Livingston Soccer Club is a volunteer organization. All Board Members volunteer their time for the benefit of the children who play in our club."
      />

      <section aria-labelledby="board" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="board" className="t-h2 text-pitch" data-reveal="">
              The board
            </h2>
            <p className="mt-6 text-[1.125rem]" data-reveal="">
              Please contact the LSC Board Members with any questions, comments or concerns.
            </p>
            <div className="mt-10 border-l-4 border-yellow pl-5" data-reveal="">
              <p className="label text-turf">Mail</p>
              <address className="mt-2 text-[1.125rem] not-italic leading-relaxed">
                {site.name}
                <br />
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </address>
            </div>
          </div>
          <ul className="col-span-12 border-t-2 border-pitch lg:col-span-7 lg:col-start-6">
            {board.map((b, i) => (
              <li key={b.role} className="grid gap-x-[var(--gutter)] gap-y-1 border-b-2 border-pitch/25 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:items-baseline" data-reveal="" style={{ "--i": i % 4 } as React.CSSProperties}>
                <div>
                  <p className="label text-turf">{b.role}</p>
                  <p className="mt-1 font-display text-[clamp(1.5rem,1.2rem+1vw,2.125rem)] leading-none text-pitch">{b.name}</p>
                </div>
                <a href={`mailto:${b.email}`} className="group inline-flex min-h-11 items-center gap-2 break-all text-[1.125rem] font-semibold sm:justify-self-end">
                  <span className="draw">{b.email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="ask" className="bg-turf text-chalk">
        <div className="wrap grid12 items-end gap-y-8 py-[var(--s-tight)]">
          <div className="col-span-12 lg:col-span-7">
            <h2 id="ask" className="t-h2" data-reveal="">
              &ldquo;Ask three then me&rdquo;
            </h2>
            <p className="t-lede mt-6 text-chalk/90" data-reveal="">
              First, read the FAQs, then ask your coach, then the Grade Coordinator. If this still doesn&rsquo;t help, ask the head of In-Town. The last person to email is the president.
            </p>
          </div>
          <div className="col-span-12 flex flex-wrap gap-3 lg:col-span-4 lg:col-start-9 lg:justify-end">
            <Link href="/faqs" className="btn btn--yellow">
              FAQs <Arrow />
            </Link>
            <Link href="/coaches-corner#grade-coordinators" className="btn btn--chalk">
              Grade coordinators <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <NextSteps
        links={[
          { label: "Fields & directions", href: "/fields" },
          { label: "Safe Sport", href: "/safe-sport" },
          { label: "FAQs", href: "/faqs" },
        ]}
      />
    </>
  )
}
