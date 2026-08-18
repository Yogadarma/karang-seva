"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLanguage, useContent } from "@/lib/language-context";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

const NAV = {
  id: [
    { label: "Layanan", href: "/layanan" },
    { label: "Paket & Harga", href: "/paket-harga" },
    { label: "Studi Kasus", href: "/studi-kasus" },
    { label: "Tentang", href: "/tentang" },
  ],
  en: [
    { label: "Services", href: "/layanan" },
    { label: "Pricing", href: "/paket-harga" },
    { label: "Case Studies", href: "/studi-kasus" },
    { label: "About", href: "/tentang" },
  ],
};

const COPY = {
  id: { cta: "Konsultasi Gratis", wa: "Halo Karang Seva, saya mau konsultasi soal IT untuk properti/kantor saya." },
  en: { cta: "Free Consultation", wa: "Hi Karang Seva, I'd like to consult about IT for my property/office." },
};

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const nav = useContent(NAV);
  const copy = useContent(COPY);

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full border border-border bg-surface/80 px-5 shadow-lg shadow-black/20 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-lg tracking-tight text-foreground">
          <Image src="/images/logo.png" alt="Karang Seva" width={36} height={36} className="h-9 w-9" />
          Karang Seva
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="hidden h-9 items-center rounded-full border border-border px-3 text-xs font-semibold text-muted hover:text-foreground md:flex"
            aria-label="Toggle language"
          >
            {language === "id" ? "ID" : "EN"}
          </button>
          <Button href={buildWhatsAppLink(copy.wa)} external size="md" className="hidden md:inline-flex">
            <WhatsAppIcon className="h-4 w-4" />
            {copy.cta}
          </Button>
          <button
            aria-label="Menu"
            className="flex h-9 w-9 items-center justify-center text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl border border-border bg-surface p-4 shadow-lg shadow-black/20 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-sm font-medium text-foreground hover:bg-surface-alt"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="mt-1 rounded-lg px-2 py-2.5 text-left text-sm font-medium text-muted hover:bg-surface-alt"
          >
            {language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
          </button>
          <Button href={buildWhatsAppLink(copy.wa)} external size="md" className="mt-2 w-full">
            <WhatsAppIcon className="h-4 w-4" />
            {copy.cta}
          </Button>
        </div>
      )}
    </header>
  );
}
