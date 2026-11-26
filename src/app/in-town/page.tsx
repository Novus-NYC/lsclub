import type { Metadata } from "next"
import Link from "next/link"
import { clubFile, fieldDiagrams, site } from "@/data/site"
import DocList from "@/lib/components/doc-list"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"

export const metadata: Metadata = {
  title: "In-Town",
  description: "LSC In-Town soccer for grades 1 to 12: 2026 schedules, game reports, standings, rating forms, rules and field diagrams.",
}

const form = (id: string) => `https://docs.google.com/forms/d/e/${id}/viewform`
const standings = (code: string) => clubFile(`/_files/in-town-program/2026_Intown_Standings_FOR_POSTING_current%2Cxlsx%20-%20${code}.pdf`)

type Division = { name: string; schedule: string; report?: string; standings?: string; rating?: string }

const divisions: Division[] = [
  { name: "3/4 Boys", schedule: clubFile("/_files/in-town-program/34ba2026%20IT%20Sched%20V9.pdf"), report: form("1FAIpQLSd-xHGo3fHf3S_PUXfkzVkwy9mg1a5TXMD14kYKmE6dJsNGYg"), standings: standings("34B-4"), rating: form("1FAIpQLScIWxVCg2AKwMFJSYlQpcnzKKE-2dpiPzGsS3gizKTqcKN_uw") },
  { name: "3/4 Girls", schedule: clubFile("/_files/in-town-program/34g2026%20IT%20Sched%20V9.pdf"), report: form("1FAIpQLSfCmO3z3G_g_d6qoMh1WutyCv2Wav5RJNwDix37bYeRq0olLQ"), standings: standings("34G-4"), rating: form("1FAIpQLSdsQxzxGSwnzTrFBgmiaDF2XYhSsneU296E9XSPOXFs5EKvDA") },
  { name: "5/6 Boys", schedule: clubFile("/_files/in-town-program/2026b56shed%20V7.pdf"), report: form("1FAIpQLScYoC0ukwgUE8iJFha6XoVU6oRmpR5p6ekA7iIqGpbAJfYx4A"), standings: standings("56B-4"), rating: form("1FAIpQLSc0NK804l2xEoJA0WsOqMpn11qNkvFjrCCkerUGRx66oD8Zsw") },
  { name: "5/6 Girls", schedule: clubFile("/_files/in-town-program/2026g56SchedV9.pdf"), report: form("1FAIpQLSdWMEyJyimAlo5PRWsuWG9yRyn2TgWQ5bI14XZE0GKitEFRSA"), standings: standings("56G-4"), rating: form("1FAIpQLSeDSZOmmMVD5Sx86QXhr8kvdQx25o-7TWM4hUfPt5d1UyRNrA") },
  { name: "7 to 9 Boys", schedule: clubFile("/_files/in-town-program/2026b79%20Sched%20V9.pdf"), report: form("1FAIpQLSfKOM4tG3lwpFeJvMMI5o-lgqboQ7CSCsCX5JnORB20NrLLXA"), standings: standings("79B-4"), rating: form("1FAIpQLSfmtN2QjCvjZ1EboDBoo7WjGE8c1aMaXjFBdAitrfr_jxgCEg") },
  { name: "7 to 9 Girls", schedule: clubFile("/_files/in-town-program/2026g79%20Sched%20V9.pdf"), report: form("1FAIpQLSeZeoW2tZhTtNDznrzVoCYkHBKRl1j5kRbtzgqinICGQBZCRA"), standings: standings("79G-4"), rating: form("1FAIpQLSdbYd2tlCVU3cTMk48s-ZEoOwEq_s4MYOTqz-mHKRNG0VVtHg") },
  { name: "HS Boys", schedule: clubFile("/_files/in-town-program/26hsv4.pdf"), report: form("1FAIpQLSeLssJvwijC8RbR6wJtdl4lOZQ2N_yk9wPcdlaewz_xFvegbw") },
]

