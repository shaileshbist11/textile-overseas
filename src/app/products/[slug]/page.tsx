import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import { ButtonLink, CtaBand, Eyebrow, FeatureList } from "@/components/ui";
import { productCategories } from "@/lib/data";

const toneCard: Record<string, string> = {
  copper:
    "bg-[radial-gradient(140%_140%_at_0%_0%,#e07b2f_0%,#c25e00_50%,#7c3d00_100%)]",
  sage: "bg-[radial-gradient(140%_140%_at_0%_0%,#3f9d63_0%,#15803d_50%,#14532d_100%)]",
  ink: "bg-[radial-gradient(140%_140%_at_0%_0%,#475569_0%,#1e293b_50%,#0f172a_100%)]",
  sand: "bg-[radial-gradient(140%_140%_at_0%_0%,#e2c99b_0%,#c2a063_50%,#8a6c40_100%)]",
};

function getCategory(slug: string) {
  return productCategories.find((cat) => cat.slug === slug);
}

export function generateStaticParams() {
  return productCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata(
  props: PageProps<"/products/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const category = getCategory(slug);
  if (!category) return { title: "Division not found" };
  return {
    title: category.name,
    description: `${category.short}. ${category.description.slice(0, 140)}…`,
  };
}

export default async function ProductDetailPage(props: PageProps<"/products/[slug]">) {
  const { slug } = await props.params;
  const category = getCategory(slug);
  if (!category) notFound();

  const others = productCategories.filter((cat) => cat.slug !== category.slug);

  return (
    <>
      <section className={`relative overflow-hidden text-paper ${toneCard[category.tone]}`}>
        <span
          className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,0.1)_0_2px,transparent_2px_10px)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-white">{category.name}</span>
          </nav>
          <h1 className="font-display mt-6 max-w-3xl text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/80">{category.short}</p>
          <div className="mt-10 flex flex-wrap items-end gap-10">
            <div>
              <p className="font-display text-4xl tracking-tight sm:text-5xl">
                {category.heroStat.value}
              </p>
              <p className="mt-1 text-sm text-white/70">{category.heroStat.label}</p>
            </div>
            <div>
              <p className="font-display text-2xl tracking-tight">{category.moq}</p>
              <p className="mt-1 text-sm text-white/70">Minimum order per color</p>
            </div>
            <div>
              <p className="font-display text-2xl tracking-tight">{category.leadTime}</p>
              <p className="mt-1 text-sm text-white/70">Ex-factory lead time</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow>Division overview</Eyebrow>
            <p className="font-display mt-4 text-2xl leading-10 tracking-tight text-ink sm:text-[1.75rem]">
              {category.description}
            </p>

            <h2 className="font-display mt-12 text-xl tracking-tight text-ink">
              Typical programs
            </h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm font-medium text-ink"
                >
                  <span className="h-1.5 w-1.5 rotate-45 bg-copper" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-12 text-xl tracking-tight text-ink">
              Fabrics we run
            </h2>
            <div className="mt-5">
              <FeatureList items={category.fabrics} />
            </div>
          </div>

          <aside className="h-fit rounded-xl border border-line bg-paper-2/60 p-8">
            <h2 className="font-display text-xl tracking-tight text-ink">Division specs</h2>
            <dl className="mt-5 divide-y divide-line text-sm">
              {category.highlights.map((highlight) => (
                <div key={highlight} className="py-3">
                  <dd className="flex gap-3 text-mute">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-copper" aria-hidden />
                    {highlight}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-xl bg-ink p-5 text-paper">
              <p className="eyebrow text-[#fdba74]">Next step</p>
              <p className="mt-2 text-sm leading-6 text-mute-light">
                Share your tech pack or reference photos — we return FOB costing and a sampling
                timeline within 48 hours.
              </p>
              <ButtonLink href="/contact" variant="light" className="mt-5 w-full">
                Request costing
              </ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="eyebrow text-mute">Other divisions</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/products/${cat.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-line bg-white px-4 py-3.5 text-sm font-medium text-ink transition-colors hover:border-copper/60 hover:text-copper"
                >
                  {cat.name}
                  <ArrowIcon className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
