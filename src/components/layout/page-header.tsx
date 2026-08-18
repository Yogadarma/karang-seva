import { Reveal } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string;
  heading: string;
  sub?: string;
}) {
  return (
    <section className="border-b border-border bg-surface pt-16 pb-14 md:pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-wider text-primary-dark">
            {eyebrow}
          </span>
          <h1 className="max-w-2xl text-4xl font-bold text-foreground md:text-5xl">{heading}</h1>
          {sub && <p className="mt-4 max-w-xl text-lg text-muted">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
