import type { Metadata } from "next";
import { Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { QuoteCartProvider } from "@/components/quote-cart";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { company } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inspirationoverseas.demo"),
  title: {
    default: "Textile Overseas — Apparel Manufacturing & Global Export",
    template: "%s · Textile Overseas",
  },
  description:
    "End-to-end apparel manufacturing and global export solutions. 500K+ monthly capacity, live production tracking, digital catalog and instant tech-pack quoting.",
  keywords: [
    "garment manufacturer",
    "apparel export",
    "Bangladesh factory",
    "full package FOB",
    "OEKO-TEX",
    "GOTS",
    "B2B buyer portal",
    "private label clothing",
  ],
  openGraph: {
    title: "Textile Overseas — Apparel Manufacturing & Global Export",
    description:
      "Transforming high-fashion concepts into bulk production with precision stitching, ethical manufacturing, and seamless global logistics.",
    type: "website",
    siteName: "Textile Overseas",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <QuoteCartProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <span className="sr-only">{company.name} demo website</span>
        </QuoteCartProvider>
      </body>
    </html>
  );
}
