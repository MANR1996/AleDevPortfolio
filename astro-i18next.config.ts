// @ts-ignore -- astro-i18next beta ships types that TypeScript cannot resolve through its "exports" map
import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "es",
  locales: ["es", "en"],
};

export default config;
