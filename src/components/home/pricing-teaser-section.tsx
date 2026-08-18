"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Paket & Harga",
    heading: "Transparan untuk yang jelas, konsultasi untuk yang custom",
    sub: "Retainer bulanan dan jasa satu-kali standar kami tampilkan apa adanya. Proyek besar seperti software custom atau jaringan properti baru — kami hitungkan dulu lewat konsultasi singkat.",
    cta: "Lihat Paket & Harga",
    cards: [
      { label: "Retainer Basic", value: "Rp 500rb", unit: "/bln" },
      { label: "Retainer Standard", value: "Rp 1jt", unit: "/bln" },
      { label: "Retainer Premium", value: "Rp 2jt", unit: "/bln" },
    ],
  },
  en: {
    eyebrow: "Pricing",
    heading: "Transparent where it's clear, a quote where it's custom",
    sub: "Our monthly retainers and standard one-time services are listed as-is. Larger projects like custom software or a new property's network are scoped through a short consultation first.",
    cta: "See Pricing",
    cards: [
      { label: "Basic Retainer", value: "Rp 500K", unit: "/mo" },
      { label: "Standard Retainer", value: "Rp 1M", unit: "/mo" },
      { label: "Premium Retainer", value: "Rp 2M", unit: "/mo" },
    ],
  },
};

export function PricingTeaserSection() {
  const t = useContent(COPY);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.heading}</h2>
            <p className="mt-4 max-w-[52ch] text-muted">{t.sub}</p>
            <Button href="/paket-harga" size="lg" className="mt-8">
              {t.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>

          <Reveal delay={0.1} className="grid gap-4">
            {t.cards.map((card) => (
              <div
                key={card.label}
                className="flex items-center justify-between rounded-2xl border border-border bg-surface px-6 py-5"
              >
                <span className="text-sm font-medium text-muted">{card.label}</span>
                <span className="font-mono text-xl font-bold text-foreground">
                  {card.value}
                  <span className="text-sm font-normal text-muted">{card.unit}</span>
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
