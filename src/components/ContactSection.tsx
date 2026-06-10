"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { links } from "@/data/resume";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputCls =
    "w-full border-b border-line bg-transparent py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none transition-colors";

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <Reveal>
        <div>
          <h3 className="font-serif text-2xl italic tracking-tight md:text-3xl">
            Have something worth building?
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-dim">
            Internships, freelance, hackathon teams, or just a good idea —
            my inbox is open.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.label} className="flex items-baseline gap-4">
                <span className="w-20 text-xs uppercase tracking-[0.2em] text-ink-faint">
                  {l.label}
                </span>
                <a
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="u-link text-ink-dim hover:text-accent"
                >
                  {l.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-1 block text-xs uppercase tracking-[0.2em] text-ink-faint">
              Name
            </label>
            <input id="name" name="name" required placeholder="Your name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-xs uppercase tracking-[0.2em] text-ink-faint">
              Email
            </label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputCls} />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-xs uppercase tracking-[0.2em] text-ink-faint">
              Message
            </label>
            <textarea id="message" name="message" required rows={4} placeholder="What are we building?" className={`${inputCls} resize-none`} />
          </div>
          <Magnetic>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative inline-flex cursor-pointer items-center gap-3 border border-ink px-6 py-3 text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-paper disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send message"}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Magnetic>
          {status === "sent" && (
            <p className="text-xs text-accent">Sent. I&apos;ll get back to you — usually fast.</p>
          )}
          {status === "error" && <p className="text-xs text-red-400">{error}</p>}
        </form>
      </Reveal>
    </div>
  );
}
