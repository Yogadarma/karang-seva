"use client";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CircuitTexture } from "@/components/ui/circuit-texture";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    heading: "Ceritakan kebutuhan IT Anda.",
    sub: "Kami bantu memahami kondisi Anda dan memberikan rekomendasi awal sebelum menentukan solusi yang paling sesuai.",
    cta: "Konsultasi Gratis via WhatsApp",
    waMessage: "Halo Karang Seva, saya mau konsultasi soal IT untuk properti/kantor saya.",
  },
  en: {
    heading: "Tell us about your IT needs.",
    sub: "We'll help understand your situation and give an initial recommendation before settling on the right solution.",
    cta: "Free Consultation via WhatsApp",
    waMessage: "Hi Karang Seva, I'd like to consult about IT for my property/office.",
  },
};

export function CtaSection() {
  const t = useContent(COPY);

  return (
    <section className="relative overflow-hidden bg-navy py-16 text-white">
      <CircuitTexture className="opacity-30" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-white/90">{t.sub}</p>
          <div className="mt-8 flex justify-center">
            <Button href={buildWhatsAppLink(t.waMessage)} external size="lg">
              <WhatsAppIcon className="h-4 w-4" />
              {t.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
