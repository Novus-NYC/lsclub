import type { Metadata } from "next"
import Link from "next/link"
import { Arrow } from "@/lib/components/icons"

export const metadata: Metadata = { title: "Page not found" }

export default function NotFound() {
  return (
    <section aria-labelledby="nf" className="relative overflow-hidden bg-turf text-chalk">
      <div aria-hidden="true" className="absolute inset-y-0 right-[18%] hidden w-[3px] bg-chalk/25 md:block" />
      <div className="wrap py-[var(--s-loose)]">
        <p className="label text-yellow">Page not found</p>
        <h1 id="nf" className="mt-4 max-w-[12ch]" style={{ fontSize: "var(--t-h1)", lineHeight: 0.92, letterSpacing: "-0.012em" }}>
          Out of bounds
        </h1>
        <p className="t-lede mt-7 max-w-[34rem] text-chalk/90">
          That page isn&rsquo;t here. The club site moved recently, so an old link may point somewhere that no longer exists.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn btn--yellow">
            Back to the homepage <Arrow />
          </Link>
          <Link href="/contacts" className="btn btn--chalk">
            Club contacts
          </Link>
        </div>
      </div>
    </section>
  )
}
