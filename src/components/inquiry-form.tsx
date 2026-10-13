"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions";
import { CheckIcon } from "@/components/icons";
import { productCategories } from "@/lib/data";

const initialState: InquiryState = { status: "idle" };

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-mute/60 transition-colors focus:outline-none focus:ring-2 focus:ring-copper/40";

function labelClass(error?: string) {
  return `eyebrow mb-1.5 block ${error ? "text-copper" : "text-mute"}`;
}

export function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-xl border border-sage/40 bg-sage/10 p-8" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-sage text-white">
          <CheckIcon className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="font-display mt-5 text-2xl tracking-tight text-ink">Inquiry received</h3>
        <p className="mt-3 text-sm leading-6 text-mute">{state.message}</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-sage">
          Reference {state.reference}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="grid gap-5 sm:grid-cols-2" noValidate>
      <div>
        <label className={labelClass(state.errors?.name)} htmlFor="name">
          Full name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Jane Cooper"
          aria-invalid={Boolean(state.errors?.name)}
          className={`${fieldBase} ${state.errors?.name ? "border-copper" : "border-line"}`}
        />
        {state.errors?.name ? (
          <p className="mt-1.5 text-xs text-copper">{state.errors.name}</p>
        ) : null}
      </div>

      <div>
        <label className={labelClass(state.errors?.company)} htmlFor="company">
          Company *
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Northwind Apparel GmbH"
          aria-invalid={Boolean(state.errors?.company)}
          className={`${fieldBase} ${state.errors?.company ? "border-copper" : "border-line"}`}
        />
        {state.errors?.company ? (
          <p className="mt-1.5 text-xs text-copper">{state.errors.company}</p>
        ) : null}
      </div>

      <div>
        <label className={labelClass(state.errors?.email)} htmlFor="email">
          Work email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@brand.com"
          aria-invalid={Boolean(state.errors?.email)}
          className={`${fieldBase} ${state.errors?.email ? "border-copper" : "border-line"}`}
        />
        {state.errors?.email ? (
          <p className="mt-1.5 text-xs text-copper">{state.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label className={labelClass()} htmlFor="country">
          Destination market
        </label>
        <input
          id="country"
          name="country"
          type="text"
          autoComplete="country-name"
          placeholder="Germany"
          className={`${fieldBase} border-line`}
        />
      </div>

      <div>
        <label className={labelClass(state.errors?.category)} htmlFor="category">
          Product division *
        </label>
        <select
          id="category"
          name="category"
          defaultValue=""
          aria-invalid={Boolean(state.errors?.category)}
          className={`${fieldBase} ${state.errors?.category ? "border-copper" : "border-line"}`}
        >
          <option value="" disabled>
            Select a division…
          </option>
          {productCategories.map((cat) => (
            <option key={cat.slug} value={cat.slug}>
              {cat.name}
            </option>
          ))}
          <option value="multi">Multi-category program</option>
        </select>
        {state.errors?.category ? (
          <p className="mt-1.5 text-xs text-copper">{state.errors.category}</p>
        ) : null}
      </div>

      <div>
        <label className={labelClass(state.errors?.quantity)} htmlFor="quantity">
          Estimated quantity (pcs) *
        </label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          min={1}
          placeholder="5000"
          aria-invalid={Boolean(state.errors?.quantity)}
          className={`${fieldBase} ${state.errors?.quantity ? "border-copper" : "border-line"}`}
        />
        {state.errors?.quantity ? (
          <p className="mt-1.5 text-xs text-copper">{state.errors.quantity}</p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass(state.errors?.message)} htmlFor="message">
          Program details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Styles, fabric composition, target price, delivery window, certification requirements…"
          aria-invalid={Boolean(state.errors?.message)}
          className={`${fieldBase} resize-y ${state.errors?.message ? "border-copper" : "border-line"}`}
        />
        {state.errors?.message ? (
          <p className="mt-1.5 text-xs text-copper">{state.errors.message}</p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        {state.message && state.status === "error" ? (
          <p className="mb-4 rounded-xl border border-copper/30 bg-copper/5 px-4 py-3 text-sm text-copper-2" role="alert">
            {state.message}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-copper px-8 text-sm font-semibold text-white transition-colors hover:bg-copper-2 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {pending ? "Sending inquiry…" : "Send inquiry"}
        </button>
        <p className="mt-3 text-xs leading-5 text-mute">
          Demo form — submissions stay in your browser. Typical response time: under 48 hours on
          business days.
        </p>
      </div>
    </form>
  );
}
