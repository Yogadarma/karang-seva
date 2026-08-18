"use client";

import { Check, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/home/cta-section";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useContent } from "@/lib/language-context";

const HEADER = {
  id: {
    eyebrow: "Paket & Harga",
    heading: "Transparan untuk yang jelas, konsultasi untuk yang custom",
    sub: "Retainer bulanan dan jasa satu-kali standar kami tampilkan apa adanya. Proyek besar dan custom kami hitungkan dulu lewat konsultasi singkat — gratis, tanpa komitmen.",
  },
  en: {
    eyebrow: "Pricing",
    heading: "Transparent where it's clear, a quote where it's custom",
    sub: "Our monthly retainers and standard one-time services are listed as-is. Larger, custom projects are scoped through a short consultation first — free, no commitment.",
  },
};

const RETAINER = {
  id: {
    title: "Retainer Bulanan",
    desc: "Untuk properti/kantor yang butuh IT partner yang bisa dipanggil kapan saja.",
    tiers: [
      {
        name: "Basic",
        local: "Rp 500.000",
        premium: "Rp 1.500.000",
        points: ["1x kunjungan/bulan", "Respons WhatsApp < 4 jam"],
      },
      {
        name: "Standard",
        local: "Rp 1.000.000",
        premium: "Rp 3.000.000",
        points: ["2x kunjungan/bulan", "Respons WhatsApp < 2 jam", "Prioritas antrian"],
        featured: true,
      },
      {
        name: "Premium",
        local: "Rp 2.000.000",
        premium: "Rp 6.000.000",
        points: ["Kunjungan mingguan", "Dedicated contact", "Respons same-day"],
      },
    ],
    localLabel: "Villa lokal / kantor kecil",
    premiumLabel: "Villa expat / hotel / kantor menengah-besar",
  },
  en: {
    title: "Monthly Retainer",
    desc: "For properties/offices that need an IT partner on call whenever needed.",
    tiers: [
      {
        name: "Basic",
        local: "Rp 500K",
        premium: "Rp 1.5M",
        points: ["1 visit/month", "WhatsApp response < 4 hrs"],
      },
      {
        name: "Standard",
        local: "Rp 1M",
        premium: "Rp 3M",
        points: ["2 visits/month", "WhatsApp response < 2 hrs", "Priority queue"],
        featured: true,
      },
      {
        name: "Premium",
        local: "Rp 2M",
        premium: "Rp 6M",
        points: ["Weekly visits", "Dedicated contact", "Same-day response"],
      },
    ],
    localLabel: "Local villa / small office",
    premiumLabel: "Expat villa / hotel / mid-large office",
  },
};

const ONE_TIME = {
  id: {
    title: "Jasa Satu-Kali",
    desc: "Rate per jam untuk kunjungan lepas, tanpa retainer.",
    rows: [
      { label: "Rate/jam — Local", value: "Rp 150.000–200.000" },
      { label: "Rate/jam — Premium", value: "Rp 400.000–500.000" },
      { label: "Handling fee hardware (flat, per invoice)", value: "Rp 100.000–150.000" },
      { label: "IT Health Check (assessment awal)", value: "Mulai dari Rp 300.000" },
    ],
    note: "Tidak ada markup harga hardware — harga real diteruskan ke pelanggan.",
  },
  en: {
    title: "One-Time Services",
    desc: "Hourly rate for one-off visits, no retainer required.",
    rows: [
      { label: "Hourly rate — Local", value: "Rp 150K–200K" },
      { label: "Hourly rate — Premium", value: "Rp 400K–500K" },
      { label: "Hardware handling fee (flat, per invoice)", value: "Rp 100K–150K" },
      { label: "IT Health Check (initial assessment)", value: "Starting at Rp 300K" },
    ],
    note: "No markup on hardware — real cost passed on to the client.",
  },
};

const CUSTOM = {
  id: {
    eyebrow: "Proyek besar & custom",
    heading: "Yang variannya besar per proyek, kami hitungkan lewat konsultasi",
    items: [
      {
        title: "Software Custom",
        desc: "POS, booking, inventory, atau sistem internal lain — harga tergantung kompleksitas fitur.",
        from: "Mulai dari Rp 5.000.000",
      },
      {
        title: "Property Setup Package",
        desc: "Bundle jaringan + CCTV + structured cabling untuk properti/kantor baru.",
        from: "Mulai dari Rp 15.000.000",
      },
      {
        title: "Security System Package",
        desc: "Bundle CCTV + access control, harga paket bukan per-jam.",
        from: "Mulai dari Rp 8.000.000",
      },
    ],
    cta: "Minta Penawaran",
    waMessage: "Halo Karang Seva, saya mau tanya penawaran untuk proyek custom.",
  },
  en: {
    eyebrow: "Large & custom projects",
    heading: "The ones that vary a lot per project, scoped through consultation",
    items: [
      {
        title: "Custom Software",
        desc: "POS, booking, inventory, or other internal systems — price depends on feature complexity.",
        from: "Starting at Rp 5M",
      },
      {
        title: "Property Setup Package",
        desc: "Network + CCTV + structured cabling bundle for a new property or office.",
        from: "Starting at Rp 15M",
      },
      {
        title: "Security System Package",
        desc: "CCTV + access control bundle, priced as a package rather than hourly.",
        from: "Starting at Rp 8M",
      },
    ],
    cta: "Request a Quote",
    waMessage: "Hi Karang Seva, I'd like a quote for a custom project.",
  },
};

export default function PaketHargaPage() {
  const header = useContent(HEADER);
  const retainer = useContent(RETAINER);
  const oneTime = useContent(ONE_TIME);
  const custom = useContent(CUSTOM);

  return (
    <>
      <PageHeader eyebrow={header.eyebrow} heading={header.heading} sub={header.sub} />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{retainer.title}</h2>
            <p className="mt-2 text-muted">{retainer.desc}</p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {retainer.tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.06}>
                <div
                  className={`h-full rounded-2xl border p-7 ${
                    tier.featured ? "border-primary bg-primary-soft" : "border-border bg-surface"
                  }`}
                >
                  <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                  <div className="mt-4 space-y-1">
                    <div className="flex items-baseline justify-between font-mono">
                      <span className="text-xs text-muted">{retainer.localLabel}</span>
                      <span className="font-bold text-foreground">{tier.local}</span>
                    </div>
                    <div className="flex items-baseline justify-between font-mono">
                      <span className="text-xs text-muted">{retainer.premiumLabel}</span>
                      <span className="font-bold text-foreground">{tier.premium}</span>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2.5 border-t border-border/70 pt-5">
                    {tier.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{oneTime.title}</h2>
            <p className="mt-2 text-muted">{oneTime.desc}</p>
          </Reveal>
          <Reveal delay={0.06} className="mt-8 overflow-hidden rounded-2xl border border-border bg-background">
            {oneTime.rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-4 text-sm ${
                  i !== oneTime.rows.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-foreground">{row.label}</span>
                <span className="font-mono font-semibold text-foreground">{row.value}</span>
              </div>
            ))}
          </Reveal>
          <p className="mt-4 text-sm text-muted">{oneTime.note}</p>
        </div>
      </section>

      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-xl">
            <span className="mb-3 inline-block font-mono text-xs uppercase tracking-wider text-primary-dark">
              {custom.eyebrow}
            </span>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">{custom.heading}</h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {custom.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{item.desc}</p>
                  <div className="mt-5 font-mono text-sm font-semibold text-primary-dark">{item.from}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <Button href={buildWhatsAppLink(custom.waMessage)} external size="lg">
              {custom.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
