import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { SetPasswordForm } from "@/lib/components/auth-forms"
import { authEnabled } from "@/lib/supabase/config"
import { createClient } from "@/lib/supabase/server"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Set your password",
  robots: { index: false },
}

// Reached from an invitation (or password reset) email, after /auth/confirm has signed the member in.
export default async function SetPasswordPage() {
  if (!authEnabled) redirect("/sign-in")
  const { data } = await (await createClient()).auth.getUser()
  if (!data.user) redirect("/sign-in?error=link")

  return (
    <section aria-labelledby="set-password" className="grid lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
      <div className="bg-turf text-chalk">
        <div className="wrap pb-[var(--s-normal)] pt-[clamp(2.5rem,6vw,5.5rem)]">
          <p className="label text-yellow">Welcome to the club</p>
          <h1 id="set-password" className="mt-4" style={{ fontSize: "var(--t-h1-long)", lineHeight: 0.98, letterSpacing: "-0.012em" }}>
            Choose a password
          </h1>
          <p className="t-lede mt-7 max-w-[30rem] text-chalk/90">
            You&rsquo;re signed in as <strong className="break-all text-chalk">{data.user.email}</strong>. Pick a password so you can sign in next time without waiting for an email.
          </p>
        </div>
      </div>
      <div className="on-chalk bg-chalk">
        <div className="mx-auto max-w-[32rem] px-[var(--gutter)] py-[clamp(2.5rem,6vw,5.5rem)] lg:mx-0 lg:px-[clamp(2rem,4vw,4rem)]">
          <SetPasswordForm />
        </div>
      </div>
    </section>
  )
}
