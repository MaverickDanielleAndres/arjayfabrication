import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const suppliedImages = [
  "After Photo Of Balustrade Handrail Job.jpg", "After Truck Body Repair.webp", "Aluminum Shelves.webp", "Aluminum Welding & Fabrication.webp",
  "Before Photo Of Balustrade Handrail Job.jpg", "Before Truck Body Repair.webp", "Canopies.webp", "Cattle Crate Taree.webp", "Custom Fabrication.webp",
  "Custom Steel Fencing Taree.webp", "Deck Hatch.webp", "Equipment Repair.webp", "Fabrication - Finished Work.webp", "Fabrication Taree.webp",
  "Fence Welding.webp", "Multi Level Mezzanie Flooring.webp", "Professinal Welding Services.webp", "Shelves In Truck.webp", "Steel Fabrication.webp",
  "Tool Box Supply.webp", "Toolbox Canopies.webp", "Truck Body Repair.webp", "Truck Repair.webp", "Welding & Fabrication At the Wingham Showground.webp",
  "Welding Taree.webp", "Welding.webp",
];

for (const image of suppliedImages) assert(existsSync(join(root, "public", image)), `Missing supplied image: ${image}`);

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? sourceFiles(join(directory, entry.name)) : entry.name.endsWith(".tsx") || entry.name.endsWith(".ts") ? [join(directory, entry.name)] : []);
}
const sources = sourceFiles(join(root, "src"));
const publishedSource = sources.map((file) => readFileSync(file, "utf8")).join("\n");
for (const image of suppliedImages) assert(publishedSource.includes(`/${image}`), `Supplied image is not used by the website: ${image}`);
assert(!publishedSource.includes("—"), "Published source contains an em dash");
assert(publishedSource.includes("gemini-3.6-flash"), "Supported Gemini Flash default is missing");
assert(publishedSource.includes("LocalBusiness"), "LocalBusiness structured data is missing");
assert(publishedSource.includes("BreadcrumbList"), "Breadcrumb structured data is missing");
assert(existsSync(join(root, "src", "app", "sitemap.ts")), "Sitemap is missing");
assert(existsSync(join(root, "src", "app", "robots.ts")), "Robots rules are missing");
console.log(`Content checks passed: ${suppliedImages.length} supplied images, ${sources.length} source files, SEO and language guards.`);
