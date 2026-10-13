"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { useQuoteCart } from "@/components/quote-cart";

const nav = [
  { href: "/", label: "Home" },
  { href: "/portal", label: "B2B Buyer Portal" },
  { href: "/tracker", label: "Production Tracker" },
  { href: "/catalog", label: "Digital Catalog" },
  { href: "/quote", label: "Request Quote" },
  { href: "/contact", label: "Contact Us" },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { items } = useQuoteCart();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="Inspiration Overseas — home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink font-display text-sm text-paper transition-transform duration-200 group-hover:scale-105">
            IO
          </span>
          <span className="leading-none">
            <span className="font-display block text-[15px] tracking-tight text-ink">
              Inspiration Overseas
            </span>
            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-mute">
              Apparel Manufacturing &amp; Export
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                  active ? "text-copper" : "text-ink/75 hover:bg-paper-2 hover:text-ink"
                }`}
              >
                {item.label}
                {item.href === "/quote" && items.length > 0 ? (
                  <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-copper px-1 text-[10px] font-bold text-white">
                    {items.length}
                  </span>
                ) : null}
                {active && item.href !== "/quote" ? (
                  <span className="absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-copper" aria-hidden />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 xl:flex">
          <Link
            href="/portal#login"
            className="inline-flex h-10 items-center rounded-full border border-ink/20 px-4 text-[13px] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
          >
            Client Login
          </Link>
          <Link
            href="/contact#tour"
            className="inline-flex h-10 items-center rounded-full bg-copper px-4 text-[13px] font-semibold text-white transition-colors hover:bg-copper-2"
          >
            Schedule Factory Tour
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-paper xl:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-line/60 py-3 text-base font-medium ${
                  isActive(pathname, item.href) ? "text-copper" : "text-ink"
                }`}
              >
                {item.label}
                {item.href === "/quote" && items.length > 0 ? (
                  <span className="grid h-5 min-w-5 place-items-center rounded-full bg-copper px-1.5 text-[11px] font-bold text-white">
                    {items.length}
                  </span>
                ) : null}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 pb-2">
              <Link
                href="/portal#login"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-full border border-ink/20 px-5 text-sm font-semibold text-ink"
              >
                Client Login
              </Link>
              <Link
                href="/contact#tour"
                onClick={() => setOpen(false)}
                className="inline-flex h-12 items-center justify-center rounded-full bg-copper px-5 text-sm font-semibold text-white"
              >
                Schedule Factory Tour
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
