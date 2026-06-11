"use client";

import { motion } from "motion/react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-line">
      <div className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.08 }}
          className="mb-8 flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-ink-faint"
        >
          <motion.span
            variants={{
              hidden: { rotate: -135, scale: 0 },
              show: {
                rotate: 45,
                scale: 1,
                transition: { type: "spring", stiffness: 220, damping: 14 },
              },
            }}
            className="h-1.5 w-1.5 bg-accent"
          />
          <span className="overflow-hidden">
            <motion.span
              variants={{
                hidden: { y: "120%" },
                show: {
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
                },
              }}
              className="block"
            >
              {title}
            </motion.span>
          </span>
        </motion.p>
        <div>{children}</div>
      </div>
    </section>
  );
}
