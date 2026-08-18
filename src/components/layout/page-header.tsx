import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CircuitTexture } from "@/components/ui/circuit-texture";

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
    <section className="relative overflow-hidden border-b border-border bg-background pt-16 pb-14 md:pt-20">
      <CircuitTexture className="opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-bold text-foreground md:text-5xl">{heading}</h1>
          {sub && <p className="mt-4 max-w-xl text-lg text-muted">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}
