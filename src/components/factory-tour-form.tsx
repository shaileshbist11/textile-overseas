"use client";

import { useActionState } from "react";
import { submitTourRequest, type TourState } from "@/app/actions";
import { CheckIcon } from "@/components/icons";

const idle: TourState = { status: "idle" };

const fieldBase =
  "h-12 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink placeholder:text-mute/60 focus:outline-none focus:ring-2 focus:ring-copper/40";

export function FactoryTourForm() {
  const [state, formAction, pending] = useActionState(submitTourRequest, idle);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-sage/40 bg-sage/10 p-8" role="status">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-sage text-white">
          <CheckIcon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="font-display mt-4 text-xl tracking-tight text-ink">Tour request received</h3>
        <p className="mt-2 text-sm leading-6 text-mute">{state.message}</p>
        <p className="mt-3 font-mono text-xs font-bold uppercase tracking-widest text-sage">
          Reference {state.reference}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-3 sm:grid-cols-2">
      <input
        type="text"
        name="name"
        required
        placeholder="Full name"
        aria-label="Full name"
        className={fieldBase}
      />
      <input
        type="text"
        name="company"
        required
        placeholder="Company"
        aria-label="Company"
        className={fieldBase}
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Work email"
        aria-label="Work email"
        className={fieldBase}
      />
      <input
        type="date"
        name="date"
        required
        aria-label="Preferred date"
        className={`${fieldBase} text-mute`}
      />
      <select name="heads" required defaultValue="" aria-label="Number of visitors" className={fieldBase}>
        <option value="" disabled>
          Number of visitors…
        </option>
        <option value="1">1 visitor</option>
        <option value="2">2 visitors</option>
        <option value="3-5">3–5 visitors</option>
        <option value="5+">5+ visitors</option>
      </select>
      <div className="sm:col-span-2">
        {state.status === "error" ? (
          <p className="mb-3 rounded-xl border border-copper/30 bg-copper/5 px-3.5 py-2.5 text-sm text-copper-2" role="alert">
            {state.message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-copper px-6 text-sm font-semibold text-white transition-colors hover:bg-copper-2 disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending request…" : "Schedule Factory Tour"}
        </button>
        <p className="mt-3 text-xs leading-5 text-mute">
          Visits are hosted at our Ashulia complex with 48 hours&apos; notice. NDAs signed on
          arrival; PPE provided.
        </p>
      </div>
    </form>
  );
}
