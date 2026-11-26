// The club's posts, carried over from the home page of lsclub.ottosport.ai. Text is the club's own.

export type NewsItem = {
  slug: string
  title: string
  /** As the club wrote it, when the post carries a date. */
  date?: string
  summary: string
  image?: { src: string; alt: string; width: number; height: number; caption?: string }
}

export const news: NewsItem[] = [
  {
    slug: "lancers-sectional-champions",
    title: "Second consecutive sectional title",
    summary:
      "The top-seeded Livingston HS girls soccer team won the 2026 NJSIAA North Jersey, Section 1, Group 4 championship, defeating 3rd-seeded Ridgewood 3–2 in a shootout.",
  },
  {
    slug: "carpini-cup-results",
    title: "Carpini Cup results",
    summary: "Champions and finalists from every grade of the season-ending tournament.",
    image: { src: "/photos/carpini-cup-trophy.jpg", alt: "Players in green shirts holding up a trophy", width: 236, height: 244 },
  },
  {
    slug: "award-ceremony-2026",
    title: "LSC Award Ceremony",
    date: "June 2, 2026",
    summary: "Three best LHS soccer players were awarded during the LSC Award Ceremony, along with this year's scholarship recipients.",
    image: { src: "/photos/award-dinner-2026.jpg", alt: "Guests gathered at the LSC Award Ceremony dinner", width: 2000, height: 1126 },
  },
  {
    slug: "coach-of-the-year-2025",
    title: "Coach of the Year 2025",
    summary: "Coach of the Year 2025 was Ritesh Biswas. Congrats!",
  },
  {
    slug: "age-groups-2026-2027",
    title: "2026 to 2027 age groups",
    summary: "Age groups will follow an August 1 to July 31 birthdate window, instead of the previous calendar-year format.",
  },
  {
    slug: "travel-vs-club-soccer",
    title: "LSC Travel vs Club Soccer",
    summary:
      "LSC Travel soccer offers a balanced, community-focused experience ideal for multi-sport athletes, featuring lower costs and shorter commutes.",
  },
  {
    slug: "online-store",
    title: "LSC online store is open!",
    summary: "LSC Spirit Wear for children and adults through SquadLocker. All items ship directly to your home.",
  },
]

export const getNews = (slug: string) => news.find((n) => n.slug === slug)
