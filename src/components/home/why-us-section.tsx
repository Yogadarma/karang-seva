"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { images, unsplashUrl } from "@/lib/stock-images";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Kenapa Karang Seva",
    heading: "Karang — pelindung. Seva — pelayanan tulus.",
    body: "Kami membangun sistem IT yang bukan hanya bekerja saat instalasi selesai, tetapi tetap dapat diandalkan saat operasional berjalan.",
    points: [
      "Solusi disesuaikan dengan kebutuhan property dan operasional",
      "Komunikasi yang jelas dan mudah dipahami",
      "Satu tim untuk jaringan, CCTV, software, dan support",
      "Fokus pada solusi jangka panjang, bukan sekadar pemasangan",
    ],
  },
  en: {
    eyebrow: "Why Karang Seva",
    heading: "Karang — a shield. Seva — selfless service.",
    body: "We build IT systems that don't just work on install day, but stay reliable while your operation is running.",
    points: [
      "Solutions tailored to your property and operations",
      "Clear, easy-to-understand communication",
      "One team for networking, CCTV, software, and support",
      "Focused on long-term solutions, not just installation",
    ],
  },
};

export function WhyUsSection() {
  const t = useContent(COPY);

  return (
    <section className="bg-surface py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-lg shadow-black/10">
          <Image
            src={unsplashUrl(images.office.id, 700)}
            alt={images.office.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.heading}</h2>
          <p className="mt-4 max-w-[52ch] text-muted">{t.body}</p>

          <ul className="mt-8 grid gap-4">
            {t.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
