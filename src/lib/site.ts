import type { Metadata } from "next";

export const site = {
  name: "Arjay Fabrication",
  legalName: "Arjay Mobile Welding, Fabrication & Steel Supplies",
  url: "https://arjayfabrication.com.au",
  phone: "0407 406 793",
  phoneHref: "tel:+61407406793",
  email: "info@arjayfabrication.com.au",
  location: "Wingham, NSW",
  region: "Mid North Coast",
};

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  seoTitle: string;
  description: string;
  intro: string;
  detail: string;
  image: string;
  alt: string;
  gallery: { src: string; alt: string }[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "steel-fabrication",
    title: "Steel Fabrication in Wingham & the Mid North Coast",
    navTitle: "Steel Fabrication",
    seoTitle: "Steel Fabrication Wingham & Taree",
    description: "Explore custom steel fabrication for vehicles, properties and working equipment across the Mid North Coast.",
    intro: "Need steelwork built for a specific job? Enquire about custom steel fabrication for vehicle, agricultural, property or commercial applications.",
    detail: "From truck body structures and rural gates to fabricated frames, the right starting point is a clear description of the job, intended use and dimensions.",
    image: "/Steel Fabrication.webp",
    alt: "Finished steel cattle transport body fitted to a truck",
    gallery: [
      { src: "/Cattle Crate Taree.webp", alt: "Large fabricated livestock transport body with loading ramp" },
      { src: "/Custom Steel Fencing Taree.webp", alt: "Welder completing a galvanised steel rural gate on site" },
      { src: "/Multi Level Mezzanie Flooring.webp", alt: "Fabricated steel mezzanine platform and stairs in a workshop" },
    ],
    cta: "Discuss a Steel Project",
  },
  {
    slug: "aluminium-fabrication",
    title: "Custom Aluminium Fabrication on the Mid North Coast",
    navTitle: "Aluminium Fabrication",
    seoTitle: "Aluminium Fabrication Wingham & Taree",
    description: "Custom aluminium fabrication for work vehicles, storage, toolboxes and fabricated components.",
    intro: "Aluminium offers a useful balance of strength and weight for toolboxes, trays, truck bodies and custom components.",
    detail: "Share how the finished build needs to work, the available space and any measurements so the team can discuss a suitable approach.",
    image: "/Aluminum Welding & Fabrication.webp",
    alt: "Aluminium tray body and ladder rack fitted to a work truck",
    gallery: [
      { src: "/Aluminum Shelves.webp", alt: "Custom aluminium shelving and drawer unit in the workshop" },
      { src: "/Welding Taree.webp", alt: "Fabricated aluminium storage frame with mesh doors" },
      { src: "/Fabrication - Finished Work.webp", alt: "Finished aluminium canopy with mesh panels and work lights" },
    ],
    cta: "Request an Aluminium Quote",
  },
  {
    slug: "mobile-welding",
    title: "Mobile Welding & On-Site Fabrication Enquiries",
    navTitle: "Mobile Welding",
    seoTitle: "Mobile Welding Enquiries Mid North Coast",
    description: "Ask about mobile welding and on-site fabrication around Wingham, Taree and the Mid North Coast.",
    intro: "Some jobs are best discussed where the work is located. Tell us what needs welding, what it is made from and where the job is.",
    detail: "Site conditions and job requirements determine whether mobile work is suitable. Send the details so the team can advise on the next step.",
    image: "/Professinal Welding Services.webp",
    alt: "Welder working inside a large cylindrical steel component",
    gallery: [
      { src: "/Custom Steel Fencing Taree.webp", alt: "On-site welding on a galvanised rural gate" },
      { src: "/Welding & Fabrication At the Wingham Showground.webp", alt: "Fabricated steel entry frame and stock fencing at Wingham Campdraft grounds" },
      { src: "/Fence Welding.webp", alt: "Completed galvanised rail fencing around a showground area" },
    ],
    cta: "Ask About On-Site Work",
  },
  {
    slug: "truck-body-repairs",
    title: "Truck Body Repairs & Fabrication",
    navTitle: "Truck Body Repairs",
    seoTitle: "Truck Body Repairs & Fabrication",
    description: "View truck body repair and fabrication work, then discuss your vehicle with Arjay Fabrication in Wingham.",
    intro: "Damaged truck body or a metal component that needs attention? See real repair work, then share the vehicle details and what needs fixing.",
    detail: "Photographs help show the condition and scope. Repair suitability, timing and price are confirmed only after assessment.",
    image: "/After Truck Body Repair.webp",
    alt: "Repaired and refinished white tipper body fitted to a truck",
    gallery: [
      { src: "/Before Truck Body Repair.webp", alt: "Truck tipper body during repair before refinishing" },
      { src: "/Truck Body Repair.webp", alt: "Blue work truck with an aluminium tray body" },
      { src: "/Truck Repair.webp", alt: "Metal repair area on the rear body of a tanker truck" },
    ],
    cta: "Enquire About a Repair",
  },
  {
    slug: "custom-toolboxes-canopies",
    title: "Custom Toolboxes, Canopies & Vehicle Storage",
    navTitle: "Toolboxes & Canopies",
    seoTitle: "Custom Toolboxes & Canopies",
    description: "Explore custom aluminium toolboxes, canopies, shelving and work vehicle storage from Wingham.",
    intro: "Get your work vehicle organised around how you use it with custom storage, shelving and canopy enquiries.",
    detail: "Vehicle type, measurements, access needs and the equipment you carry are useful details when starting a custom fit-out discussion.",
    image: "/Shelves In Truck.webp",
    alt: "Custom aluminium shelving and drawers fitted to a work truck",
    gallery: [
      { src: "/Tool Box Supply.webp", alt: "Open aluminium toolbox and tray storage fitted to a ute" },
      { src: "/Toolbox Canopies.webp", alt: "White enclosed canopy fitted to a utility vehicle" },
      { src: "/Canopies.webp", alt: "Aluminium mesh canopy under fabrication in the workshop" },
    ],
    cta: "Discuss a Custom Fit-Out",
  },
  {
    slug: "custom-boats",
    title: "Custom Aluminium Boat Fabrication",
    navTitle: "Custom Boats",
    seoTitle: "Custom Aluminium Boats Wingham",
    description: "Ask Arjay Fabrication about custom aluminium boat fabrication and discuss your intended use.",
    intro: "Arjay Fabrication lists custom boat builds among its services. Tell us how you intend to use the boat and what you have in mind.",
    detail: "A suitable approved boat project photograph is not currently supplied, so this page stays focused on an honest enquiry pathway rather than using unrelated work as proof.",
    image: "/Custom Fabrication.webp",
    alt: "Detailed custom aluminium fabrication with mesh panels and access doors",
    gallery: [],
    cta: "Enquire About a Custom Boat",
  },
  {
    slug: "steel-supplies",
    title: "Steel Supplies in Wingham",
    navTitle: "Steel Supplies",
    seoTitle: "Steel Supplies Wingham NSW",
    description: "Contact Arjay Fabrication in Wingham with steel material types, sizes and quantities.",
    intro: "Planning a fabrication or building project? Ask about the type, sizes and quantities of steel you need.",
    detail: "Stock, availability, pricing and delivery arrangements need to be confirmed directly with the team for each enquiry.",
    image: "/Welding.webp",
    alt: "Fabricated steel platform and stair structure inside a workshop",
    gallery: [],
    cta: "Ask About Steel Supplies",
  },
  {
    slug: "custom-metalwork",
    title: "Custom Metal Fabrication for One-Off Jobs",
    navTitle: "Custom Metalwork",
    seoTitle: "Custom Metal Fabrication Wingham",
    description: "Share an unusual fabrication or repair job with Arjay Fabrication, including measurements and photographs.",
    intro: "Not every project fits a standard product. Send through what you need fabricated or repaired so the team can assess the job.",
    detail: "Intended use, material, dimensions, location and reference photos make it easier to understand a one-off request.",
    image: "/Fabrication Taree.webp",
    alt: "Red fabricated agricultural attachment finished in the workshop",
    gallery: [
      { src: "/Equipment Repair.webp", alt: "Repaired yellow industrial bucket attachment in a workshop" },
      { src: "/Deck Hatch.webp", alt: "Large yellow fabricated tipper body raised in a workshop yard" },
      { src: "/Welding.webp", alt: "Custom steel platform and stairs under fabrication" },
    ],
    cta: "Discuss Your Project",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  href?: string;
};