const festival: Division[] = [
  { name: "Grade 1 Boys", schedule: clubFile("/_files/in-town-program/B1%20Copy%20of%202026%20Festival%20Schedule%20after%20rainout%20reschedulesv2.pdf"), rating: form("1FAIpQLSf44dLfje8baF8IW_wYtyHLWIfU4k0C9-wbL1B_d-8-aNNfhg") },
  { name: "Grade 1 & 2 Girls", schedule: clubFile("/_files/in-town-program/G12Copy%20of%202026%20Festival%20Schedule%20after%20rainout%20reschedulesv2.pdf"), rating: form("1FAIpQLSerh5gVvZ0sFL66gKI10bjeF_2PgHH73Mq7Bt8x6dXp31Yybg") },
  { name: "Grade 2 Boys", schedule: clubFile("/_files/in-town-program/B2Copy%20of%202026%20Festival%20Schedule%20after%20rainout%20reschedulesv2.pdf"), rating: form("1FAIpQLSdxtVG2sjfo3-zfaIr8csF_IMsZaY1vf9ryVLCuE8f39Q-1jA") },
]

const columns: { key: keyof Division; label: string }[] = [
  { key: "schedule", label: "Schedule" },
  { key: "report", label: "Game Report" },
  { key: "standings", label: "Standings" },
  { key: "rating", label: "Rating Form" },
]

