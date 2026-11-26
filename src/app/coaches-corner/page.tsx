import type { Metadata } from "next"
import Link from "next/link"
import { clubFile, gradeCoordinators } from "@/data/site"
import DocList from "@/lib/components/doc-list"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"

export const metadata: Metadata = {
  title: "Coaches Corner",
  description: "For LSC coaches: Red Bull Red Print training links, after game reports, In-Town rules, grade coordinators, forms and coaching articles.",
}

const reports = [
  { label: "2nd Grade Girls", href: "https://forms.gle/ytar6WiFbfEhHPGd7" },
  { label: "2nd Grade Boys", href: "https://forms.gle/NeuPo2SUqCLYa4sZ6" },
  { label: "COED", href: "https://forms.gle/b82veRMjbj6gDNW86" },
]

const articles = [
  { label: "KinderKickers Lesson Plans", href: clubFile("/_files/coaches-corner/lsc-coaching-articles/KinderKickersLP.doc"), kind: "Word" as const },
  { label: "A View from the Goal Box", href: clubFile("/_files/coaches-corner/lsc-coaching-articles/AViewFromTheGoalBox.pdf"), kind: "PDF" as const },
  { label: "Coaching 1st Grade", href: clubFile("/_files/coaches-corner/lsc-coaching-articles/LSC1stGrLecture.doc"), kind: "Word" as const },
  { label: "Coaching 1st–2nd Grades", href: clubFile("/_files/coaches-corner/lsc-coaching-articles/grades1-2.doc"), kind: "Word" as const },
  { label: "Coaching 3rd–4th Grades", href: clubFile("/_files/coaches-corner/lsc-coaching-articles/grades3-4.doc"), kind: "Word" as const },
  { label: "Coaching 5th–8th Grades", href: clubFile("/_files/coaches-corner/lsc-coaching-articles/grades5-8.doc"), kind: "Word" as const },
  { label: "Best practices for Coaching Soccer in US", href: clubFile("/_files/coaches-corner/lsc-coaching-articles/Best_Practices[1].pdf"), kind: "PDF" as const },
  { label: "SDA: The ABCs of Coaching", href: clubFile("/_files/coaches-corner/ABC.pdf"), kind: "PDF" as const },
  { label: "SDA: Fun Games, Teachings Lesson Plans", href: clubFile("/_files/coaches-corner/SDA%20Fun%20Games%20and%20Teachings%20Lesson%20Plans.pdf"), kind: "PDF" as const },
  { label: "SDA: Rec Program Curriculum Ideas", href: clubFile("/_files/coaches-corner/Rec%20Program%20Curriculum%20Ideas.pdf"), kind: "PDF" as const },
  { label: "Coaching Soccer 101", href: "http://www.coachingsoccer101.com/", kind: "Link" as const },
  { label: "FUNdamental Soccer", href: "http://www.fundamentalsoccer.com/", kind: "Link" as const },
]

