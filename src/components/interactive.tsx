"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import type { Project } from "@/lib/site";
import { Icon } from "./site-shell";

const serviceOptions = ["Steel Fabrication", "Aluminium Fabrication", "Mobile Welding", "Truck / Trailer Repair", "Custom Toolbox / Canopy", "Metal Supplies", "Custom Metalwork", "Other"];

export function EnquiryForm({ compact = false, initialService = "" }: { compact?: boolean; initialService?: string }) {
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({ type: "idle" });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your enquiry.");
      setStatus({ type: "success", message: "Thanks. Your enquiry has been sent to Arjay Fabrication." });
      form.reset();
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "We could not send your enquiry. Please call or email us instead." });
    }
  }
  return <form className={compact ? "enquiry-form compact" : "enquiry-form"} onSubmit={submit} noValidate>
    <div className="honeypot" aria-hidden="true"><label>Company website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="field-grid">
      <label><span>Name *</span><input name="name" required minLength={2} maxLength={80} autoComplete="name" placeholder="Your name" /></label>
      {compact ? <label><span>Phone or email *</span><input name="contact" required maxLength={150} autoComplete="email" placeholder="How should we contact you?" /></label> : <><label><span>Phone *</span><input name="phone" required maxLength={30} autoComplete="tel" placeholder="0400 000 000" /></label><label><span>Email *</span><input type="email" name="email" required maxLength={150} autoComplete="email" placeholder="you@example.com" /></label><label><span>Suburb or town *</span><input name="location" required maxLength={80} autoComplete="address-level2" placeholder="Your project location" /></label></>}
      <label><span>Service</span><select name="service" defaultValue={initialService}><option value="">Choose a service</option>{serviceOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
      <label className="field-wide"><span>{compact ? "Job description *" : "Project details *"}</span><textarea name="message" required minLength={10} maxLength={2000} rows={compact ? 2 : 6} placeholder="What would you like fabricated, repaired or supplied?" /></label>
    </div>
    {!compact && <label className="privacy-check"><input type="checkbox" name="privacy" value="accepted" required /><span>I have read the <Link href="/privacy">Privacy Policy</Link> and agree to my details being used to respond to this enquiry.</span></label>}
    <button className="button form-submit" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? "Sending…" : compact ? "Send Quick Enquiry" : "Send Your Enquiry"}<Icon name="send" /></button>
    <div className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</div>
  </form>;
}

export function EnquiryFormFromQuery() {
  const service = useSearchParams().get("service") || "";
  return <EnquiryForm initialService={service} />;
}

export function BeforeAfter({ before, after, beforeAlt, afterAlt }: { before: string; after: string; beforeAlt: string; afterAlt: string }) {
  const [position, setPosition] = useState(50);
  return <div className="compare-wrap"><div className="compare" style={{ "--position": `${position}%` } as React.CSSProperties}>
    <Image src={before} alt={beforeAlt} fill sizes="(max-width: 800px) 100vw, 50vw" />
    <div className="compare-after"><Image src={after} alt={afterAlt} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
    <span className="compare-label before-label">Before</span><span className="compare-label after-label">After</span><span className="compare-handle" aria-hidden="true">↔</span>
    <input type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label="Move to compare before and after photographs" />
  </div></div>;
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const categories = ["All Work", ...Array.from(new Set(projects.map((project) => project.category)))];
  const [filter, setFilter] = useState("All Work");
  const visible = filter === "All Work" ? projects : projects.filter((project) => project.category === filter);
  return <><div className="filter-bar" role="group" aria-label="Filter projects">{categories.map((category) => <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div><div className="project-grid">{visible.map((project) => <article className="project-card" key={project.slug}>{project.href ? <Link href={project.href} className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /></Link> : <div className="project-image"><Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 50vw" /></div>}<div className="project-meta"><span>{project.category}</span><h2>{project.title}</h2>{project.href && <Link className="text-link" href={project.href}>View project <Icon name="arrow" /></Link>}</div></article>)}</div></>;
}

type ChatMessage = { role: "user" | "model"; content: string };
export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const suggestions = ["What services do you offer?", "Can you repair truck bodies?", "Do you work with aluminium?", "Do you service my area?", "How do I get a quote?"];
  async function send(text: string) {
    const value = text.trim(); if (!value || loading) return;
    const next = [...messages, { role: "user" as const, content: value }];
    setMessages(next); setInput(""); setLoading(true); setError("");
    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: next }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "The assistant is unavailable right now.");
      setMessages([...next, { role: "model", content: result.message }]);
      requestAnimationFrame(() => listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" }));
    } catch (caught) { setError(caught instanceof Error ? caught.message : "The assistant is unavailable right now."); } finally { setLoading(false); }
  }
  return <div className="chatbot"><button className="chat-launcher" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="chat-panel"><span className="chat-launcher-icon"><Icon name="chat" /></span><span className="chat-launcher-copy"><small>PROJECT ENQUIRIES</small><strong>{open ? "Close assistant" : "Ask a question"}</strong></span></button>{open && <section id="chat-panel" className="chat-panel" aria-label="Arjay Fabrication enquiry assistant"><header><div><strong>Project assistant</strong><span>Arjay Fabrication</span></div><button onClick={() => { setMessages([]); setError(""); }} disabled={!messages.length}>Clear chat</button></header><div className="chat-messages" ref={listRef} aria-live="polite">{messages.length === 0 && <div className="chat-welcome"><strong>What are you planning?</strong><p>Ask about our services, project types, service areas or what to include with a quote enquiry.</p><div className="chat-suggestions">{suggestions.map((suggestion) => <button key={suggestion} onClick={() => send(suggestion)}>{suggestion}</button>)}</div></div>}{messages.map((message, index) => <div key={index} className={`chat-message ${message.role}`}>{message.content.split(/\n+/).filter(Boolean).map((line, lineIndex) => <p key={lineIndex}>{line.replace(/[*_#`]/g, "")}</p>)}</div>)}{loading && <div className="chat-message model typing"><i /><i /><i /><span className="sr-only">Assistant is typing</span></div>}{error && <div className="chat-error">{error}<div><Link href="/contact#quote">Request a quote</Link><a href="tel:+61407406793">Call us</a></div></div>}</div><form className="chat-input" onSubmit={(event) => { event.preventDefault(); send(input); }}><label className="sr-only" htmlFor="chat-message">Your message</label><textarea id="chat-message" value={input} onChange={(event) => setInput(event.target.value)} maxLength={800} rows={2} placeholder="Ask about your project" onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); send(input); } }} /><button type="submit" aria-label="Send message" disabled={!input.trim() || loading}><Icon name="send" /></button></form><footer><Link href="/contact#quote">Request a Quote</Link><Link href="/our-work">Our Work</Link><Link href="/services">Services</Link></footer></section>}</div>;
}
