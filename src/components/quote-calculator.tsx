"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { submitInquiry, type InquiryState } from "@/app/actions";
import { CheckIcon, CloseIcon } from "@/components/icons";
import { useQuoteCart } from "@/components/quote-cart";
import {
  estimateQuote,
  quoteBrandingOptions,
  quoteDestinations,
  quoteGarmentTypes,
  quoteMaterials,
  quoteQuantityRanges,
} from "@/lib/data";

const idle: InquiryState = { status: "idle" };

const fieldBase =
  "h-12 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink placeholder:text-mute/60 focus:outline-none focus:ring-2 focus:ring-copper/40";

export function QuoteCalculator() {
  const { items, remove, clear } = useQuoteCart();
  const [garmentType, setGarmentType] = useState<string>(quoteGarmentTypes[0].value);
  const [quantity, setQuantity] = useState<string>(quoteQuantityRanges[2].value);
  const [material, setMaterial] = useState<string>(quoteMaterials[0].value);
  const [branding, setBranding] = useState<string[]>(["woven-label"]);
  const [destination, setDestination] = useState<string>(quoteDestinations[2].value);
  const [state, formAction, pending] = useActionState(submitInquiry, idle);

  const estimate = estimateQuote({ garmentType, quantity, material, branding, destination });
  const [message, setMessage] = useState(estimate.summary);

  function toggleBranding(value: string) {
    setBranding((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  }

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-sage/40 bg-sage/10 p-10" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-sage text-white">
          <CheckIcon className="h-6 w-6" aria-hidden />
        </span>
        <h2 className="font-display mt-5 text-2xl tracking-tight text-ink">
          Quote request received
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-mute">{state.message}</p>
        <p className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-sage">
          Reference {state.reference}
        </p>
        <Link
          href="/catalog"
          className="mt-8 inline-flex h-11 items-center rounded-full border border-ink/20 px-5 text-sm font-semibold text-ink hover:bg-ink hover:text-paper"
        >
          Back to catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.5)] sm:p-8">
        <p className="eyebrow text-copper">Tech-Pack Quote Calculator</p>
        <h2 className="font-display mt-2 text-2xl tracking-tight text-ink">
          Configure your program
        </h2>
        <p className="mt-2 text-sm leading-6 text-mute">
          Indicative lead time and FOB range for demo purposes — final costing is confirmed by our
          merchandising desk within 48 hours.
        </p>

        <div className="mt-7 grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="eyebrow mb-1.5 block text-mute">Garment type *</span>
            <select
              value={garmentType}
              onChange={(e) => setGarmentType(e.target.value)}
              className={fieldBase}
            >
              {quoteGarmentTypes.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="eyebrow mb-1.5 block text-mute">Quantity range *</span>
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className={fieldBase}
            >
              {quoteQuantityRanges.map((q) => (
                <option key={q.value} value={q.value}>
                  {q.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="eyebrow mb-1.5 block text-mute">Material preference</span>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className={fieldBase}
            >
              {quoteMaterials.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="eyebrow mb-1.5 block text-mute">Destination country</span>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className={fieldBase}
            >
              {quoteDestinations.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <fieldset className="mt-6">
          <legend className="eyebrow mb-2 text-mute">Custom branding needs</legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {quoteBrandingOptions.map((option) => {
              const checked = branding.includes(option.value);
              return (
                <label
                  key={option.value}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                    checked
                      ? "border-copper bg-copper/5 text-ink"
                      : "border-line bg-white text-mute hover:border-copper/40"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggleBranding(option.value)}
                    className="h-4 w-4 accent-copper"
                  />
                  {option.label}
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <aside className="space-y-6">
        <div className="fabric-weave rounded-2xl p-6 text-paper">
          <p className="eyebrow text-[#fdba74]">Estimated output</p>
          <div className="mt-5 space-y-5">
            <div>
              <p className="text-xs uppercase tracking-wider text-mute-light">Lead time</p>
              <p className="font-display mt-1 text-4xl tracking-tight">{estimate.leadTime}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-mute-light">Indicative FOB / pc</p>
              <p className="font-display mt-1 text-2xl tracking-tight">{estimate.fobRange}</p>
              <p className="mt-1 text-xs text-mute-light">Program total ≈ {estimate.fobTotal}</p>
            </div>
            <div className="border-t border-line-dark pt-4">
              <p className="text-xs uppercase tracking-wider text-mute-light">Transit</p>
              <p className="mt-1 text-sm text-paper">{estimate.transit}</p>
            </div>
            <p className="border-t border-line-dark pt-4 text-xs leading-5 text-mute-light">
              {estimate.summary}
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-6">
          <div className="flex items-center justify-between">
            <p className="eyebrow text-mute">Tech-Pack Quote list</p>
            {items.length > 0 ? (
              <button
                type="button"
                onClick={clear}
                className="text-xs font-semibold text-mute hover:text-copper"
              >
                Clear all
              </button>
            ) : null}
          </div>
          {items.length === 0 ? (
            <p className="mt-3 text-sm leading-6 text-mute">
              No styles added yet.{" "}
              <Link href="/catalog" className="font-semibold text-copper hover:underline">
                Browse the digital catalog
              </Link>{" "}
              and add styles to your tech-pack quote.
            </p>
          ) : (
            <ul className="mt-4 space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3 rounded-xl bg-paper-2/70 px-3.5 py-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink">{item.name}</p>
                    <p className="mt-0.5 text-xs text-mute">
                      {item.id} · MOQ {item.moq.toLocaleString()} · {item.leadTimeWeeks} wks
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => remove(item.id)}
                    aria-label={`Remove ${item.name}`}
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-mute hover:bg-paper-3 hover:text-ink"
                  >
                    <CloseIcon className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <form action={formAction} className="rounded-2xl border border-line bg-white p-6">
          <p className="eyebrow text-mute">Submit inquiry</p>
          <div className="mt-4 space-y-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Full name"
              className={fieldBase}
              aria-label="Full name"
            />
            <input
              type="text"
              name="company"
              required
              placeholder="Company"
              className={fieldBase}
              aria-label="Company"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Work email"
              className={fieldBase}
              aria-label="Work email"
            />
            <input type="hidden" name="category" value={garmentType} />
            <input
              type="hidden"
              name="quantity"
              value={String(quoteQuantityRanges.find((q) => q.value === quantity)?.min ?? 1000)}
            />
            <textarea
              name="message"
              rows={4}
              required
              aria-label="Program details"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-y rounded-xl border border-line bg-white px-3.5 py-3 text-sm text-ink placeholder:text-mute/60 focus:outline-none focus:ring-2 focus:ring-copper/40"
            />
          </div>
          {state.status === "error" && state.message ? (
            <p className="mt-3 rounded-xl border border-copper/30 bg-copper/5 px-3.5 py-2.5 text-sm text-copper-2" role="alert">
              {state.message}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={pending}
            className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-copper px-6 text-sm font-semibold text-white transition-colors hover:bg-copper-2 disabled:opacity-60"
          >
            {pending ? "Submitting…" : "Submit Inquiry"}
          </button>
          <p className="mt-3 text-xs leading-5 text-mute">
            Demo form — submissions stay in your browser. Response within 48 hours on business
            days.
          </p>
        </form>
      </aside>
    </div>
  );
}
