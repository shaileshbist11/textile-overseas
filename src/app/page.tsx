import Link from "next/link";
import {
  ArrowIcon,
  DropletIcon,
  GlobeIcon,
  LeafIcon,
  NeedleIcon,
  QuoteIcon,
  ScissorsIcon,
  ShieldIcon,
} from "@/components/icons";
import {
  ButtonLink,
  CertStrip,
  CtaBand,
  Eyebrow,
  SectionIntro,
} from "@/components/ui";
import {
  capabilities,
  catalogCategories,
  clientTypes,
  process,
  stats,
  testimonials,
} from "@/lib/data";

const iconMap = {
  scissors: ScissorsIcon,
  needle: NeedleIcon,
  droplet: DropletIcon,
  shield: ShieldIcon,
  leaf: LeafIcon,
  globe: GlobeIcon,
} as const;

const heroTiles = [
  { name: "Women's Wear", note: "Dresses, sets & woven blouses", tone: "clay" },
  { name: "Denim", note: "Laser-finished jeans & jackets", tone: "navy" },
  { name: "Organic Cotton", note: "GOTS certified programs", tone: "sage" },
  { name: "Outerwear", note: "Puffers, softshells, gilets", tone: "sand" },
] as const;

const toneCard: Record<string, string> = {
  clay: "bg-[radial-gradient(140%_140%_at_0%_0%,#e07b2f_0%,#c25e00_50%,#7c3d00_100%)]",
  navy: "bg-[radial-gradient(140%_140%_at_0%_0%,#475569_0%,#1e293b_50%,#0f172a_100%)]",
  sage: "bg-[radial-gradient(140%_140%_at_0%_0%,#3f9d63_0%,#15803d_50%,#14532d_100%)]",
  sand: "bg-[radial-gradient(140%_140%_at_0%_0%,#e2c99b_0%,#c2a063_50%,#8a6c40_100%)]",
};

