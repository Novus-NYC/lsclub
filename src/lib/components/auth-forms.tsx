"use client"

import { useActionState, useState } from "react"
import { sendSignInLink, setPassword, signInWithPassword } from "@/app/sign-in/actions"
import { Arrow } from "./icons"

function Message({ error, sent }: { error?: string; sent?: string }) {
  if (error)
    return (
      <p role="alert" className="mt-5 border-l-4 border-[#b3261e] bg-white px-4 py-3 font-semibold text-[#8c1d18]">
        {error}
      </p>
    )
  if (sent)
    return (
      <p role="status" className="mt-5 border-l-4 border-turf bg-white px-4 py-3 font-semibold text-pitch">
        {sent}
      </p>
    )
  return null
}

export function SignInForm({ next, disabled }: { next: string; disabled: boolean }) {
  const [mode, setMode] = useState<"password" | "link">("password")
  const [pwState, pwAction, pwPending] = useActionState(signInWithPassword, undefined)
  const [linkState, linkAction, linkPending] = useActionState(sendSignInLink, undefined)
  const state = mode === "password" ? pwState : linkState
  const pending = mode === "password" ? pwPending : linkPending

  return (
    <div>
      <div role="tablist" aria-label="How to sign in" className="flex border-b-2 border-pitch">
        {(["password", "link"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            onClick={() => setMode(m)}
            className={`min-h-12 flex-1 px-3 font-bold transition-colors ${mode === m ? "bg-pitch text-chalk" : "text-pitch hover:bg-pitch/10"}`}
          >
            {m === "password" ? "Password" : "Email me a link"}
          </button>
        ))}
      </div>

      <form action={mode === "password" ? pwAction : linkAction} className="mt-7" noValidate>
        <input type="hidden" name="next" value={next} />
        <fieldset disabled={disabled || pending} className="space-y-5 [&:disabled_input]:cursor-not-allowed [&:disabled_input]:bg-chalk-deep [&:disabled_button]:cursor-not-allowed [&:disabled_button]:opacity-60">
          <div>
            <label htmlFor="email" className="mb-2 block font-semibold">
              Email
            </label>
            <input id="email" name="email" type="email" autoComplete="email" required className="field" />
          </div>
          {mode === "password" ? (
            <div>
              <label htmlFor="password" className="mb-2 block font-semibold">
                Password
              </label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="field" />
            </div>
          ) : (
            <p className="text-[1rem] text-muted">We&rsquo;ll email a one-time sign-in link to the address you were invited with.</p>
          )}
          <button type="submit" className="btn btn--pitch w-full">
            {pending ? "One moment…" : mode === "password" ? "Sign in" : "Email me a sign-in link"} {pending ? null : <Arrow />}
          </button>
        </fieldset>
        <Message {...(state ?? {})} />
      </form>
    </div>
  )
}

export function SetPasswordForm() {
  const [state, action, pending] = useActionState(setPassword, undefined)
  return (
    <form action={action} noValidate>
      <fieldset disabled={pending} className="space-y-5">
        <div>
          <label htmlFor="password" className="mb-2 block font-semibold">
            New password
          </label>
          <input id="password" name="password" type="password" autoComplete="new-password" minLength={10} required aria-describedby="pw-hint" className="field" />
          <p id="pw-hint" className="mt-2 text-[0.9375rem] text-muted">
            At least 10 characters.
          </p>
        </div>
        <div>
          <label htmlFor="confirm" className="mb-2 block font-semibold">
            Type it again
          </label>
          <input id="confirm" name="confirm" type="password" autoComplete="new-password" required className="field" />
        </div>
        <button type="submit" className="btn btn--pitch w-full">
          {pending ? "Saving…" : "Save password"} {pending ? null : <Arrow />}
        </button>
      </fieldset>
      <Message {...(state ?? {})} />
    </form>
  )
}
