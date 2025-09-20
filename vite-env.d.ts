/// <reference types="vite/client" />

// Optional: strongly-type your Vite environment variables
// Add entries here for every VITE_ var you use.
interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY?: string;
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
