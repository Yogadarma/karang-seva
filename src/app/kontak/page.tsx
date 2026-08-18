"use client";

import { useState } from "react";
import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

const HEADER = {
  id: {
    eyebrow: "Kontak",
    heading: "Ceritakan kebutuhan Anda",
    sub: "Isi form di bawah, atau langsung chat WhatsApp — konsultasi awal selalu gratis.",
  },
  en: {
    eyebrow: "Contact",
    heading: "Tell us what you need",
    sub: "Fill in the form below, or chat us on WhatsApp directly — the first consultation is always free.",
  },
};

const FORM_COPY = {
  id: {
    name: "Nama",
    namePh: "Nama Anda",
    propertyType: "Jenis Properti",
    propertyOptions: ["Villa", "Kantor", "Hotel/Resort", "Lainnya"],
    message: "Ceritakan kebutuhannya",
    messagePh: "Contoh: jaringan WiFi villa sering putus, butuh CCTV untuk 6 titik...",
    submit: "Kirim via WhatsApp",
  },
  en: {
    name: "Name",
    namePh: "Your name",
    propertyType: "Property Type",
    propertyOptions: ["Villa", "Office", "Hotel/Resort", "Other"],
    message: "Tell us what you need",
    messagePh: "E.g. our villa's WiFi keeps dropping, need CCTV for 6 spots...",
    submit: "Send via WhatsApp",
  },
};

const INFO_COPY = {
  id: {
    heading: "Info Kontak",
    email: "hello@karangseva.com",
    location: "Bali, Indonesia",
    hours: "Respons WhatsApp setiap hari, 08.00–20.00 WITA",
  },
  en: {
    heading: "Contact Info",
    email: "hello@karangseva.com",
    location: "Bali, Indonesia",
    hours: "WhatsApp response daily, 8am–8pm WITA",
  },
};

export default function KontakPage() {
  const header = useContent(HEADER);
  const form = useContent(FORM_COPY);
  const info = useContent(INFO_COPY);

  const [name, setName] = useState("");
  const [propertyType, setPropertyType] = useState(form.propertyOptions[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const composed = `${form.name}: ${name}\n${form.propertyType}: ${propertyType}\n\n${message}`;
    window.open(buildWhatsAppLink(composed), "_blank", "noopener");
  };

  return (
    <>
      <PageHeader eyebrow={header.eyebrow} heading={header.heading} sub={header.sub} />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{form.name}</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={form.namePh}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{form.propertyType}</label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >
                  {form.propertyOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">{form.message}</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={form.messagePh}
                  className="w-full resize-none rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-primary px-7 text-base font-medium text-white transition-colors hover:bg-primary-dark sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {form.submit}
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-surface p-7">
              <h2 className="text-lg font-semibold text-foreground">{info.heading}</h2>
              <ul className="mt-5 space-y-4 text-sm text-muted">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {info.email}
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {info.location}
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {info.hours}
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
