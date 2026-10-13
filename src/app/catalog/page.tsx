import type { Metadata } from "next";
import { CatalogExplorer } from "@/components/catalog-explorer";
import { ButtonLink, CtaBand, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Digital Catalog",
  description:
    "Interactive digital product catalog — women's wear, kids wear, sustainable organic cotton, denim and outerwear. Filter by MOQ, fabric and lead time.",
};

export default function CatalogPage() {
  return (
    <>
      <section className="fabric-weave text-paper">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow tone="light">Digital Catalog</Eyebrow>
              <h1 className="font-display mt-3 text-4xl leading-[1.08] tracking-tight text-balance sm:text-5xl">
                Browse ready-to-develop styles.
              </h1>
              <p className="mt-5 text-lg leading-8 text-mute-light">
                Filter by category, fabric, MOQ and lead time. Add styles to your tech-pack quote
                and send everything to merchandising in one submission.
              </p>
            </div>
            <ButtonLink href="/quote" variant="light">
              Review tech-pack quote
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <CatalogExplorer />
      </section>

      <CtaBand />
    </>
  );
}
