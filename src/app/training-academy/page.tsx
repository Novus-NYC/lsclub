import type { Metadata } from "next"
import Image from "next/image"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"
import Photo from "@/lib/components/photo"

export const metadata: Metadata = {
  title: "Training Academy",
  description: "Kickzsoccer Indoor Soccer Clinics for LSC members at the Soccer Palace, West Orange, and the New York Red Bulls Academy.",
}

const clinics = ["Technique", "Footwork", "Goalscoring", "Goalkeeping"]

export default function TrainingAcademy() {
  return (
    <>
      <PageHeader title="Training Academy" label="Camps & clinics" />

      {/* Kickz: the club's own announcement. */}
      <section aria-labelledby="kickz" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-7">
            <p className="label text-turf">Posted October 16, 2026</p>
            <h2 id="kickz" className="t-h2 mt-4 text-pitch" data-reveal="">
              Indoor Soccer Clinics at the Soccer Palace
            </h2>
            <div className="prose-club mt-6 text-[1.1875rem]" data-reveal="">
              <p>Kickzsoccer will be running our annual Indoor Soccer Clinics for the members of the Livingston Soccer Club at the Soccer Palace, West Orange.</p>
              <p>
                In addition, the 5v5 Player Cup gives players the opportunity to join a Winter League as either an individual player or with friends and teammates.
              </p>
            </div>
            <a href="https://www.kickzsoccer.com/winter-2027" target="_blank" rel="noreferrer" className="btn btn--pitch mt-8">
              kickzsoccer.com/winter-2027 <Arrow dir="out" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <Image src="/partners/kickz.png" alt="Kickz Soccer" width={214} height={122} priority className="h-20 w-auto mix-blend-multiply" />
            <h3 className="label mt-8 text-turf">Skill Builder Clinics</h3>
            <ul className="mt-3 border-t-2 border-pitch">
              {clinics.map((c, i) => (
                <li key={c} className="border-b-2 border-pitch/25 py-3 font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none text-pitch" data-reveal="" style={{ "--i": i } as React.CSSProperties}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Red Bulls. */}
      <section aria-labelledby="red-bulls" className="bg-pitch text-chalk">
        <div className="wrap grid12 items-center gap-y-10 py-[var(--s-normal)]">
          <Photo src="/photos/fall-2026/redd-fans.jpg" alt="Redd, the New York Red Bulls mascot, posing with LSC families and a child in a pumpkin costume" width={1600} height={1338} ratio="5 / 4" sizes="(min-width: 768px) 40vw, 94vw" mark="chalk" caption="Redd with LSC fans, October 31, 2026" captionClassName="text-chalk/80" className="col-span-12 md:col-span-5" />
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <div className="inline-block bg-chalk p-3">
              <Image src="/partners/red-bulls.png" alt="New York Red Bulls" width={179} height={154} className="h-14 w-auto" />
            </div>
            <h2 id="red-bulls" className="t-h2 mt-8" data-reveal="">
              Red Bulls Academy
            </h2>
            <p className="t-lede mt-6 max-w-[38rem] text-chalk/90" data-reveal="">
              LSC Travel players are eligible to supplement their travel training through the Red Bulls Regional Development School, and to enjoy exclusive New York Red Bulls Match Day Experiences.
            </p>
            <a href="https://www.newyorkredbulls.com/youth/academy/" target="_blank" rel="noreferrer" className="btn btn--yellow mt-8">
              Red Bulls Academy <Arrow dir="out" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <NextSteps
        links={[
          { label: "Travel", href: "/travel" },
          { label: "Coaches Corner", href: "/coaches-corner" },
          { label: "In-Town", href: "/in-town" },
        ]}
      />
    </>
  )
}
