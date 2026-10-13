import type { Metadata } from "next";
import { Media } from "@/components/media";
import { CtaBand, SectionIntro } from "@/components/ui";
import { company, markets, stats, timeline } from "@/lib/data";
import { IMAGES, unsplash } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded in 2009 in Dhaka, Textile Overseas grew from a four-line knit unit into a vertically integrated garment manufacturer serving 28 countries.",
};

export default function AboutPage() {
  return (
    <>
      <section className="fabric-linen border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <SectionIntro
              eyebrow="Our story"
              title="Seventeen years of saying yes to hard programs — and delivering them on time."
              body={`${company.legalName} was founded in ${company.foundedYear} with four sewing lines and one European partner. Today we operate a multi-unit complex in Ashulia with the discipline of a factory and the responsiveness of a trading house.`}
            />
            <div className="space-y-6">
              <Media
                src={unsplash(IMAGES.factoryFloor.id, 900, 560)}
                alt={IMAGES.factoryFloor.alt}
                className="aspect-[16/10] w-full rounded-xl shadow-[0_28px_60px_-40px_rgba(15,23,42,0.5)]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-paper px-5 py-6">
                    <dd className="font-display text-3xl tracking-tight text-copper">
                      {stat.value}
                    </dd>
                    <dt className="mt-2 text-xs leading-5 text-mute">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-line bg-white p-8 lg:p-10">
            <p className="eyebrow text-copper">Mission</p>
            <p className="font-display mt-4 text-2xl leading-9 tracking-tight text-ink">
              Make ethical, full-package manufacturing the easiest decision a brand sourcing team
              can make.
            </p>
          </div>
          <div className="fabric-weave rounded-xl p-8 text-paper lg:p-10">
            <p className="eyebrow text-[#fdba74]">How we work</p>
            <p className="font-display mt-4 text-2xl leading-9 tracking-tight">
              One merchandiser, one QC lead, one export coordinator — from your first inquiry to
              the bill of lading.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <SectionIntro eyebrow="Milestones" title="How the factory grew up." />
          <ol className="mt-12 relative border-l border-line pl-8 sm:pl-10">
            {timeline.map((entry) => (
              <li key={entry.year} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-copper bg-paper sm:-left-[49px]"
                  aria-hidden
                />
                <p className="font-display text-2xl tracking-tight text-copper">{entry.year}</p>
                <h3 className="font-display mt-1 text-lg tracking-tight text-ink">
                  {entry.title}
                </h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-6 text-mute">{entry.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Global reach"
              title="Rooted in Dhaka. Wired for your timezone."
              body="Our Dhaka team runs production; the Hong Kong liaison office overlaps European and US business hours so your merchandising questions never wait a full day."
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {markets.map((market) => (
                <li
                  key={market}
                  className="rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink"
                >
                  {market}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-xl border border-line bg-white p-8">
              <p className="eyebrow text-copper">{company.hq.label}</p>
              <p className="font-display mt-3 text-xl tracking-tight text-ink">
                Dhaka, Bangladesh
              </p>
              {company.hq.lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-mute">
                  {line}
                </p>
              ))}
              <p className="mt-4 text-sm text-mute">
                Factory complex: 340,000 sq ft · 24 sewing lines · 1,850 machines
              </p>
            </div>
            <div className="rounded-xl border border-line bg-white p-8">
              <p className="eyebrow text-copper">{company.liaison.label}</p>
              <p className="font-display mt-3 text-xl tracking-tight text-ink">Hong Kong SAR</p>
              {company.liaison.lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-mute">
                  {line}
                </p>
              ))}
              <p className="mt-4 text-sm text-mute">
                Merchandising liaison covering EMEA and Americas accounts
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
