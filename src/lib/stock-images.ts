/**
 * Photography used across the site. Entries with `id` are Unsplash
 * placeholders — none of these depict an actual Karang Seva client,
 * project, or team member, swap for real photos once available. Entries
 * with `src` are real local assets already supplied by the client.
 */
export function unsplashUrl(photoId: string, width: number, quality = 80) {
  return `https://images.unsplash.com/photo-${photoId}?ixlib=rb-4.1.0&auto=format&fit=crop&w=${width}&q=${quality}`;
}

type UnsplashImage = { id: string; alt: string };
type LocalImage = { src: string; alt: string };
export type SiteImage = UnsplashImage | LocalImage;

/** Resolve any SiteImage to a usable <Image src>, sizing Unsplash photos to `width`. */
export function imageSrc(image: SiteImage, width: number) {
  return "src" in image ? image.src : unsplashUrl(image.id, width);
}

export const images = {
  heroProperty: {
    id: "1622015663084-307d19eabbbf",
    alt: "Modern minimalist building surrounded by tropical greenery",
  },
  consulting: {
    src: "/images/konsultasi-it.jpeg",
    alt: "Tim Karang Seva berdiskusi dengan klien dalam pakaian adat Bali",
  },
  customSoftware: {
    id: "1555066931-4365d14bab8c",
    alt: "Laptop screen showing custom software code",
  },
  network: {
    id: "1785682117028-6fcf2c0b515b",
    alt: "Technician working on network server equipment",
  },
  networkDetail: {
    id: "1691435828932-911a7801adfb",
    alt: "Close-up of structured network cabling",
  },
  cctv: {
    id: "1496368077930-c1e31b4e5b44",
    alt: "Two CCTV security cameras mounted on an exterior wall",
  },
  office: {
    id: "1604328727766-a151d1045ab4",
    alt: "Two people working on laptops in a sunlit modern office",
  },
} satisfies Record<string, SiteImage>;
