/** The corner of the pitch in chalk: touchline, goal line and the corner arc, inset from the
 *  section it marks. Drawn in on load on the homepage only; static everywhere else. */
export default function PitchCorner({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pitch-corner pointer-events-none absolute bottom-[clamp(0.75rem,2vw,1.75rem)] left-[calc(var(--gutter)*0.45)] right-[calc(var(--gutter)*0.45)] top-[clamp(1rem,3vw,2rem)] ${className}`}>
      <span className="pitch-corner__v" />
      <span className="pitch-corner__h" />
      <svg className="pitch-corner__arc" viewBox="0 0 40 40" fill="none">
        <path d="M0 0 A40 40 0 0 1 40 40" pathLength={1} />
      </svg>
    </div>
  )
}
