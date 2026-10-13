import { NextRequest } from "next/server";

type Counter = { count: number; reset: number };
const memoryCounters = new Map<string, Counter>();

function clientId(request: NextRequest) {
  return (request.headers.get("x-forwarded-for")?.split(",")[0] || request.headers.get("x-real-ip") || "local").trim().slice(0, 80);
}

export function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try { return new URL(origin).host === request.headers.get("host"); } catch { return false; }
}

export async function rateLimit(request: NextRequest, scope: string, limit: number, windowSeconds: number) {
  const key = `arjay:${scope}:${clientId(request)}`;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    try {
      const response = await fetch(`${url}/pipeline`, { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify([["INCR", key], ["EXPIRE", key, windowSeconds, "NX"]]), cache: "no-store" });
      if (response.ok) { const result = await response.json() as { result: number }[]; return Number(result[0]?.result || 0) <= limit; }
    } catch { /* ponytail: local fallback keeps one-instance deployments protected */ }
  }
  const now = Date.now();
  const existing = memoryCounters.get(key);
  const next = !existing || existing.reset <= now ? { count: 1, reset: now + windowSeconds * 1000 } : { ...existing, count: existing.count + 1 };
  memoryCounters.set(key, next);
  if (memoryCounters.size > 500) for (const [storedKey, value] of memoryCounters) if (value.reset <= now) memoryCounters.delete(storedKey);
  return next.count <= limit;
}

export async function readJson(request: NextRequest, maxBytes: number) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json")) throw new Error("INVALID_CONTENT_TYPE");
  const length = Number(request.headers.get("content-length") || 0);
  if (length > maxBytes) throw new Error("PAYLOAD_TOO_LARGE");
  const raw = await request.text();
  if (raw.length > maxBytes) throw new Error("PAYLOAD_TOO_LARGE");
  return JSON.parse(raw) as unknown;
}
