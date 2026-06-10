import { Trophy } from "lucide-react";
import { recognition } from "@/data/resume";
import Reveal from "./Reveal";

export default function RecognitionSection() {
  const [headline, ...rest] = recognition;

  return (
    <div>
      <Reveal>
        <div className="border border-accent/30 bg-paper-raised p-5 md:p-8">
          <p className="mb-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-accent">
            <Trophy size={13} /> The big one
          </p>
          <h3 className="font-serif text-2xl italic tracking-tight md:text-4xl">{headline.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-dim">{headline.detail}</p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
        {rest.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.06}>
            <div className="group border-t border-line pt-4 transition-colors hover:border-accent/50">
              <h4 className="font-serif text-lg tracking-tight transition-colors group-hover:text-accent">
                {r.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">{r.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
