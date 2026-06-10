import Reveal from "./Reveal";

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
        <Reveal>
          <p className="mb-8 flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-ink-faint">
            <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
            {title}
          </p>
        </Reveal>
        <div>{children}</div>
      </div>
    </section>
  );
}
