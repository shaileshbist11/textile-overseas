"use client";

import { useState } from "react";
import { OrderSteps, StageBadge } from "@/components/order-steps";
import { Media } from "@/components/media";
import { demoOrders, fabricStock, samplePipeline } from "@/lib/data";
import { IMAGES, ORDER_IMAGES, unsplash } from "@/lib/images";

const tabs = [
  { id: "orders", label: "Active Order Tracker" },
  { id: "inventory", label: "Inventory & Fabric Stock" },
  { id: "samples", label: "Sample Request Pipeline" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export function PortalDashboard() {
  const [tab, setTab] = useState<TabId>("orders");
  const [selectedOrder, setSelectedOrder] = useState(demoOrders[0].id);
  const order = demoOrders.find((o) => o.id === selectedOrder) ?? demoOrders[0];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_32px_80px_-48px_rgba(15,23,42,0.45)]">
      <div className="flex flex-col gap-1 border-b border-line bg-ink px-5 py-4 text-paper sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <p className="eyebrow text-[#fdba74]">Demo Buyer Portal</p>
          <p className="font-display mt-1 text-lg tracking-tight">
            Good morning, sourcing team
          </p>
        </div>
        <div className="mt-2 flex items-center gap-2 text-xs text-mute-light sm:mt-0">
          <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
          Live data simulation · refreshed 5 min ago
        </div>
      </div>

      <div
        className="flex gap-1 overflow-x-auto border-b border-line bg-paper-2/60 px-3 py-2"
        role="tablist"
        aria-label="Portal sections"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
              tab === t.id
                ? "bg-white text-ink shadow-sm"
                : "text-mute hover:bg-white/60 hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-5 sm:p-7">
        {tab === "orders" ? (
          <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
            <aside className="space-y-2">
              <p className="eyebrow text-mute">Your active orders</p>
              {demoOrders.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setSelectedOrder(o.id)}
                  className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                    o.id === order.id
                      ? "border-copper bg-copper/5"
                      : "border-line hover:border-copper/40 hover:bg-paper-2/60"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">{o.id}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-mute">
                      {Math.round(((o.stageIndex + 1) / 7) * 100)}%
                    </span>
                  </span>
                  <span className="mt-1 block text-sm font-medium text-ink">{o.style}</span>
                  <span className="mt-0.5 block text-xs text-mute">
                    {o.units.toLocaleString()} pcs → {o.destination}
                  </span>
                </button>
              ))}
            </aside>

            <div className="rounded-xl border border-line bg-paper/70 p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-4">
                  <Media
                    src={unsplash(IMAGES[ORDER_IMAGES[order.id]].id, 240, 240)}
                    alt={IMAGES[ORDER_IMAGES[order.id]].alt}
                    className="h-20 w-20 shrink-0 rounded-xl"
                    sizes="80px"
                  />
                  <div className="min-w-0">
                    <p className="font-mono text-sm font-bold text-copper">{order.id}</p>
                    <h3 className="font-display mt-1 text-xl tracking-tight text-ink">
                      {order.style}
                    </h3>
                    <p className="mt-1 text-sm text-mute">
                      {order.buyer} · {order.category}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <StageBadge stageIndex={order.stageIndex} />
                  <p className="mt-2 text-xs text-mute">ETA {order.eta}</p>
                </div>
              </div>

              <div className="relative mt-6">
                <Media
                  src={unsplash(IMAGES.factoryFloor.id, 900, 260)}
                  alt={IMAGES.factoryFloor.alt}
                  className="h-28 w-full rounded-xl"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  overlay
                />
                <p className="absolute bottom-3 left-4 text-xs font-semibold text-white">
                  Live floor · Ashulia Unit B
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-white p-5">
                <OrderSteps stageIndex={order.stageIndex} />
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-line bg-white p-4">
                  <dt className="eyebrow text-mute">Units</dt>
                  <dd className="font-display mt-1 text-xl tracking-tight text-ink">
                    {order.units.toLocaleString()}
                  </dd>
                </div>
                <div className="rounded-xl border border-line bg-white p-4">
                  <dt className="eyebrow text-mute">Destination</dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">{order.destination}</dd>
                </div>
                <div className="rounded-xl border border-line bg-white p-4">
                  <dt className="eyebrow text-mute">Last update</dt>
                  <dd className="mt-1 text-sm text-mute">{order.lastUpdate}</dd>
                </div>
              </dl>

              <p className="mt-4 rounded-xl bg-copper/5 px-4 py-3 text-sm text-copper-2">
                <span className="font-semibold">Merchandiser note:</span> {order.progressNote}
              </p>
            </div>
          </div>
        ) : null}

        {tab === "inventory" ? (
          <div>
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="eyebrow text-mute">Warehouse A · Ashulia</p>
                <h3 className="font-display mt-1 text-xl tracking-tight text-ink">
                  Available fabric stock
                </h3>
              </div>
              <p className="text-sm text-mute">{fabricStock.length} rolls-lines listed · demo data</p>
            </div>
            <div className="overflow-x-auto rounded-xl border border-line">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-paper-2/80">
                    {["Code", "Fabric", "GSM", "Width", "Colors", "Available", "Status"].map(
                      (head) => (
                        <th key={head} className="eyebrow px-4 py-3 text-mute">
                          {head}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {fabricStock.map((row) => (
                    <tr
                      key={row.code}
                      className="border-b border-line/70 bg-white last:border-0 hover:bg-paper-2/40"
                    >
                      <td className="px-4 py-3 font-mono text-xs font-bold text-copper">
                        {row.code}
                      </td>
                      <td className="px-4 py-3 font-medium text-ink">{row.fabric}</td>
                      <td className="px-4 py-3 text-mute">{row.gsm}</td>
                      <td className="px-4 py-3 text-mute">{row.width}</td>
                      <td className="px-4 py-3 text-mute">{row.colors}</td>
                      <td className="px-4 py-3 font-semibold text-ink">{row.stock}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            row.status === "In stock"
                              ? "bg-sage/10 text-sage"
                              : row.status === "Low stock"
                                ? "bg-copper/10 text-copper"
                                : "bg-paper-2 text-mute"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {tab === "samples" ? (
          <div>
            <div className="mb-4">
              <p className="eyebrow text-mute">Sampling desk</p>
              <h3 className="font-display mt-1 text-xl tracking-tight text-ink">
                Sample request pipeline
              </h3>
            </div>
            <ul className="grid gap-3 lg:grid-cols-2">
              {samplePipeline.map((s) => (
                <li
                  key={s.id}
                  className="rounded-xl border border-line bg-white p-5 transition-shadow hover:shadow-[0_18px_40px_-28px_rgba(15,23,42,0.4)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-xs font-bold text-copper">{s.id}</p>
                      <p className="font-display mt-1 text-base tracking-tight text-ink">
                        {s.style}
                      </p>
                      <p className="mt-0.5 text-sm text-mute">{s.buyer}</p>
                    </div>
                    <span className="rounded-full bg-paper-2 px-3 py-1 text-[11px] font-semibold text-ink">
                      {s.type}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-sm">
                    <span className="text-mute">
                      Stage: <span className="font-semibold text-ink">{s.stage}</span>
                    </span>
                    <span className="text-mute">ETA {s.eta}</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-copper">
                    {s.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