export const projects: Project[] = [
  { slug: "truck-body-repair", title: "Truck Body Repair", category: "Repairs", image: "/After Truck Body Repair.webp", alt: "Refinished white tipper truck body after repair", href: "/our-work/truck-body-repair" },
  { slug: "balustrade-handrail", title: "Balustrade & Handrail", category: "Property", image: "/After Photo Of Balustrade Handrail Job.jpg", alt: "Completed light-coloured balustrade across a raised house frontage", href: "/our-work/balustrade-handrail" },
  { slug: "cattle-crate", title: "Livestock Transport Body", category: "Agricultural", image: "/Cattle Crate Taree.webp", alt: "Fabricated livestock transport body and loading ramp on a truck" },
  { slug: "steel-fencing", title: "Rural Steel Fencing", category: "Property", image: "/Custom Steel Fencing Taree.webp", alt: "Welder completing a galvanised rural gate in the field" },
  { slug: "vehicle-shelving", title: "Vehicle Shelving", category: "Aluminium", image: "/Shelves In Truck.webp", alt: "Aluminium shelving and drawers fitted to a blue work truck" },
  { slug: "mezzanine", title: "Workshop Mezzanine", category: "Steel", image: "/Multi Level Mezzanie Flooring.webp", alt: "Steel workshop mezzanine with platform, rails and stairs" },
  { slug: "equipment-repair", title: "Equipment Repair", category: "Repairs", image: "/Equipment Repair.webp", alt: "Refinished yellow industrial bucket attachment" },
  { slug: "ute-toolbox", title: "Ute Toolbox Fit-Out", category: "Vehicles", image: "/Tool Box Supply.webp", alt: "Open aluminium storage toolbox fitted to a white ute" },
  { slug: "showground-fabrication", title: "Wingham Showground Steelwork", category: "Property", image: "/Welding & Fabrication At the Wingham Showground.webp", alt: "Steel entry frame and rail fencing at Wingham Campdraft grounds" },
  { slug: "aluminium-canopy", title: "Aluminium Canopy", category: "Aluminium", image: "/Fabrication - Finished Work.webp", alt: "Finished aluminium canopy with mesh panels and work lights" },
];

