import type { Metadata } from "next"
import Link from "next/link"
import { faqDocs } from "@/data/site"
import DocList from "@/lib/components/doc-list"
import NextSteps from "@/lib/components/next-steps"
import PageHeader from "@/lib/components/page-header"

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to In-Town soccer questions: registration, teams, friend requests, practices, refunds, the season, the Carpini Cup, coaching and field closures.",
}

// From "FAQs about InTown Soccer 2026", in the club's words.
const faqs: { q: string; a: React.ReactNode }[] = [
  { q: "How do I register?", a: "It’s best to use your computer rather than your smartphone. Look for the yellow Registration button at the top of every page." },
  { q: "How are teams formed?", a: "In grades 1 and 2, teams are formed by the club. They are also formed by the club for 7 to 9 Girls and HS. The other grades will have drafts conducted by the club with the coaches for the age group." },
  { q: "May I make a friend request?", a: "The following divisions are allowed friend requests: 1 Girls, 1 Boys, 7 to 9 Girls, and Girls playing in HS. They are not honored in the other grades. We encourage all players to make new friends on the fields! It builds resilience and self-esteem." },
  { q: "Can I switch my child’s team?", a: "Sorry, we do not switch teams for children once the teams are formed. It disrupts the balance and even numbers that help make the experience more fun for everyone playing." },
  { q: "When and where are practices scheduled?", a: "The practice schedule and location (based on field availability) are determined by the volunteer coach once the teams are formed or drafted. Coaches will be able to sign up for fields beginning around September 1st." },
  { q: "What happens if my child cannot make the practice time or day?", a: "We encourage all parents to be flexible and do their best to have their child at practice. (Remember, coaches decide the day and there are no team switches allowed.) Coaches will not penalize a child who is not at practice with less playing time during games." },
  { q: "If I coach, may I request an assistant coach?", a: "Absolutely! We do our best to pair coaches that make mutual requests for each other." },
  { q: "May I ask for a refund once I have signed my child up?", a: "Yes, but only before August 1st." },
  { q: "When does the season start?", a: "The weekend after Labor Day." },
  { q: "When are the games played?", a: "Weekends, with occasional games during the week for grades 3 to 12." },
  { q: "When and how do I find out my team?", a: "Teams are formed after mid-August. You will be contacted by the coach, and you can also see team assignments in the Otto Sport App on Google Play or the App Store." },
  { q: "How do I find my coach’s name and contact information?", a: "Check the Otto Sport App! It allows emails and chats between players and coaches." },
  { q: "Why is a late fee charged?", a: "Uniforms and equipment are ordered in early July based on the numbers that have registered. When you register late, we pay more for extra items to outfit your athlete. Only one late fee is charged per family and waivers are offered for new residents." },
  {
    q: "Who can I contact if I have a question?",
    a: (
      <>
        &ldquo;Ask three then me&rdquo; applies here too! First, read these FAQs, then your coach, then the Grade Coordinator. If this still doesn&rsquo;t help, ask the head of In-Town. The last person to email is the president.{" "}
        <Link href="/contacts" className="ul font-semibold text-turf">
          List of contacts
        </Link>
      </>
    ),
  },
  { q: "When is the latest I can register?", a: "If space allows on the team, you may register right up to the start of the season in September. Some grades close earlier than that and you may be put on a waitlist." },
  { q: "What is the Carpini Cup?", a: "The season-ending tournament, named after the founder of our club, Phil Carpini, for grades 3 to 12." },
  { q: "What are the requirements to be a coach?", a: "All coaches complete a Background Check and Safety Training. This protects our players and our coaches. We encourage parents, relatives, and even High School students to volunteer!" },
  { q: "What does an assistant coach do?", a: "The assistant coach helps the head coach with running a weekly practice and game day coaching." },
  { q: "Can I play In-Town and Travel soccer?", a: "Travel and Club players are encouraged to join the fun of In-Town." },
  { q: "Who decides if fields are closed?", a: "The Town of Livingston makes the decision based on weather and field conditions." },
  { q: "Are there any programs outside of the Fall season?", a: "Yes, there are clinics and camps that we will send out information about throughout the year." },
]

export default function Faqs() {
  return (
    <>
      <PageHeader title="FAQs" label="FAQs about InTown Soccer 2026" intro="Most answers are here. If not, ask your coach, then your Grade Coordinator." />

      <section aria-labelledby="questions" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-12 py-[var(--s-normal)]">
          <div className="col-span-12 lg:col-span-8">
            <h2 id="questions" className="sr-only">
              Questions
            </h2>
            <div className="border-t-2 border-pitch">
              {faqs.map((f) => (
                <details key={f.q} className="qa border-b-2 border-pitch/25">
                  <summary>
                    <span>{f.q}</span>
                    <span className="qa__mark text-turf" aria-hidden="true" />
                  </summary>
                  <div className="max-w-[40rem] pb-6 text-[1.0625rem] leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
          <aside aria-labelledby="more-faqs" className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <h2 id="more-faqs" className="font-display text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-none text-pitch">
                Other frequently asked questions
              </h2>
              <DocList docs={faqDocs} className="mt-6" />
            </div>
          </aside>
        </div>
      </section>

      <NextSteps
        links={[
          { label: "In-Town", href: "/in-town" },
          { label: "Travel", href: "/travel" },
          { label: "Contacts", href: "/contacts" },
        ]}
      />
    </>
  )
}
