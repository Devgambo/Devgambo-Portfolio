"use client";

import { useEffect, useState } from "react";
import LocalTime from "./LocalTime";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/resume";

const items = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-paper/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3 text-xs md:px-8">
        <a href="#top" className="u-link font-medium tracking-wide">
          @{profile.alias}
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="roll text-ink-dim">
              <span className="roll-inner">
                <span>{it.label}</span>
                <span aria-hidden>{it.label}</span>
              </span>
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4 text-ink-dim">
          <ThemeToggle />
          <span className="hidden sm:inline">
            <LocalTime />
          </span>
          {profile.available && (
            <span className="flex items-center gap-2">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="hidden md:inline">open to work</span>
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}
