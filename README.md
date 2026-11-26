# Livingston Soccer Club

The club website: Next.js (App Router), Tailwind, and Supabase for invite-only member sign-in.

```bash
npm install
npm run dev
```

Club details (board, fields, documents, age groups, winners) live in `src/data/site.ts`; news posts in `src/data/news.ts`. Documents still link to the club's current host through `clubFile()`.

## Member sign-in (invite only)

There is no sign-up form. The board invites people, and only invited addresses can sign in.

- `/sign-in`: password, or a one-time email link (`shouldCreateUser: false`, so unknown addresses never get an account).
- `/auth/confirm`: where invitation and sign-in emails land. Invitations go on to `/auth/set-password`.
- `/members`: signed-in area, guarded by `src/proxy.ts` and again on the page.
- `/auth/sign-out`: POST.

Without the env vars the sign-in page says it isn't open yet and `/members` sends visitors to `/sign-in`.

### Supabase setup

1. Create a project and copy `.env.example` to `.env.local` with its URL and publishable (or anon) key. Add the same two variables in Vercel.
2. **Authentication → Sign In / Providers**: turn **off** "Allow new users to sign up". Keep Email enabled.
3. **Authentication → URL Configuration**: Site URL `https://lsclub.com` (or the deploy URL). Add `http://localhost:3000/**` and the Vercel preview URL to Redirect URLs.
4. **Authentication → Emails**, edit the templates so links go through `/auth/confirm`:
   - Invite user: `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=invite`
   - Magic link: `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email&next=/members`
   - Reset password: `{{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=recovery`
5. To add a member: **Authentication → Users → Invite user**, enter their email. They get the invitation, set a password, and land on `/members`.
