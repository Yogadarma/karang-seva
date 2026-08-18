"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: "Halo Karang Seva, saya mau konsultasi soal IT untuk properti/kantor saya.",
  en: "Hi Karang Seva, I'd like to consult about IT for my property/office.",
};

export function WhatsappFloatButton() {
  const message = useContent(COPY);
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-navy shadow-lg shadow-accent/30 transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
