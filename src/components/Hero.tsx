"use client";

import { useRef } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { profile } from "@/data/resume";

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      document.fonts.ready.then(() => {
        const split = SplitText.create(".hero-title", {
          type: "chars,lines",
          mask: "lines",
        });

        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(split.chars, {
            yPercent: 115,
            duration: 1,
            stagger: 0.02,
          })
          .from(
            ".hero-fade",
            { opacity: 0, y: 22, duration: 0.8, stagger: 0.1 },
            "-=0.55"
          )
          .from(
            ".hero-photo",
            { opacity: 0, scale: 0.92, rotate: 8, duration: 0.9 },
            "<"
          )
          .from(
            ".hero-rule",
            { scaleX: 0, transformOrigin: "left center", duration: 0.9 },
            "<"
          );
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="top" className="relative">
      <div className="mx-auto w-full max-w-4xl px-5 pb-12 pt-28 md:px-8 md:pt-32">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="hero-fade mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-dim">
              {profile.origin.split(",")[0]}
              <MoveRight size={14} className="text-accent" />
              {profile.location}
            </p>

            <h1 className="hero-title font-serif text-[12vw] leading-[0.95] tracking-tight md:text-[5.4rem]">
              Priyanshu
              <br />
              <span className="italic text-ink-dim">Kumar</span> Rai
              <span className="text-accent">.</span>
            </h1>

            <p className="hero-fade mt-6 max-w-lg text-sm leading-relaxed text-ink-dim">
              {profile.statement}
            </p>
          </div>

          <div className="hero-photo group relative w-36 shrink-0 self-start rotate-3 transition-transform duration-500 hover:rotate-0 md:w-44 md:self-auto">
            <div className="absolute inset-0 translate-x-2 translate-y-2 border border-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            <Image
              src="/pfp.png"
              alt="Priyanshu Kumar Rai"
              width={376}
              height={454}
              priority
              className="relative aspect-[4/5] w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
            />
            <span className="absolute -bottom-3 -left-3 -rotate-6 bg-accent px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-paper">
              Without fear
            </span>
          </div>
        </div>

        <div className="hero-rule mt-10 h-px w-full bg-line" />

        <dl className="hero-fade mt-5 grid grid-cols-2 gap-4 text-xs md:grid-cols-4">
          <div>
            <dt className="mb-1 uppercase tracking-[0.2em] text-ink-faint">Currently</dt>
            <dd>Developer @ Chain Salad</dd>
          </div>
          <div>
            <dt className="mb-1 uppercase tracking-[0.2em] text-ink-faint">Studying</dt>
            <dd>{profile.education}</dd>
          </div>
          <div>
            <dt className="mb-1 uppercase tracking-[0.2em] text-ink-faint">Focus</dt>
            <dd>{profile.focus.join(" · ")}</dd>
          </div>
          <div>
            <dt className="mb-1 uppercase tracking-[0.2em] text-ink-faint">Latest</dt>
            <dd className="text-accent">Winner — HackToFuture 4.0</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
