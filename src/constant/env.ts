// See: https://ja.vitejs.dev/guide/env-and-mode.html#node-env-%E3%81%A8%E3%83%A2%E3%83%BC%E3%83%88%E3%82%99
export const ENV_FLAG = {
  isLocal: import.meta.env.DEV,
  isDevelopment: import.meta.env.PROD && import.meta.env.MODE === 'development',
  isStaging: import.meta.env.MODE === 'staging',
  isProduction: import.meta.env.MODE === 'production',
};
