import type { Metadata } from "next";
import { QuoteCalculator } from "@/components/quote-calculator";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Request Quote — Tech-Pack Calculator",
  description:
    "Instant tech-pack quote calculator — select garment type, quantity, material, branding and destination for estimated lead time and FOB range.",
};

const steps = [
  {
    step: "01",
    title: "Configure",
    text: "Pick garment type, quantity band, material and branding needs in the calculator.",
  },
  {
    step: "02",
    title: "Review estimate",
    text: "Get an indicative lead time and FOB range instantly — no email wall.",
  },
  {
    step: "03",
    title: "Submit & sample",
    text: "Merchandising confirms costing within 48 hours and opens the sampling pipeline.",
  },
] as const;

export default function QuotePage() {
  return (
    <>
      <section className="fabric-linen border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
            <Eyebrow>Request Quote</Eyebrow>
            <h1 className="font-display mt-3 text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
              From tech-pack idea to estimated lead time — in seconds.
            </h1>
            <p className="mt-5 text-lg leading-8 text-mute">
              Our quote calculator mirrors the way our merchandising desk scopes a program. Add
              catalog styles to your tech-pack list, configure the parameters, and submit one
              consolidated inquiry.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-3">
            {steps.map((s) => (
              <li key={s.step} className="rounded-2xl border border-line bg-white p-5">
                <p className="font-display text-2xl tracking-tight text-copper">{s.step}</p>
                <p className="font-display mt-2 text-base tracking-tight text-ink">{s.title}</p>
                <p className="mt-1 text-sm leading-6 text-mute">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <QuoteCalculator />
      </section>
    </>
  );
}
