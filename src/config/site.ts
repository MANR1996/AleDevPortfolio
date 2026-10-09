export type Locale = "es" | "en";

export type StatusKey = "available" | "listing" | "working";

export const SITE = {
  mail: "alecuba96@gmail.com",
  phone: "+34 600 96 28 35",
  careerStart: "2018-09-01",
  profiles: {
    linkedin: "https://www.linkedin.com/in/manuel-alejandro-naranjo-rey",
    github: "https://github.com/MANR1996",
    researchgate:
      "https://www.researchgate.net/profile/Manuel-Alejandro-Naranjo-Rey",
  },
} as const;

export const CURRENT_STATUS: StatusKey = "available";

export const STATUS_STYLES: Record<StatusKey, string> = {
  available: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  listing: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  working: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export const NAV_ITEMS = [
  { href: "#start", label: "menu.home" },
  { href: "#about", label: "menu.about" },
  { href: "#experience", label: "menu.experience" },
  { href: "#projects", label: "menu.projects" },
  { href: "#contact", label: "menu.contact" },
] as const;
