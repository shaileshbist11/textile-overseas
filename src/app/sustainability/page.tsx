import type { Metadata } from "next";
import { CertStrip, CtaBand, SectionIntro } from "@/components/ui";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "GOTS and GRS certified programs, ZDHC MRSL chemical management, 1.2 MW solar, in-house ETP and transparent social compliance audits.",
};

const initiatives = [
  {
    tag: "Chemicals",
    title: "ZDHC MRSL Level 3 chemistry",
    text: "All dyeing and washing partners are ZDHC gateway-certified. We hold a quarterly chemical inventory and audit formulations against the Manufacturing Restricted Substances List.",
  },
  {
    tag: "Water",
    title: "In-house ETP · 450 m³/day",
    text: "Our effluent treatment plant runs alongside production, with continuous monitoring of pH, BOD and COD. Sludge is dried and disposed through licensed handlers.",
  },
  {
    tag: "Energy",
    title: "1.2 MW rooftop solar",
    text: "Solar now covers roughly 22% of common-services load. LED retrofits and compressor audits cut facility energy intensity by 18% since 2022.",
  },
  {
    tag: "Materials",
    title: "GOTS & GRS certified supply",
    text: "Organic cotton, recycled polyester and recycled nylon programs are fully certified chain-of-custody, with transaction certificates issued per shipment.",
  },
  {
    tag: "People",
    title: "Fair wages & worker voice",
    text: "Wages benchmarked above the national minimum with a standing worker committee, grievance hotline and documented remediation workflow.",
  },
  {
    tag: "Transparency",
    title: "Open books for buyers",
    text: "Higg FEM scores, audit reports and chemical inventories are shared with brand partners under NDA — usually within one business day of request.",
  },
] as const;

const commitments = [
  { value: "−38%", label: "Water intensity per piece since 2019" },
  { value: "22%", label: "Of electricity from on-site solar" },
  { value: "100%", label: "Hazardous chemistry ZDHC-aligned" },
  { value: "0", label: "Child labour incidents — ever" },
] as const;

export default function SustainabilityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-sage-2 text-paper">
        <span
          className="absolute inset-0 opacity-[0.15] [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_8px),repeating-linear-gradient(0deg,rgba(255,255,255,0.1)_0_1px,transparent_1px_8px)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <SectionIntro
            tone="light"
            eyebrow="Sustainability & compliance"
            title="Sustainability is an audit trail, not a landing page."
            body="We keep the certifications, the chemistry records and the utility data ready — because your compliance team will ask, and they should."
          />
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/15 bg-white/15 lg:grid-cols-4">
            {commitments.map((item) => (
              <div key={item.label} className="bg-sage-2 px-6 py-7">
                <dd className="font-display text-3xl tracking-tight text-[#d9e8c9] sm:text-4xl">
                  {item.value}
                </dd>
                <dt className="mt-2 text-xs leading-5 text-white/70">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <SectionIntro
          eyebrow="On the ground"
          title="Six programs running right now."
          body="No pledges without a facility behind them. Every item below is operational in Ashulia today."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item) => (
            <article key={item.title} className="bg-paper p-8">
              <p className="eyebrow text-sage">{item.tag}</p>
              <h2 className="font-display mt-3 text-xl leading-snug tracking-tight text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-mute">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <SectionIntro
            eyebrow="Certifications"
            title="Audited, certified, current."
            body="Scope certificates and audit letters are available to active brand partners under NDA."
          />
          <div className="mt-10 rounded-xl border border-line bg-white px-6 py-8 sm:px-10">
            <CertStrip />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="For sourcing & compliance teams"
              title="Need the evidence pack?"
              body="Tell us the standard you audit against and we'll send the matching documentation set — typically within one business day."
            />
          </div>
          <div className="fabric-weave rounded-xl p-8 text-paper sm:p-10">
            <p className="eyebrow text-[#cfe0b8]">Included in the pack</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-mute-light">
              <li>Scope certificates for GOTS, GRS, OEKO-TEX and ISO 9001</li>
              <li>Latest amfori BSCI and SMETA 4-Pillar summary reports</li>
              <li>Higg FEM 3.0 score sheet and corrective action plan</li>
              <li>ZDHC wastewater test reports from the last two quarters</li>
              <li>Substance list for standard fabrications used in your program</li>
            </ul>
            <a
              href="/contact"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-paper px-6 text-sm font-semibold text-ink transition-colors hover:bg-white"
            >
              Request the evidence pack
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