export default function CoachesCorner() {
  return (
    <>
      <PageHeader title="Coaches Corner" label="Practice with Purpose! Play with Passion!" intro="Livingston Soccer Club always needs more soccer coaches! Please volunteer today. It’s a very rewarding experience!">
        <Link href="/contacts" className="btn btn--yellow">
          Contact the board <Arrow />
        </Link>
      </PageHeader>

      {/* Red Print. */}
      <section aria-labelledby="red-print" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-6">
            <p className="label text-turf">New for 2024: Red Bull Mentor Practice</p>
            <h2 id="red-print" className="t-h2 mt-4 text-pitch" data-reveal="">
              Attention all coaches
            </h2>
            <p className="t-lede mt-6 max-w-[34rem]" data-reveal="">
              Check out the Red Print Training Links for tips on planning practice, teaching skills, and game day coaching.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-reveal="">
              <a href={clubFile("/_files/coaches-corner/NYRB%20Coaching%20Info.pdf")} target="_blank" rel="noreferrer" className="btn btn--pitch">
                Training links <Arrow dir="out" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href="https://www.newyorkredbulls.com/youth/red-print/coaching-guide" target="_blank" rel="noreferrer" className="btn btn--outline">
                Red Print coaching guide <Arrow dir="out" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8" data-reveal="">
            <h2 className="font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none text-pitch">After game reports</h2>
            <ul className="mt-5 border-t-2 border-pitch">
              {reports.map((r) => (
                <li key={r.href} className="border-b-2 border-pitch/25">
                  <a href={r.href} target="_blank" rel="noreferrer" className="group flex min-h-[3.75rem] items-center justify-between gap-4 text-[1.1875rem] font-semibold">
                    <span className="draw">{r.label}</span>
                    <span className="doc-row__tag">
                      Form <Arrow dir="out" />
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-muted">In-Town game reports for grades 3 and up are on the In-Town page, next to each division&rsquo;s schedule.</p>
          </div>
        </div>
      </section>

      {/* The quote. */}
      <section aria-label="Why we coach" className="bg-yellow text-pitch">
        <div className="wrap py-[var(--s-normal)]">
          <p className="max-w-[18ch] font-display text-[clamp(2.5rem,1rem+5.4vw,6.25rem)] leading-[0.98]" data-reveal="">
            Kids don&rsquo;t care how much you know, until they know how much you care.
          </p>
          <p className="mt-8 max-w-[40rem] text-[1.1875rem]" data-reveal="">
            All coaches complete a Background Check and Safety Training. This protects our players and our coaches. We encourage parents, relatives, and even High School students to volunteer!
          </p>
        </div>
      </section>

      {/* Rules and forms. */}
      <section aria-labelledby="forms" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <h2 id="forms" className="t-h2 col-span-12 text-pitch lg:col-span-4" data-reveal="">
            Rules &amp; forms
          </h2>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal="">
            <DocList
              docs={[
                { label: "In-Town Coaches Meeting 2025", href: clubFile("/_files/coaches-corner/InTown%20Coaches%20Meeting%202025.pdf"), kind: "PDF" },
                { label: "In-Town Rules 2026", href: clubFile("/_files/in-town-program/LSC%20In-Town%20Rules%202026.pdf"), kind: "PDF" },
                { label: "Playing Time Chart", href: clubFile("/_files/Playing%20Time%20Rules.pdf"), kind: "PDF" },
                { label: "Blowout Score Rules", href: clubFile("/_files/Blowout%20Score%20Rules.pdf"), kind: "PDF" },
                { label: "Referee Evaluation", href: clubFile("/_files/coaches-corner/RefereeEvaluation.doc"), kind: "Word" },
                { label: "Coaches Evaluation Form", href: clubFile("/_files/spring-training-academy/LSCCOACHESEVALUATIONFORM[1].doc"), kind: "Word" },
                { label: "Medical Release Form", href: clubFile("/_files/NJYS%20Medical%20Release%20Form.pdf"), kind: "PDF" },
                { label: "Concussion Online Free Training", href: "http://www.cdc.gov/HeadsUp/Index.html", kind: "Link" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Grade coordinators. */}
      <section id="grade-coordinators" aria-labelledby="coordinators" className="bg-turf text-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="coordinators" className="t-h2" data-reveal="">
              2026 grade coordinators
            </h2>
            <p className="mt-6 text-[1.125rem] text-chalk/90" data-reveal="">
              &ldquo;Ask three then me&rdquo;: first read the FAQs, then ask your coach, then your Grade Coordinator.
            </p>
          </div>
          <dl className="col-span-12 grid border-t-2 border-chalk/40 sm:grid-cols-2 sm:gap-x-[var(--gutter)] lg:col-span-7 lg:col-start-6" data-reveal="">
            {gradeCoordinators.map((g) => (
              <div key={g.grade} className="border-b-2 border-chalk/40 py-4">
                <dt className="label text-yellow">{g.grade}</dt>
                <dd className="mt-1 text-[1.125rem] font-semibold">{g.name}</dd>
                <dd>
                  <a href={`mailto:${g.email}`} className="group inline-flex min-h-11 items-center break-all text-chalk/90">
                    <span className="draw">{g.email}</span>
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Coaching articles. */}
      <section id="coaching-articles" aria-labelledby="articles" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="articles" className="t-h2 text-pitch" data-reveal="">
              LSC coaching articles
            </h2>
            <p className="mt-6 text-[1.125rem]" data-reveal="">
              Dear Livingston Coach! After reading your article please go back to study the rules!
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal="">
            <DocList docs={articles} />
          </div>
        </div>
      </section>

      <NextSteps
        title="Thank you, coaches"
        links={[
          { label: "In-Town schedules & reports", href: "/in-town" },
          { label: "Safe Sport", href: "/safe-sport" },
          { label: "Contacts", href: "/contacts" },
        ]}
      />
    </>
  )
}
