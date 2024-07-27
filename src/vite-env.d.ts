/// <reference types="vite/client" />

// TODO: Zodに統一する(暫定として追加するプロパティは全てoptionalにしておく)
interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_X_HASURA_ADMIN_SECRET?: string;
  readonly VITE_SENTRY_DSN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
