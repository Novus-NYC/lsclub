// Supabase project settings. Sign-in stays switched off (and says so) until both are set.
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
export const authEnabled = Boolean(supabaseUrl && supabaseKey)
