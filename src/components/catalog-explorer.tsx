"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckIcon } from "@/components/icons";
import { useQuoteCart } from "@/components/quote-cart";
import { catalogCategories, catalogProducts } from "@/lib/data";

const toneCard: Record<string, string> = {
  clay: "bg-[radial-gradient(140%_140%_at_0%_0%,#e07b2f_0%,#c25e00_50%,#7c3d00_100%)]",
  navy: "bg-[radial-gradient(140%_140%_at_0%_0%,#475569_0%,#1e293b_50%,#0f172a_100%)]",
  sage: "bg-[radial-gradient(140%_140%_at_0%_0%,#3f9d63_0%,#15803d_50%,#14532d_100%)]",
  sand: "bg-[radial-gradient(140%_140%_at_0%_0%,#e2c99b_0%,#c2a063_50%,#8a6c40_100%)]",
};

const fabricTypes = ["All fabrics", "Knit", "Woven", "Denim", "Outerwear"] as const;
const moqFilters = [
  { value: "all", label: "Any MOQ" },
  { value: "500", label: "≤ 500 pcs" },
  { value: "800", label: "≤ 800 pcs" },
  { value: "1000", label: "≤ 1,000 pcs" },
] as const;
const leadFilters = [
  { value: "all", label: "Any lead time" },
  { value: "6", label: "≤ 6 weeks" },
  { value: "8", label: "≤ 8 weeks" },
  { value: "10", label: "≤ 10 weeks" },
] as const;

export function CatalogExplorer() {
  const { add, remove, has, items } = useQuoteCart();
  const [category, setCategory] = useState<string>("All");
  const [fabricType, setFabricType] = useState<string>(fabricTypes[0]);
  const [moq, setMoq] = useState<string>(moqFilters[0].value);
  const [lead, setLead] = useState<string>(leadFilters[0].value);

  const filtered = useMemo(
    () =>
      catalogProducts.filter((p) => {
        if (category !== "All" && p.category !== category) return false;
        if (fabricType !== "All fabrics" && p.fabricType !== fabricType) return false;
        if (moq !== "all" && p.moq > Number(moq)) return false;
        if (lead !== "all" && p.leadTimeWeeks > Number(lead)) return false;
        return true;
      }),
    [category, fabricType, moq, lead],
  );

  const selectClass =
    "h-11 w-full rounded-xl border border-line bg-white px-3 text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-copper/40";

  return (
    <div>
      <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.4)]">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow text-mute">Filter catalog</p>
          <p className="text-sm text-mute">
            <span className="font-bold text-ink">{filtered.length}</span> of{" "}
            {catalogProducts.length} styles · {items.length} in tech-pack quote
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {(["All", ...catalogCategories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                category === cat
                  ? "bg-ink text-paper"
                  : "bg-paper-2 text-mute hover:bg-paper-3 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <label className="block">
            <span className="eyebrow mb-1.5 block text-mute">Fabric type</span>
            <select
              value={fabricType}
              onChange={(e) => setFabricType(e.target.value)}
              className={selectClass}
            >
              {fabricTypes.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="eyebrow mb-1.5 block text-mute">MOQ</span>
            <select
              value={moq}
              onChange={(e) => setMoq(e.target.value)}
              className={selectClass}
            >
              {moqFilters.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="eyebrow mb-1.5 block text-mute">Lead time</span>
            <select
              value={lead}
              onChange={(e) => setLead(e.target.value)}
              className={selectClass}
            >
              {leadFilters.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <p className="font-display text-xl tracking-tight text-ink">No styles match those filters</p>
          <p className="mt-2 text-sm text-mute">
            Loosen a filter, or ask our merchandising team for a custom development.
          </p>
          <button
            type="button"
            onClick={() => {
              setCategory("All");
              setFabricType("All fabrics");
              setMoq("all");
              setLead("all");
            }}
            className="mt-5 inline-flex h-11 items-center rounded-full border border-ink/20 px-5 text-sm font-semibold text-ink hover:bg-ink hover:text-paper"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product) => {
            const added = has(product.id);
            return (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-32px_rgba(15,23,42,0.5)]"
              >
                <div className={`relative flex h-36 items-end p-5 text-paper ${toneCard[product.tone]}`}>
                  <span
                    className="absolute inset-0 opacity-20 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.1)_0_1px,transparent_1px_8px),repeating-linear-gradient(0deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_8px)]"
                    aria-hidden
                  />
                  <div className="relative flex w-full items-end justify-between gap-3">
                    <div>
                      <p className="font-mono text-[11px] font-bold text-white/70">{product.id}</p>
                      <h3 className="font-display mt-0.5 text-lg leading-tight tracking-tight">
                        {product.name}
                      </h3>
                    </div>
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-sm leading-6 text-mute">{product.blurb}</p>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="eyebrow text-mute">Fabric</dt>
                      <dd className="mt-0.5 font-medium text-ink">
                        {product.fabric}, {product.gsm}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow text-mute">MOQ / lead</dt>
                      <dd className="mt-0.5 font-medium text-ink">
                        {product.moq.toLocaleString()} pcs · {product.leadTimeWeeks} wks
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="rounded-full bg-paper-2 px-2.5 py-0.5 text-[11px] font-medium text-mute"
                      >
                        {color}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() =>
                        added
                          ? remove(product.id)
                          : add({
                              id: product.id,
                              name: product.name,
                              category: product.category,
                              fabric: product.fabric,
                              moq: product.moq,
                              leadTimeWeeks: product.leadTimeWeeks,
                            })
                      }
                      className={`inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors ${
                        added
                          ? "bg-sage/10 text-sage"
                          : "bg-copper text-white hover:bg-copper-2"
                      }`}
                    >
                      {added ? (
                        <>
                          <CheckIcon className="h-4 w-4" /> Added to Tech-Pack Quote
                        </>
                      ) : (
                        "Add to Tech-Pack Quote"
                      )}
                    </button>
                    <Link
                      href="/quote"
                      className="inline-flex h-10 items-center justify-center rounded-full border border-line text-[13px] font-semibold text-ink transition-colors hover:border-ink"
                    >
                      Open quote calculator
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
