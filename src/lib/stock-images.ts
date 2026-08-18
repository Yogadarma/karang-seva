/**
 * Placeholder photography sourced from Unsplash — none of these depict an
 * actual Karang Seva client, project, or team member. Swap the `id` values
 * for real photos once available; no other code changes needed.
 */
export function unsplashUrl(photoId: string, width: number, quality = 80) {
  return `https://images.unsplash.com/photo-${photoId}?ixlib=rb-4.1.0&auto=format&fit=crop&w=${width}&q=${quality}`;
}

export const images = {
  heroProperty: {
    id: "1622015663084-307d19eabbbf",
    alt: "Modern minimalist building surrounded by tropical greenery",
  },
  consulting: {
    id: "1542744173-8e7e53415bb0",
    alt: "IT consultant presenting to a small business team",
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
} as const;
