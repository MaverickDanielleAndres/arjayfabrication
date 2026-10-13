# Arjay Fabrication | Brand Guidelines

**Version:** 1.0  
**Prepared:** 13 October 2026  
**Purpose:** Website redesign and digital brand system  
**Brand website:** https://arjayfabrication.com.au/

> **Accuracy note:** Business information below comes from the public website and relevant business listings. The existing black wordmark/logo has been identified on the official site, but an accurate computed-style inspection of the live CSS was not available. The exact current brand font and accent HEX have **not** been verified. Typography and colour tokens labelled *design recommendation* are deliberate redesign decisions, not claims about the current stylesheet. Before production, inspect the live site and original logo files and adjust tokens if they reveal a different established brand colour or font.

## 1. Brand identity

- **Brand name:** Arjay Fabrication
- **Extended business name used publicly:** Arjay Mobile Welding, Fabrication & Steel Supplies
- **Location:** Wingham, New South Wales, Australia
- **Core offering:** Steel and aluminium fabrication, mobile welding/fabrication, custom metalwork, metal supplies, work-vehicle products and repairs
- **Confirmed focus locations:** Wingham, Taree, Forster, Tuncurry, and the Mid North Coast, subject to project and travel confirmation
- **Website positioning:** Practical custom fabrication backed by visible workmanship
- **Brand promise for marketing use:** Real fabrication work, tailored to the job
- **Personality:** Capable, straightforward, dependable, practical, precise, local and confident
- **Voice:** Australian English; concise, factual, welcoming and knowledgeable

### Audience

Vehicle and fleet owners; builders and trade contractors; local agricultural operators; businesses requiring repairs or custom fabricated parts; property owners needing metalwork; boat owners and customers seeking a fabricated aluminium boat.

### What makes this brand credible

Show authentic photographs of finished metalwork, process images, before-and-after transformations, real custom builds and the range of work undertaken. Let projects carry the message instead of unsupported superlatives.

## 2. Brand principle

**WORK THAT SPEAKS FOR ITSELF.**

The website must communicate industrial expertise without feeling harsh or dated. It should look like a premium, established fabrication workshop rather than a generic contractor template. Strong composition, real project imagery, clean typography, restrained colour and obvious enquiry paths are the foundation.

Keep the current genuine business logo. Never replace it with a generic welded-sparks illustration or a newly invented wordmark.

## 3. Colour system

### Proposed digital palette

These values are **recommendations** anchored in the site's dark wordmark and real steelwork photography. A copper-orange is a *new restrained digital accent*, **not** a verified existing Arjay brand colour. If the local logo or source stylesheet has a recognisable accent, prioritise that existing accent instead.

| Token | HEX | Primary use |
|---|---|---|
| `--brand-ink` | `#181A1C` | Dark headers, body text, dark sections |
| `--brand-carbon` | `#262A2D` | Footer, hero scrims, industrial feature panels |
| `--brand-steel` | `#646E75` | Secondary text, technical labels |
| `--brand-accent` | `#B64722` | Primary CTAs, small highlights, focus rings (design recommendation) |
| `--brand-accent-hover` | `#913617` | CTA hover and pressed states |
| `--surface` | `#FFFFFF` | Main backgrounds and forms |
| `--surface-soft` | `#F3F3F0` | Quiet section changes, gallery filters |
| `--surface-warm` | `#E9E8E3` | Captions, subtle visual grounding |
| `--border` | `#D6D8D8` | Fine outlines and controls |
| `--text-muted` | `#51585C` | Supporting copy |
| `--success` | `#246B45` | Submission success |
| `--error` | `#B42318` | Error messages |

### Application

- Approximately 75% light neutrals and authentic photography, 20% charcoal/dark surfaces, 5% accent and status colours. These are visual guidelines, not rigid measurements.
- Primary buttons: accent fill with white text; strong contrast (the proposed accent exceeds 4.5:1 against white).
- Dark-section buttons: white or accent fill; choose the more legible treatment.
- Accent is for conversion cues and small identifiers, not giant coloured panels.
- Never apply a coloured filter that misrepresents actual fabrication projects.
- Don't place body text on uncontrolled areas of a busy image. Use a gradient scrim or solid panel.

### CSS reference

```css
:root {
  --brand-ink: #181a1c;
  --brand-carbon: #262a2d;
  --brand-steel: #646e75;
  --brand-accent: #b64722;
  --brand-accent-hover: #913617;
  --surface: #ffffff;
  --surface-soft: #f3f3f0;
  --surface-warm: #e9e8e3;
  --border: #d6d8d8;
  --text-muted: #51585c;
  --success: #246b45;
  --error: #b42318;
}
```

## 4. Typography

**The original font family was not confirmed.** Use this proposed pair unless inspection of existing assets establishes a recognisable house font.

- **Display and headings:** `Barlow Condensed`, weights 600, 700, 800. Industrial, structured and legible for concise headings. Use sparingly in uppercase for small labels.
- **Body, navigation, forms, UI:** `Inter`, weights 400, 500, 600, 700. Neutral, clear and easy to read.
- **Fallback:** `Arial, Helvetica, sans-serif`.
- **Never:** Mix three or four display families, use decorative script, or use monospaced text for ordinary body copy.

| Element | Desktop | Mobile | Notes |
|---|---|---|---|
| Hero H1 | 64–88px | 40–52px | 0.96–1.04 line-height, 2–3 intentional lines |
| Page H1 | 56–72px | 38–48px | Keep first screen concise |
| Section H2 | 40–56px | 32–40px | 1.04–1.14 line-height |
| Card / project H3 | 24–30px | 22–26px | Prefer short titles |
| Body | 16–18px | 16px | 1.5–1.65 line-height |
| Supporting / captions | 13–15px | 13–14px | Never sacrifice legibility |
| Buttons | 14–16px | 15–16px | Weight 600–700 |

