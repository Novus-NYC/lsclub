import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { site } from "@/data/site"
import { Arrow } from "@/lib/components/icons"
import { authEnabled } from "@/lib/supabase/config"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Members",
  robots: { index: false },
}

const shortcuts: { label: string; note: string; href: string; external?: boolean }[] = [
  { label: "In-Town schedules & game reports", note: "Schedules, standings, rating forms", href: "/in-town" },
  { label: "Coaches Corner", note: "Red Print links, rules, forms, articles", href: "/coaches-corner" },
  { label: "Grade coordinators", note: "Who to ask, by grade", href: "/coaches-corner#grade-coordinators" },
  { label: "Field status", note: "Open or closed today", href: site.fieldStatusUrl, external: true },
  { label: "Safe Sport", note: "Reporting and training", href: "/safe-sport" },
  { label: "Board contacts", note: "Every role and email", href: "/contacts" },
]

export default async function Members() {
  // The proxy already sends signed-out visitors to /sign-in; this is the second lock.
  if (!authEnabled) redirect("/sign-in")
  const { data } = await (await createClient()).auth.getUser()
  if (!data.user) redirect("/sign-in?next=/members")
  const email = data.user.email ?? "your account"

  return (
    <>
      <header className="bg-pitch text-chalk">
        <div className="wrap grid12 items-end gap-y-8 pb-[clamp(3rem,7vw,6rem)] pt-[clamp(2.5rem,6vw,5.5rem)]">
          <div className="col-span-12 lg:col-span-8">
            <p className="label text-yellow">Members</p>
            <h1 className="mt-4" style={{ fontSize: "var(--t-h1)", lineHeight: 0.92, letterSpacing: "-0.012em" }}>
              The clubhouse
            </h1>
            <p className="t-lede mt-7 max-w-[36rem] text-chalk/90">
              Signed in as <strong className="break-all text-chalk">{email}</strong>.
            </p>
          </div>
          <form action="/auth/sign-out" method="post" className="col-span-12 lg:col-span-4 lg:justify-self-end">
            <button type="submit" className="btn btn--chalk">
              Sign out
            </button>
          </form>
        </div>
      </header>

      <section aria-labelledby="shortcuts" className="on-chalk bg-chalk">
        <div className="wrap grid12 gap-y-10 py-[var(--s-normal)]">
          <h2 id="shortcuts" className="t-h2 col-span-12 text-pitch lg:col-span-4">
            Shortcuts
          </h2>
          <ul className="col-span-12 border-t-2 border-pitch lg:col-span-7 lg:col-start-6">
            {shortcuts.map((s) => {
              const inner = (
                <>
                  <span>
                    <span className="draw block font-display text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-[1.05] text-pitch">{s.label}</span>
                    <span className="mt-1 block text-muted">{s.note}</span>
                  </span>
                  <Arrow dir={s.external ? "out" : "right"} />
                </>
              )
              const cls = "group flex min-h-[4.5rem] items-center justify-between gap-6 py-4"
              return (
                <li key={s.href} className="border-b-2 border-pitch/25">
                  {s.external ? (
                    <a href={s.href} target="_blank" rel="noreferrer" className={cls}>
                      {inner}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  ) : (
                    <Link href={s.href} className={cls}>
                      {inner}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
