import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { Media } from "@/components/media";
import { ButtonLink, CtaBand, SectionIntro } from "@/components/ui";
import { productCategories } from "@/lib/data";
import { IMAGES, PRODUCT_CATEGORY_IMAGES, unsplash } from "@/lib/images";

export const metadata: Metadata = {
  title: "Product Divisions",
  description:
    "Knitwear, woven bottoms, outerwear, activewear, workwear and kidswear manufacturing programs — MOQs, lead times and fabric capability for each division.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="fabric-linen border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <SectionIntro
            eyebrow="Product divisions"
            title={
              <>
                Programs built for brands that need{" "}
                <em className="not-italic text-copper">repeatability</em>, not just samples.
              </>
            }
            body="Each division has dedicated floors, machine parks and merchandising leads — so your program never competes with another client's peak season."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Discuss a program</ButtonLink>
            <ButtonLink href="/capabilities" variant="outline">
              Machinery &amp; capacity
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((cat) => {
            const img = IMAGES[PRODUCT_CATEGORY_IMAGES[cat.slug]];
            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group overflow-hidden rounded-xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(14,26,33,0.5)]"
              >
                <div className="relative h-44 w-full">
                  <Media
                    src={unsplash(img.id, 700, 440)}
                    alt={img.alt}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    overlay
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-paper">
                    <h2 className="font-display text-2xl leading-tight tracking-tight">
                      {cat.name}
                    </h2>
                    <p className="mt-1 text-sm text-white/75">{cat.short}</p>
                  </div>
                </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-mute line-clamp-3">{cat.description}</p>
                <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm">
                  <div>
                    <dt className="eyebrow text-mute">MOQ</dt>
                    <dd className="mt-1 font-semibold text-ink">{cat.moq}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow text-mute">Lead time</dt>
                    <dd className="mt-1 font-semibold text-ink">{cat.leadTime}</dd>
                  </div>
                </dl>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-copper">
                  Open division
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
          <SectionIntro
            eyebrow="At a glance"
            title="MOQs, lead times and capacity by division."
            body="Indicative figures for full-package FOB programs. Exact terms depend on fabric, trims and seasonality."
          />
          <div className="mt-10 overflow-x-auto rounded-xl border border-line bg-white">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-paper-2/70">
                  {["Division", "Typical items", "MOQ / color", "Lead time", "Monthly capacity"].map(
                    (head) => (
                      <th key={head} className="eyebrow px-5 py-4 text-mute">
                        {head}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {productCategories.map((cat) => (
                  <tr key={cat.slug} className="border-b border-line/70 last:border-0 hover:bg-paper/60">
                    <td className="px-5 py-4">
                      <Link
                        href={`/products/${cat.slug}`}
                        className="font-semibold text-ink hover:text-copper"
                      >
                        {cat.name}
                      </Link>
                    </td>
                    <td className="px-5 py-4 text-mute">{cat.items.slice(0, 3).join(", ")}…</td>
                    <td className="px-5 py-4 text-ink">{cat.moq}</td>
                    <td className="px-5 py-4 text-ink">{cat.leadTime}</td>
                    <td className="px-5 py-4 text-ink">{cat.heroStat.value} pcs</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
