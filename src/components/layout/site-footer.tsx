"use client";

import Image from "next/image";
import Link from "next/link";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    tagline: "IT partner untuk properti dan kantor di Bali — konsultasi, software custom, jaringan, dan keamanan.",
    services: "Layanan",
    company: "Perusahaan",
    contact: "Kontak",
    servicesLinks: [
      { label: "Konsultasi IT", href: "/layanan#konsultasi" },
      { label: "Software Custom", href: "/layanan#software" },
      { label: "Jaringan & Internet", href: "/layanan#jaringan" },
      { label: "CCTV & Keamanan", href: "/layanan#cctv" },
    ],
    companyLinks: [
      { label: "Tentang Kami", href: "/tentang" },
      { label: "Paket & Harga", href: "/paket-harga" },
      { label: "Studi Kasus", href: "/studi-kasus" },
      { label: "Kontak", href: "/kontak" },
    ],
    rights: "Seluruh hak cipta dilindungi.",
  },
  en: {
    tagline: "IT partner for properties and offices in Bali — consulting, custom software, networking, and security.",
    services: "Services",
    company: "Company",
    contact: "Contact",
    servicesLinks: [
      { label: "IT Consulting", href: "/layanan#konsultasi" },
      { label: "Custom Software", href: "/layanan#software" },
      { label: "Network & Internet", href: "/layanan#jaringan" },
      { label: "CCTV & Security", href: "/layanan#cctv" },
    ],
    companyLinks: [
      { label: "About Us", href: "/tentang" },
      { label: "Pricing", href: "/paket-harga" },
      { label: "Case Studies", href: "/studi-kasus" },
      { label: "Contact", href: "/kontak" },
    ],
    rights: "All rights reserved.",
  },
};

export function SiteFooter() {
  const t = useContent(COPY);

  return (
    <footer className="border-t border-navy-border bg-navy text-white/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 text-lg font-semibold text-white">
              <Image src="/images/logo.png" alt="Karang Seva" width={36} height={36} className="h-9 w-9" />
              Karang Seva
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{t.tagline}</p>
          </div>
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-white/40">{t.services}</div>
            <ul className="space-y-2.5 text-sm">
              {t.servicesLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-white/40">{t.company}</div>
            <ul className="space-y-2.5 text-sm">
              {t.companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-wider text-white/40">{t.contact}</div>
            <ul className="space-y-2.5 text-sm">
              <li>+62 XXX-XXXX-XXXX</li>
              <li>hello@karangseva.com</li>
              <li>Bali, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Karang Seva. {t.rights}
        </div>
      </div>
    </footer>
  );
}
