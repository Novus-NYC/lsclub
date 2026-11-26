import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { supabaseKey, supabaseUrl } from "./config"

/** Supabase client for server components, server actions and route handlers. */
export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (list) => {
        try {
          list.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // Called from a server component, where cookies are read-only. The proxy refreshes them.
        }
      },
    },
  })
}
