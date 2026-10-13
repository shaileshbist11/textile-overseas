import type { Metadata } from "next";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { FactoryTourForm } from "@/components/factory-tour-form";
import { InquiryForm } from "@/components/inquiry-form";
import { Media } from "@/components/media";
import { Eyebrow, SectionIntro } from "@/components/ui";
import { company } from "@/lib/data";
import { IMAGES, unsplash } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Send a tech pack or program brief to Textile Overseas merchandising, or schedule a factory tour at our Ashulia complex. FOB costing guidance within 48 hours.",
};

const faqs = [
  {
    q: "What is your minimum order quantity?",
    a: "MOQs start at 300 pieces per color for outerwear and 500–1,000 pieces per color for knit, bottoms and workwear programs, depending on fabric and construction.",
  },
  {
    q: "How fast can I get costing?",
    a: "For complete tech packs we return FOB costing within 48 hours. Reference photos without specs take up to five business days after fabric confirmation.",
  },
  {
    q: "Do you accept FAB or CMT orders?",
    a: "Yes. We operate full FOB, FAB (fabric supplied) and CMT arrangements, and can also act as your fabric procurement agent with our certified mill partners.",
  },
  {
    q: "Can we book a factory visit?",
    a: "Buyer and auditor visits are welcome with 48 hours' notice. Our compliance desk handles scheduling, NDAs and visitor PPE.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="fabric-linen border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="max-w-2xl">
            <Eyebrow>Contact Us</Eyebrow>
            <h1 className="font-display mt-3 text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
              Tell us what you want to make.
            </h1>
            <p className="mt-5 text-lg leading-8 text-mute">
              Share a tech pack, reference photos or a rough brief. A senior merchandiser replies
              with FOB guidance, lead time and a sampling plan — usually within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr]">
          <div className="rounded-xl border border-line bg-white p-6 sm:p-10">
            <InquiryForm />
          </div>

          <aside className="space-y-6">
            <div className="fabric-weave rounded-xl p-7 text-paper">
              <p className="eyebrow text-[#fdba74]">Direct lines</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#fdba74]" aria-hidden />
                  <div>
                    <a href={`mailto:${company.email}`} className="font-medium hover:text-white">
                      {company.email}
                    </a>
                    <p className="mt-0.5 text-mute-light">New programs &amp; partnerships</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#fdba74]" aria-hidden />
                  <div>
                    <a
                      href={`tel:${company.phone.replace(/\s/g, "")}`}
                      className="font-medium hover:text-white"
                    >
                      {company.phone}
                    </a>
                    <p className="mt-0.5 text-mute-light">Sun–Thu, 9:00–18:00 BST</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#fdba74]" aria-hidden />
                  <div>
                    <p className="font-medium">Under 48-hour response</p>
                    <p className="mt-0.5 text-mute-light">On business days, guaranteed</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-white p-7">
              <p className="eyebrow flex items-center gap-2 text-copper">
                <PinIcon className="h-4 w-4" aria-hidden />
                {company.hq.label}
              </p>
              {company.hq.lines.map((line) => (
                <p key={line} className="mt-1 text-sm text-mute">
                  {line}
                </p>
              ))}
              <div className="stitch mt-5 pt-5">
                <p className="eyebrow flex items-center gap-2 text-copper">
                  <PinIcon className="h-4 w-4" aria-hidden />
                  {company.liaison.label}
                </p>
                {company.liaison.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-mute">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-sage/30 bg-sage/10 p-7">
              <p className="eyebrow text-sage">Prefer email?</p>
              <p className="mt-3 text-sm leading-6 text-mute">
                Attach your tech pack directly to an email. Include target FOB, delivery window and
                any certification requirements — it speeds up first response considerably.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-line bg-paper-2/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <Eyebrow>Before you write</Eyebrow>
          <h2 className="font-display mt-3 text-3xl tracking-tight text-ink">
            Questions we answer every week
          </h2>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-paper p-7">
                <dt className="font-display text-lg leading-snug tracking-tight text-ink">
                  {faq.q}
                </dt>
                <dd className="mt-2.5 text-sm leading-6 text-mute">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="tour" className="scroll-mt-20 border-t border-line">
        <div className="relative">
          <Media
            src={unsplash(IMAGES.factoryFloor.id, 1600, 500)}
            alt={IMAGES.factoryFloor.alt}
            className="h-56 w-full sm:h-72"
            sizes="100vw"
            overlay
          />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6">
              <p className="eyebrow text-[#fdba74]">Factory visits</p>
              <h2 className="font-display mt-2 max-w-2xl text-3xl leading-tight tracking-tight text-paper text-balance sm:text-4xl">
                Schedule a factory tour at our Ashulia complex.
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <SectionIntro
              eyebrow="What you'll see"
              title="Walk every floor, not just the showroom."
              body="Cutting, stitching, quality and finishing floors with a merchandiser and compliance officer. Visits run Sunday–Thursday, 10:00–16:00 BST, with 48 hours' notice."
            />
            <ul className="mt-8 space-y-3 text-sm text-mute">
              {[
                "Full floor walk-through of 24 production lines",
                "Quality lab, metal detection & AQL audit room",
                "Effluent treatment plant & solar installation",
                "NDAs signed on arrival; PPE provided",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-copper" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-[0_28px_70px_-52px_rgba(15,23,42,0.5)] sm:p-8">
            <FactoryTourForm />
          </div>
        </div>
      </section>
    </>
  );
}
