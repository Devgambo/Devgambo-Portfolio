"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SendHorizontal, X } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "meow — i'm lily. i know everything about priyanshu. projects, internships, the hackathon he won... ask away.",
};

export default function LilyChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // open with "C" (unless typing somewhere), close with Escape; Lily's click also opens
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      const typing = el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable;
      if (e.key === "Escape") setOpen(false);
      if ((e.key === "c" || e.key === "C") && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setOpen((o) => !o);
      }
    };
    const onLily = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("lily-chat", onLily);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("lily-chat", onLily);
    };
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy, open]);

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/lily", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", content: res.ok ? data.reply : (data.error ?? "something broke. meow.") },
      ]);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "connection hiccup — try again?" }]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-5 z-50 hidden h-[50vh] w-[20vw] min-w-[300px] flex-col border border-ink bg-paper shadow-[6px_6px_0_0_var(--accent)] md:flex"
        >
          <div className="flex items-center justify-between border-b border-line px-3 py-2">
            <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-ink-dim">
              <span className="h-1.5 w-1.5 bg-accent" />
              Lily · knows everything
            </p>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="cursor-pointer text-ink-faint transition-colors hover:text-accent"
            >
              <X size={14} />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-3 py-2 text-xs leading-relaxed ${
                  m.role === "user"
                    ? "ml-auto border border-accent/40 bg-accent/5 text-ink"
                    : "border border-line bg-paper-raised text-ink-dim"
                }`}
              >
                {m.content}
              </div>
            ))}
            {busy && (
              <div className="w-12 border border-line bg-paper-raised px-3 py-2 text-xs text-ink-faint">
                <span className="animate-pulse">···</span>
              </div>
            )}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-line px-3 py-2">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ask lily about priyanshu…"
              className="min-w-0 flex-1 bg-transparent py-1 text-xs text-ink placeholder:text-ink-faint focus:outline-none"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="cursor-pointer text-ink-faint transition-colors hover:text-accent disabled:opacity-40"
            >
              <SendHorizontal size={14} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
