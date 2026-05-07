/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PREDICT_API_URL: string
  readonly VITE_CONNECTION_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
