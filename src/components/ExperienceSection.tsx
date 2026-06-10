"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { roles, Role } from "@/data/resume";
import Reveal from "./Reveal";

const VISIBLE = 2;

function RoleEntry({ r }: { r: Role }) {
  return (
    <article className="md:grid md:grid-cols-[180px_1fr] md:gap-8">
      <div className="mb-3 text-xs text-ink-faint md:mb-0">
        <p className="tabular-nums">{r.period}</p>
        <p className="mt-1">{r.place}</p>
        {r.current && (
          <p className="mt-2 flex items-center gap-2 text-accent">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
            now
          </p>
        )}
      </div>
      <div>
        <h3 className="font-serif text-xl tracking-tight md:text-2xl">
          {r.company}
          <span className="ml-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-dim">
            {r.role}
          </span>
        </h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-dim">
          {r.points.map((point, j) => (
            <li key={j} className="flex gap-3">
              <span className="mt-1.5 h-px w-4 shrink-0 bg-accent/60" />
              {point}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-xs text-ink-faint">{r.stack.join(" / ")}</p>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const hidden = roles.length - VISIBLE;

  return (
    <div className="space-y-10">
      {roles.slice(0, VISIBLE).map((r, i) => (
        <Reveal key={r.company} delay={i * 0.06}>
          <RoleEntry r={r} />
        </Reveal>
      ))}

      <AnimatePresence initial={false}>
        {showAll && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-10">
              {roles.slice(VISIBLE).map((r) => (
                <RoleEntry key={r.company} r={r} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {hidden > 0 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="group flex cursor-pointer items-center gap-3 text-xs uppercase tracking-[0.2em] text-ink-dim transition-colors hover:text-accent"
        >
          <Plus
            size={14}
            className={`transition-transform duration-300 ${showAll ? "rotate-45" : "group-hover:rotate-90"}`}
          />
          {showAll ? "Show less" : `See all experiences (${hidden} more)`}
        </button>
      )}
    </div>
  );
}
