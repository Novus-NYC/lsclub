import Link from "next/link"
import Photo from "./photo"

type Props = {
  title: string
  label?: string
  /** Parent page, shown as a back link above the title. */
  parent?: { label: string; href: string }
  intro?: React.ReactNode
  image?: { src: string; alt: string; width: number; height: number; caption?: string; ratio?: string; position?: string }
  children?: React.ReactNode
}

/** Inner page opener: a pitch-green band, the title in the crest's slab, a chalk halfway line, and
 *  the page's photo (when it has one) hanging off the band onto the chalk below. */
export default function PageHeader({ title, label, parent, intro, image, children }: Props) {
  const long = title.length > 22 || Math.max(...title.split(/\s+/).map((w) => w.length)) >= 12
  return (
    <header
      className="relative text-chalk"
      style={{
        background: image
          ? "linear-gradient(to bottom, var(--pitch) 0, var(--pitch) calc(100% - var(--hang)), var(--chalk) calc(100% - var(--hang)))"
          : "var(--pitch)",
        ["--hang" as string]: "clamp(4rem, 10vw, 9rem)",
      }}
    >
      <div className={`wrap grid12 items-end gap-y-10 pt-[clamp(2.5rem,6vw,5.5rem)] ${image ? "" : "pb-[clamp(3rem,7vw,6rem)]"}`}>
        <div className={`col-span-12 ${image ? "lg:col-span-7 lg:pb-[calc(var(--hang)+clamp(2rem,4vw,3.5rem))]" : "lg:col-span-11"}`}>
          {parent ? (
            <Link href={parent.href} className="group -my-2 inline-flex min-h-11 items-center gap-2 font-semibold text-yellow">
              <span aria-hidden="true">←</span> <span className="draw">{parent.label}</span>
            </Link>
          ) : label ? (
            <p className="label text-yellow">{label}</p>
          ) : null}
          <h1
            className="mt-4 [hyphens:manual]"
            style={{ fontSize: long ? "var(--t-h1-long)" : "var(--t-h1)", lineHeight: long ? 0.98 : 0.92, letterSpacing: "-0.012em" }}
            data-reveal=""
          >
            {title}
          </h1>
          {intro ? (
            <div className="t-lede mt-7 max-w-[40rem] text-chalk/90" data-reveal="" style={{ "--i": 1 } as React.CSSProperties}>
              {intro}
            </div>
          ) : null}
          {children ? (
            <div className="mt-8 flex flex-wrap gap-3" data-reveal="" style={{ "--i": 2 } as React.CSSProperties}>
              {children}
            </div>
          ) : null}
        </div>
        {image ? (
          <Photo
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            ratio={image.ratio ?? "4 / 3"}
            position={image.position}
            caption={image.caption}
            captionClassName="text-muted"
            sizes="(min-width: 1024px) 38vw, 92vw"
            priority
            className="col-span-12 sm:col-span-10 lg:col-span-5"
          />
        ) : null}
      </div>
    </header>
  )
}
