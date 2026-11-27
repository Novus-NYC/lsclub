/** The goal end in chalk: 18-yard box, 6-yard box, penalty spot and the D. Sits on a goal line. */
export default function PenaltyBox({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 -24 440 226" fill="none" className={`pointer-events-none ${className}`}>
      <g stroke="currentColor" strokeWidth="3">
        <path d="M0 202V20h440v182M120 202v-60h200v60" vectorEffect="non-scaling-stroke" />
        <path d="M140 20a100 100 0 0 1 160 0" vectorEffect="non-scaling-stroke" />
      </g>
      <circle cx="220" cy="80" r="4" fill="currentColor" />
    </svg>
  )
}
