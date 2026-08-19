"use client";

import { ArrowRight, Wifi, Camera, LayoutGrid, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Masalah yang sering kami temui",
    heading: "Masalah IT kecil bisa mengganggu seluruh operasional.",
    intro:
      "Wi-Fi tidak stabil, CCTV sulit dipantau, software yang tidak sesuai workflow, atau support yang lambat dapat membuang waktu tim dan mengganggu pengalaman tamu maupun operasional.",
    items: [
      {
        icon: Wifi,
        title: "Jaringan tidak stabil",
        desc: "Wi-Fi lambat, dead zone, atau koneksi sering terputus saat operasional sedang berjalan.",
      },
      {
        icon: Camera,
        title: "CCTV sulit dipantau",
        desc: "Live view lambat, playback bermasalah, atau penyimpanan tidak cukup untuk kebutuhan operasional.",
      },
      {
        icon: LayoutGrid,
        title: "Software tidak sesuai workflow",
        desc: "Sistem terlalu rumit atau pekerjaan masih bergantung pada spreadsheet dan proses manual.",
      },
      {
        icon: Clock,
        title: "Support terlalu lambat",
        desc: "Masalah sederhana menjadi berlarut-larut karena tidak ada tim yang benar-benar menangani dari awal sampai selesai.",
      },
    ],
    ctaLabel: "Mengalami salah satunya?",
    cta: "Konsultasikan Masalah Anda",
    waMessage: "Halo Karang Seva, saya ingin konsultasi mengenai masalah IT yang saya alami.",
  },
  en: {
    eyebrow: "Problems we see often",
    heading: "Small IT problems can disrupt your entire operation.",
    intro:
      "Unstable Wi-Fi, hard-to-monitor CCTV, software that doesn't fit the workflow, or slow support can waste your team's time and disrupt the guest experience or daily operations.",
    items: [
      {
        icon: Wifi,
        title: "Unstable network",
        desc: "Slow Wi-Fi, dead zones, or connections that keep dropping while operations are running.",
      },
      {
        icon: Camera,
        title: "CCTV that's hard to monitor",
        desc: "Slow live view, playback issues, or not enough storage for operational needs.",
      },
      {
        icon: LayoutGrid,
        title: "Software that doesn't fit the workflow",
        desc: "Systems that are too complicated, or work that still relies on spreadsheets and manual processes.",
      },
      {
        icon: Clock,
        title: "Support that's too slow",
        desc: "Simple problems drag on because no one truly owns the issue from start to finish.",
      },
    ],
    ctaLabel: "Running into one of these?",
    cta: "Discuss Your Problem",
    waMessage: "Hi Karang Seva, I'd like to discuss an IT problem I'm having.",
  },
};

export function PainPointsSection() {
  const t = useContent(COPY);

  return (
    <section className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="accent">{t.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-muted">{t.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-background p-6 shadow-md shadow-black/5">
                <item.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium text-muted">{t.ctaLabel}</p>
          <Button href={buildWhatsAppLink(t.waMessage)} external size="lg">
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
