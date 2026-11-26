import type { Metadata } from "next"
import { fieldDiagrams, fields, site } from "@/data/site"
import DocList from "@/lib/components/doc-list"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"
import Photo from "@/lib/components/photo"

export const metadata: Metadata = {
  title: "Fields & Directions",
  description: "Directions to the ten Livingston soccer fields, today's field status, and field diagrams for Heritage, Mt. Pleasant, Okner and Madonna Turf.",
}

export default function Fields() {
  return (
    <>
      <PageHeader
        title="Fields & Directions"
        intro="The Town of Livingston decides if fields are closed, based on weather and field conditions. Check the field status before you leave."
      >
        <a href={site.fieldStatusUrl} target="_blank" rel="noreferrer" className="btn btn--yellow">
          Field status today <Arrow dir="out" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </PageHeader>

      <section aria-labelledby="directions" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-6">
            <h2 id="directions" className="t-h2 text-pitch" data-reveal="">
              Ten fields across town
            </h2>
            <ul className="mt-8 border-t-2 border-pitch">
              {fields.map((f, i) => (
                <li key={f.name} className="border-b-2 border-pitch/25" data-reveal="" style={{ "--i": i % 5 } as React.CSSProperties}>
                  <a href={f.map} target="_blank" rel="noreferrer" className="group flex min-h-[4.25rem] items-center justify-between gap-4 py-3">
                    <span>
                      <span className="block font-display text-[clamp(1.5rem,1.2rem+1.1vw,2.25rem)] leading-none text-pitch">
                        <span className="draw">{f.name}</span>
                      </span>
                      {f.note ? <span className="mt-1.5 block text-[0.9375rem] text-muted">{f.note}</span> : null}
                    </span>
                    <span className="doc-row__tag">
                      Map <Arrow dir="out" />
                    </span>
                    <span className="sr-only"> (opens Google Maps in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <Photo
            src="/photos/fields-map.jpg"
            priority
            alt="Map of Livingston marking the soccer field locations"
            width={1024}
            height={651}
            sizes="(min-width: 1024px) 40vw, 94vw"
            mark="pitch"
            tone={false}
            caption="The town map from the club’s Field Directions page."
            captionClassName="text-muted"
            className="col-span-12 self-start lg:sticky lg:top-[calc(var(--header-h)+2rem)] lg:col-span-5 lg:col-start-8"
          />
        </div>
      </section>

      <section aria-labelledby="diagrams" className="bg-turf text-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <h2 id="diagrams" className="t-h2 col-span-12 lg:col-span-4" data-reveal="">
            Field diagrams
          </h2>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal="">
            <DocList docs={fieldDiagrams} />
          </div>
        </div>
      </section>

      <NextSteps
        links={[
          { label: "In-Town", href: "/in-town" },
          { label: "KinderKickers", href: "/kinderkickers" },
          { label: "Contacts", href: "/contacts" },
        ]}
      />
    </>
  )
}
