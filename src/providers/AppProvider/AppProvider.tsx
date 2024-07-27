import { Suspense } from 'react';
import type { PropsWithChildren } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/providers/AuthProvider';
import { PageErrorBoundary } from '@/providers/ErrorBoundary';
import { GlobalErrorBoundary } from '@/providers/ErrorBoundary/GlobalErrorBoundary';
import { GlobalUtilityProvider } from '@/providers/GlobalUtilityProvider';
import CircularProgress from '@mui/material/CircularProgress';

export const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <Suspense fallback={<CircularProgress />}>
    <GlobalErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <PageErrorBoundary>
            <GlobalUtilityProvider>{children}</GlobalUtilityProvider>
          </PageErrorBoundary>
        </AuthProvider>
      </BrowserRouter>
    </GlobalErrorBoundary>
  </Suspense>
);
