"use client";

import { motion } from "motion/react";
import LocalTime from "./LocalTime";
import { profile } from "@/data/resume";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
};

const letter = {
  hidden: { y: "100%" },
  show: {
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Footer() {
  const name = "DEVGAMBO";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-4xl overflow-hidden px-5 pt-10 md:px-8">
        <motion.p
          aria-label={name}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="select-none text-center font-serif text-[15vw] leading-none tracking-tight text-ink md:text-[8.5rem]"
        >
          {name.split("").map((ch, i) => (
            <motion.span key={i} aria-hidden variants={letter} className="footer-letter">
              {ch}
            </motion.span>
          ))}
        </motion.p>
      </div>
      <div className="mx-auto flex max-w-4xl flex-col gap-2 px-5 py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>
          © {year} {profile.name}
        </p>
        <p>
          {profile.location} · <LocalTime />
        </p>
        <p>
          built with <span className="text-accent">Next.js · GSAP · Three.js</span>
        </p>
      </div>
    </footer>
  );
}
