// TODO: replace with the real Karang Seva WhatsApp business number before launch.
export const BUSINESS_WA_NUMBER = "62000000000";

export function buildWhatsAppLink(message: string, phone = BUSINESS_WA_NUMBER): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
