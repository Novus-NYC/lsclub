import type { Metadata } from "next"
import Link from "next/link"
import { clubFile, site } from "@/data/site"
import DocList from "@/lib/components/doc-list"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"

export const metadata: Metadata = {
  title: "Travel",
  description: "LSC Travel: competitive soccer for Livingston players, U8 to U19, with professional trainers, tryouts in May, and Fall and Spring seasons.",
}

const objectives = [
  "Enable our children to have fun playing competitive soccer.",
  "Teach good sportsmanship toward teammates and opposing players.",
  "Provide an ongoing program of high quality, expert professional soccer training for Livingston’s more dedicated and committed youth soccer players.",
  "Make it more likely that our children will continue to play competitive soccer at higher levels.",
  "Increase exposure to high school and college coaches.",
]

const season = [
  { item: "Practices begin", fall: "Late August", spring: "Mid-March" },
  { item: "League games begin", fall: "September", spring: "Early April" },
  { item: "Season concludes", fall: "Mid-November", spring: "Mid-June" },
]

const costs = [
  { group: "U8", total: "$1,586" },
  { group: "U9 to U10", total: "$1,332" },
  { group: "U11 to U12", total: "$1,254" },
  { group: "U13 to U14", total: "$1,155" },
]

const committee = ["Michael Anderson, Chair", "Andy Feigenberg", "Carrie Duranceau", "Kaustubh Hardikar"]

