import type { EmailOtpType } from "@supabase/supabase-js"
import { NextResponse, type NextRequest } from "next/server"
import { authEnabled } from "@/lib/supabase/config"
import { createClient } from "@/lib/supabase/server"

// Where the invitation and sign-in emails land. Accepts the token_hash links from the email
// templates in the README, and the ?code= links Supabase sends by default.
export async function GET(request: NextRequest) {
  const url = request.nextUrl
  const type = url.searchParams.get("type") as EmailOtpType | null
  const tokenHash = url.searchParams.get("token_hash")
  const code = url.searchParams.get("code")
  const nextParam = url.searchParams.get("next") ?? "/members"
  const next = nextParam.startsWith("/") && !nextParam.startsWith("//") ? nextParam : "/members"
  const fail = new URL("/sign-in?error=link", request.url)
  if (!authEnabled) return NextResponse.redirect(fail)

  const supabase = await createClient()
  let ok = false
  if (tokenHash && type) {
    ok = !(await supabase.auth.verifyOtp({ type, token_hash: tokenHash })).error
  } else if (code) {
    ok = !(await supabase.auth.exchangeCodeForSession(code)).error
  }
  if (!ok) return NextResponse.redirect(fail)
  // A new member arriving from an invitation chooses a password first.
  return NextResponse.redirect(new URL(type === "invite" || type === "recovery" ? "/auth/set-password" : next, request.url))
}
