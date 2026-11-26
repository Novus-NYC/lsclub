import type { Metadata } from "next"
import { legendsWinners } from "@/data/site"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"
import Photo from "@/lib/components/photo"

export const metadata: Metadata = {
  title: "Legends",
  description: "Welcome to Legends! Past Livingston Legends winners, from Low Sodium in 2011 to A Liver Runs Through It in 2023, and the team photos.",
}

// Team photos from the Legends page. Only the ones the club captioned carry a name here.
const photos = [
  { src: "/photos/legends-2019geez.jpg", w: 1280, h: 960, caption: "Legends, 2019" },
  { src: "/photos/legends-2022.jpg", w: 690, h: 280, caption: "2022: Rolling Stone" },
  { src: "/photos/legends-zz42.jpg", w: 1021, h: 621 },
  { src: "/photos/legends-q69.jpg", w: 1024, h: 576 },
  { src: "/photos/legends-zz97.jpg", w: 1024, h: 675 },
  { src: "/photos/legends-w6.jpg", w: 640, h: 481 },
  { src: "/photos/legends-zzz12.jpg", w: 1024, h: 621 },
  { src: "/photos/legends-a12.jpg", w: 1024, h: 768 },
  { src: "/photos/legends-golda.jpg", w: 1024, h: 659 },
  { src: "/photos/legends-aa235.jpg", w: 1024, h: 448 },
  { src: "/photos/legends-lowsodium.jpg", w: 640, h: 366, caption: "2011: Low Sodium" },
]

export default function Legends() {
  return (
    <>
      <PageHeader
        title="Legends"
        label="Past Livingston Legends winners"
        intro="Welcome to Legends! Congratulations!!"
        image={{ src: "/photos/legends-2023.jpg", alt: "The 2023 Legends winners celebrating in front of the goal at night", width: 1232, height: 840, caption: "2023: A Liver Runs Through It", ratio: "4 / 3" }}
      />

      {/* The honor roll. */}
      <section aria-labelledby="winners" className="on-chalk bg-chalk">
        <div className="wrap py-[var(--s-normal)]">
          <h2 id="winners" className="label text-turf">
            Winners
          </h2>
          <ol className="mt-4 border-t-2 border-pitch">
            {legendsWinners.map((w, i) => (
              <li key={w.year} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-x-[var(--gutter)] border-b-2 border-pitch/25 py-[clamp(0.75rem,1.6vw,1.25rem)] sm:grid-cols-[8rem_1fr]" data-reveal="" style={{ "--i": i % 4 } as React.CSSProperties}>
                <span className="font-sans text-[1.125rem] font-bold tabular-nums text-turf sm:text-[1.375rem]">{w.year}</span>
                <span className="font-display text-[clamp(1.875rem,1.1rem+3vw,4.25rem)] leading-[0.95] text-pitch">{w.team}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team photos: one big, then a run of two-up. */}
      <section aria-labelledby="photos" className="bg-pitch text-chalk">
        <div className="wrap py-[var(--s-normal)]">
          <h2 id="photos" className="t-h2" data-reveal="">
            Team photos
          </h2>
          <div className="mt-12 grid gap-x-[var(--gutter)] gap-y-14 md:grid-cols-2">
            {photos.map((p, i) => (
              <Photo
                key={p.src}
                src={p.src}
                alt={p.caption ? `Legends team photo, ${p.caption}` : "A Legends team photo"}
                width={p.w}
                height={p.h}
                ratio={i === 0 ? "2 / 1" : "3 / 2"}
                sizes={i === 0 ? "(min-width: 1440px) 1360px, 94vw" : "(min-width: 768px) 46vw, 94vw"}
                caption={p.caption}
                captionClassName="text-mint"
                className={i === 0 ? "md:col-span-2" : i % 2 === 0 ? "md:mt-16" : ""}
              />
            ))}
          </div>
        </div>
      </section>

      <NextSteps
        links={[
          { label: "Coaches Corner", href: "/coaches-corner" },
          { label: "Fields & directions", href: "/fields" },
          { label: "Contacts", href: "/contacts" },
        ]}
      />
    </>
  )
}
