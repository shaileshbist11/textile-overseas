import type { Metadata } from "next";
import { ButtonLink, Eyebrow } from "@/components/ui";
import { PortalDashboard } from "@/components/portal-dashboard";

export const metadata: Metadata = {
  title: "B2B Buyer Portal",
  description:
    "Demo B2B buyer portal — active order tracking, fabric inventory and sample request pipeline for brand sourcing teams.",
};

const portalFeatures = [
  {
    title: "Order visibility",
    text: "Every bulk order mapped across seven production and logistics stages, with merchandiser notes attached.",
  },
  {
    title: "Stock transparency",
    text: "Live fabric warehouse view — GSM, width, colorways and available meters before you commit a program.",
  },
  {
    title: "Sampling pipeline",
    text: "Fit, PP and size-set samples tracked from lab dip to DHL tracking number.",
  },
] as const;

export default function PortalPage() {
  return (
    <>
      <section className="fabric-weave text-paper">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow tone="light">B2B Buyer Portal</Eyebrow>
              <h1 className="font-display mt-3 text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">
                Your program, visible in real time.
              </h1>
              <p className="mt-5 text-lg leading-8 text-mute-light">
                A live simulation of the buyer portal we run for brand partners — active order
                tracking, fabric stock and the sampling pipeline in one tabbed dashboard.
              </p>
            </div>
            <div id="login" className="w-full max-w-sm rounded-2xl border border-line-dark bg-ink-2/80 p-6">
              <p className="eyebrow text-[#fdba74]">Client login</p>
              <p className="mt-2 text-sm leading-6 text-mute-light">
                Demo access is open — no credentials required. In production, buyers log in with
                SSO or issued credentials.
              </p>
              <ButtonLink href="#dashboard" variant="light" className="mt-5 w-full">
                Enter demo portal
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:py-16">
        <PortalDashboard />
      </section>

      <section className="border-t border-line bg-paper-2/50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
          {portalFeatures.map((f) => (
            <div key={f.title} className="rounded-2xl border border-line bg-white p-6">
              <h2 className="font-display text-lg tracking-tight text-ink">{f.title}</h2>
              <p className="mt-2 text-sm leading-6 text-mute">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-white px-6 py-5">
            <p className="text-sm text-mute">
              Want portal access for your brand? Existing clients receive seats with every FOB
              program.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/tracker" variant="outline">
                Try the production tracker
              </ButtonLink>
              <ButtonLink href="/contact">Request portal access</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
