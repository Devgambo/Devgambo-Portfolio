import { stack, education } from "@/data/resume";
import Reveal from "./Reveal";

export default function StackSection() {
  return (
    <div>
      <div className="space-y-5">
        {stack.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.04}>
            <div className="grid gap-2 border-b border-line pb-4 md:grid-cols-[180px_1fr] md:gap-8">
              <p className="text-xs uppercase tracking-[0.2em] text-ink-faint">{g.group}</p>
              <p className="flex flex-wrap gap-x-1 gap-y-2 text-sm leading-relaxed">
                {g.items.map((item, j) => (
                  <span key={item} className="text-ink-dim">
                    <span className="cursor-default transition-colors hover:text-accent">{item}</span>
                    {j < g.items.length - 1 && <span className="text-ink-faint">,&nbsp;</span>}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <Reveal>
          <p className="mb-5 flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-ink-faint">
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            Education
          </p>
        </Reveal>
        <div className="space-y-6">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.06}>
              <div className="md:grid md:grid-cols-[180px_1fr] md:gap-8">
                <p className="mb-1 text-xs tabular-nums text-ink-faint md:mb-0">{e.period}</p>
                <div>
                  <h4 className="font-serif text-lg tracking-tight">{e.school}</h4>
                  <p className="mt-1 text-sm text-ink-dim">{e.degree}</p>
                  <p className="mt-1 text-xs text-ink-faint">{e.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
