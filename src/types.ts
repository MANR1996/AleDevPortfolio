import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Tag {
  name: string;
  class: string;
  icon?: AstroComponentFactory;
}

export interface Project {
  title: string;
  description: string;
  tags: Tag[];
  image: string;
  github: string;
  link: string;
}

export interface Experience {
  dateFrom: string;
  dateTo: string;
  fromIso: string;
  toIso: string | null;
  name: string;
  description: string;
}
