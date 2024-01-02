// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { AstroI18nextConfig } from "astro-i18next";

const config: AstroI18nextConfig = {
  defaultLocale: "es",
  locales: ["es", "en"],
  i18nextServer: {
    debug: true,
  },
};

export default config;
