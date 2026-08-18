"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { images, unsplashUrl } from "@/lib/stock-images";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Kenapa Karang Seva",
    heading: "Karang — pelindung. Seva — pelayanan tulus.",
    body: "Nama kami diambil dari karang laut yang melindungi pesisir, dan seva — pelayanan tanpa ego dalam budaya Bali. Filosofi itu yang kami bawa ke cara kami bekerja dengan properti dan kantor Anda.",
    points: [
      "Vendor-netral — rekomendasi berdasarkan kebutuhan Anda, bukan komisi dari brand tertentu",
      "Komunikasi dwibahasa (Indonesia & English) untuk klien lokal maupun expat",
      "Satu nomor WhatsApp untuk konsultasi, jaringan, CCTV, maupun software",
      "Tanpa kontrak jangka panjang yang mengikat — retainer bulanan bisa disesuaikan",
    ],
  },
  en: {
    eyebrow: "Why Karang Seva",
    heading: "Karang — a shield. Seva — selfless service.",
    body: "Our name comes from coral reef that protects the coastline, and seva — selfless service in Balinese culture. That philosophy shapes how we work with your property and office.",
    points: [
      "Vendor-neutral — recommendations based on your needs, not a commission from a specific brand",
      "Bilingual communication (Indonesian & English) for local and expat clients alike",
      "One WhatsApp number for consulting, networking, CCTV, or software",
      "No binding long-term contracts — monthly retainers flex to your needs",
    ],
  },
};

export function WhyUsSection() {
  const t = useContent(COPY);

  return (
    <section className="bg-surface py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative aspect-4/3 overflow-hidden rounded-3xl">
          <Image
            src={unsplashUrl(images.office.id, 700)}
            alt={images.office.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-wider text-primary-dark">
            {t.eyebrow}
          </span>
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
