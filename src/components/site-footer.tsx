import Link from "next/link";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { company, markets } from "@/lib/data";

const columns = [
  {
    title: "Platform",
    links: [
      { href: "/portal", label: "B2B Buyer Portal" },
      { href: "/tracker", label: "Production Tracker" },
      { href: "/catalog", label: "Digital Catalog" },
      { href: "/quote", label: "Request Quote" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/capabilities", label: "Capabilities" },
      { href: "/products", label: "Product divisions" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="fabric-weave text-paper">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-copper font-display text-sm text-white">
                IO
              </span>
              <span className="font-display text-[15px] tracking-tight">{company.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-mute-light">
              End-to-end apparel manufacturing and global export solutions — full-package FOB
              programs from Dhaka, Bangladesh for buyers across 15+ export countries.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-mute-light">
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#fdba74]" aria-hidden />
                <a href={`mailto:${company.email}`} className="hover:text-paper">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#fdba74]" aria-hidden />
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-paper">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#fdba74]" aria-hidden />
                <span>
                  {company.hq.lines[0]}, {company.hq.lines[1]}
                </span>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="eyebrow text-[#fdba74]">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-mute-light transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="eyebrow text-[#fdba74]">Export house</h3>
            <div className="mt-5 space-y-5 text-sm text-mute-light">
              <div>
                <p className="font-medium text-paper">{company.hq.label}</p>
                {company.hq.lines.map((line) => (
                  <p key={line} className="mt-0.5">
                    {line}
                  </p>
                ))}
              </div>
              <div>
                <p className="font-medium text-paper">{company.liaison.label}</p>
                {company.liaison.lines.map((line) => (
                  <p key={line} className="mt-0.5">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="stitch-dark mt-12 pt-6">
          <p className="eyebrow text-[#fdba74]">Exporting to</p>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-mute-light">
            {markets.map((market) => (
              <li key={market}>{market}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 border-t border-line-dark pt-6">
          <p className="max-w-4xl text-xs leading-5 text-mute-light">{company.exportLicense}</p>
          <div className="mt-4 flex flex-col gap-2 text-xs text-mute-light sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {company.copyrightYear} {company.legalName}. All rights reserved.
            </p>
            <p className="font-mono text-[11px] uppercase tracking-widest">
              Demo experience — data is illustrative
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
