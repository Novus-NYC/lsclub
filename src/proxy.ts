import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"
import { authEnabled, supabaseKey, supabaseUrl } from "@/lib/supabase/config"

// Keeps the Supabase session fresh and keeps the members area behind sign-in.
export async function proxy(request: NextRequest) {
  const isMembers = request.nextUrl.pathname.startsWith("/members")
  if (!authEnabled) {
    return isMembers ? NextResponse.redirect(new URL("/sign-in", request.url)) : NextResponse.next()
  }

  let response = NextResponse.next({ request })
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (list) => {
        list.forEach(({ name, value }) => request.cookies.set(name, value))
        response = NextResponse.next({ request })
        list.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (isMembers && !user) {
    const url = new URL("/sign-in", request.url)
    url.searchParams.set("next", request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }
  return response
}

export const config = {
  matcher: ["/members/:path*", "/sign-in", "/auth/:path*"],
}
