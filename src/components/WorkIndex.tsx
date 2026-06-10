"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Trophy, ArrowUpRight, Plus } from "lucide-react";
import { projects } from "@/data/resume";
import Reveal from "./Reveal";

export default function WorkIndex() {
  const [active, setActive] = useState<string | null>(projects[0].id);

  return (
    <div>
      {projects.map((p, i) => {
        const open = active === p.id;
        return (
          <Reveal key={p.id} delay={i * 0.05}>
            <article className="group border-b border-line">
              <button
                onClick={() => setActive(open ? null : p.id)}
                className="flex w-full cursor-pointer items-baseline gap-4 py-4 text-left transition-[padding] duration-300 hover:pl-3 md:gap-6"
                aria-expanded={open}
              >
                <span className="text-xs tabular-nums text-ink-faint transition-colors group-hover:text-accent">
                  {p.index}
                </span>
                <span className="flex-1">
                  <span className={`font-serif text-xl tracking-tight transition-colors md:text-3xl ${open ? "italic text-accent" : "group-hover:italic"}`}>
                    {p.title}
                  </span>
                  <span className="mt-1 block text-xs text-ink-dim md:mt-0 md:ml-4 md:inline">
                    {p.tag}
                  </span>
                </span>
                <span className="hidden text-xs text-ink-faint sm:inline">{p.year}</span>
                <Plus
                  size={16}
                  className={`shrink-0 self-center transition-transform duration-300 ${open ? "rotate-45 text-accent" : "text-ink-faint group-hover:rotate-45"}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-5 pb-6 pl-8 md:grid-cols-[1.4fr_1fr] md:gap-10 md:pl-12">
                      <div>
                        {p.award && (
                          <p className="mb-3 inline-flex items-center gap-2 border border-accent/40 px-2 py-1 text-[11px] uppercase tracking-[0.15em] text-accent">
                            <Trophy size={12} /> {p.award}
                          </p>
                        )}
                        <p className="mb-3 font-serif text-base italic leading-snug text-ink md:text-lg">
                          {p.oneLiner}
                        </p>
                        <ul className="space-y-2 text-sm leading-relaxed text-ink-dim">
                          {p.detail.map((d, j) => (
                            <li key={j} className="flex gap-3">
                              <span className="mt-1.5 h-px w-4 shrink-0 bg-ink-faint" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs">
                        <p className="mb-2 uppercase tracking-[0.2em] text-ink-faint">Stack</p>
                        <p className="mb-6 leading-loose text-ink-dim">{p.stack.join(" / ")}</p>
                        <div className="flex gap-5">
                          {p.github && (
                            <a href={p.github} target="_blank" rel="noopener noreferrer" className="u-link inline-flex items-center gap-1 text-ink hover:text-accent">
                              GitHub <ArrowUpRight size={13} />
                            </a>
                          )}
                          {p.live && (
                            <a href={p.live} target="_blank" rel="noopener noreferrer" className="u-link inline-flex items-center gap-1 text-ink hover:text-accent">
                              Live <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
