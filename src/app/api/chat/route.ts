import { NextRequest, NextResponse } from "next/server";
import { isAllowedOrigin, rateLimit, readJson } from "@/lib/server-security";

const knowledge = `You are Arjay Fabrication's business enquiry assistant. Use Australian English. Keep answers compact, practical and readable. Never use em dashes.
Verified facts: Arjay Fabrication is based in Wingham NSW. Services listed are steel fabrication, aluminium fabrication, custom boats, steel supplies, custom toolboxes, mobile fabrication, truck bodies, trailers, tippers, ute trays, cages and gates. Project photos include repairs, handrails, fencing, canopies, agricultural work and shelving, but photos do not prove those services are always available. Listed areas are Wingham, Taree, Forster, Tuncurry and the Mid North Coast. Contact is 0407 406 793 and info@arjayfabrication.com.au.
Rules: Only answer about Arjay Fabrication and relevant fabrication enquiries. Never invent prices, availability, timing, addresses, staff, guarantees, certifications or technical approval. For locations, ask for the town and say arrangements require confirmation. For a custom job, ask about intended use, material, dimensions, location and photographs. For repairs, ask what is damaged and whether photos are available. For supplies, ask type, size and quantity. If unknown, say it is not confirmed and offer phone, email or the quote form. For unrelated requests say: I can help with questions about Arjay Fabrication, our welding and fabrication services, project work, service areas and quote enquiries. What would you like to know? Do not output Markdown headings, tables, code, asterisks or links. Use short plain-text paragraphs.`;

type Message = { role: "user" | "model"; content: string };
function validMessages(value: unknown): value is Message[] { return Array.isArray(value) && value.length > 0 && value.length <= 12 && value.every((item) => item && typeof item === "object" && ["user", "model"].includes((item as Message).role) && typeof (item as Message).content === "string" && (item as Message).content.trim().length > 0 && (item as Message).content.length <= 800); }

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) return NextResponse.json({ error: "This request could not be verified." }, { status: 403 });
    if (!(await rateLimit(request, "chat", 12, 600))) return NextResponse.json({ error: "The chat limit has been reached. Please wait a few minutes or contact us directly." }, { status: 429 });
    const input = await readJson(request, 14_000) as { messages?: unknown };
    if (!validMessages(input.messages) || input.messages.at(-1)?.role !== "user") return NextResponse.json({ error: "Please send a valid message." }, { status: 400 });
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return NextResponse.json({ error: "The chat assistant is not configured yet. Please use the quote form, call 0407 406 793 or email info@arjayfabrication.com.au." }, { status: 503 });
    const model = (process.env.GEMINI_MODEL || "gemini-3.6-flash").replace(/[^a-zA-Z0-9._-]/g, "");
    const contents = input.messages.slice(-10).map((message) => ({ role: message.role, parts: [{ text: message.content.trim() }] }));
    const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 15_000);
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, { method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey }, body: JSON.stringify({ system_instruction: { parts: [{ text: knowledge }] }, contents, generationConfig: { temperature: 0.25, maxOutputTokens: 320 } }), signal: controller.signal, cache: "no-store" }).finally(() => clearTimeout(timeout));
    if (!response.ok) { console.error("Gemini API error", response.status); return NextResponse.json({ error: response.status === 429 ? "The assistant is busy right now. Please try again shortly." : "The assistant is unavailable right now. Please use the quote form or contact us directly." }, { status: response.status === 429 ? 429 : 502 }); }
    const result = await response.json() as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
    const message = result.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("").trim().slice(0, 1800);
    if (!message) return NextResponse.json({ error: "The assistant could not answer that. Please try a more specific fabrication question." }, { status: 502 });
    return NextResponse.json({ message });
  } catch (error) {
    if (error instanceof SyntaxError) return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    return NextResponse.json({ error: "The assistant is unavailable right now. Please use the quote form or contact us directly." }, { status: 503 });
  }
}
