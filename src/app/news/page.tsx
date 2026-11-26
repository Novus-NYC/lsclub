import type { Metadata } from "next"
import Link from "next/link"
import { news } from "@/data/news"
import { Arrow } from "@/lib/components/icons"
import PageHeader from "@/lib/components/page-header"
import Photo from "@/lib/components/photo"

export const metadata: Metadata = {
  title: "News",
  description: "Club news from Livingston Soccer Club: the Lancers, the Carpini Cup, the Award Ceremony, Coach of the Year, age groups and more.",
}

export default function News() {
  const [lead, ...rest] = news
  return (
    <>
      <PageHeader title="Club news" label="Headlines" intro="Results, awards and updates from around the club." />
      <section aria-label="All posts" className="on-chalk bg-chalk">
        <div className="wrap py-[var(--s-normal)]">
          <Link href={`/news/${lead.slug}`} className="group block border-b-2 border-pitch pb-[var(--s-tight)]" data-reveal="">
            <p className="label text-turf">Livingston HS girls</p>
            <h2 className="t-h2 mt-4 max-w-[16ch] text-pitch">
              <span className="draw">{lead.title}</span>
            </h2>
            <p className="t-lede mt-6 max-w-[40rem]">{lead.summary}</p>
          </Link>
          <ul className="grid gap-x-[var(--gutter)] md:grid-cols-2">
            {rest.map((n, i) => (
              <li key={n.slug} className="border-b-2 border-pitch/25" data-reveal="" style={{ "--i": i % 2 } as React.CSSProperties}>
                <Link href={`/news/${n.slug}`} className="group grid h-full grid-cols-[minmax(0,1fr)_auto] gap-6 py-8">
                  <span>
                    {n.date ? <span className="label block text-turf">{n.date}</span> : null}
                    <span className="mt-2 block font-display text-[clamp(1.625rem,1.2rem+1.4vw,2.5rem)] leading-[1.02] text-pitch">
                      <span className="draw">{n.title}</span>
                    </span>
                    <span className="mt-3 block max-w-[32rem] text-[1.0625rem]">{n.summary}</span>
                  </span>
                  {n.image ? (
                    <Photo src={n.image.src} alt="" width={n.image.width} height={n.image.height} ratio="1 / 1" sizes="140px" mark="none" reveal={false} className="w-[clamp(5.5rem,10vw,8.75rem)]" />
                  ) : (
                    <Arrow className="mt-2 text-[1.5rem] text-turf transition-transform group-hover:translate-x-1" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
