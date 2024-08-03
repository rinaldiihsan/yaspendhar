/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
