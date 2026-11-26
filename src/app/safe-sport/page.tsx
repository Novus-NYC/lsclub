import type { Metadata } from "next"
import { safeSportDocs } from "@/data/site"
import DocList from "@/lib/components/doc-list"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"

export const metadata: Metadata = {
  title: "Safe Sport",
  description: "How Livingston Soccer Club protects its players: SafeSport abuse prevention training, background checks, and how to report a reasonable concern of abuse or neglect.",
}

const report = [
  { who: "Livingston Police Department", how: "973-992-3000", href: "tel:+19739923000" },
  { who: "Division of Child Protection & Permanency", how: "1-877-NJ-ABUSE", href: "tel:+18776522873" },
  { who: "US Soccer Integrity Hotline", how: "(312) 528-7004", href: "tel:+13125287004" },
  { who: "US Center for SafeSport", how: "safesport.org/report-a-concern", href: "https://www.safesport.org/report-a-concern" },
]

export default function SafeSport() {
  return (
    <>
      <PageHeader
        title="Safe Sport"
        label="Club Info"
        intro="It is critical that we continue our commitment to the protection of our youth athletes, so that everyone can enjoy playing soccer safely. If you see something, say something."
      />

      {/* Reporting first: the thing someone on this page may urgently need. */}
      <section aria-labelledby="report" className="on-chalk bg-yellow text-pitch">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="report" className="t-h2" data-reveal="">
              How to report a reasonable concern
            </h2>
            <p className="mt-6 text-[1.125rem]" data-reveal="">
              If you have concerns of sexual or physical abuse or neglect, you are expected to act within a 24-hour period of awareness. Everyone is a mandatory reporter. These agencies will maintain your anonymity when you request it.
            </p>
          </div>
          <ul className="col-span-12 border-t-2 border-pitch lg:col-span-6 lg:col-start-7" data-reveal="">
            {report.map((r) => (
              <li key={r.who} className="border-b-2 border-pitch">
                <a href={r.href} target={r.href.startsWith("http") ? "_blank" : undefined} rel={r.href.startsWith("http") ? "noreferrer" : undefined} className="group flex min-h-[4.5rem] flex-wrap items-center justify-between gap-x-6 gap-y-1 py-3">
                  <span className="text-[1.0625rem] font-semibold">{r.who}</span>
                  <span className="font-display text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-none">
                    <span className="draw">{r.how}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="training" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-6">
            <h2 id="training" className="t-h2 text-pitch" data-reveal="">
              Abuse prevention training
            </h2>
            <div className="prose-club mt-6 text-[1.125rem]" data-reveal="">
              <p>
                All adults applying for an NJYS Coach Pass (In-Town volunteer coaches, Travel Trainers, Travel Managers, Travel Director) take an initial Abuse Prevention Training course, offered online through the U.S. Center for SafeSport, and a refresher every year they volunteer or are paid to train.
              </p>
              <p>
                In-Town recreation coaches complete a background check and register through U.S. Soccer Connect, the same program that monitors our Travel Trainers. Volunteer coaches, paid trainers, volunteer managers and Board members renew their SafeSport certificate and concussion education certificate every year.
              </p>
              <p>The club&rsquo;s Enforcement Committee investigates all concerns that parents, coaches, managers, trainers, and athletes may have.</p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8" data-reveal="">
            <DocList docs={safeSportDocs} />
            <a href="http://www.cdc.gov/HeadsUp/Index.html" target="_blank" rel="noreferrer" className="btn btn--outline mt-8">
              HEADS UP: concussion training <Arrow dir="out" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <NextSteps
        links={[
          { label: "Contacts", href: "/contacts" },
          { label: "Coaches Corner", href: "/coaches-corner" },
          { label: "FAQs", href: "/faqs" },
        ]}
      />
    </>
  )
}
