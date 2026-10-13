# Arjay Fabrication Website

Premium, image-led website for Arjay Fabrication, built with Next.js App Router, TypeScript and Tailwind CSS.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment configuration

Copy `.env.example` to `.env.local`. Never commit `.env.local`.

### Gemini chatbot

Set `GEMINI_API_KEY` to a server-side Google AI Studio key. The default model is the supported stable `gemini-3.6-flash`; override it with `GEMINI_MODEL` if required. The key is only read in `src/app/api/chat/route.ts` and is never sent to the browser.

Chat history lives in React state for the current page session only. Refreshing or choosing Clear Chat resets it.

### Enquiry delivery

Set `ENQUIRY_WEBHOOK_URL` to an HTTPS endpoint that accepts the JSON enquiry payload and responds with a 2xx status. Use `ENQUIRY_WEBHOOK_TOKEN` if that endpoint expects a bearer token.

Until a delivery endpoint is configured, forms accurately report that online delivery is unavailable and show direct phone and email options. They never display a false success state.

### Production rate limiting

Set `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` for shared production rate limiting. A bounded in-memory fallback is included for local development and single-instance testing, but it does not coordinate limits across serverless instances.

## Verification

```bash
npm run lint
npm run build
```

Business information and copy are controlled by `branding.md` and `website-content.md`. Update the privacy page with final provider names and obtain an Australian privacy review before production launch.