export const faqs = [
  ["What does Arjay Fabrication do?", "We work with steel and aluminium fabrication, mobile welding enquiries, custom builds, truck bodies, toolboxes, boats and steel supplies. If your job is unusual, send us the details and we will let you know the next step."],
  ["Where are you based?", "We are based in Wingham, NSW, and serve customers around the Mid North Coast."],
  ["Do you work in Taree, Forster or Tuncurry?", "These are among the areas listed on our website. Send us your location and job details so we can confirm arrangements for your project."],
  ["Can you come to my site?", "Arjay Fabrication advertises mobile fabrication services. Tell us what needs doing and where the work is located, and we can discuss whether on-site work is suitable."],
  ["Do you work with both steel and aluminium?", "Yes. Steel and aluminium fabrication are two of our core offerings."],
  ["Can you make a custom toolbox or canopy?", "Custom toolboxes are a listed service, and vehicle canopies are shown in our project photography. Send your vehicle details, measurements and intended use to discuss options."],
  ["Do you repair truck bodies?", "Our project photographs include truck body repair work. Send us photos and a description of the issue so the team can assess the enquiry."],
  ["Do you fabricate aluminium boats?", "Custom aluminium boats are listed on our website. Share the type of boat you have in mind and what you will use it for to start a discussion."],
  ["Can you provide steel supplies?", "Yes, steel supplies are listed among our services. Contact us with material types, dimensions and quantities to ask about availability."],
  ["How can I request a quote?", `Use the enquiry form, call ${site.phone} or email ${site.email} with a short job description and any useful measurements.`],
  ["Can you give me a price or completion date online?", "Pricing and scheduling depend on the job. Send the details and the team can discuss an estimate or next steps. The website and chatbot will not invent prices or delivery dates."],
  ["What information should I include in my enquiry?", "Describe what needs to be built or repaired, the material if known, approximate dimensions, location, preferred timing and whether you have photos available."],
] as const;

export const allRoutes = [
  "", "about", "our-story", "services", "our-work", "our-work/truck-body-repair", "our-work/balustrade-handrail", "service-areas", "faq", "contact", "privacy",
  ...services.map((service) => `services/${service.slug}`),
];

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, locale: "en_AU", type: "website", images: [{ url: "/Fabrication - Finished Work.webp", width: 960, height: 540, alt: "Arjay Fabrication custom aluminium work" }] },
  };
}
