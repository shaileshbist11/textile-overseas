"use client";

import { useState } from "react";
import { OrderSteps, StageBadge } from "@/components/order-steps";
import { CheckIcon } from "@/components/icons";
import { Media } from "@/components/media";
import { demoOrders, productionStages } from "@/lib/data";
import { IMAGES, ORDER_IMAGES, unsplash } from "@/lib/images";

export function TrackerTool() {
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(demoOrders[0].id);
  const [error, setError] = useState<string | null>(null);

  const order = demoOrders.find((o) => o.id === activeId) ?? demoOrders[0];

  function lookup(event: React.FormEvent) {
    event.preventDefault();
    const match = demoOrders.find(
      (o) => o.id.toLowerCase() === query.trim().toLowerCase(),
    );
    if (match) {
      setActiveId(match.id);
      setError(null);
      setQuery("");
    } else {
      setError(`No order found for "${query.trim()}". Try ${demoOrders.map((o) => o.id).join(", ")}.`);
    }
  }

  return (
    <div className="space-y-6">
      <form
        onSubmit={lookup}
        className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-5 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.45)] sm:flex-row sm:items-center sm:p-6"
      >
        <label htmlFor="order-id" className="eyebrow shrink-0 text-mute">
          Track your order
        </label>
        <input
          id="order-id"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter order ID — e.g. IO-24018"
          className="h-12 w-full flex-1 rounded-xl border border-line bg-paper px-4 font-mono text-sm text-ink placeholder:font-sans placeholder:text-mute/60 focus:outline-none focus:ring-2 focus:ring-copper/40"
        />
        <button
          type="submit"
          className="h-12 shrink-0 rounded-full bg-copper px-6 text-sm font-semibold text-white transition-colors hover:bg-copper-2"
        >
          Track order
        </button>
      </form>

      {error ? (
        <p className="rounded-xl border border-copper/30 bg-copper/5 px-4 py-3 text-sm text-copper-2" role="alert">
          {error}
        </p>
      ) : null}

      <div className="flex flex-wrap gap-2">
        <span className="self-center text-xs font-semibold uppercase tracking-wider text-mute">
          Demo orders:
        </span>
        {demoOrders.map((o) => (
          <button
            key={o.id}
            type="button"
            onClick={() => {
              setActiveId(o.id);
              setError(null);
            }}
            className={`rounded-full border px-3.5 py-1.5 font-mono text-xs font-bold transition-colors ${
              o.id === activeId
                ? "border-copper bg-copper text-white"
                : "border-line bg-white text-ink hover:border-copper/50"
            }`}
          >
            {o.id}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_32px_80px_-56px_rgba(15,23,42,0.5)]">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line bg-ink px-6 py-5 text-paper">
          <div className="flex min-w-0 items-start gap-4">
            <Media
              src={unsplash(IMAGES[ORDER_IMAGES[order.id]].id, 240, 240)}
              alt={IMAGES[ORDER_IMAGES[order.id]].alt}
              className="h-20 w-20 shrink-0 rounded-xl"
              sizes="80px"
            />
            <div className="min-w-0">
              <p className="font-mono text-sm font-bold text-[#fdba74]">{order.id}</p>
              <h2 className="font-display mt-1 text-2xl tracking-tight">{order.style}</h2>
              <p className="mt-1 text-sm text-mute-light">
                {order.buyer} · {order.units.toLocaleString()} pcs · {order.category}
              </p>
            </div>
          </div>
          <div className="text-right">
            <StageBadge stageIndex={order.stageIndex} tone="dark" />
            <p className="mt-2 text-sm text-mute-light">Estimated delivery {order.eta}</p>
          </div>
        </div>

        <div className="relative">
          <Media
            src={unsplash(IMAGES.factoryFloor.id, 1200, 300)}
            alt={IMAGES.factoryFloor.alt}
            className="h-32 w-full"
            sizes="(max-width: 1024px) 100vw, 900px"
            overlay
          />
          <p className="absolute bottom-3 left-6 text-xs font-semibold text-white">
            Live floor · Ashulia Unit B
          </p>
        </div>

        <div className="bg-paper-2/40 p-6">
          <OrderSteps stageIndex={order.stageIndex} />
        </div>

        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {productionStages.slice(0, order.stageIndex + 1).map((stage, i) => (
            <div key={stage} className="bg-white p-5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-sage/10 text-sage">
                <CheckIcon className="h-4 w-4" />
              </span>
              <p className="mt-3 text-sm font-semibold text-ink">{stage}</p>
              <p className="mt-1 text-xs leading-5 text-mute">
                {i === order.stageIndex ? order.lastUpdate : "Completed & documented"}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-line px-6 py-5">
          <p className="rounded-xl bg-copper/5 px-4 py-3 text-sm text-copper-2">
            <span className="font-semibold">Latest update:</span> {order.lastUpdate}.{" "}
            {order.progressNote}
          </p>
        </div>
      </div>
    </div>
  );
}
