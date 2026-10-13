import type { Metadata } from "next";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { TrackerTool } from "@/components/tracker-tool";
import { productionStages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Production Tracker",
  description:
    "Track bulk garment orders across seven stages — raw material sourcing, cutting, stitching, quality inspection, packaging, customs clearance and shipping.",
};

export default function TrackerPage() {
  return (
    <>
      <section className="fabric-linen border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:py-20">
          <Eyebrow>Production Tracker</Eyebrow>
          <h1 className="font-display mt-3 text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
            Follow every order from raw material to vessel.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-mute">
            Enter your order ID to see the live production stage, completed milestones and
            merchandiser notes. Below is a working demo with three sample orders.
          </p>
          <ol className="mt-8 flex flex-wrap gap-2">
            {productionStages.map((stage, i) => (
              <li
                key={stage}
                className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-mute"
              >
                <span className="font-bold text-copper">{i + 1}.</span> {stage}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <TrackerTool />
      </section>

      <section className="border-t border-line bg-paper-2/50">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-xl tracking-tight text-ink">
              Need a tracker for your own PO?
            </h2>
            <p className="mt-1 text-sm text-mute">
              Client orders receive portal credentials with stage-level updates and document
              access.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/portal" variant="outline">
              Open Buyer Portal
            </ButtonLink>
            <ButtonLink href="/contact">Talk to merchandising</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
