import Image from "next/image"
import Link from "next/link"
import { ageGroups, carpiniCup, fields, legendsWinners, partners, site } from "@/data/site"
import { Arrow, CenterCircle } from "@/lib/components/icons"
import Photo from "@/lib/components/photo"
import PitchCorner from "@/lib/components/pitch-corner"
import PenaltyBox from "@/lib/components/penalty-box"
import Champions from "@/lib/components/champions"

const programs = [
  {
    name: "KinderKickers",
    ages: "Pre-K & K",
    href: "/kinderkickers",
    text: "An enjoyable non-competitive program, led by professional trainers from Go2Soccer, designed to help our youngest soccer players develop basic soccer skills. Saturday mornings at Harrison.",
  },
  {
    name: "In-Town",
    ages: "Grades 1–12",
    href: "/in-town",
    text: "Teams with volunteer coaches. The season starts the weekend after Labor Day and ends with the Carpini Cup.",
  },
  {
    name: "Travel",
    ages: "U8–U19",
    href: "/travel",
    text: "Organized soccer at a more competitive level, with professional trainers for every team. Tryouts are typically held in May.",
  },
  {
    name: "Training Academy",
    ages: "Clinics",
    href: "/training-academy",
    text: "Indoor Skill Builder Clinics with Kickzsoccer at the Soccer Palace, West Orange, and the Red Bulls Academy.",
  },
]

const headlines = [
  { label: "LSC Travel vs Club Soccer", href: "/news/travel-vs-club-soccer" },
  { label: "LSC online store is open!", href: "/news/online-store" },
  { label: "Coach of the Year 2025", href: "/news/coach-of-the-year-2025" },
  { label: "Soccer Conditioning Tips", href: "https://www.youtube.com/watch?v=TZewBPMnizM", external: true },
  { label: "HEADS UP: All about Concussion", href: "http://www.cdc.gov/HeadsUp/Index.html", external: true },
]

