import type { Metadata } from "next";
import {
  DropletIcon,
  GlobeIcon,
  LeafIcon,
  NeedleIcon,
  ScissorsIcon,
  ShieldIcon,
} from "@/components/icons";
import { ButtonLink, CtaBand, FeatureList, SectionIntro } from "@/components/ui";
import { capabilities, machinery, process } from "@/lib/data";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities",
  description:
    "24 sewing lines, 1,850 machines, in-house washing and finishing, AQL 2.5 quality systems and full-package export from Ashulia, Dhaka.",
};

const iconMap = {
  scissors: ScissorsIcon,
  needle: NeedleIcon,
  droplet: DropletIcon,
  shield: ShieldIcon,
  leaf: LeafIcon,
  globe: GlobeIcon,
} as const;

const qcPoints = [
  "Fabric grey-store inspection with 4-point system before spreading",
  "Inline QC at every critical operation with hourly reporting",
  "Wash-house recipe control with lab-dip retention",
  "Final random inspection at AQL 2.5 (major/minor)",
  "Needle & metal detection on 100% of cartons",
  "Pre-shipment inspection hosting for SGS, BV or client teams",
];

export default function CapabilitiesPage() {
  return (
    <>
      <section className="fabric-weave text-paper">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <SectionIntro
            tone="light"
            eyebrow="Manufacturing capabilities"
            title="A factory built for programs — not one-off samples."
            body="24 production lines across two units in Ashulia, purpose-built floors for knit, bottoms, outerwear and a flexible cell for premium small-batch work."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" variant="light">
              Book a factory audit visit
            </ButtonLink>
            <ButtonLink href="/products" variant="outline-light">
              Browse product divisions
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <SectionIntro
          eyebrow="Under one roof"
          title="Every capability a full-package program needs."
          body="We take programs at any stage — FAB (fabric only), CMT (cut-make-trim) or full FOB with fabric, trims, washing and export documentation."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => {
            const Icon = iconMap[cap.icon];
            return (
              <article key={cap.title} className="bg-paper p-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-copper/10 text-copper">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h2 className="font-display mt-5 text-xl tracking-tight text-ink">{cap.title}</h2>
                <p className="mt-2.5 text-sm leading-6 text-mute">{cap.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <SectionIntro
              eyebrow="Machinery & capacity"
              title="The machine park, in numbers."
              body="Owned equipment — not brokered capacity. Auditors and buyers welcome any working day with 48 hours' notice."
            />
            <ButtonLink href="/contact" variant="outline" className="mt-8">
              Request capacity calendar
            </ButtonLink>
          </div>
          <div className="overflow-hidden rounded-xl border border-line bg-white">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Machinery inventory</caption>
              <tbody>
                {machinery.map((row) => (
                  <tr key={row.machine} className="border-b border-line/70 last:border-0">
                    <th
                      scope="row"
                      className="px-5 py-3.5 font-medium text-mute"
                    >
                      {row.machine}
                    </th>
                    <td className="px-5 py-3.5 text-right font-display text-lg tracking-tight text-ink">
                      {row.count}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionIntro
              eyebrow="Quality system"
              title="Six gates between your tech pack and the container seal."
            />
            <div className="mt-8">
              <FeatureList items={qcPoints} />
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow="Production flow"
              title="How an order moves through the floor."
            />
            <ol className="mt-8 space-y-0">
              {process.map((stage, i) => (
                <li
                  key={stage.step}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {i < process.length - 1 ? (
                    <span
                      className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-line"
                      aria-hidden
                    />
                  ) : null}
                  <span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-sm text-paper">
                    {stage.step}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-display text-lg tracking-tight text-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-mute">{stage.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3">
          {[
            {
              title: "Lead times that hold",
              text: "45–90 days ex-factory depending on division — with weekly progress reports from cut to carton.",
            },
            {
              title: "Compliance ready",
              text: "BSCI Grade B, SMETA 4-Pillar and Higg FEM on file. Audit scheduling handled by our compliance desk.",
            },
            {
              title: "Flexible commercial terms",
              text: "FOB, CIF or DDP. T/C 30/70 or 40/60. Partial shipments and consolidated DC deliveries supported.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-lg tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-mute">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
