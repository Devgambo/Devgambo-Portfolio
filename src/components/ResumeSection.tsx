import { ArrowUpRight, Download, FileText } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function ResumeSection() {
  return (
    <section id="resume" className="border-t border-line">
      <div className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <div className="group relative mx-auto max-w-xl -rotate-1 border border-ink bg-paper-raised p-6 transition-all duration-300 hover:rotate-0 hover:shadow-[8px_8px_0_0_var(--accent)] md:p-8">
            <span className="absolute -top-3 right-6 rotate-6 border-2 border-accent bg-paper px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
              Exhibit A
            </span>

            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink-faint">
              <FileText size={13} className="text-accent" />
              The paper version
            </p>
            <h3 className="mt-3 font-serif text-2xl italic tracking-tight md:text-3xl">
              All of this, on one page.
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-dim">
              For recruiters, printers, and people in a hurry.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <Magnetic>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 border border-ink px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-paper"
                >
                  View résumé
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </Magnetic>
              <a
                href="/resume.pdf"
                download="Priyanshu_Kumar_Rai_Resume.pdf"
                className="u-link inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-ink-dim hover:text-accent"
              >
                <Download size={13} /> Download PDF
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
