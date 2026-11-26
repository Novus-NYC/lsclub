// Everything the club publishes about itself, in one place. Source: lsclub.ottosport.ai and the
// PDFs it links to (November 2026). Documents stay on the club's current host and are linked there.

export const HOST = "https://lsclub.ottosport.ai"
const f = (path: string) => `${HOST}${path}`

export type NavLink = { label: string; href: string }
export type Doc = { label: string; href: string; kind?: "PDF" | "Form" | "Word" | "Image" | "Link" }

export const site = {
  name: "Livingston Soccer Club",
  shortName: "LSC",
  url: "https://lsclub.com",
  description:
    "Livingston Soccer Club is the volunteer-run, non-profit soccer club of Livingston, NJ: KinderKickers, In-Town, Travel, Training Academy and Legends.",
  address: { line1: "P.O. Box 137", city: "Livingston", state: "NJ", zip: "07039" },
  registrationUrl: f("/_registration"),
  fieldStatusUrl: f("/location-status"),
  storeUrl: "https://teamlocker.squadlocker.com/#/lockers/livingston-soccer-club",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/livingston_soccerclub/" },
    { label: "Facebook", href: "https://www.facebook.com/Livingston-Soccer-Club-951970164930491/" },
  ],
}

export const nav: NavLink[] = [
  { label: "In-Town", href: "/in-town" },
  { label: "Travel", href: "/travel" },
  { label: "KinderKickers", href: "/kinderkickers" },
  { label: "Training Academy", href: "/training-academy" },
  { label: "Coaches Corner", href: "/coaches-corner" },
  { label: "Legends", href: "/legends" },
]

export const clubInfo: NavLink[] = [
  { label: "Contacts", href: "/contacts" },
  { label: "Fields & Directions", href: "/fields" },
  { label: "FAQs", href: "/faqs" },
  { label: "Safe Sport", href: "/safe-sport" },
  { label: "News", href: "/news" },
]

/** The board, from the Contacts page. */
export const board = [
  { role: "President", name: "Andy Feigenberg", email: "president@lsclub.com" },
  { role: "Vice President", name: "Nancy Russo-Petryna", email: "telenan@aol.com" },
  { role: "Treasurer", name: "Steve Toby", email: "treasurer@lsclub.com" },
  { role: "Secretary", name: "Carrie Parikh", email: "carrieduranceau@gmail.com" },
  { role: "Referee Coordinator", name: "James Solodar", email: "referee@lsclub.com" },
  { role: "KinderKickers", name: "Carlos Frade", email: "kinderkickers@lsclub.com" },
  { role: "Travel Director", name: "Michael Anderson", email: "travel@lsclub.com" },
  { role: "Webmaster", name: "Greg Shoyket", email: "webmaster@lsclub.com" },
]

/** 2026 Grade Coordinators, from Coaches Corner. */
export const gradeCoordinators = [
  { grade: "Grade 1 Boys", name: "Andy Feigenberg", email: "andy.feigenberg@gmail.com" },
  { grade: "Grade 2 Boys", name: "Eric Lee", email: "leefamily0825@yahoo.com" },
  { grade: "Grade 3/4 Boys", name: "Lisa Hung", email: "jlisahung@hotmail.com" },
  { grade: "Grade 5/6 Boys", name: "Aditya Joshi", email: "adityajoshi83@hotmail.com" },
  { grade: "Grade 7 to 9 Boys", name: "Greg Shoyket", email: "gregsh@hotmail.com" },
  { grade: "Grade 1/2 Girls", name: "Steve Toby", email: "orangeswirl45@gmail.com" },
  { grade: "Grade 3/4 Girls", name: "Carrie Parikh", email: "carrieduranceau@gmail.com" },
  { grade: "Grade 5/6 Girls", name: "Carlos Frade", email: "cfrade1@gmail.com" },
  { grade: "Grade 7 to 9 Girls", name: "Jan Skidds", email: "jmskidds@yahoo.com" },
  { grade: "COED High School", name: "Nancy Petryna", email: "telenan@aol.com" },
]

/** The ten town fields, with the map links from Field Directions. */
export const fields = [
  { name: "Burnet Hill", map: "https://goo.gl/maps/dNjKroeyrL7aRMvt8" },
  { name: "Harrison", map: "https://goo.gl/maps/9LYu8fWCDo759wP99" },
  { name: "Hillside", map: "https://goo.gl/maps/bMgRM9snKP8Lwcfo7" },
  { name: "Heritage Middle School", map: "https://goo.gl/maps/BsTADUtzMQeTso3D7" },
  { name: "Livingston High School", map: "https://goo.gl/maps/GdgoDpbrEHtQGLxo9" },
  { name: "Mt. Pleasant", map: "https://goo.gl/maps/1AT5jf64G7GyTAk88" },
  { name: "Northland (Basin)", map: "https://goo.gl/maps/p9V3tQxsqozkf6oR8" },
  { name: "Okner-Tevlin", map: "https://goo.gl/maps/HE5q4d1f3Z3wvHy98" },
  { name: "Riker Hill", map: "https://goo.gl/maps/hidcAcbkbKzid9Bh8" },
  { name: "SBMC (Madonna Turf)", map: "https://goo.gl/maps/V9heByZdU9SmhRwGA" },
]

