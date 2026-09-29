/**
 * Homepage guides. `readingTime` is optional and should be set only for a real piece.
 * Links point at existing resource sections until a published note exists.
 */
export type HomeGuide = {
  category: string;
  title: string;
  href: string;
  readingTime?: string;
};

export const homeGuides: HomeGuide[] = [
  {
    category: "Loans",
    title: "How to prepare for a business loan",
    href: "/resources#loans",
  },
  {
    category: "Business",
    title: "Understanding working capital",
    href: "/resources#business",
  },
  {
    category: "Business",
    title: "How to manage business cash flow",
    href: "/resources#money",
  },
];
