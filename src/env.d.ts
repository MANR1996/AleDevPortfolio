/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_MAIL?: string;
  readonly PUBLIC_PHONE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