export const fieldDiagrams: Doc[] = [
  { label: "Heritage Field Diagram", href: f("/_files/Heritage%20WS.pdf"), kind: "PDF" },
  { label: "Mt. Pleasant Field Diagram", href: f("/_files/in-town-program/MPE%20Fields%202022.jpg"), kind: "Image" },
  { label: "Okner Field Diagram", href: f("/_files/Okner%20WS.pdf"), kind: "PDF" },
  { label: "Madonna Turf Field Diagram", href: f("/_files/Madonna%20WS.pdf"), kind: "PDF" },
  { label: "Madonna Turf Festival Setup", href: f("/_files/in-town-program/Madonna%20Turf-Festival%20Setup.png"), kind: "Image" },
  { label: "2026 Field Key", href: f("/_files/in-town-program/26field.pdf"), kind: "PDF" },
]

/** Carpini Cup finals, from the home page. */
export const carpiniCup = [
  { grade: "3/4 Boys", champion: "Juventus", cs: "4", finalist: "AC Milan", fs: "2" },
  { grade: "3/4 Girls", champion: "Pegasus", cs: "2", finalist: "Palominos", fs: "0" },
  { grade: "5/6 Boys", champion: "France", cs: "3", finalist: "USA", fs: "2" },
  { grade: "5/6 Girls", champion: "Cape Verde", cs: "3", finalist: "Portugal", fs: "1" },
  { grade: "7 to 9 Boys", champion: "Man City", cs: "2", finalist: "Chelsea", fs: "1" },
  { grade: "7 to 9 Girls", champion: "Gotham", cs: "5", finalist: "Orlando", fs: "1" },
  { grade: "High School", champion: "Green", cs: "2 (PK)", finalist: "White", fs: "2" },
]

/** 2026 to 2027 age groups (August 1 to July 31 birthdate window), from the Travel Soccer News poster. */
export const ageGroups = [
  { group: "U15", from: "Aug 1, 2011", to: "Jul 31, 2012" },
  { group: "U14", from: "Aug 1, 2012", to: "Jul 31, 2013" },
  { group: "U13", from: "Aug 1, 2013", to: "Jul 31, 2014" },
  { group: "U12", from: "Aug 1, 2014", to: "Jul 31, 2015" },
  { group: "U11", from: "Aug 1, 2015", to: "Jul 31, 2016" },
  { group: "U10", from: "Aug 1, 2016", to: "Jul 31, 2017" },
  { group: "U9", from: "Aug 1, 2017", to: "Jul 31, 2018" },
  { group: "U8", from: "Aug 1, 2018", to: "Jul 31, 2019" },
]

/** Past Legends winners. 2011 to 2021 from the Legends page, 2022 and 2023 from the captioned photos. */
export const legendsWinners = [
  { year: "2023", team: "A Liver Runs Through It" },
  { year: "2022", team: "Rolling Stone" },
  { year: "2021", team: "Sons of Arthritis" },
  { year: "2019", team: "The Untouchables" },
  { year: "2018", team: "The Young and the Rest of Us" },
  { year: "2017", team: "Manchesthair United" },
  { year: "2016", team: "Team Viagra" },
  { year: "2015", team: "Grumpy Old Men" },
  { year: "2014", team: "Low T" },
  { year: "2013", team: "Red" },
  { year: "2012", team: "Gold Finger" },
  { year: "2011", team: "Low Sodium" },
]

export const partners = [
  { name: "New York Red Bulls", href: "https://www.newyorkredbulls.com/youth/red-print/coaching-guide", logo: "/partners/red-bulls.png", w: 179, h: 154 },
  { name: "Kickz Soccer", href: "https://www.kickzsoccer.com/", logo: "/partners/kickz.png", w: 214, h: 122 },
  { name: "Go2Soccer", href: "https://www.go2soccer.net/", logo: "/partners/go2soccer.png", w: 259, h: 77 },
  { name: "New Jersey Youth Soccer", href: "http://www.njyouthsoccer.com/", logo: "/partners/nj-youth-soccer.png", w: 106, h: 104 },
]

export const faqDocs: Doc[] = [
  { label: "FAQs about InTown Soccer 2026", href: f("/_files/FAQs%20about%20InTown%20Soccer%20updated%202026a%201.pdf"), kind: "PDF" },
  { label: "FAQs about Referees", href: f("/_files/FAQs%20about%20Referees.pdf"), kind: "PDF" },
  { label: "FAQs about Travel Soccer", href: f("/_files/FAQs%20about%20Travel%20Soccer.pdf"), kind: "PDF" },
  { label: "General FAQs about our Programs", href: f("/_files/General%20FAQs%20about%20our%20Programs.pdf"), kind: "PDF" },
]

export const safeSportDocs: Doc[] = [
  { label: "LSClub Policies to Promote Safe Soccer", href: f("/_files/Livingston%20Soccer%20Club's%20Policies%20to%20Promote%20Safe%20Soccer.pdf"), kind: "PDF" },
  { label: "How to Report a Reasonable Concern of any Abuse/Neglect", href: f("/_files/How%20to%20Report%20a%20Reasonable%20Concern%20of%20Sexual%20or%20Physical%20abuse.pdf"), kind: "PDF" },
]

export { f as clubFile }
