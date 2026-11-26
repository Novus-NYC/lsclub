import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getNews, news } from "@/data/news"
import { ageGroups, carpiniCup, clubFile, fall2026, instagram, site } from "@/data/site"
import { Arrow } from "@/lib/components/icons"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"
import Photo from "@/lib/components/photo"

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const n = getNews((await params).slug)
  return n ? { title: n.title, description: n.summary } : {}
}

// Each post's body, from the club's own page for it.
const bodies: Record<string, React.ReactNode> = {
  "fall-2026-travel-champions": (
    <div>
      <ol className="space-y-[clamp(3rem,6vw,5rem)]">
        {fall2026.map((t, i) => (
          <li key={t.team}>
            <Photo src={t.photo.src} alt={t.photo.alt} width={t.photo.w} height={t.photo.h} sizes="(min-width: 1024px) 60vw, 94vw" mark={i % 2 ? "yellow" : "pitch"} priority={i === 0} />
            <h2 className="mt-6 font-display text-[clamp(2rem,1.4rem+2vw,3.25rem)] leading-none text-pitch">{t.team}</h2>
            <p className="mt-2 text-[1.1875rem]">{t.result}</p>
          </li>
        ))}
      </ol>
      <p className="mt-12 text-[1.0625rem] text-muted">
        Photos from the club&rsquo;s{" "}
        <a href={instagram} target="_blank" rel="noreferrer" className="ul font-semibold text-turf">
          Instagram
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        .
      </p>
    </div>
  ),
  "lancers-sectional-champions": (
    <div className="prose-club t-lede">
      <p>
        The top-seeded Livingston HS girls soccer team won the 2026 NJSIAA North Jersey, Section 1, Group 4 championship, defeating 3rd-seeded Ridgewood 3–2 in a shootout.
      </p>
      <p>This marks Livingston&rsquo;s second consecutive sectional title in North 1 Group 4. Congrats!</p>
    </div>
  ),
  "carpini-cup-results": (
    <div>
      <p className="prose-club text-[1.1875rem]">The Carpini Cup is the season-ending tournament, named after the founder of our club, Phil Carpini, for grades 3 to 12.</p>
      <table className="sheet mt-8 tabular-nums">
        <caption className="sr-only">Carpini Cup finals</caption>
        <thead>
          <tr>
            <th scope="col">Grade</th>
            <th scope="col">Champion</th>
            <th scope="col">Finalist</th>
          </tr>
        </thead>
        <tbody>
          {carpiniCup.map((r) => (
            <tr key={r.grade}>
              <th scope="row" className="!text-[0.875rem]">
                {r.grade}
              </th>
              <td className="font-display text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-none text-pitch">
                {r.champion}{"\u00a0"}{r.cs}
              </td>
              <td className="text-[1.0625rem]">
                {r.finalist}{"\u00a0"}{r.fs}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-14 grid gap-[var(--gutter)] sm:grid-cols-2">
        <Photo src="/photos/fall-2026/g56-cape-verde.jpg" alt="Grade 5 and 6 girls in green sitting on the grass at the championship ceremony as trophies are handed out" width={1600} height={1200} ratio="4 / 5" position="60% 50%" sizes="(min-width: 640px) 30vw, 94vw" mark="pitch" caption="5/6 Girls: Cape Verde 3, Portugal 1" captionClassName="text-muted" />
        <Photo src="/photos/fall-2026/g34-pegasus-a.jpg" alt="Grade 3 and 4 girls in yellow and pink sitting together by the field at the championship ceremony" width={1600} height={1600} ratio="4 / 5" sizes="(min-width: 640px) 30vw, 94vw" mark="yellow" caption="3/4 Girls: Pegasus for the win" captionClassName="text-muted" className="sm:mt-16" />
      </div>
    </div>
  ),
  "award-ceremony-2026": (
    <div>
      <p className="prose-club t-lede">Three best LHS soccer players were awarded during the LSC Award Ceremony on June 2, 2026.</p>
      <div className="mt-10 border-t-2 border-pitch pt-6">
        <h2 className="font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none text-pitch">2026 Delman Scholarship Award recipients</h2>
        <p className="mt-3 max-w-[36rem] text-muted">Named for Steve Delman, a former club president and longtime coach who served over 40 years on the LSC Board.</p>
        <ul className="mt-5 grid gap-x-8 text-[1.1875rem] font-semibold sm:grid-cols-2">
          {["Sophia Botea", "Hunter Lantzman", "Zoey Culver", "Sarah Kiareldeen", "Benjamin Murkis", "Mason Miller"].map((n) => (
            <li key={n} className="border-b-2 border-pitch/20 py-2.5">
              {n}
            </li>
          ))}
        </ul>
        <h2 className="mt-10 font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none text-pitch">Erin Donnelly Scholarship winners</h2>
        <ul className="mt-5 grid gap-x-8 text-[1.1875rem] font-semibold sm:grid-cols-2">
          {["H. Lantzman", "Gabriel Lopez-Simpson"].map((n) => (
            <li key={n} className="border-b-2 border-pitch/20 py-2.5">
              {n}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[1.1875rem]">Congratulations!</p>
      </div>
      <Photo
        src="/photos/award-ceremony-2026.jpg"
        alt="Players at the LSC Award Ceremony"
        width={1200}
        height={2132}
        ratio="4 / 5"
        position="50% 38%"
        sizes="(min-width: 768px) 30rem, 90vw"
        mark="pitch"
        className="mt-14 max-w-[30rem]"
      />
    </div>
  ),
  "coach-of-the-year-2025": (
    <div>
      <p className="label text-turf">Coach of the Year 2025</p>
      <p className="mt-3 font-display text-[clamp(3rem,2rem+4vw,6rem)] leading-[0.9] text-pitch">Ritesh Biswas</p>
      <p className="t-lede mt-6">Congrats!</p>
      <p className="mt-10 max-w-[36rem] text-[1.125rem]">
        Livingston Soccer Club always needs more soccer coaches! Please volunteer today. It&rsquo;s a very rewarding experience!{" "}
        <Link href="/coaches-corner" className="ul font-semibold text-turf">
          Coaches Corner
        </Link>
      </p>
    </div>
  ),
  "age-groups-2026-2027": (
    <div>
      <div className="prose-club text-[1.1875rem]">
        <p>
          <strong>Important update for parents and coaches.</strong> Age groups will follow an August 1 to July 31 birthdate window, instead of the previous calendar-year format.
        </p>
      </div>
      <table className="sheet mt-8 max-w-[36rem] tabular-nums">
        <caption className="sr-only">2026 to 2027 age groups and eligible birth dates</caption>
        <thead>
          <tr>
            <th scope="col">Age group</th>
            <th scope="col">Eligible birth dates</th>
          </tr>
        </thead>
        <tbody>
          {ageGroups.map((a) => (
            <tr key={a.group}>
              <th scope="row" className="font-display !text-[1.75rem] !normal-case !tracking-normal text-pitch">
                {a.group}
              </th>
              <td className="text-[1.0625rem]">
                {a.from} to {a.to}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="prose-club mt-8 text-[1.0625rem]">
        <p>
          <strong>What this means:</strong> player age groups and team placement may change for the 2026&ndash;2027 season. Please consult club officials for team-specific roster and tryout guidance.
        </p>
        <p className="text-muted">
          Source:{" "}
          <a href="https://www.njyouthsoccer.com/news/age-group-formation/" target="_blank" rel="noreferrer" className="ul">
            New Jersey Youth Soccer, Age Group Formation
          </a>
        </p>
      </div>
    </div>
  ),
  "travel-vs-club-soccer": (
    <div>
      <div className="prose-club t-lede">
        <p>
          LSC Travel soccer offers a balanced, community-focused experience ideal for multi-sport athletes, featuring lower costs ($1,250 to $1,730 a year) and shorter commutes. Club soccer (premier or academy) could provide an elite, year-round pathway with college recruiting exposure and higher competition, though it demands significantly more time and expense ($3,500 to $15,000+ a year).
        </p>
      </div>
      <h2 className="mt-12 font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none text-pitch">Advantages of LSC Travel</h2>
      <dl className="mt-5 border-t-2 border-pitch">
        {[
          ["Community connection", "Travel teams are composed of local peers, building school friendships and fostering strong family bonding due to players being from Livingston."],
          ["Multi-sport friendly", "Because the season is defined and less year-round, players have the flexibility to take part in other sports and activities with fewer scheduling conflicts."],
          ["Financial commitment", "Costs are significantly lower than club alternatives, covering league fees, professional coaching, referee costs and basic uniforms, rather than for-profit academy dues, out-of-state tournament travel, camps and private lessons."],
          ["Lighter travel burden", "Games and practices are kept regional, generally requiring drives of under an hour."],
          ["Guaranteed playing time", "Players have guaranteed playing time as per LSC guidelines, and LSC Travel players are guaranteed a spot on the team for the year."],
          ["Professional coaching", "LSC Travel has professional coaches for all games and practices. Many have coaching experience with premier level teams."],
          ["Select program", "LSC Travel players are eligible to join an EDP/ECNL select team in partnership with local towns’ travel programs."],
          ["Red Bulls partnership", "Players can supplement their travel training through the Red Bulls Regional Development School and enjoy exclusive New York Red Bulls Match Day Experiences."],
        ].map(([t, d]) => (
          <div key={t} className="grid gap-x-8 gap-y-1 border-b-2 border-pitch/25 py-5 md:grid-cols-[14rem_1fr]">
            <dt className="text-[1.125rem] font-bold text-pitch">{t}</dt>
            <dd className="text-[1.0625rem]">{d}</dd>
          </div>
        ))}
      </dl>
      <h2 className="mt-12 font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none text-pitch">Advantages of club (premier) soccer</h2>
      <div className="prose-club mt-5 text-[1.0625rem]">
        <p>
          Club platforms (such as MLS NEXT, ECNL or GA) could provide direct scouting exposure, consistent year-round competition against top-tier academies, and stronger team cohesion from training together three times a week.
        </p>
        <p>
          Important to note: unless the child is on the &ldquo;A&rdquo; team at the club program, these advantages disappear. LSC is a non-profit organization with the objective of providing a safe, professionally coached and reasonably priced soccer program for the committed player.
        </p>
      </div>
      <a href={clubFile("/_files/LSC%20Travel%20vs%20Club%20Soccer.pdf")} target="_blank" rel="noreferrer" className="btn btn--outline mt-10">
        Read the full comparison <Arrow dir="out" />
        <span className="sr-only"> (PDF, opens in a new tab)</span>
      </a>
    </div>
  ),
  "online-store": (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_16rem]">
      <div className="prose-club t-lede">
        <p>Parents and Players,</p>
        <p>The Livingston Soccer Club is excited to offer sportswear with our Logo for both children and adults through SquadLocker. All items will ship directly to your home!</p>
        <a href={site.storeUrl} target="_blank" rel="noreferrer" className="btn btn--pitch mt-4 !text-[1rem]">
          Shop LSC Spirit Wear <Arrow dir="out" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <Image src="/photos/spirit-wear.jpg" alt="LSC Spirit Wear flyer showing a club hoodie, polo and t-shirt" width={548} height={744} className="h-auto w-full max-w-[16rem] border-2 border-pitch" />
    </div>
  ),
}

export default async function NewsPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const n = getNews(slug)
  if (!n) notFound()
  const others = news.filter((o) => o.slug !== slug).slice(0, 3)
  return (
    <>
      <PageHeader title={n.title} parent={{ label: "Club news", href: "/news" }} intro={n.date} />
      <article className="on-chalk bg-chalk">
        <div className="wrap grid12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-8 xl:col-span-7">{bodies[n.slug]}</div>
          {n.image && n.slug === "award-ceremony-2026" ? (
            <Photo
              src={n.image.src}
              alt={n.image.alt}
              width={n.image.width}
              height={n.image.height}
              sizes="(min-width: 1024px) 30vw, 94vw"
              priority
              mark="pitch"
              className="col-span-12 mt-14 lg:col-span-4 lg:col-start-9 lg:mt-0 lg:self-start"
            />
          ) : null}
        </div>
      </article>
      <NextSteps links={others.map((o) => ({ label: o.title, href: `/news/${o.slug}` }))} title="More club news" />
    </>
  )
}
