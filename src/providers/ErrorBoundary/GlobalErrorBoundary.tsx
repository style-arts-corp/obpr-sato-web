import type { PropsWithChildren } from 'react';
import './sentry';
import * as Sentry from '@sentry/react';
import { ErrorApplicationFallback } from '@/feature/error/components/templates/ErrorApplicationFallback';

export const GlobalErrorBoundary: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <Sentry.ErrorBoundary fallback={<ErrorApplicationFallback />}>
    {children}
  </Sentry.ErrorBoundary>
);
