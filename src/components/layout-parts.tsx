import Image from "next/image";
import Link from "next/link";
import { services, site } from "@/lib/site";
import { Icon } from "./site-shell";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid shell">
        <div className="footer-brand"><Image src="/arjay-logo-250px.webp" alt="Arjay Fabrication" width={250} height={114} /><p>Practical steel and aluminium fabrication from Wingham for the Mid North Coast.</p></div>
        <div><h3>Explore</h3><Link href="/about">About</Link><Link href="/our-story">Our Story</Link><Link href="/our-work">Our Work</Link><Link href="/service-areas">Service Areas</Link><Link href="/faq">FAQs</Link></div>
        <div><h3>Services</h3>{services.slice(0, 6).map((item) => <Link key={item.slug} href={`/services/${item.slug}`}>{item.navTitle}</Link>)}</div>
        <div><h3>Contact</h3><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>Wingham, NSW<br />Mid North Coast</p></div>
      </div>
      <div className="footer-bottom shell"><span>© 2026 Arjay Fabrication</span><Link href="/privacy">Privacy Policy</Link></div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, ...(item.href ? { item: `${site.url}${item.href}` } : {}) })) };
  return <><nav className="breadcrumbs shell" aria-label="Breadcrumb">{items.map((item, index) => <span key={item.label}>{index > 0 && <b>/</b>}{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}

export function PageHero({ eyebrow, title, intro, image, alt }: { eyebrow: string; title: string; intro: string; image?: string; alt?: string }) {
  return <section className={image ? "page-hero with-image" : "page-hero"}><div className="shell page-hero-grid"><div className="page-hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div>{image && <div className="page-hero-image"><Image src={image} alt={alt || ""} fill sizes="(max-width: 800px) 100vw, 50vw" priority /></div>}</div></section>;
}

export function QuoteBand({ title = "Tell us what you need.", copy = "Share the job, location and any useful measurements. We will help you work out the next step.", service }: { title?: string; copy?: string; service?: string }) {
  const href = service ? `/contact?service=${encodeURIComponent(service)}#quote` : "/contact#quote";
  return <section className="quote-band"><div className="shell quote-band-inner"><div><span className="eyebrow light">YOUR NEXT PROJECT</span><h2>{title}</h2><p>{copy}</p></div><div className="button-row"><Link className="button" href={href}>Request a Quote <Icon name="arrow" /></Link><a className="text-link light" href={site.phoneHref}>or call {site.phone}</a></div></div></section>;
}

export function ImageStrip({ images }: { images: { src: string; alt: string }[] }) {
  if (!images.length) return null;
  return <div className={`image-strip count-${images.length}`}>{images.map((image, index) => <figure key={image.src}><div><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div><figcaption><span>0{index + 1}</span>{image.alt}</figcaption></figure>)}</div>;
}
