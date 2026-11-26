import type { Metadata } from "next"
import Image from "next/image"
import { clubFile, site } from "@/data/site"
import DocList from "@/lib/components/doc-list"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"

export const metadata: Metadata = {
  title: "KinderKickers",
  description: "LSC KinderKickers: a non-competitive Saturday morning program for Pre-K and Kindergarten at Harrison, led by professional trainers from Go2Soccer.",
}

const schedule = [
  { date: "September 5", note: "", s1: "Rotation A", s2: "Rotation B" },
  { date: "September 19", note: "", s1: "Rotation B", s2: "Rotation A" },
  { date: "September 26", note: "", s1: "Rotation A", s2: "Rotation B" },
  { date: "October 3", note: "", s1: "Rotation B", s2: "Rotation A" },
  { date: "October 10", note: "Parents’ Day", s1: "Rotation A", s2: "Rotation B" },
  { date: "October 17", note: "", s1: "Rotation B", s2: "Rotation A" },
  { date: "October 24", note: "", s1: "Rotation A", s2: "Rotation B" },
  { date: "October 31", note: "Trophy Day!", s1: "Rotation B", s2: "Rotation A" },
]

const rotations = [
  { name: "Rotation A", teams: [{ t: "Pre-K Girls", f: "1, 2, 3" }, { t: "Kindergarten Boys", f: "4, 5, 6, 7, 8, 9" }] },
  { name: "Rotation B", teams: [{ t: "Pre-K Boys", f: "5, 6, 7, 8, 9" }, { t: "Kindergarten Girls", f: "1, 2, 3, 4" }] },
]

