"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/** Adds `is-in` to [data-reveal] elements as they scroll into view. Styles only apply under
 *  html.motion, which is set before paint when motion is allowed. */
export default function Motion() {
  const pathname = usePathname()
  useEffect(() => {
    if (!document.documentElement.classList.contains("motion")) return
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in")
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
  return null
}