Use `clamp()` for responsive headings. Restrict text blocks to about 55–68 characters per line. Avoid all-caps paragraphs. Headline case is preferred for full sentences.

## 5. Identity and logo usage

- Use the **original Arjay Fabrication logo** found on the existing site, or the highest-quality original supplied in the project. Reference asset spotted online: `https://arjayfabrication.com.au/wp-content/uploads/2024/06/arjay-logo-250px.png`.
- Prefer SVG/high-resolution original if present in `/public`; don't stretch the 250px web version.
- Maintain logo proportions and preserve clear space at least equal to the height of the logo's smallest prominent letter.
- Use a dark logo on white; only use a genuine reversed/white version on dark surfaces. If none exists, prepare a faithful contrast-safe monochrome variant, not a redesigned mark.
- Avoid gradients, drop shadows, outlines, added weld sparks and logo recolouring.

## 6. Visual language

### Photography first

- Prioritise supplied, genuine project photographs and official-site imagery.
- Show fabrication details, scale, geometry, finishes, workshop context and completed items.
- Use both close-up and full-job views to create variety.
- Match image crop to the story; avoid cutting off the critical fabricated part.
- Honour the provided image filenames, which indicate the work pictured, but visually inspect each actual file before describing it.
- Never invent staff portraits, workshop scenes, equipment or before-and-after results.

### Art direction

- **Hero:** One strong, real image with considered text placement and a compact quote form.
- **Services:** Image-driven navigation, asymmetric visual panels and concise labels.
- **Projects:** Full-width featured job, editorial grid, masonry where suitable, interactive before/after.
- **About:** Honest workshop or real-work photography instead of generic corporate stock.
- **Detail:** Large photographs paired with understated technical captions.

## 7. Grid and layout

- Content width: `max-width: 1320px`, with a narrower reading container of `760px`.
- Grid: 12 columns desktop, 6 tablet, 4 mobile.
- Desktop outer gutters: 40–64px; mobile: 20–24px.
- Section spacing: 88–128px desktop; 56–80px mobile, adjusted to content density.
- Minimum comfortable touch targets: 44 × 44px.
- Use modular spacing increments: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Reserve generous whitespace around hero images, but avoid large empty bands between sections.
- Each section can have a distinct composition, but all must share consistent gutters, typography, buttons and alignment anchors.

## 8. Components

### Navigation

Clean light header; compact logo; Home, Services, Our Work, About, Contact; obvious Request a Quote action. Responsive dropdown only if useful. Sticky behaviour must not block content.

### Buttons

- Primary: accent solid, white label, subtle radius `6px`, strong focus outline.
- Secondary: outline or charcoal fill depending on background.
- Avoid pill buttons everywhere, big glowing effects and unnecessary icons.

### Cards and project tiles

Use subtle border, precise alignment, generous imagery and limited decoration. Prefer edge-to-edge photography with type beneath it. Avoid nested cards and repeated icon-grid templates.

### Forms

Square-ish controls with `6px` radius; clear labels, brief help text, visible validation; restrained form backgrounds. The hero form should show only essential fields and fit without pushing the actual hero image below the fold.

### Chatbot

Same typography and neutrals, dark readable assistant text, subtle accent for actions. Render Markdown safely without raw `**` strings. Ensure accessibility, mobile fit, clear empty/error/loading states and a strong but non-intrusive launcher.

## 9. Motion and interaction

- Motion should clarify rather than decorate. Use 140–260ms transitions for controls.
- Use restrained image hover zoom (1.02–1.04), if any.
- Before/after slider should work by mouse, touch and keyboard.
- Respect `prefers-reduced-motion`.
- Avoid scroll hijacking, gratuitous parallax, animated background shapes and full-page reveal delays.

## 10. Accessibility and content quality

- Target WCAG 2.2 AA contrast and interaction patterns.
- Keep actual project details readable without reliance on image alt text alone.
- Use one H1 per page, logical headings, semantic controls and keyboard navigation.
- Use Australian spellings: aluminium, customised, colour, enquiries, organise.
- **No em dashes in published copy.**
- Copy style: short, specific, concrete, unpretentious. Do not say "industry-leading" or "award-winning" without evidence.

## 11. Non-negotiables

1. Real photography always outweighs decoration.
2. Preserve genuine Arjay identity and business facts.
3. Make quotation requests easy on every important page.
4. Keep typography, spacing and accent usage consistent.
5. No generic AI-web-design patterns, crowded cards or empty filler sections.
6. Show before-and-after work and completed builds prominently.
7. Verify any customer testimonials, accreditations, location claims or statistics before publishing.

## 12. Source and verification notes

- Official website: https://arjayfabrication.com.au/
- Public directory of services and images: https://www.localsearch.com.au/profile/arjay-mobile-welding-fabrication/wingham-nsw/Of4e
- Listing linking a Facebook account: https://www.clickfind.com/business/steel-fabricators-manufacturers/nsw/wingham/arjay--mobile-welding--fabrication/8306
- Facebook link identified by third-party listing: https://www.facebook.com/arjayfabrication/ (public posts not verified in this research)
- No official Instagram profile was confidently identified.
- **Verify before launch:** actual current fonts and exact source colors; original logo variants; current street address and hours; any 50+ years experience wording; project-specific permissions and details.
