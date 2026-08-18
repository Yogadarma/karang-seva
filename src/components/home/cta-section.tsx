"use client";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    heading: "Punya properti atau kantor yang IT-nya bermasalah?",
    sub: "Ceritakan kondisinya lewat WhatsApp — konsultasi awal selalu gratis.",
    cta: "Konsultasi Sekarang",
    waMessage: "Halo Karang Seva, saya mau konsultasi soal IT untuk properti/kantor saya.",
  },
  en: {
    heading: "Got a property or office with IT headaches?",
    sub: "Tell us about it on WhatsApp — the first consultation is always free.",
    cta: "Start a Conversation",
    waMessage: "Hi Karang Seva, I'd like to consult about IT for my property/office.",
  },
};

export function CtaSection() {
  const t = useContent(COPY);

  return (
    <section className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-white/60">{t.sub}</p>
          <div className="mt-8 flex justify-center">
            <Button href={buildWhatsAppLink(t.waMessage)} external size="lg">
              <WhatsAppIcon className="h-5 w-5" />
              {t.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
