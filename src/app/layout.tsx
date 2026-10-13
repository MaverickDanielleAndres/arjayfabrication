import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import { Chatbot } from "@/components/interactive";
import { SiteFooter } from "@/components/layout-parts";
import { SiteHeader } from "@/components/site-shell";
import { site } from "@/lib/site";
import "./globals.css";

const display = Barlow_Condensed({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700", "800"], display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Steel & Aluminium Fabrication Wingham | Arjay Fabrication", template: "%s | Arjay Fabrication" },
  description: "Arjay Fabrication offers steel and aluminium fabrication, custom work, repairs and supplies from Wingham. Serving the Mid North Coast.",
  applicationName: site.name,
  alternates: { canonical: site.url },
  icons: { icon: [{ url: "/arjay-logo-250px.webp", type: "image/webp" }], shortcut: "/arjay-logo-250px.webp", apple: "/arjay-logo-250px.webp" },
  openGraph: { siteName: site.name, locale: "en_AU", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff", colorScheme: "light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: site.name, legalName: site.legalName, url: site.url, logo: `${site.url}/arjay-logo-250px.webp`, image: `${site.url}/Fabrication - Finished Work.webp`, telephone: "+61 407 406 793", email: site.email, address: { "@type": "PostalAddress", addressLocality: "Wingham", addressRegion: "NSW", addressCountry: "AU" }, areaServed: ["Wingham", "Taree", "Forster", "Tuncurry", "Mid North Coast NSW"], description: "Steel and aluminium fabrication, mobile welding enquiries, custom builds, repairs and steel supplies from Wingham." };
  return <html lang="en-AU" className={`${display.variable} ${body.variable}`}><body><SiteHeader /><main id="main">{children}</main><SiteFooter /><Chatbot /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
