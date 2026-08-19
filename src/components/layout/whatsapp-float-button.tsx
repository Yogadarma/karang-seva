"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    message: "Halo Karang Seva, saya mau konsultasi soal IT untuk properti/kantor saya.",
    label: "Konsultasi Gratis",
  },
  en: {
    message: "Hi Karang Seva, I'd like to consult about IT for my property/office.",
    label: "Free Consultation",
  },
};

export function WhatsappFloatButton() {
  const t = useContent(COPY);
  return (
    <a
      href={buildWhatsAppLink(t.message)}
      target="_blank"
      rel="noopener"
      aria-label={t.label}
      className="group fixed bottom-6 right-6 z-50 flex items-center"
    >
      <span className="pointer-events-none mr-3 whitespace-nowrap rounded-full bg-navy px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0">
        {t.label}
      </span>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform group-hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
