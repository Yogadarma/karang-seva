"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { images, unsplashUrl } from "@/lib/stock-images";
import { useContent } from "@/lib/language-context";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: EASE, delay },
});

const COPY = {
  id: {
    eyebrow: "IT Solutions Bali",
    heading: "Partner IT yang menjaga properti dan kantor Anda tetap jalan.",
    sub: "Konsultasi IT, software custom, jaringan, dan CCTV/keamanan — satu nomor WhatsApp untuk semua urusan teknologi properti Anda.",
    ctaPrimary: "Konsultasi via WhatsApp",
    ctaSecondary: "Lihat Layanan",
    badge: "Vendor-netral, respons cepat",
    statLabel: "Jam respons standar",
    statValue: "< 4 jam",
    waMessage: "Halo Karang Seva, saya mau konsultasi soal IT untuk properti/kantor saya.",
  },
  en: {
    eyebrow: "IT Solutions Bali",
    heading: "The IT partner that keeps your property and office running.",
    sub: "IT consulting, custom software, networking, and CCTV/security — one WhatsApp number for all your property's technology needs.",
    ctaPrimary: "Chat on WhatsApp",
    ctaSecondary: "See Services",
    badge: "Vendor-neutral, fast response",
    statLabel: "Standard response time",
    statValue: "< 4 hrs",
    waMessage: "Hi Karang Seva, I'd like to consult about IT for my property/office.",
  },
};

export function HeroSection() {
  const t = useContent(COPY);

  return (
    <section className="relative overflow-hidden bg-background pt-16 pb-20 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 12% 8%, rgba(108,99,255,0.14), transparent 60%), radial-gradient(ellipse 60% 60% at 92% 12%, rgba(0,168,132,0.10), transparent 55%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            {...fadeUp(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-primary-dark"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            {t.eyebrow}
          </motion.span>

          <motion.h1
            {...fadeUp(0.05)}
            className="text-4xl font-bold leading-[1.12] text-foreground md:text-5xl"
          >
            {t.heading}
          </motion.h1>

          <motion.p {...fadeUp(0.1)} className="mt-6 max-w-[48ch] text-lg text-muted">
            {t.sub}
          </motion.p>

          <motion.div {...fadeUp(0.15)} className="mt-8 flex flex-wrap gap-4">
            <Button href={buildWhatsAppLink(t.waMessage)} external size="lg">
              <WhatsAppIcon className="h-5 w-5" />
              {t.ctaPrimary}
            </Button>
            <Button href="/layanan" variant="outline" size="lg">
              {t.ctaSecondary}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-2xl shadow-primary/10"
        >
          <Image
            src={unsplashUrl(images.heroProperty.id, 800)}
            alt={images.heroProperty.alt}
            fill
            preload
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.1), transparent 40%), linear-gradient(0deg, rgba(20,18,42,0.6) 0%, rgba(20,18,42,0.05) 45%)",
            }}
          />
          <div className="absolute top-5 left-5 flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-2.5 text-xs font-semibold text-foreground shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.badge}
          </div>
          <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-4 shadow-md">
            <div className="font-mono text-2xl font-bold text-primary-dark">{t.statValue}</div>
            <div className="text-xs text-muted">{t.statLabel}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
