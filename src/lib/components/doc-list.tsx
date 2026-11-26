import type { Doc } from "@/data/site"
import { Arrow } from "./icons"

/** Documents and forms as big rows. Files live on the club's current host, so they open in a new tab. */
export default function DocList({ docs, className = "" }: { docs: Doc[]; className?: string }) {
  return (
    <ul className={`border-t-2 border-current/25 ${className}`} style={{ borderTopColor: "color-mix(in srgb, currentColor 22%, transparent)" }}>
      {docs.map((d) => (
        <li key={d.href + d.label}>
          <a href={d.href} target="_blank" rel="noreferrer" className="doc-row group">
            <span className="text-[1.1875rem] font-semibold leading-snug sm:text-[1.3125rem]">
              <span className="draw">{d.label}</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </span>
            <span className="doc-row__tag">
              {d.kind ?? "PDF"} <Arrow dir="out" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