export default function Home() {
  return (
    <>
      <section className="fabric-linen relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
          <div className="rise">
            <Eyebrow>Apparel manufacturing · Global export · Dhaka, Bangladesh</Eyebrow>
            <h1 className="font-display mt-5 text-[2.5rem] leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.75rem]">
              End-to-End Apparel Manufacturing &amp;{" "}
              <em className="not-italic text-copper">Global Export</em> Solutions
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-mute">
              Transforming high-fashion concepts into bulk production with precision stitching,
              ethical manufacturing, and seamless global logistics.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/catalog">Explore Digital Catalog</ButtonLink>
              <ButtonLink href="/tracker" variant="outline">
                Live Production Demo
              </ButtonLink>
            </div>
          </div>

          <div className="rise-2 relative" aria-hidden>
            <div className="grid grid-cols-2 gap-4">
              {heroTiles.map((tile, i) => (
                <Link
                  key={tile.name}
                  href="/catalog"
                  className={`group relative flex min-h-40 flex-col justify-end overflow-hidden rounded-2xl p-5 text-paper transition-transform duration-300 hover:-translate-y-1 sm:min-h-52 ${
                    toneCard[tile.tone]
                  } ${i % 2 === 1 ? "translate-y-8" : ""}`}
                >
                  <span className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.08)_0_2px,transparent_2px_9px)]" />
                  <span className="font-display relative text-xl leading-tight tracking-tight">
                    {tile.name}
                  </span>
                  <span className="relative mt-1 text-xs text-white/70">{tile.note}</span>
                  <span className="relative mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/0 transition-colors group-hover:text-white/90">
                    Explore <ArrowIcon className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.label} className="bg-white px-6 py-7 text-center sm:px-8">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display block text-4xl tracking-tight text-copper lg:text-5xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm font-medium text-mute">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-b border-line bg-paper-2/60">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
          <p className="eyebrow text-center text-mute">Trusted by sourcing teams across</p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {clientTypes.map((type) => (
              <li key={type} className="font-display text-lg tracking-tight text-ink/70">
                {type}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <Eyebrow>B2B Buyer Portal</Eyebrow>
            <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
              A live dashboard for every program you run with us.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-mute">
              Active order tracking across seven stages, fabric warehouse stock, and the sampling
              pipeline — the same portal your production manager would use on day one.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "7-stage order tracker",
                "Fabric stock visibility",
                "Sample request pipeline",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl bg-paper-2 px-4 py-3 text-sm font-semibold text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <ButtonLink href="/portal">Open Buyer Portal demo</ButtonLink>
            <ButtonLink href="/tracker" variant="outline">
              Track a demo order
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Digital Catalog"
            title="Ready-to-develop styles, filterable in seconds."
            body="Women's wear, kids wear, sustainable organic cotton, denim and outerwear — with fabric, GSM, MOQ and lead time on every card."
          />
          <ButtonLink href="/catalog" variant="outline" className="shrink-0">
            Browse full catalog
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {catalogCategories.map((cat, i) => (
            <Link
              key={cat}
              href="/catalog"
              className={`group relative flex h-44 flex-col justify-end overflow-hidden rounded-2xl p-5 text-paper transition-transform duration-300 hover:-translate-y-1 ${
                toneCard[["clay", "navy", "sage", "sand", "clay"][i]]
              }`}
            >
              <span className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.1)_0_1px,transparent_1px_8px),repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_8px)]" />
              <h3 className="font-display relative text-lg leading-tight tracking-tight">{cat}</h3>
              <span className="relative mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/0 transition-colors group-hover:text-white/90">
                View <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro
              eyebrow="Production capabilities"
              title="Factory infrastructure built for global B2B programs."
              body="Stitching, cutting, quality, dyeing and export logistics — auditable, certified and under one contract."
            />
            <ButtonLink href="/capabilities" variant="outline" className="shrink-0">
              Full capability deck
            </ButtonLink>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => {
              const Icon = iconMap[cap.icon];
              return (
                <article
                  key={cap.title}
                  className="group rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-36px_rgba(15,23,42,0.5)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-copper/10 text-copper transition-colors group-hover:bg-copper group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="font-display mt-5 text-lg tracking-tight text-ink">{cap.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-mute">{cap.text}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-white px-6 py-7">
            <p className="eyebrow text-center text-mute">Certifications &amp; compliance</p>
            <div className="mt-5">
              <CertStrip />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionIntro
            eyebrow="Instant quote calculator"
            title="Estimate lead time and FOB before you email anyone."
            body="Configure garment type, quantity, material, branding and destination — the calculator returns an indicative lead time and FOB range instantly."
          />
          <div className="fabric-weave rounded-2xl p-8 text-paper">
            <ol className="space-y-5">
              {[
                { s: "01", t: "Configure program", d: "Garment, quantity, material, branding, destination." },
                { s: "02", t: "Instant estimate", d: "Lead time like “4–6 Weeks” with FOB range." },
                { s: "03", t: "Submit inquiry", d: "Merchandising confirms within 48 hours." },
              ].map((row) => (
                <li key={row.s} className="flex gap-4">
                  <span className="font-display text-2xl tracking-tight text-[#fdba74]">{row.s}</span>
                  <div>
                    <p className="font-display text-base tracking-tight">{row.t}</p>
                    <p className="mt-0.5 text-sm text-mute-light">{row.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ButtonLink href="/quote" variant="light" className="mt-8">
              Open quote calculator
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="fabric-weave">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <SectionIntro
            tone="light"
            eyebrow="How production runs"
            title="From inquiry to FOB in six controlled stages."
            body="Every stage has a named owner, a documented checkpoint and a report that lands in your inbox."
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
            {process.map((stage) => (
              <li key={stage.step} className="bg-ink-2 p-7">
                <span className="font-display text-3xl tracking-tight text-[#fdba74]">
                  {stage.step}
                </span>
                <h3 className="font-display mt-3 text-lg tracking-tight text-paper">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-mute-light">{stage.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6">
          <div className="rounded-2xl border border-line-dark bg-ink-3/60 px-6 py-8">
            <p className="eyebrow text-center text-[#fdba74]">Compliance &amp; certifications</p>
            <div className="mt-6">
              <CertStrip tone="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <SectionIntro
          eyebrow="From our partners"
          title="What sourcing teams say after the first season."
          align="center"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col rounded-2xl border border-line bg-paper-2/60 p-7"
            >
              <QuoteIcon className="h-6 w-10 text-copper/40" aria-hidden />
              <blockquote className="font-display mt-5 flex-1 text-lg leading-8 tracking-tight text-ink">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <span className="block text-sm font-semibold text-ink">{t.author}</span>
                <span className="mt-0.5 block text-xs uppercase tracking-wider text-mute">
                  {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
