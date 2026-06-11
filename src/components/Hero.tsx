"use client";

import { useRef } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { profile, links } from "@/data/resume";
import HeroCanvas from "./hero/HeroCanvas";
import SocialIcon from "./SocialIcon";
import Marquee from "./Marquee";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap
        .timeline({ defaults: { ease: "power4.out" } })
        .from(".hero-photo", {
          rotateY: 85,
          transformPerspective: 900,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".hero-fade",
          { opacity: 0, y: 22, duration: 0.8, stagger: 0.1 },
          "-=0.6"
        )
        .from(
          ".hero-rule",
          { scaleX: 0, transformOrigin: "left center", duration: 0.9 },
          "<"
        );

      // idle float on the photo
      gsap.to(".hero-photo", {
        y: 9,
        duration: 3.2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    },
    { scope }
  );

  return (
    <section ref={scope} id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <HeroCanvas />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-5 pb-10 pt-24 md:px-8">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
          <div className="min-w-0">
            <p className="hero-fade mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-dim">
              {profile.origin.split(",")[0]}
              <MoveRight size={14} className="text-accent" />
              {profile.location}
            </p>

            <h1 className="font-serif text-[12vw] leading-[0.95] tracking-tight md:text-[5.6rem]">
              Priyanshu
              <br />
              <span className="italic text-ink-dim">Kumar</span> Rai
              <span className="text-accent">.</span>
            </h1>

            <p className="hero-fade mt-6 max-w-lg text-sm leading-relaxed text-ink-dim">
              {profile.statement}
            </p>
          </div>

          <div className="hero-photo group relative w-36 shrink-0 self-start rotate-3 md:w-44 md:self-auto">
            <div className="absolute inset-0 translate-x-2 translate-y-2 border border-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />
            <Image
              src="/pfp.png"
              alt="Priyanshu Kumar Rai"
              width={376}
              height={454}
              priority
              className="relative aspect-[4/5] w-full object-cover grayscale transition-[filter] duration-500 group-hover:grayscale-0"
            />
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

        <div className="hero-fade mt-7 flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-label={l.label}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-ink-faint transition-all duration-300 hover:-translate-y-0.5 hover:text-accent"
            >
              <SocialIcon label={l.label} size={17} />
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Marquee />
      </div>
    </section>
  );
}
