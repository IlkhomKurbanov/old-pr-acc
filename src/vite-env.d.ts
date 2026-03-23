/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REDIRECT_URL?: string;
  readonly VITE_PRESERVE_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