export default function KinderKickers() {
  return (
    <>
      <PageHeader
        title="KinderKickers"
        label="Pre-K & Kindergarten"
        intro="An enjoyable non-competitive program, led by professional trainers from Go2Soccer, designed to help our youngest soccer players develop basic soccer skills."
      >
        <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--yellow">
          Click here to register <Arrow dir="out" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a href="mailto:kinderkickers@lsclub.com" className="btn btn--chalk">
          Email Carlos
        </a>
      </PageHeader>

      {/* At a glance. */}
      <section aria-labelledby="glance" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-6">
            <h2 id="glance" className="t-h2 text-pitch" data-reveal="">
              At a glance
            </h2>
            <div className="prose-club mt-6 text-[1.1875rem]" data-reveal="">
              <p>
                Games and activities are formatted to introduce children to fundamental soccer skills while having fun with a soccer ball. The lessons teach basic soccer skills while masquerading as children&rsquo;s games, so each child is constantly kicking his or her own ball: &ldquo;maximum touches on the ball.&rdquo;
              </p>
              <p>
                LSC KinderKickers does not teach player positioning or team tactics, as such instruction is a more advanced skill more suitable for older children.
              </p>
            </div>
          </div>
          <dl className="col-span-12 grid gap-x-[var(--gutter)] sm:grid-cols-2 lg:col-span-5 lg:col-start-8 lg:grid-cols-1">
            {[
              { k: "Who", v: "Girls and boys born before March 31, 2023, up to Kindergarten. Teams of about 12 to 16 kids, by grade and by gender." },
              { k: "Where", v: "Harrison Elementary School." },
              { k: "When", v: "Saturday mornings, one hour a week." },
              { k: "Parents", v: "KinderKickers is not a “drop off” program. Parents are expected to stay and watch their children play." },
            ].map((d, i) => (
              <div key={d.k} className="border-t-2 border-pitch py-4" data-reveal="" style={{ "--i": i } as React.CSSProperties}>
                <dt className="font-display text-[1.75rem] leading-none text-pitch">{d.k}</dt>
                <dd className="mt-2 text-[1.0625rem]">{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Fall schedule, as the handout. */}
      <section aria-labelledby="schedule" className="bg-turf text-chalk">
        <div className="wrap py-[var(--s-normal)]">
          <div className="grid12 items-end gap-y-6">
            <h2 id="schedule" className="t-h2 col-span-12 lg:col-span-7" data-reveal="">
              Fall 2026 schedule
            </h2>
            <p className="col-span-12 text-[1.125rem] text-chalk/90 lg:col-span-4 lg:col-start-9" data-reveal="">
              Session 1 runs 9:00 to 10:00 AM and Session 2 runs 10:30 to 11:30 AM. Teams rotate between them each week.
            </p>
          </div>
          <div className="grid12 mt-10 gap-y-12">
            <div className="col-span-12 lg:col-span-7" data-reveal="">
              <table className="sheet">
                <caption className="sr-only">Fall 2026 KinderKickers dates and which rotation plays in each session</caption>
                <thead>
                  <tr>
                    <th scope="col" className="text-mint">
                      Date
                    </th>
                    <th scope="col" className="text-yellow">
                      9:00 AM
                    </th>
                    <th scope="col" className="text-yellow">
                      10:30 AM
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((r) => (
                    <tr key={r.date}>
                      <th scope="row" className="!text-[1.0625rem] !normal-case !tracking-normal">
                        {r.date}
                        {r.note ? <span className="mt-0.5 block text-[0.9375rem] font-semibold text-yellow">{r.note}</span> : null}
                      </th>
                      <td>{r.s1.replace("Rotation ", "")}</td>
                      <td>{r.s2.replace("Rotation ", "")}</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row" className="!text-[1.0625rem] !normal-case !tracking-normal">
                      November 7 &amp; 14
                    </th>
                    <td colSpan={2} className="font-semibold text-yellow">
                      Rain dates. Save the date in case of a canceled game week.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9">
              {rotations.map((r) => (
                <div key={r.name} className="mb-10 border-t-2 border-chalk/40 pt-4" data-reveal="">
                  <h3 className="font-display text-[2.25rem] leading-none text-yellow">{r.name}</h3>
                  <dl className="mt-4">
                    {r.teams.map((t) => (
                      <div key={t.t} className="flex items-baseline justify-between gap-4 py-1.5">
                        <dt className="font-semibold">{t.t}</dt>
                        <dd className="text-chalk/85">Fields {t.f}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Managers and coaches. */}
      <section aria-labelledby="managers" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="managers" className="t-h2 text-pitch" data-reveal="">
              Coaches and team managers
            </h2>
            <div className="prose-club mt-6 text-[1.125rem]" data-reveal="">
              <p>
                Professional soccer coaches from Go2Soccer lead every session, with weekly lesson plans developed with the Livingston Soccer Club. As of 2012, KinderKickers teams are no longer coached by parents or Team Managers.
              </p>
              <p>
                Each team has a parent volunteer KK Team Manager, the liaison between parents and the club, who emails weekly practice reminders and other brief announcements.
              </p>
            </div>
            <a href="https://www.go2soccer.net/" target="_blank" rel="noreferrer" className="mt-8 inline-block" aria-label="Go2Soccer (opens in a new tab)">
              <Image src="/partners/go2soccer.png" alt="" width={259} height={77} className="h-12 w-auto mix-blend-multiply" />
            </a>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal="">
            <DocList
              docs={[
                { label: "2026 LSC KinderKickers Soccer Program (Info Guide)", href: clubFile("/_files/kinderkickers/2026%20LSC%20KinderKickers%20Guidelines%20-%20Fall.pdf"), kind: "PDF" },
                { label: "KK Schedule 2026", href: clubFile("/_files/kinderkickers/KK%20Schedule%202026.pdf"), kind: "PDF" },
                { label: "Fall 2026 KK Field Map", href: clubFile("/_files/in-town-program/Fall%202026%20KK%20Field%20Map.pdf"), kind: "PDF" },
              ]}
            />
            <p className="mt-8 text-[1.0625rem]">
              Please reach out to our KinderKickers coordinator, Carlos Frade, at{" "}
              <a href="mailto:kinderkickers@lsclub.com" className="ul font-semibold text-turf">
                kinderkickers@lsclub.com
              </a>{" "}
              with any questions.
            </p>
          </div>
        </div>
      </section>

      <NextSteps
        title="Next up: first grade"
        links={[
          { label: "In-Town, grades 1 to 12", href: "/in-town" },
          { label: "Fields & directions", href: "/fields" },
          { label: "FAQs", href: "/faqs" },
        ]}
      />
    </>
  )
}
