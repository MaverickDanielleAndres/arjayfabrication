import { NextRequest, NextResponse } from "next/server";
import { isAllowedOrigin, rateLimit, readJson } from "@/lib/server-security";

const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) return NextResponse.json({ error: "This request could not be verified." }, { status: 403 });
    if (!(await rateLimit(request, "enquiry", 5, 3600))) return NextResponse.json({ error: "Too many enquiries have been sent. Please call us instead." }, { status: 429 });
    const input = await readJson(request, 12_000) as Record<string, unknown>;
    if (clean(input.website, 200)) return NextResponse.json({ ok: true });
    const payload = { name: clean(input.name, 80), phone: clean(input.phone, 30), email: clean(input.email, 150), contact: clean(input.contact, 150), location: clean(input.location, 80), service: clean(input.service, 80), message: clean(input.message, 2000), source: "arjayfabrication.com.au", submittedAt: new Date().toISOString() };
    if (payload.name.length < 2 || payload.message.length < 10) return NextResponse.json({ error: "Please enter your name and a useful project description." }, { status: 400 });
    if (payload.contact) { if (payload.contact.length < 6) return NextResponse.json({ error: "Please enter a valid phone number or email address." }, { status: 400 }); }
    else if (!payload.phone || !emailPattern.test(payload.email) || !payload.location || input.privacy !== "accepted") return NextResponse.json({ error: "Please complete every required field with valid contact details." }, { status: 400 });
    const webhook = process.env.ENQUIRY_WEBHOOK_URL;
    if (!webhook) return NextResponse.json({ error: "Online enquiry delivery is not configured yet. Please call 0407 406 793 or email info@arjayfabrication.com.au." }, { status: 503 });
    const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 10_000);
    const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.ENQUIRY_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` } : {}) }, body: JSON.stringify(payload), signal: controller.signal, cache: "no-store" }).finally(() => clearTimeout(timeout));
    if (!response.ok) return NextResponse.json({ error: "The enquiry service did not accept your message. Please call or email us instead." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const code = error instanceof Error ? error.message : "";
    if (code === "PAYLOAD_TOO_LARGE") return NextResponse.json({ error: "That enquiry is too large." }, { status: 413 });
    if (code === "INVALID_CONTENT_TYPE" || error instanceof SyntaxError) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    return NextResponse.json({ error: "The enquiry service is unavailable. Please call or email us instead." }, { status: 503 });
  }
}
