/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SECURE_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
