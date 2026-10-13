import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { certifications } from "@/lib/data";

export function Eyebrow({
  children,
  tone = "copper",
}: {
  children: React.ReactNode;
  tone?: "copper" | "sage" | "light";
}) {
  const colors = {
    copper: "text-copper",
    sage: "text-sage",
    light: "text-[#fdba74]",
  } as const;
  return <p className={`eyebrow ${colors[tone]}`}>{children}</p>;
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Eyebrow tone={isLight ? "light" : "copper"}>{eyebrow}</Eyebrow>
      <h2
        className={`font-display mt-3 text-3xl leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] ${
          isLight ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-4 text-base leading-7 sm:text-lg ${
            isLight ? "text-mute-light" : "text-mute"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "outline-light";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-copper text-white hover:bg-copper-2 focus-visible:outline-copper",
    outline:
      "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    light: "bg-paper text-ink hover:bg-white",
    "outline-light":
      "border border-paper/30 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  } as const;
  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition-colors duration-200 ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowIcon className="h-4 w-4" aria-hidden />
    </Link>
  );
}

export function FeatureList({ items, tone = "dark" }: { items: readonly string[]; tone?: "dark" | "light" }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className={`flex gap-2.5 text-sm leading-6 ${
            tone === "light" ? "text-mute-light" : "text-mute"
          }`}
        >
          <CheckIcon
            className={`mt-0.5 h-4 w-4 shrink-0 ${tone === "light" ? "text-[#fdba74]" : "text-copper"}`}
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CertStrip({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 ${
        light ? "text-mute-light" : "text-mute"
      }`}
    >
      {certifications.map((cert) => (
        <li key={cert.name} className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rotate-45 ${light ? "bg-[#fdba74]" : "bg-copper"}`}
            aria-hidden
          />
          <span className="text-[13px] font-medium tracking-wide">{cert.name}</span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand() {
  return (
    <section className="fabric-weave relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:py-24">
        <div>
          <Eyebrow tone="light">Start a program</Eyebrow>
          <h2 className="font-display mt-3 text-3xl leading-[1.12] tracking-tight text-paper text-balance sm:text-4xl lg:text-5xl">
            Ready to produce your next collection with a factory that answers in hours, not days?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-mute-light">
            Send a tech pack, a reference sample photo, or a rough idea. Our merchandising team
            responds with FOB costing and a sampling plan within 48 hours.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <ButtonLink href="/contact" variant="light" className="w-full sm:w-auto">
            Request a quotation
          </ButtonLink>
          <ButtonLink href="/capabilities" variant="outline-light" className="w-full sm:w-auto">
            Tour our capabilities
          </ButtonLink>
        </div>
      </div>
      <div className="stitch-dark mx-auto max-w-6xl" />
    </section>
  );
}
