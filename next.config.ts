import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [420, 640, 828, 1080, 1280, 1600, 2000],
    imageSizes: [64, 128, 256, 384],
  },
  async redirects() {
    // Paths of the old OttoSport site, so links people saved keep working.
    return [
      { source: "/in-town-program/:rest*", destination: "/in-town", permanent: true },
      { source: "/travel-program/:rest*", destination: "/travel", permanent: true },
      { source: "/camps-and-clinics/:rest*", destination: "/training-academy", permanent: true },
      { source: "/geezers/:rest*", destination: "/legends", permanent: true },
      { source: "/fields-directions/:rest*", destination: "/fields", permanent: true },
      { source: "/coaches-corner/2026-grade-coordinators", destination: "/coaches-corner#grade-coordinators", permanent: true },
      { source: "/coaches-corner/2018-grade-coordinators", destination: "/coaches-corner#grade-coordinators", permanent: true },
      { source: "/coaches-corner/2019-grade-coordinators", destination: "/coaches-corner#grade-coordinators", permanent: true },
      { source: "/coaches-corner/lsc-coaching-articles", destination: "/coaches-corner#coaching-articles", permanent: true },
      { source: "/faqs-about-intown-soccer", destination: "/faqs", permanent: true },
      { source: "/other-frequently-asked-questions", destination: "/faqs", permanent: true },
      { source: "/lancers", destination: "/news/lancers-sectional-champions", permanent: true },
      { source: "/postp", destination: "/news/carpini-cup-results", permanent: true },
      { source: "/coach26", destination: "/news/coach-of-the-year-2025", permanent: true },
      { source: "/awards", destination: "/news/award-ceremony-2026", permanent: true },
      { source: "/newtravel", destination: "/news/age-groups-2026-2027", permanent: true },
      { source: "/lsc-online-store-is-open", destination: "/news/online-store", permanent: true },
      { source: "/lsc-travel-vs-club-soccer", destination: "/news/travel-vs-club-soccer", permanent: true },
    ]
  },
}

export default nextConfig
