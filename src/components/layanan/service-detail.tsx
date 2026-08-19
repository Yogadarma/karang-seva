"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { imageSrc, type SiteImage } from "@/lib/stock-images";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

type ServiceDetailProps = {
  id: string;
  reverse?: boolean;
  image: SiteImage;
  content: {
    id: { title: string; desc: string; points: string[] };
    en: { title: string; desc: string; points: string[] };
  };
};

const CTA_COPY = {
  id: { label: "Tanyakan Layanan Ini", message: (title: string) => `Halo Karang Seva, saya mau tanya soal layanan ${title}.` },
  en: { label: "Ask About This Service", message: (title: string) => `Hi Karang Seva, I'd like to ask about ${title}.` },
};

export function ServiceDetail({ id, reverse, image, content }: ServiceDetailProps) {
  const t = useContent(content);
  const cta = useContent(CTA_COPY);

  return (
    <section id={id} className="scroll-mt-20 border-b border-border py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <Reveal className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg shadow-black/10">
            <Image
              src={imageSrc(image, 700)}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{t.title}</h2>
            <p className="mt-4 max-w-[55ch] text-muted">{t.desc}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
            <Button
              href={buildWhatsAppLink(cta.message(t.title))}
              external
              variant="outline"
              className="mt-8"
            >
              {cta.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
