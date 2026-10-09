import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Tag {
  name: string;
  class: string;
  icon?: AstroComponentFactory;
}