export default function Travel() {
  return (
    <>
      <PageHeader
        title="Travel"
        label="U8 to U19"
        intro="The purpose of LSC Travel is to foster organized soccer at a more competitive level, and give the more dedicated and committed Livingston athlete the chance to develop into the best soccer player possible."
        image={{ src: "/photos/fall-2026/u13-wildcats-mcysa.jpg", alt: "The U13 Wildcats in green on a turf field after winning their MCYSA flight", width: 1600, height: 1200, caption: "U13 Wildcats, MCYSA flight winners, Fall 2026" }}
      >
        <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--yellow">
          Registration <Arrow dir="out" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <Link href="/news/travel-vs-club-soccer" className="btn btn--chalk">
          Travel vs Club Soccer <Arrow />
        </Link>
      </PageHeader>

      {/* Objectives. */}
      <section aria-labelledby="objectives" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="objectives" className="t-h2 text-pitch" data-reveal="">
              What LSC Travel is for
            </h2>
            <p className="mt-6 text-[1.1875rem]" data-reveal="">
              Each athlete must play two full seasons of soccer, Fall and Spring. If an applicant cannot commit to two full seasons, the athlete should not try out.
            </p>
          </div>
          <ul className="col-span-12 border-t-2 border-pitch lg:col-span-7 lg:col-start-6">
            {objectives.map((o, i) => (
              <li key={i} className="border-b-2 border-pitch/25 py-5 font-display text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-[1.1] text-pitch" data-reveal="" style={{ "--i": i } as React.CSSProperties}>
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The season, in numbers from the General Information sheet. */}
      <section aria-labelledby="season" className="bg-turf text-chalk">
        <div className="wrap py-[var(--s-normal)]">
          <h2 id="season" className="t-h2 max-w-[14ch]" data-reveal="">
            The 2025&ndash;2026 season
          </h2>
          <div className="grid12 mt-12 gap-y-12">
            <div className="col-span-12 lg:col-span-6" data-reveal="">
              <table className="sheet">
                <caption className="sr-only">Expected schedule, Fall and Spring</caption>
                <thead>
                  <tr>
                    <th scope="col" className="text-mint">
                      Expected schedule
                    </th>
                    <th scope="col" className="text-yellow">
                      Fall
                    </th>
                    <th scope="col" className="text-yellow">
                      Spring
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {season.map((r) => (
                    <tr key={r.item}>
                      <th scope="row" className="!text-[0.875rem]">
                        {r.item}
                      </th>
                      <td className="text-[1.125rem] font-semibold">{r.fall}</td>
                      <td className="text-[1.125rem] font-semibold">{r.spring}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <dl className="col-span-12 grid grid-cols-2 gap-x-[var(--gutter)] gap-y-10 lg:col-span-5 lg:col-start-8">
              {[
                { n: "16", t: "Games", d: "About 8 league games in the Fall and 8 in the Spring, generally played on Sundays." },
                { n: "2", t: "Tournaments", d: "Each team is expected to play at least two." },
                { n: "60", t: "Hours of training", d: "About 60 hours of professional training a year for U8 to U15 teams, half each season." },
                { n: "2", t: "Sessions a week", d: "One and one-half hours each, across both seasons." },
              ].map((s, i) => (
                <div key={s.t} className="border-t-2 border-chalk/40 pt-4" data-reveal="" style={{ "--i": i } as React.CSSProperties}>
                  <dt>
                    <span className="block font-display text-[clamp(3.5rem,2.5rem+3vw,5.5rem)] leading-[0.85] text-yellow">{s.n}</span>
                    <span className="mt-2 block font-semibold">{s.t}</span>
                  </dt>
                  <dd className="mt-1 text-[0.9375rem] text-chalk/85">{s.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Tryouts. */}
      <section aria-labelledby="tryouts" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-6">
            <h2 id="tryouts" className="t-h2 text-pitch" data-reveal="">
              Tryouts are typically held in May
            </h2>
            <div className="prose-club mt-6 text-[1.125rem]" data-reveal="">
              <p>
                Other than the high-school-age-level teams, all athletes must attend competitive tryouts to be considered for a Travel team for the next seasonal year. Some athletes who try out will not make a team.
              </p>
              <p>
                An outside professional entity is hired by the LSC Travel Committee to conduct the tryouts. Members of the Travel Committee and the Board of Trustees have no input in their own child&rsquo;s age group, and the decision of the Travel Committee is final.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8" data-reveal="">
            <h3 className="label text-turf">Selections use</h3>
            <ul className="mt-3 border-t-2 border-pitch">
              {["Tryout results", "Trainer evaluations (existing Travel players)", "In-Town evaluations (new-to-Travel players)", "Travel Manager evaluations (attendance, commitment, teamwork)"].map((c) => (
                <li key={c} className="border-b-2 border-pitch/25 py-3.5 text-[1.125rem] font-semibold">
                  {c}
                </li>
              ))}
            </ul>
            <h3 className="label mt-10 text-turf">Travel Committee</h3>
            <ul className="mt-3 text-[1.125rem]">
              {committee.map((c) => (
                <li key={c} className="py-1">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Cost. */}
      <section aria-labelledby="cost" className="on-chalk bg-yellow text-pitch">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="cost" className="t-h2" data-reveal="">
              Full-year cost, 2025/2026
            </h2>
            <p className="mt-6 text-[1.125rem]" data-reveal="">
              Registration (with the fall and spring field tax), training fees and game day coaching fees, as published in Registration and Cost 2025. The exact amount for the coming soccer year is listed in the Acceptance notification.
            </p>
          </div>
          <dl className="col-span-12 grid grid-cols-2 gap-x-[var(--gutter)] lg:col-span-6 lg:col-start-7" data-reveal="">
            {costs.map((c) => (
              <div key={c.group} className="border-t-2 border-pitch py-5">
                <dt className="label">{c.group}</dt>
                <dd className="mt-2 font-display text-[clamp(2.25rem,1.6rem+2.4vw,4rem)] leading-none tabular-nums">{c.total}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Documents. */}
      <section aria-labelledby="guidelines" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="guidelines" className="t-h2 text-pitch" data-reveal="">
              LSC Travel guidelines
            </h2>
            <p className="mt-6 text-[1.125rem]" data-reveal="">
              Be sure to read over the guidelines to understand what the program is all about!
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal="">
            <DocList
              docs={[
                { label: "General Information 2025–2026", href: clubFile("/_files/travel-program/UTF-8General%20Information%202025-2026.pdf"), kind: "PDF" },
                { label: "Registration and Cost 2025", href: clubFile("/_files/travel-program/Registration%20and%20Cost%202025.pdf"), kind: "PDF" },
                { label: "Team Formation and Tryout Process 2025–2026", href: clubFile("/_files/travel-program/UTF-8Team%20Formation%20and%20Tryout%20Process%202025-2026.pdf"), kind: "PDF" },
                { label: "Travel 2024–2025 Letter", href: clubFile("/_files/travel-program/Travel%202024-2025%20Letter.pdf"), kind: "PDF" },
                { label: "FAQs About Travel Program", href: clubFile("/_files/FAQs%20about%20Travel%20Soccer.pdf"), kind: "PDF" },
                { label: "LSC 2026 Fall Travel Postgame Report", href: "https://docs.google.com/forms/d/e/1FAIpQLSeNdVNR4uikXY8eKNMXZRoDsi5y-10dSci6DThLVbGL8Fw_fA/viewform?usp=header", kind: "Form" },
                { label: "LSC Travel Refund Request", href: "https://forms.gle/BvcZ6no4Wnq8aXnK7", kind: "Form" },
              ]}
            />
            <p className="mt-8 text-[1.0625rem]">
              Questions? Email the Travel Director,{" "}
              <a href="mailto:travel@lsclub.com" className="ul font-semibold text-turf">
                travel@lsclub.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <NextSteps
        links={[
          { label: "2026–2027 age groups", href: "/news/age-groups-2026-2027" },
          { label: "Training Academy", href: "/training-academy" },
          { label: "In-Town", href: "/in-town" },
        ]}
      />
    </>
  )
}
