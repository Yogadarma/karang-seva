"use client";

import { PageHeader } from "@/components/layout/page-header";
import { ServiceDetail } from "@/components/layanan/service-detail";
import { CtaSection } from "@/components/home/cta-section";
import { images } from "@/lib/stock-images";
import { useContent } from "@/lib/language-context";

const HEADER = {
  id: {
    eyebrow: "Layanan",
    heading: "Empat pilar, satu titik kontak",
    sub: "Bisa dipesan satu-satu sesuai kebutuhan, atau digabung jadi satu paket untuk properti/kantor Anda.",
  },
  en: {
    eyebrow: "Services",
    heading: "Four pillars, one point of contact",
    sub: "Order them individually, or bundle them into one package for your property or office.",
  },
};

export default function LayananPage() {
  const header = useContent(HEADER);

  return (
    <>
      <PageHeader eyebrow={header.eyebrow} heading={header.heading} sub={header.sub} />

      <ServiceDetail
        id="konsultasi"
        image={images.consulting}
        content={{
          id: {
            title: "Konsultasi IT",
            desc: "Kami audit infrastruktur yang ada, lalu susun rekomendasi vendor-netral — bukan jualan produk tertentu.",
            points: [
              "Audit infrastruktur IT",
              "IT Health Check (paket entry)",
              "Roadmap teknologi jangka panjang",
              "Vendor management (ISP, hardware, garansi)",
            ],
          },
          en: {
            title: "IT Consulting",
            desc: "We audit your existing infrastructure, then put together vendor-neutral recommendations — not a pitch for a specific product.",
            points: [
              "IT infrastructure audit",
              "IT Health Check (entry package)",
              "Long-term technology roadmap",
              "Vendor management (ISP, hardware, warranty)",
            ],
          },
        }}
      />

      <ServiceDetail
        id="software"
        reverse
        image={images.customSoftware}
        content={{
          id: {
            title: "Software Solution Custom",
            desc: "Dibangun sesuai alur kerja properti/kantor Anda — bukan template generik yang dipaksakan.",
            points: [
              "Sistem POS & inventory",
              "Sistem booking/reservasi",
              "Website & landing page",
              "Integrasi WhatsApp & payment gateway",
            ],
          },
          en: {
            title: "Custom Software Solutions",
            desc: "Built around your property or office's actual workflow — not a generic template forced to fit.",
            points: [
              "POS & inventory systems",
              "Booking/reservation systems",
              "Website & landing pages",
              "WhatsApp & payment gateway integration",
            ],
          },
        }}
      />

      <ServiceDetail
        id="jaringan"
        image={images.network}
        content={{
          id: {
            title: "Jaringan & Internet",
            desc: "Dari properti yang belum punya instalasi sama sekali, sampai jaringan lama yang perlu dibenahi total.",
            points: [
              "Instalasi jaringan baru",
              "Perbaikan & troubleshooting",
              "Structured cabling & WiFi design",
              "Backup internet / failover monitoring",
            ],
          },
          en: {
            title: "Network & Internet",
            desc: "From properties with no installation at all, to old networks that need a full overhaul.",
            points: [
              "New network installation",
              "Repair & troubleshooting",
              "Structured cabling & WiFi design",
              "Backup internet / failover monitoring",
            ],
          },
        }}
      />

      <ServiceDetail
        id="cctv"
        reverse
        image={images.cctv}
        content={{
          id: {
            title: "CCTV & Sistem Keamanan",
            desc: "Kamera dan access control yang benar-benar terintegrasi, bukan sekadar terpasang.",
            points: [
              "Instalasi CCTV & access control",
              "Intercom & integrasi alarm",
              "Smart building / home automation",
              "Monitoring & maintenance rutin",
            ],
          },
          en: {
            title: "CCTV & Security Systems",
            desc: "Cameras and access control that are actually integrated, not just installed.",
            points: [
              "CCTV & access control installation",
              "Intercom & alarm integration",
              "Smart building / home automation",
              "Routine monitoring & maintenance",
            ],
          },
        }}
      />

      <CtaSection />
    </>
  );
}
