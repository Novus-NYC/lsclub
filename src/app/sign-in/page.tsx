import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { site } from "@/data/site"
import { SignInForm } from "@/lib/components/auth-forms"
import { authEnabled } from "@/lib/supabase/config"
import { createClient } from "@/lib/supabase/server"

export const metadata: Metadata = {
  title: "Member sign in",
  description: "Sign in for invited Livingston Soccer Club board members, coaches and volunteers.",
  robots: { index: false },
}

type Search = Promise<{ next?: string; error?: string; "signed-out"?: string }>

const notes: Record<string, string> = {
  link: "That link has expired or was already used. Ask for a new sign-in link below.",
}

export default async function SignIn({ searchParams }: { searchParams: Search }) {
  const sp = await searchParams
  const next = sp.next && sp.next.startsWith("/") && !sp.next.startsWith("//") ? sp.next : "/members"
  if (authEnabled) {
    const { data } = await (await createClient()).auth.getUser()
    if (data.user) redirect(next)
  }

  return (
    <section aria-labelledby="sign-in" className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      {/* The touchline: a pitch band with the corner of the field marked in chalk. */}
      <div className="relative overflow-hidden bg-turf text-chalk">
        <div aria-hidden="true" className="absolute bottom-[clamp(2rem,4vw,3.5rem)] left-[var(--gutter)] h-[clamp(7rem,14vw,12rem)] w-[min(70%,30rem)] border-b-[3px] border-l-[3px] border-chalk/60">
          <span className="absolute bottom-0 left-0 h-[clamp(3.5rem,6vw,5rem)] w-[clamp(3.5rem,6vw,5rem)] -translate-x-1/2 translate-y-1/2 rounded-full border-[3px] border-chalk/60 [clip-path:inset(0_0_50%_50%)]" />
        </div>
        <div className="wrap relative pb-[clamp(10.5rem,24vw,20rem)] pt-[clamp(2.5rem,6vw,5.5rem)]">
          <p className="label text-yellow">Members only</p>
          <h1 id="sign-in" className="mt-4" style={{ fontSize: "var(--t-h1)", lineHeight: 0.92, letterSpacing: "-0.012em" }}>
            Sign in
          </h1>
          <p className="t-lede mt-7 max-w-[30rem] text-chalk/90">
            For board members, coaches and volunteers. Membership is by invitation from the board, so there&rsquo;s no sign‑up form.
          </p>
        </div>
      </div>

      <div className="on-chalk bg-chalk">
        <div className="mx-auto max-w-[32rem] px-[var(--gutter)] py-[clamp(2.5rem,6vw,5.5rem)] lg:mx-0 lg:px-[clamp(2rem,4vw,4rem)]">
          {sp["signed-out"] ? (
            <p role="status" className="mb-7 border-l-4 border-turf bg-white px-4 py-3 font-semibold text-pitch">
              You&rsquo;re signed out.
            </p>
          ) : null}
          {sp.error && notes[sp.error] ? (
            <p role="alert" className="mb-7 border-l-4 border-[#b3261e] bg-white px-4 py-3 font-semibold text-[#8c1d18]">
              {notes[sp.error]}
            </p>
          ) : null}
          {!authEnabled ? (
            <p className="mb-7 border-l-4 border-yellow bg-white px-4 py-3 font-semibold text-pitch">
              Member sign-in is being set up and isn&rsquo;t open yet.
            </p>
          ) : null}

          <SignInForm next={next} disabled={!authEnabled} />

          <div className="mt-12 border-t-2 border-pitch pt-6 text-[1.0625rem]">
            <h2 className="font-bold text-pitch">Not invited yet?</h2>
            <p className="mt-2">
              Coaches and volunteers get access from the board. Email the{" "}
              <a href="mailto:president@lsclub.com" className="ul font-semibold text-turf">
                President
              </a>{" "}
              or see{" "}
              <Link href="/contacts" className="ul font-semibold text-turf">
                all club contacts
              </Link>
              .
            </p>
            <p className="mt-4 text-muted">
              Looking to sign a player up? That&rsquo;s{" "}
              <a href={site.registrationUrl} target="_blank" rel="noreferrer" className="ul font-semibold text-turf">
                Registration
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              , no account needed here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
