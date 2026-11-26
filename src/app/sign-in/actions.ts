"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { authEnabled } from "@/lib/supabase/config"
import { createClient } from "@/lib/supabase/server"

export type FormState = { error?: string; sent?: string } | undefined

const safeNext = (v: FormDataEntryValue | null) => {
  const s = typeof v === "string" ? v : ""
  return s.startsWith("/") && !s.startsWith("//") ? s : "/members"
}

export async function signInWithPassword(_: FormState, form: FormData): Promise<FormState> {
  if (!authEnabled) return { error: "Sign-in isn’t switched on yet." }
  const email = String(form.get("email") ?? "").trim()
  const password = String(form.get("password") ?? "")
  if (!email || !password) return { error: "Enter your email and password." }
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return { error: "That email and password don’t match an invited member. Check them and try again." }
  redirect(safeNext(form.get("next")))
}

/** Emails a one-time sign-in link. Never creates an account: membership is by invitation only. */
export async function sendSignInLink(_: FormState, form: FormData): Promise<FormState> {
  if (!authEnabled) return { error: "Sign-in isn’t switched on yet." }
  const email = String(form.get("email") ?? "").trim()
  if (!email) return { error: "Enter the email address you were invited with." }
  const origin = (await headers()).get("origin") ?? ""
  const supabase = await createClient()
  await supabase.auth.signInWithOtp({
    email,
    options: { shouldCreateUser: false, emailRedirectTo: `${origin}/auth/confirm?next=${encodeURIComponent(safeNext(form.get("next")))}` },
  })
  // Same answer whether or not the address is a member, so the form can't be used to look people up.
  return { sent: `If ${email} belongs to an invited member, a sign-in link is on its way. It works once.` }
}

export async function setPassword(_: FormState, form: FormData): Promise<FormState> {
  if (!authEnabled) return { error: "Sign-in isn’t switched on yet." }
  const password = String(form.get("password") ?? "")
  const confirm = String(form.get("confirm") ?? "")
  if (password.length < 10) return { error: "Use at least 10 characters." }
  if (password !== confirm) return { error: "The two passwords don’t match." }
  const supabase = await createClient()
  const { error } = await supabase.auth.updateUser({ password })
  if (error) return { error: "That didn’t save. Open the link from your invitation email again, then set your password." }
  redirect("/members")
}