function DivisionTable({ rows, caption, cols }: { rows: Division[]; caption: string; cols: typeof columns }) {
  return (
    <div>
      <table className="sheet">
        <caption className="sr-only">{caption}</caption>
        <thead className="max-md:sr-only">
          <tr>
            <th scope="col">Division</th>
            {cols.map((c) => (
              <th key={c.key} scope="col">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((d) => (
            <tr key={d.name} className="max-md:grid max-md:grid-cols-2 max-md:gap-x-4 max-md:border-t-2 max-md:border-pitch/20 max-md:py-4">
              <th scope="row" className="font-display !text-[clamp(1.5rem,1.2rem+1vw,2.125rem)] !normal-case !tracking-normal text-pitch max-md:col-span-2 max-md:!border-0 max-md:!py-0">
                {d.name}
              </th>
              {cols.map((c) => {
                const href = d[c.key]
                return (
                  <td key={c.key} className="max-md:!border-0 max-md:!py-0">
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="group inline-flex min-h-11 items-center gap-1.5 font-semibold text-turf">
                        <span className="draw">{c.label}</span> <Arrow dir="out" className="text-[0.85em]" />
                        <span className="sr-only"> for {d.name} (opens in a new tab)</span>
                      </a>
                    ) : (
                      <span className="text-muted max-md:hidden" aria-label="None">
                        &middot;
                      </span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function InTown() {
  return (
    <>
      <PageHeader
        title="In-Town"
        label="Grades 1 to 12"
        intro="Weekend games with volunteer coaches, from the weekend after Labor Day to the Carpini Cup. Everything for the 2026 season is on this page."
      >
        <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--yellow">
          Registration <Arrow dir="out" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <Link href="/faqs" className="btn btn--chalk">
          In-Town FAQs <Arrow />
        </Link>
      </PageHeader>

      {/* Grades 3 to high school. */}
      <section aria-labelledby="standings" className="on-chalk bg-chalk">
        <div className="wrap py-[var(--s-normal)]">
          <div className="grid12 items-end gap-y-5">
            <h2 id="standings" className="t-h2 col-span-12 text-pitch lg:col-span-7" data-reveal="">
              2026 final standings
            </h2>
            <p className="col-span-12 text-[1.1875rem] lg:col-span-4 lg:col-start-9" data-reveal="">
              Schedules, game reports, standings and rating forms for grades 3 to high school.
            </p>
          </div>
          <div className="mt-10" data-reveal="">
            <DivisionTable rows={divisions} caption="2026 In-Town divisions, grades 3 to high school" cols={columns} />
          </div>
          <a href={clubFile("/_files/in-town-program/26field.pdf")} target="_blank" rel="noreferrer" className="btn btn--outline mt-10">
            2026 Field Key <Arrow dir="out" />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </section>

      {/* Grades 1 and 2. */}
      <section aria-labelledby="festival" className="bg-turf text-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-4">
            <p className="label text-yellow">Grade 1 &amp; Grade 2</p>
            <h2 id="festival" className="t-h2 mt-4" data-reveal="">
              Festival games
            </h2>
            <p className="mt-6 text-[1.1875rem] text-chalk/90">In grades 1 and 2, teams are formed by the club. Friend requests are allowed for 1 Girls and 1 Boys.</p>
          </div>
          <ul className="col-span-12 border-t-2 border-chalk/40 lg:col-span-7 lg:col-start-6" data-reveal="">
            {festival.map((d) => (
              <li key={d.name} className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b-2 border-chalk/40 py-4">
                <span className="font-display text-[clamp(1.5rem,1.2rem+1vw,2.125rem)] leading-none">{d.name}</span>
                <span className="flex flex-wrap gap-x-6">
                  <a href={d.schedule} target="_blank" rel="noreferrer" className="group inline-flex min-h-11 items-center gap-1.5 font-semibold">
                    <span className="draw">Schedule</span> <Arrow dir="out" className="text-yellow" />
                    <span className="sr-only"> for {d.name} (opens in a new tab)</span>
                  </a>
                  <a href={d.rating!} target="_blank" rel="noreferrer" className="group inline-flex min-h-11 items-center gap-1.5 font-semibold">
                    <span className="draw">Rating Form</span> <Arrow dir="out" className="text-yellow" />
                    <span className="sr-only"> for {d.name} (opens in a new tab)</span>
                  </a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Notice to parents and spectators: the club's text, set as the sign at the field. */}
      <section aria-labelledby="notice" className="bg-pitch text-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-5">
            <p className="label text-yellow">Notice</p>
            <h2 id="notice" className="t-h2 mt-4" data-reveal="">
              To parents and spectators
            </h2>
            <p className="mt-6 text-[1.1875rem] text-chalk/90" data-reveal="">
              For the safety of the children, any and all jewelry is expressly forbidden to be worn by players, and must be removed prior to the start of the game. This includes earrings, necklaces, chains, rings, bracelets and wristwatches. Long hair must be tied back.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7" data-reveal="">
            <p className="text-[1.0625rem] text-chalk/90">
              In order to promote good sportsmanship and uphold the good reputation that the Livingston Soccer Club enjoys in the Mid New Jersey Youth Soccer League, we request that all spectators adhere to the following code of behavior.
            </p>
            <ol className="mt-6 border-t-2 border-chalk/40">
              {[
                "All cheering must be positive in nature.",
                "Spectators must respect the request of the Coaches and the Trainers at games. Spectators may not give instructions from the sidelines.",
                "Spectators must remain at least six feet away from the sidelines, behind the Set-Back Line. Parents are to remain on the opposite side of the field from the teams.",
                "Any Spectator who is verbally or physically abusive to a Player, Coach or Referee will be accountable to the Livingston Soccer Club Board’s Enforcement Committee. If the Spectator persists they will be banned from games and their child could be suspended from the team pending a review from the Enforcement Committee.",
              ].map((rule, i) => (
                <li key={i} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b-2 border-chalk/40 py-4">
                  <span className="font-display text-[1.75rem] leading-none text-yellow">{i + 1}</span>
                  <span className="text-[1.125rem] font-semibold">{rule}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-chalk/90">Thank you for your cooperation, and have an enjoyable season.</p>
          </div>
        </div>
      </section>

      {/* Rules and forms. */}
      <section aria-labelledby="rules" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <h2 id="rules" className="t-h2 col-span-12 text-pitch lg:col-span-4" data-reveal="">
            Rules, forms &amp; field diagrams
          </h2>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal="">
            <DocList
              docs={[
                { label: "LSC In-Town Rules 2026", href: clubFile("/_files/in-town-program/LSC%20In-Town%20Rules%202026.pdf"), kind: "PDF" },
                { label: "FAQs about InTown Soccer 2026", href: clubFile("/_files/FAQs%20about%20InTown%20Soccer%20updated%202026a%201.pdf"), kind: "PDF" },
                { label: "FAQs about Referees", href: clubFile("/_files/FAQs%20about%20Referees.pdf"), kind: "PDF" },
                { label: "Medical Release Form", href: clubFile("/_files/NJYS%20Medical%20Release%20Form.pdf"), kind: "PDF" },
                ...fieldDiagrams.filter((d) => !d.label.includes("Field Key")),
              ]}
            />
          </div>
        </div>
      </section>

      <NextSteps
        links={[
          { label: "Fields & directions", href: "/fields" },
          { label: "Coaches Corner", href: "/coaches-corner" },
          { label: "Travel", href: "/travel" },
        ]}
      />
    </>
  )
}
