import Image from "next/image"

type Props = {
  src: string
  alt: string
  width: number
  height: number
  /** CSS aspect-ratio for the crop, e.g. "4 / 5". Defaults to the photo's own shape. */
  ratio?: string
  sizes: string
  caption?: string
  priority?: boolean
  /** Which chalk the corner marks are drawn in. */
  mark?: "chalk" | "pitch" | "yellow" | "split" | "none"
  position?: string
  className?: string
  frameClassName?: string
  captionClassName?: string
  reveal?: boolean
  /** False for documents like maps, which keep their own colors. */
  tone?: boolean
}

/** Every photograph on the site: the green duotone, square corners, the L corner marks. */
export default function Photo({ src, alt, width, height, ratio, sizes, caption, priority, mark = "chalk", position = "50% 50%", className = "", frameClassName = "", captionClassName = "", reveal = true, tone = true }: Props) {
  const markCls = mark === "none" ? "" : `corner corner--${mark}`
  return (
    <figure className={className} data-reveal={reveal ? "" : undefined}>
      <div className={markCls}>
        <div className={`${tone ? "duo" : "relative overflow-hidden bg-white"} ${frameClassName}`} style={{ aspectRatio: ratio ?? `${width} / ${height}` }}>
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} quality={85} className="object-cover" style={{ objectPosition: position }} />
        </div>
      </div>
      {caption ? <figcaption className={`mt-4 text-[0.9375rem] leading-snug ${captionClassName}`}>{caption}</figcaption> : null}
    </figure>
  )
}
