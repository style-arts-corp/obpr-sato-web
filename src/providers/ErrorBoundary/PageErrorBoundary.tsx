import type { PropsWithChildren } from 'react';
import * as Sentry from '@sentry/react';
import './sentry';
import { ErrorClient } from '@/components/templates/ErrorClient';
import { ErrorApplicationFallback } from '@/feature/error/components/templates/ErrorApplicationFallback';

export const PageErrorBoundary: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <Sentry.ErrorBoundary
    fallback={({ error }) => {
      // TODO: errorがunknownになったので修正する
      if (error instanceof Error) {
        return <ErrorClient error={error} />;
      } else {
        return <ErrorApplicationFallback />;
      }
    }}
  >
    {children}
  </Sentry.ErrorBoundary>
);
