"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { images, imageSrc } from "@/lib/stock-images";
import { useContent } from "@/lib/language-context";

const COPY = {
  id: {
    eyebrow: "Layanan",
    heading: "Empat pilar yang kami kerjakan",
    sub: "Setiap pilar bisa berdiri sendiri, atau digabung jadi satu paket sesuai kebutuhan properti/kantor Anda.",
    items: [
      {
        slug: "konsultasi",
        title: "Konsultasi IT",
        desc: "Audit infrastruktur & roadmap teknologi yang vendor-netral — bukan jualan produk tertentu.",
        image: images.consulting,
      },
      {
        slug: "software",
        title: "Software Custom",
        desc: "POS, inventory, booking, hingga integrasi WhatsApp & payment — dibangun sesuai alur kerja Anda.",
        image: images.customSoftware,
      },
      {
        slug: "jaringan",
        title: "Jaringan & Internet",
        desc: "Instalasi baru maupun perbaikan jaringan lama yang bermasalah, termasuk structured cabling.",
        image: images.network,
      },
      {
        slug: "cctv",
        title: "CCTV & Keamanan",
        desc: "Kamera, access control, dan intercom — terintegrasi dan benar-benar bisa diandalkan.",
        image: images.cctv,
      },
    ],
    cta: "Lihat detail",
  },
  en: {
    eyebrow: "Services",
    heading: "The four pillars we work on",
    sub: "Each pillar stands on its own, or bundle them into one package that fits your property or office.",
    items: [
      {
        slug: "konsultasi",
        title: "IT Consulting",
        desc: "Vendor-neutral infrastructure audits & technology roadmaps — not a pitch for a specific product.",
        image: images.consulting,
      },
      {
        slug: "software",
        title: "Custom Software",
        desc: "POS, inventory, booking, WhatsApp & payment integration — built around your actual workflow.",
        image: images.customSoftware,
      },
      {
        slug: "jaringan",
        title: "Network & Internet",
        desc: "New installations or fixes for troublesome existing networks, including structured cabling.",
        image: images.network,
      },
      {
        slug: "cctv",
        title: "CCTV & Security",
        desc: "Cameras, access control, and intercom — integrated and actually reliable.",
        image: images.cctv,
      },
    ],
    cta: "See details",
  },
};

export function ServicesOverviewSection() {
  const t = useContent(COPY);

  return (
    <section id="layanan" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">{t.heading}</h2>
          <p className="mt-4 text-muted">{t.sub}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {t.items.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.06}>
              <Link
                href={`/layanan#${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="relative aspect-16/9 overflow-hidden">
                  <Image
                    src={imageSrc(item.image, 700)}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-dark">
                    {t.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
