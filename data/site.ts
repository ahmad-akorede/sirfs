import { site } from "@/content/site";

export { site };

export type SiteImage = {
  src: string;
  webp: string;
  alt: string;
  width: number;
  height: number;
  position: string;
};

const provisions: SiteImage = {
  src: "/images/business/provisions-store.jpg",
  webp: "/images/business/provisions-store.webp",
  alt: "A man checking sacks beside stacked cartons in a provisions store",
  width: 1280,
  height: 720,
  position: "center 30%",
};

const fabric: SiteImage = {
  src: "/images/business/fabric-shop.jpg",
  webp: "/images/business/fabric-shop.webp",
  alt: "A woman arranging folded fabric on a shop counter",
  width: 864,
  height: 1152,
  position: "center 22%",
};

export const siteImages = {
  hero: { ...provisions, position: "center 35%" },
  personalFinance: { ...provisions, position: "18% 45%" },
  businessFinance: fabric,
  savings: { ...fabric, position: "center 40%" },
  payroll: { ...provisions, position: "center 20%" },
  customerStory: { ...fabric, position: "center 18%" },
  resources: [provisions, fabric, { ...provisions, position: "center 70%" }] as const,
};
