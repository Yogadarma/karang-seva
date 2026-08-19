"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { OrbitBackground } from "@/components/ui/orbit-background";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
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
    eyebrow: "IT Support • Network • CCTV • Software",
    headingPre: "IT Properti & Kantor di Bali yang",
    headingAccent: "Stabil, Aman, dan Siap Dipakai.",
    sub: "Jaringan, CCTV, software custom, dan support IT dalam satu tim — untuk villa, hotel, kantor, dan properti komersial di Bali.",
    cta: "Konsultasi Gratis via WhatsApp",
    ctaSecondary: "Lihat Layanan",
    waMessage: "Halo Karang Seva, saya mau konsultasi soal IT untuk properti/kantor saya.",
    imageAlt: "Properti modern yang ditangani Karang Seva",
  },
  en: {
    eyebrow: "IT Support • Network • CCTV • Software",
    headingPre: "IT for Properties & Offices in Bali That's",
    headingAccent: "Stable, Secure, and Ready to Use.",
    sub: "Networking, CCTV, custom software, and IT support in one team — for villas, hotels, offices, and commercial properties in Bali.",
    cta: "Free Consultation via WhatsApp",
    ctaSecondary: "See Services",
    waMessage: "Hi Karang Seva, I'd like to consult about IT for my property/office.",
    imageAlt: "Modern property handled by Karang Seva",
  },
};

export function HeroSection() {
  const t = useContent(COPY);

  return (
    <section className="relative overflow-hidden bg-background pt-24 pb-8">
      <OrbitBackground />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.div {...fadeUp(0)} className="flex justify-center">
          <Eyebrow>{t.eyebrow}</Eyebrow>
        </motion.div>

        <motion.h1 {...fadeUp(0.05)} className="text-4xl font-bold leading-[1.15] text-foreground md:text-5xl">
          {t.headingPre}{" "}
          <span className="accent-underline text-primary-dark">{t.headingAccent}</span>
        </motion.h1>

        <motion.p {...fadeUp(0.1)} className="mx-auto mt-6 max-w-[46ch] text-lg text-muted">
          {t.sub}
        </motion.p>

        <motion.div {...fadeUp(0.18)} className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={buildWhatsAppLink(t.waMessage)} external size="lg">
            <WhatsAppIcon className="h-4 w-4" />
            {t.cta}
          </Button>
          <Button href="/layanan" variant="outline" size="lg">
            {t.ctaSecondary}
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
        className="relative mx-6 mt-16 aspect-21/9 max-w-6xl overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-black/10 md:mx-auto md:aspect-[21/8]"
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