export default function Home() {
  return (
    <>
      {/* 1. The opening: a real trophy moment in full color, the name chalked across it, and the
          hero itself marked out as the corner of the pitch. The one load animation on the site. */}
      <section aria-labelledby="hero-title" className="hero relative isolate overflow-clip bg-pitch text-chalk">
        <div className="hero-media absolute inset-x-0 top-0 -z-10 overflow-hidden h-[64svh] md:inset-y-0 md:left-auto md:h-auto md:w-[64%]">
          <Image
            src="/photos/fall-2026/hs-boys-division.jpg"
            alt="High school boys in green lifting a trophy under a blue sky and fall trees"
            fill
            priority
            sizes="(min-width: 768px) 64vw, 100vw"
            quality={85}
            className="hero-img object-cover"
          />
          <div className="hero-scrim absolute inset-0" />
          <p className="absolute right-[var(--gutter)] top-4 whitespace-nowrap text-right text-[0.8125rem] font-semibold text-chalk/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)] md:bottom-[clamp(1.5rem,3vw,2.5rem)] md:top-auto">
            In-Town HS Boys division, November 1, 2026
          </p>
        </div>

        <PitchCorner />

        <div className="wrap relative flex min-h-[calc(100svh-var(--header-h))] flex-col pb-[clamp(3rem,6vw,5.5rem)] md:min-h-[min(calc(100svh-var(--header-h)-2.75rem),56rem)]">
          <h1 id="hero-title" className="hero-title mt-[47svh] md:order-2 md:mt-auto">
            <span className="hero-line block whitespace-nowrap leading-[0.86] tracking-[-0.02em]" style={{ fontSize: "var(--t-hero)" }}>
              Livingston
            </span>
            <span className="hero-line block text-yellow" style={{ fontSize: "calc(var(--t-hero) * 0.52)", lineHeight: 0.95, ["--d" as string]: "140ms" }}>
              Soccer Club
            </span>
          </h1>
          <div className="hero-copy mt-8 md:order-1 md:mb-10 md:mt-0 md:w-[44%] md:pt-[clamp(1.5rem,3.5vw,3.5rem)] lg:w-[38%] xl:w-[34%]">
            <p className="font-display text-[clamp(1.625rem,1.2rem+1.4vw,2.5rem)] leading-[1.02]">Practice with Purpose! Play with Passion!</p>
            <p className="mt-5 text-[1.125rem] leading-[1.45] text-chalk/90 md:text-[1.1875rem]">
              Youth and adult Travel and In-Town soccer, run by volunteers promoting skill, teamwork, friendships and fun.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--yellow">
                Registration <Arrow dir="out" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="#programs" className="btn btn--chalk">
                Find your program <Arrow dir="down" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. This fall's trophies, as a team sheet beside the photo. */}
      <section aria-labelledby="champions" className="on-chalk overflow-clip bg-chalk">
        <div className="wrap pb-[var(--s-normal)] pt-[var(--s-tight)]">
          <h2 id="champions" className="t-h2 text-pitch" data-reveal="">
            Fall 2026 champions
          </h2>
          <Champions />
          <div className="mt-[clamp(2.5rem,5vw,4rem)] grid12 items-end gap-y-6 border-t-2 border-pitch pt-6">
            <Link href="/news/lancers-sectional-champions" className="group col-span-12 md:col-span-8">
              <p className="font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.75rem)] leading-none text-pitch">
                <span className="draw">Livingston HS Girls</span>
              </p>
              <p className="mt-2 text-[1.0625rem]">North 1, Group 4 sectional title, 3&ndash;2 over Ridgewood in a shootout</p>
            </Link>
            <div className="col-span-12 md:col-span-4 md:justify-self-end">
              <Link href="/news/fall-2026-travel-champions" className="btn btn--pitch">
                Team photos <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Programs, lettered like markings on the turf. */}
      <section id="programs" aria-labelledby="programs-title" className="relative isolate overflow-clip bg-turf text-chalk">
        {/* The goal end of the pitch, chalked under the programs: 18-yard box, 6-yard box, spot and D. */}
        <PenaltyBox className="absolute bottom-0 left-1/2 -z-10 w-[clamp(22rem,52vw,46rem)] -translate-x-1/2 text-chalk/[0.16]" />
        <span aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-[3px] bg-chalk/[0.16]" />
        <div className="wrap pb-[clamp(9rem,22vw,20rem)] pt-[var(--s-normal)]">
          <h2 id="programs-title" className="t-h2" data-reveal="">
            Find your program
          </h2>
          <ul className="mt-[clamp(2.5rem,5vw,4rem)] border-t-2 border-chalk/40">
            {programs.map((p, i) => (
              <li key={p.href} className="border-b-2 border-chalk/40" data-reveal="" style={{ "--i": i } as React.CSSProperties}>
                <Link href={p.href} className="grid12 group items-baseline gap-y-3 py-[clamp(1.5rem,3vw,2.5rem)]">
                  <span className="col-span-12 whitespace-nowrap font-display text-[clamp(2.75rem,1.6rem+4.4vw,6rem)] leading-[0.9] text-yellow md:col-span-5">{p.ages}</span>
                  <span className="col-span-12 md:col-span-6">
                    <span className="flex items-center gap-3 font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.625rem)] leading-none">
                      <span className="draw">{p.name}</span>
                      <Arrow className="text-[0.6em] transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                    <span className="mt-3 block max-w-[34rem] text-chalk/90">{p.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Carpini Cup, as a scoreboard. */}
      <section aria-labelledby="carpini" className="on-chalk bg-yellow text-pitch">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-4">
            <h2 id="carpini" className="t-h2" data-reveal="">
              2026 Carpini Cup
            </h2>
            <p className="mt-6 max-w-[26rem] text-[1.1875rem]" data-reveal="">
              The season-ending &ldquo;Second Chance&rdquo; tournament for grades 3 to 12, where anything can happen. Named after the founder of our club, Phil Carpini. The matchups are drawn live each October on the{" "}
              <a href="https://www.livingstonnj.org/511/LTV-Sports" target="_blank" rel="noreferrer" className="ul font-semibold">
                LTV Carpini Cup Selection Show
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              .
            </p>
            <Photo
              src="/photos/fall-2026/g56-cape-verde.jpg"
              alt="Grade 5 and 6 girls in green sitting on the grass at the championship ceremony as trophies are handed out"
              width={1600}
              height={1200}
              ratio="4 / 3"
              sizes="(min-width: 1024px) 30vw, 94vw"
              caption="5/6 Girls championship ceremony, November 1"
              mark="pitch"
              className="mt-10"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal="">
            <h3 className="sr-only">Finals</h3>
            <ul className="border-t-2 border-pitch">
              {carpiniCup.map((r) => {
                const pk = r.cs.includes("PK")
                return (
                  <li key={r.grade} className="border-b-2 border-pitch/25 py-[clamp(0.875rem,1.6vw,1.25rem)]">
                    <p className="text-[0.875rem] font-bold">{r.grade}</p>
                    <p className="score mt-2">
                      <span className="text-right font-display text-[clamp(1.375rem,1rem+1.3vw,2.25rem)] leading-[1.02]">
                        {r.champion}
                        {pk ? <span className="ml-2 align-middle font-sans text-[0.8125rem] font-bold">(PK)</span> : null}
                      </span>
                      <span className="score__bug">
                        <span>{r.cs.replace(/\s*\(PK\)/, "")}</span>
                        <span className="sr-only"> to </span>
                        <span>{r.fs}</span>
                      </span>
                      <span className="text-[clamp(1.0625rem,0.95rem+0.5vw,1.375rem)] font-semibold leading-tight">{r.finalist}</span>
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Age groups, as the handout. */}
      <section aria-labelledby="age-groups" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="age-groups" className="t-h2 text-pitch" data-reveal="">
              2026&ndash;2027 age groups
            </h2>
            <p className="mt-6 max-w-[30rem] text-[1.1875rem]" data-reveal="">
              Age groups now follow an August 1 to July 31 birthdate window instead of the calendar year, so team placement may change.
            </p>
            <Link href="/travel" className="btn btn--outline mt-8" data-reveal="">
              Travel program <Arrow />
            </Link>
          </div>
          <div className="corner corner--pitch col-span-12 bg-white px-[clamp(1rem,3vw,2.5rem)] py-[clamp(1.25rem,3vw,2.5rem)] lg:col-span-6 lg:col-start-7" data-reveal="">
            <table className="sheet tabular-nums">
              <caption className="sr-only">Eligible birth dates for each 2026 to 2027 age group</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[5.5rem] sm:w-[9rem]">
                    Age group
                  </th>
                  <th scope="col">Eligible birth dates</th>
                </tr>
              </thead>
              <tbody>
                {ageGroups.map((a) => (
                  <tr key={a.group}>
                    <th scope="row" className="!py-2.5 font-display !text-[1.75rem] !normal-case !tracking-normal text-pitch">
                      {a.group}
                    </th>
                    <td className="text-[1rem] sm:text-[1.0625rem]">
                      {a.from} to {a.to}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-5 text-[0.875rem] text-muted">
              Source:{" "}
              <a href="https://www.njyouthsoccer.com/news/age-group-formation/" target="_blank" rel="noreferrer" className="ul inline-block py-3">
                New Jersey Youth Soccer, Age Group Formation
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Coaches. */}
      <section aria-labelledby="coaches" className="relative overflow-clip bg-pitch text-chalk">
        <CenterCircle className="pointer-events-none absolute -left-[12rem] top-1/2 w-[36rem] -translate-y-1/2 text-chalk/10" />
        <div className="wrap relative py-[var(--s-loose)]">
          <h2 id="coaches" className="max-w-[17ch] text-[clamp(2.5rem,1rem+5.6vw,6.5rem)] leading-[0.96]" data-reveal="">
            Kids don&rsquo;t care how much you know, until they know how much you care.
          </h2>
          <div className="grid12 mt-[clamp(3rem,6vw,5rem)] gap-y-10 border-t-2 border-chalk/40 pt-10">
            <div className="col-span-12 md:col-span-5" data-reveal="">
              <p className="label text-mint">Coach of the Year 2025</p>
              <p className="mt-3 font-display text-[clamp(2rem,1.4rem+2vw,3.25rem)] leading-none text-yellow">Ritesh Biswas</p>
              <p className="mt-3 text-chalk/90">Congrats!</p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7" data-reveal="" style={{ "--i": 1 } as React.CSSProperties}>
              <p className="t-lede">
                Livingston Soccer Club always needs more soccer coaches! Please volunteer today. It&rsquo;s a very rewarding experience!
              </p>
              <p className="mt-4 text-chalk/90">All coaches complete a Background Check and Safety Training. We encourage parents, relatives, and even High School students to volunteer!</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/coaches-corner" className="btn btn--yellow">
                  Coaches Corner <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Legends: one big photo, the winners running past. */}
      <section aria-labelledby="legends" className="on-chalk bg-chalk">
        <div className="wrap pt-[var(--s-normal)]">
          <div className="grid12 items-end gap-y-6">
            <h2 id="legends" className="col-span-12 text-[clamp(4rem,2rem+9vw,11rem)] leading-[0.85] text-pitch lg:col-span-7" data-reveal="">
              Legends
            </h2>
            <p className="t-lede col-span-12 pb-2 lg:col-span-4 lg:col-start-9" data-reveal="">
              The club&rsquo;s co-ed adult league, for Livingston residents 30 and up.
            </p>
          </div>
          <Link href="/legends" className="group mt-8 block" aria-label="Legends: past winners and photos">
            <Photo
              src="/photos/legends-2023.jpg"
              alt="The 2023 Legends winners, A Liver Runs Through It, celebrating in front of the goal at night"
              width={1232}
              height={840}
              ratio="16 / 8"
              position="50% 40%"
              sizes="(min-width: 1440px) 1360px, 94vw"
              mark="pitch"
              caption="2023 winners: A Liver Runs Through It"
              captionClassName="text-muted"
            />
          </Link>
        </div>
        <div className="mt-[var(--s-tight)] overflow-hidden bg-pitch py-6 text-chalk" aria-label="Past Legends winners" role="region">
          <ul className="marquee">
            {[...legendsWinners, ...legendsWinners].map((w, i) => (
              <li key={i} aria-hidden={i >= legendsWinners.length ? true : undefined} className={`flex shrink-0 items-baseline gap-3 pr-12 ${i >= legendsWinners.length ? "marquee-dup" : ""}`}>
                <span className="font-sans text-[1rem] font-bold text-yellow tabular-nums">{w.year}</span>
                <span className="font-display text-[clamp(1.5rem,1.2rem+1vw,2.25rem)] leading-none">{w.team}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Fields. */}
      <section aria-labelledby="fields" className="bg-turf text-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-5">
            <h2 id="fields" className="t-h2" data-reveal="">
              Ten fields across town
            </h2>
            <p className="mt-6 max-w-[28rem] text-[1.1875rem] text-chalk/90" data-reveal="">
              Who decides if fields are closed? The Town of Livingston makes the decision based on weather and field conditions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-reveal="">
              <a href={site.fieldStatusUrl} target="_blank" rel="noreferrer" className="btn btn--yellow">
                Field status today <Arrow dir="out" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/fields" className="btn btn--chalk">
                Fields &amp; directions <Arrow />
              </Link>
            </div>
          </div>
          <ul className="col-span-12 grid border-t-2 border-chalk/40 sm:grid-cols-2 sm:gap-x-[var(--gutter)] lg:col-span-6 lg:col-start-7" data-reveal="">
            {fields.map((fl) => (
              <li key={fl.name} className="border-b-2 border-chalk/40">
                <a href={fl.map} target="_blank" rel="noreferrer" className="group flex min-h-[3.5rem] items-center justify-between gap-3 py-2 text-[1.125rem] font-semibold">
                  <span className="draw">{fl.name}</span>
                  <Arrow dir="out" className="text-yellow" />
                  <span className="sr-only"> (map, opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. More from the club. */}
      <section aria-labelledby="more" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <Link href="/news/award-ceremony-2026" className="group col-span-12 lg:col-span-7">
            <Photo
              src="/photos/award-dinner-2026.jpg"
              alt="Guests gathered at the LSC Award Ceremony dinner"
              width={2000}
              height={1126}
              ratio="3 / 2"
              sizes="(min-width: 1024px) 54vw, 94vw"
              mark="pitch"
            />
            <p className="label mt-7 text-turf">June 2, 2026</p>
            <h2 id="more" className="t-h3 mt-2 text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] text-pitch">
              <span className="draw">LSC Award Ceremony and the 2026 scholarships</span>
            </h2>
          </Link>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <h2 className="label text-turf">More headlines</h2>
            <ul className="mt-3 border-t-2 border-pitch/25">
              {headlines.map((h) => (
                <li key={h.href} className="border-b-2 border-pitch/25">
                  {h.external ? (
                    <a href={h.href} target="_blank" rel="noreferrer" className="group flex min-h-[3.75rem] items-center justify-between gap-4 py-3 text-[1.1875rem] font-semibold">
                      <span className="draw">{h.label}</span> <Arrow dir="out" className="text-turf" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={h.href} className="group flex min-h-[3.75rem] items-center justify-between gap-4 py-3 text-[1.1875rem] font-semibold">
                      <span className="draw">{h.label}</span> <Arrow className="text-turf" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/news" className="btn btn--outline mt-8">
              All club news <Arrow />
            </Link>
            <a href={site.social[0].href} target="_blank" rel="noreferrer" className="group mt-8 flex min-h-11 items-center gap-2 font-semibold text-turf">
              <span className="draw">Tag us: @livingston_soccerclub</span> <Arrow dir="out" />
              <span className="sr-only"> (Instagram, opens in a new tab)</span>
            </a>
          </div>

          <div className="col-span-12 mt-[var(--s-tight)] border-t-2 border-pitch/25 pt-8">
            <h2 className="label text-turf">Strategic partners</h2>
            <ul className="mt-6 flex flex-wrap items-center gap-x-[clamp(2rem,5vw,4.5rem)] gap-y-6">
              {partners.map((p) => (
                <li key={p.name}>
                  <a href={p.href} target="_blank" rel="noreferrer" className="block opacity-90 transition-opacity hover:opacity-100">
                    <Image src={p.logo} alt={p.name} width={p.w} height={p.h} className="h-14 w-auto mix-blend-multiply" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
