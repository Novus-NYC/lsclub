import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import PitchCorner from "./pitch-corner"

type Props = {
  title: string
  label?: string
  /** Parent page, shown as a back link above the title. */
  parent?: { label: string; href: string }
  intro?: React.ReactNode
  image?: { src: string; alt: string; width: number; height: number; caption?: string; ratio?: string; position?: string }
  children?: React.ReactNode
}

/** Inner page opener, built like the homepage: pitch green, the corner of the pitch in chalk, and
 *  (when the page has one) its photo full-bleed, fading into the green, with the title over it. */
export default function PageHeader({ title, label, parent, intro, image, children }: Props) {
  const long = title.length > 22 || Math.max(...title.split(/\s+/).map((w) => w.length)) >= 12
  const kicker = parent ? (
    <Link href={parent.href} className="group -my-2 inline-flex min-h-11 items-center gap-2 font-semibold text-yellow">
      <span aria-hidden="true">←</span> <span className="draw">{parent.label}</span>
    </Link>
  ) : label ? (
    <p className="label text-yellow">{label}</p>
  ) : null

  const body = (
    <>
      {kicker}
      <h1
        className="page-title mt-3 [hyphens:manual]"
        style={{ fontSize: long ? "var(--t-page-long)" : "var(--t-page)", lineHeight: long ? 0.96 : 0.88, letterSpacing: "-0.015em" }}
        data-reveal=""
      >
        {/* Words never break inside (no "In- / Town"), lines still wrap between them. */}
        {title.split(" ").map((w, i) => (
          <Fragment key={i}>
            {i ? " " : null}
            <span className="whitespace-nowrap">{w}</span>
          </Fragment>
        ))}
      </h1>
      {intro ? (
        <div className="t-lede mt-6 max-w-[38rem] text-chalk/90 md:max-w-[min(38rem,40vw)]" data-reveal="" style={{ "--i": 1 } as React.CSSProperties}>
          {intro}
        </div>
      ) : null}
      {children ? (
        <div className="mt-8 flex flex-wrap gap-3" data-reveal="" style={{ "--i": 2 } as React.CSSProperties}>
          {children}
        </div>
      ) : null}
    </>
  )

  if (!image) {
    return (
      <header className="relative isolate overflow-clip bg-pitch text-chalk">
        <PitchCorner />
        <div className="wrap relative pb-[clamp(3.5rem,8vw,7rem)] pt-[clamp(3rem,8vw,7rem)]">{body}</div>
      </header>
    )
  }

  return (
    <header className="page-hero relative isolate overflow-clip bg-pitch text-chalk">
      <div className="page-hero__media absolute inset-x-0 top-0 -z-10 overflow-hidden md:inset-y-0 md:left-auto md:w-[60%]">
        <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 768px) 60vw, 100vw" quality={85} className="object-cover" style={{ objectPosition: image.position ?? "50% 40%" }} />
        <div className="page-hero__scrim absolute inset-0" />
        {image.caption ? (
          <p className="absolute right-[var(--gutter)] top-4 max-w-[70%] text-right text-[0.8125rem] font-semibold leading-snug text-chalk/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.7)] md:bottom-[clamp(2rem,3vw,3rem)] md:top-auto md:max-w-[22rem]">
            {image.caption}
          </p>
        ) : null}
      </div>
      <PitchCorner />
      <div className="page-hero__body wrap relative flex flex-col justify-end pb-[clamp(3.5rem,8vw,7.5rem)]">
        {body}
      </div>
    </header>
  )
}
