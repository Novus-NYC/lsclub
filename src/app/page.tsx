import Image from "next/image"
import Link from "next/link"
import { ageGroups, carpiniCup, fields, legendsWinners, partners, site } from "@/data/site"
import { Arrow, CenterCircle } from "@/lib/components/icons"
import Photo from "@/lib/components/photo"

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
      {/* 1. The name, chalked onto the pitch. */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-clip text-chalk"
        style={{
          background: "linear-gradient(to bottom, var(--pitch) 0, var(--pitch) calc(100% - var(--hang)), var(--chalk) calc(100% - var(--hang)))",
          ["--hang" as string]: "clamp(6rem, 16vw, 15rem)",
        }}
      >
        <div className="wrap relative pt-[clamp(2rem,5vw,4.5rem)]">
          <p className="label text-yellow" data-reveal="">
            Livingston, New Jersey
          </p>
          <h1 id="hero-title" className="mt-3">
            <span className="block whitespace-nowrap leading-[0.86] tracking-[-0.02em]" style={{ fontSize: "var(--t-hero)" }}>
              Livingston
            </span>
            <span className="mt-1 block text-yellow" style={{ fontSize: "calc(var(--t-hero) * 0.52)", lineHeight: 0.95 }}>
              Soccer Club
            </span>
          </h1>

          {/* The halfway line, with the center circle sitting on it. */}
          <div className="relative mt-[clamp(1.75rem,4vw,3rem)] h-[2px] bg-chalk/40" data-reveal="line">
            <CenterCircle className="pointer-events-none absolute right-[8%] top-1/2 w-[clamp(16rem,34vw,30rem)] -translate-y-1/2 text-chalk/25 max-md:hidden" />
          </div>

          <div className="grid12 relative gap-y-12 pt-[clamp(2rem,4vw,3.5rem)]">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <p className="font-display text-[clamp(1.75rem,1.2rem+2vw,3rem)] leading-[1.02]" data-reveal="">
                Practice with Purpose! Play with Passion!
              </p>
              <p className="t-lede mt-6 text-chalk/90" data-reveal="" style={{ "--i": 1 } as React.CSSProperties}>
                The volunteer-run, non-profit soccer club for Livingston kids, from KinderKickers through high school.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" data-reveal="" style={{ "--i": 2 } as React.CSSProperties}>
                <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="btn btn--yellow">
                  Registration <Arrow dir="out" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <Link href="#programs" className="btn btn--chalk">
                  Find your program <Arrow dir="down" />
                </Link>
              </div>
            </div>
            <Photo
              src="/photos/award-ceremony-2026.jpg"
              alt="Players at the LSC Award Ceremony"
              width={1200}
              height={2132}
              ratio="4 / 5"
              position="50% 38%"
              sizes="(min-width: 1024px) 34vw, (min-width: 768px) 44vw, 88vw"
              caption="LSC Award Ceremony, June 2, 2026"
              captionClassName="text-muted"
              mark="split"
              priority
              className="col-span-12 max-md:mx-[clamp(0.5rem,4vw,2rem)] md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8 md:-mt-[clamp(2rem,9vw,9rem)]"
            />
          </div>
        </div>
      </section>

      {/* 2. The Lancers. */}
      <section aria-labelledby="lancers" className="on-chalk bg-chalk">
        <div className="wrap grid12 items-end gap-y-10 pb-[var(--s-normal)] pt-[var(--s-tight)]">
          <div className="col-span-12 lg:col-span-7">
            <p className="label text-turf" data-reveal="">
              Livingston HS girls
            </p>
            <h2 id="lancers" className="t-h2 mt-4 text-pitch" data-reveal="">
              Second consecutive sectional title
            </h2>
            <p className="t-lede mt-6 max-w-[38rem]" data-reveal="">
              The top-seeded Livingston HS girls soccer team won the 2026 NJSIAA North Jersey, Section 1, Group 4 championship, defeating 3rd-seeded Ridgewood 3–2 in a shootout. Congrats!
            </p>
          </div>
          <div className="col-span-12 border-l-2 border-pitch pl-[var(--gutter)] lg:col-span-4 lg:col-start-9" data-reveal="">
            <p className="label text-muted">Final, vs. Ridgewood</p>
            <p className="tabular-nums font-display text-[clamp(6rem,4rem+8vw,11rem)] leading-[0.85] text-pitch">3–2</p>
            <p className="mt-3 font-semibold">in a shootout</p>
            <Link href="/news/lancers-sectional-champions" className="group mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-turf">
              <span className="draw">Read the post</span> <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Programs, lettered like markings on the turf. */}
      <section id="programs" aria-labelledby="programs-title" className="bg-turf text-chalk">
        <div className="wrap py-[var(--s-normal)]">
          <div className="grid12 items-end gap-y-6">
            <h2 id="programs-title" className="t-h2 col-span-12 lg:col-span-6" data-reveal="">
              Find your program
            </h2>
            <p className="t-lede col-span-12 text-chalk/90 lg:col-span-5 lg:col-start-8" data-reveal="">
              Four programs, from Pre-K KinderKickers to high school In-Town and competitive Travel.
            </p>
          </div>
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
            <p className="label" data-reveal="">
              In-Town finals
            </p>
            <h2 id="carpini" className="t-h2 mt-4" data-reveal="">
              Carpini Cup results
            </h2>
            <p className="mt-6 max-w-[26rem] text-[1.1875rem]" data-reveal="">
              The season-ending tournament, named after the founder of our club, Phil Carpini, for grades 3 to 12.
            </p>
            <Photo
              src="/photos/carpini-cup-trophy.jpg"
              alt="Players in green shirts holding up a trophy"
              width={236}
              height={244}
              sizes="236px"
              mark="pitch"
              className="mt-10 w-[min(100%,236px)]"
            />
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6" data-reveal="">
            <table className="sheet tabular-nums">
              <caption className="sr-only">Carpini Cup finals: champion and finalist for each grade</caption>
              <thead>
                <tr>
                  <th scope="col">Grade</th>
                  <th scope="col">Champion</th>
                  <th scope="col" className="max-sm:hidden">
                    Finalist
                  </th>
                </tr>
              </thead>
              <tbody>
                {carpiniCup.map((r) => (
                  <tr key={r.grade} className="border-pitch">
                    <th scope="row" className="!text-[0.875rem] !tracking-[0.08em]">
                      {r.grade}
                    </th>
                    <td className="!border-pitch/30">
                      <span className="font-display text-[clamp(1.5rem,1.1rem+1.3vw,2.25rem)] leading-none">
                        {r.champion}{"\u00a0"}{r.cs}
                      </span>
                      <span className="mt-1 block text-[0.9375rem] sm:hidden">
                        over {r.finalist}{"\u00a0"}{r.fs}
                      </span>
                    </td>
                    <td className="text-[1.125rem] max-sm:hidden">
                      {r.finalist}{"\u00a0"}{r.fs}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Age groups, as the handout. */}
      <section aria-labelledby="age-groups" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-5">
            <p className="label text-turf" data-reveal="">
              Travel Soccer News
            </p>
            <h2 id="age-groups" className="t-h2 mt-4 text-pitch" data-reveal="">
              2026&ndash;2027 age groups
            </h2>
            <p className="mt-6 max-w-[30rem] text-[1.1875rem]" data-reveal="">
              Important update for parents and coaches: age groups will follow an August 1 to July 31 birthdate window, instead of the previous calendar-year format.
            </p>
            <p className="mt-4 max-w-[30rem] text-muted" data-reveal="">
              Player age groups and team placement may change for the 2026&ndash;2027 season. Please consult club officials for team-specific roster and tryout guidance.
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
          <p className="label text-yellow" data-reveal="">
            Coaches Corner
          </p>
          <h2 id="coaches" className="mt-5 max-w-[17ch] text-[clamp(2.5rem,1rem+5.6vw,6.5rem)] leading-[0.96]" data-reveal="">
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
              Welcome to Legends! Congratulations to every past Livingston Legends winner.
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
            <p className="mt-10 text-[1.0625rem]">
              We have an LSClub Instagram page. Tag us in your photos!{" "}
              <a href={site.social[0].href} target="_blank" rel="noreferrer" className="ul font-semibold text-turf">
                @livingston_soccerclub
              </a>
            </p>
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
