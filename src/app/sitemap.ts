import type { MetadataRoute } from "next";
import { allRoutes, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { return allRoutes.map((route) => ({ url: `${site.url}/${route}`, lastModified: new Date("2026-10-13"), changeFrequency: route === "" || route === "our-work" ? "monthly" : "yearly", priority: route === "" ? 1 : route.startsWith("services") || route === "contact" || route === "our-work" ? 0.8 : 0.6 })); }
