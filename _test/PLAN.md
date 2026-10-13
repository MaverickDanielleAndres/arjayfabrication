# Plan: Arjay Fabrication Website Redesign

## Goal

Redesign arjayfabrication.com.au as a complete premium, light, image-led Next.js website using the supplied brand, content and project photography, with working enquiries, local SEO and a secure Gemini Flash chatbot.

## Acceptance criteria

1. Build every route specified in `website-content.md`, including service and project detail pages.
2. Use the original supplied logo for the header and browser icon.
3. Use all 26 supplied business photographs in visually accurate contexts.
4. Provide a responsive photo-led homepage, compact quote form, galleries and two accessible before-and-after controls.
5. Implement working navigation, CTA links, server-validated enquiry forms and graceful configuration errors.
6. Implement a Gemini Flash chatbot with session-only memory, domain guardrails, validation, rate limiting and clear setup documentation.
7. Add per-page metadata, canonical URLs, JSON-LD, breadcrumbs, sitemap and robots rules.
8. Pass lint, TypeScript/build checks and browser smoke testing at desktop and mobile sizes.

## Selected skills

- `fullstack-taskrunner/SKILL.md`: autonomous implementation and verification loop.
- `fullstack-taskrunner/references/designer-engineer/SKILL.md`: premium editorial visual direction and motion restraint.
- `fullstack-taskrunner/references/frontend-engineer/SKILL.md`: Next.js App Router and accessible interactions.
- `fullstack-taskrunner/references/SEO-engineer/SKILL.md`: metadata, schema, crawlability and internal linking.
- `fullstack-taskrunner/references/security-engineer/SKILL.md`: API input validation, secrets and abuse controls.
- `fullstack-taskrunner/references/qa-engineer/SKILL.md`: build and browser verification.
- `ponytail.md`: minimum-dependency, maintainable implementation.

## Vertical slices

1. Audit live site, local code and all 26 assets. Establish shared content model and design system.
2. Build global shell, homepage, responsive navigation, footer and quote flow.
3. Build services, company, service-area, FAQ, contact and privacy routes.
4. Build portfolio, filters, project pages and accessible before-and-after comparisons.
5. Add enquiry and Gemini chat APIs plus chatbot interface and environment documentation.
6. Complete SEO surface, security headers and full verification.

## Risk areas

- No production enquiry delivery provider or Gemini key is present. Features must report configuration honestly and become operational when environment variables are supplied.
- In-memory rate limiting is suitable only as a local fallback. Production can use the documented Upstash REST variables.
- Business history, physical address, hours, certifications and project specifications remain unverified and will not be invented.

## Verification gates

- ESLint
- Next.js production build and TypeScript
- Route and interaction smoke tests
- Desktop, tablet and mobile browser inspection
- Form validation and unavailable-provider behaviour
- Chat endpoint validation and unavailable-key behaviour
- Metadata, sitemap, robots and structured-data checks

## Rollback and commit strategy

Keep the supplied content and images unchanged. Commit only after the complete verified implementation because the repository begins as a single scaffold commit and the redesign is one cohesive delivery.
