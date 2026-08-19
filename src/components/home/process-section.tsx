"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { CircuitTexture } from "@/components/ui/circuit-texture";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Cara kerja",
    heading: "Empat langkah, bukan proses berbelit.",
    items: [
      { title: "Konsultasi", desc: "Ceritakan kebutuhan, masalah, atau project yang sedang Anda rencanakan." },
      { title: "Assessment", desc: "Kami mengecek kondisi existing dan menentukan solusi yang paling masuk akal untuk kebutuhan Anda." },
      { title: "Implementasi", desc: "Tim kami melakukan instalasi, konfigurasi, development, dan testing sesuai scope yang disepakati." },
      { title: "Support", desc: "Setelah sistem berjalan, kami tetap tersedia untuk maintenance, troubleshooting, dan pengembangan lanjutan." },
    ],
    ctaLabel: "Punya project yang ingin didiskusikan?",
    cta: "Konsultasi Gratis via WhatsApp",
    waMessage: "Halo Karang Seva, saya punya project yang ingin didiskusikan.",
  },
  en: {
    eyebrow: "How it works",
    heading: "Four steps, not a maze.",
    items: [
      { title: "Consult", desc: "Tell us about your needs, problem, or the project you're planning." },
      { title: "Assessment", desc: "We check your existing setup and figure out the solution that makes the most sense for your needs." },
      { title: "Implementation", desc: "Our team handles installation, configuration, development, and testing per the agreed scope." },
      { title: "Support", desc: "Once the system is running, we stay available for maintenance, troubleshooting, and further development." },
    ],
    ctaLabel: "Have a project you'd like to discuss?",
    cta: "Free Consultation via WhatsApp",
    waMessage: "Hi Karang Seva, I have a project I'd like to discuss.",
  },
};

export function ProcessSection() {
  const t = useContent(COPY);

  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white">
      <CircuitTexture className="opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <Eyebrow tone="accent">{t.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold md:text-4xl">{t.heading}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="relative border-t-2 border-primary pt-5">
                <span className="font-mono text-6xl font-bold leading-none text-accent md:text-7xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/85">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 flex flex-col items-center gap-3 border-t border-navy-border pt-10 text-center">
          <p className="text-sm font-medium text-white/85">{t.ctaLabel}</p>
          <Button href={buildWhatsAppLink(t.waMessage)} external size="lg">
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
