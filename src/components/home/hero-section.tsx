"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { OrbitBackground } from "@/components/ui/orbit-background";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { images, unsplashUrl } from "@/lib/stock-images";
import { useContent } from "@/lib/language-context";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

const COPY = {
  id: {
    headingPre: "Solusi IT untuk",
    headingAccent: "Properti & Kantor",
    headingPost: "di Bali.",
    sub: "Konsultasi IT, software custom, jaringan, dan CCTV/keamanan — satu nomor WhatsApp untuk semua urusan teknologi properti Anda.",
    cta: "Konsultasi Sekarang",
    waMessage: "Halo Karang Seva, saya mau konsultasi soal IT untuk properti/kantor saya.",
    imageAlt: "Modern property Karang Seva",
  },
  en: {
    headingPre: "IT Solutions for",
    headingAccent: "Properties & Offices",
    headingPost: "in Bali.",
    sub: "IT consulting, custom software, networking, and CCTV/security — one WhatsApp number for all your property's technology needs.",
    cta: "Get Started Now",
    waMessage: "Hi Karang Seva, I'd like to consult about IT for my property/office.",
    imageAlt: "Modern property Karang Seva",
  },
};

export function HeroSection() {
  const t = useContent(COPY);

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-8">
      <OrbitBackground />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h1 {...fadeUp(0)} className="text-4xl font-bold leading-[1.15] text-foreground md:text-6xl">
          {t.headingPre}{" "}
          <span className="accent-underline text-primary-dark">{t.headingAccent}</span>{" "}
          {t.headingPost}
        </motion.h1>

        <motion.p {...fadeUp(0.1)} className="mx-auto mt-6 max-w-[46ch] text-lg text-muted">
          {t.sub}
        </motion.p>

        <motion.div {...fadeUp(0.18)} className="mt-8 flex justify-center">
          <Button href={buildWhatsAppLink(t.waMessage)} external size="lg">
            {t.cta}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
        className="relative mx-6 mt-16 aspect-21/9 max-w-6xl overflow-hidden rounded-[2rem] border border-border md:mx-auto md:aspect-[21/8]"
      >
        <Image
          src={unsplashUrl(images.heroProperty.id, 1400)}
          alt={t.imageAlt}
          fill
          preload
          sizes="100vw"
          className="rounded-[2rem] object-cover"
        />
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
      </motion.div>
    </section>
  );
}
