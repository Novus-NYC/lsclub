type P = { className?: string }

export function Arrow({ className = "", dir = "right" }: P & { dir?: "right" | "out" | "down" }) {
  const rot = dir === "out" ? "-rotate-45" : dir === "down" ? "rotate-90" : ""
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`inline-block size-[1em] shrink-0 ${rot} ${className}`} fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square">
      <path d="M3 10h13M11 4.5 16.5 10 11 15.5" />
    </svg>
  )
}

export function Chevron({ className = "" }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`size-4 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.25">
      <path d="m5 8 5 5 5-5" />
    </svg>
  )
}

export function SocialIcon({ name, className = "size-5" }: P & { name: string }) {
  if (name === "Instagram")
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V10.5H7.8v3h2.6V21h3.1Z" />
    </svg>
  )
}

/** The chalk center circle, drawn behind the crest. */
export function CenterCircle({ className = "" }: P) {
  return (
    <svg aria-hidden="true" viewBox="0 0 400 400" className={className} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke">
      <circle cx="200" cy="200" r="198" vectorEffect="non-scaling-stroke" />
      <circle cx="200" cy="200" r="5" fill="currentColor" stroke="none" />
    </svg>
  )
}
