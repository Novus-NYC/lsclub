import { NextResponse, type NextRequest } from "next/server"
import { authEnabled } from "@/lib/supabase/config"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  if (authEnabled) await (await createClient()).auth.signOut()
  return NextResponse.redirect(new URL("/sign-in?signed-out=1", request.url), { status: 303 })
}
