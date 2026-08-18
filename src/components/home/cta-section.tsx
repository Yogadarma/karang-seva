"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";
import { CircuitTexture } from "@/components/ui/circuit-texture";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    heading: "Dapatkan Penawaran Gratis",
    sub: "Ceritakan kebutuhan IT properti/kantor Anda — konsultasi awal selalu gratis.",
    namePh: "Nama Anda",
    submit: "Kirim via WhatsApp",
    waMessage: (name: string) =>
      `Halo Karang Seva, nama saya ${name}. Saya mau konsultasi soal IT untuk properti/kantor saya.`,
  },
  en: {
    heading: "Get a Free Quote",
    sub: "Tell us about your property or office's IT needs — the first consultation is always free.",
    namePh: "Your name",
    submit: "Send via WhatsApp",
    waMessage: (name: string) =>
      `Hi Karang Seva, my name is ${name}. I'd like to consult about IT for my property/office.`,
  },
};

export function CtaSection() {
  const t = useContent(COPY);
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsAppLink(t.waMessage(name)), "_blank", "noopener");
  };

  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <CircuitTexture className="opacity-30" />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold md:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-white/60">{t.sub}</p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.namePh}
              className="h-13 flex-1 rounded-full border border-navy-border bg-navy-soft px-5 text-sm text-white outline-none placeholder:text-white/40 focus:border-primary"
            />
            <button
              type="submit"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-navy transition-colors hover:bg-primary-dark"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.submit}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
