import * as Sentry from '@sentry/react';
import packageJson from 'package.json';
import { ClientError } from '@/utils/clientError';

const dsn = import.meta.env.VITE_SENTRY_DSN;
const environment = import.meta.env.MODE;

Sentry.init({
  dsn,
  environment,
  release: packageJson.version,
  tracesSampleRate: 1.0,
  tracePropagationTargets: [
    // TODO: 以下の値を適切な値に変更
    '',
  ],
  integrations: [Sentry.browserTracingIntegration()],
  beforeSend: (event, hint) => {
    // TODO: ServerErrorについてもここに集約する
    if (hint.originalException instanceof ClientError) {
      const level: Sentry.SeverityLevel =
        hint.originalException.statusCode === 404 ? 'warning' : 'error';
      event.level = level;

      return event;
    }

    return event;
  },
});
