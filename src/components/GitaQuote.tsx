"use client";

import { motion } from "motion/react";

const sanskrit = "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन";

const word = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function GitaQuote() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.14 }}
        >
          <motion.span
            variants={{
              hidden: { rotate: -135, scale: 0 },
              show: {
                rotate: 45,
                scale: 1,
                transition: { type: "spring", stiffness: 180, damping: 13 },
              },
            }}
            className="mx-auto mb-8 block h-2 w-2 bg-accent"
          />
          <blockquote lang="sa" className="font-serif text-3xl leading-snug tracking-tight md:text-5xl">
            {sanskrit.split(" ").map((w, i) => (
              <motion.span key={i} variants={word} className="mx-[0.16em] inline-block">
                {w}
              </motion.span>
            ))}
          </blockquote>
          <motion.p variants={word} className="mt-6 text-sm italic leading-relaxed text-ink-dim">
            &ldquo;Your right is to the work alone, never to its fruits.&rdquo;
          </motion.p>
          <motion.p variants={word} className="mt-3 text-[10px] uppercase tracking-[0.3em] text-accent">
            Bhagavad Gita · 2.47
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
