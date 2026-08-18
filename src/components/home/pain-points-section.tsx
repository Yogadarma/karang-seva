"use client";

import { WifiOff, ShieldAlert, FileWarning, PhoneMissed } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Masalah yang sering kami temui",
    heading: "IT bukan cuma soal internet lambat.",
    items: [
      {
        icon: WifiOff,
        title: "Jaringan yang gak pernah stabil",
        desc: "Instalasi lama asal jadi, WiFi mati tiap hujan, dan gak ada yang benar-benar paham topologi jaringannya.",
      },
      {
        icon: ShieldAlert,
        title: "CCTV yang gak pernah dicek",
        desc: "Kamera terpasang tapi rekaman kosong, hard disk penuh, atau sistem belum terintegrasi dengan baik.",
      },
      {
        icon: FileWarning,
        title: "Software yang gak sesuai alur kerja",
        desc: "Pakai template generik yang dipaksakan, padahal proses bisnis properti/kantor punya kebutuhan spesifik.",
      },
      {
        icon: PhoneMissed,
        title: "Gak ada satu pun nomor untuk dihubungi",
        desc: "Vendor beda-beda untuk internet, CCTV, dan software — dan tidak ada yang mau bertanggung jawab penuh.",
      },
    ],
  },
  en: {
    eyebrow: "Problems we see often",
    heading: "IT isn't just about slow internet.",
    items: [
      {
        icon: WifiOff,
        title: "A network that's never stable",
        desc: "Old installations done carelessly, WiFi drops every time it rains, and no one truly understands the topology.",
      },
      {
        icon: ShieldAlert,
        title: "CCTV that's never checked",
        desc: "Cameras are installed but the footage is empty, the hard disk is full, or the system was never properly integrated.",
      },
      {
        icon: FileWarning,
        title: "Software that doesn't fit the workflow",
        desc: "Forced into a generic template, when property/office operations have very specific needs.",
      },
      {
        icon: PhoneMissed,
        title: "No single number to call",
        desc: "Different vendors for internet, CCTV, and software — and none of them fully own the problem.",
      },
    ],
  },
};

export function PainPointsSection() {
  const t = useContent(COPY);

  return (
    <section className="border-t border-border bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <Eyebrow tone="accent">{t.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.heading}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-background p-6">
                <item.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
