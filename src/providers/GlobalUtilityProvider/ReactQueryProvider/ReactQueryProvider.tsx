import type { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ONE_HOUR_MS } from '@/lib/react-query/constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: ONE_HOUR_MS,
      refetchOnWindowFocus: true,
    },
  },
});

export const ReactQueryProvider: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>
    {children}
    {/* Storybook環境では表示しない */}
    {import.meta.env.STORYBOOK !== 'true' && (
      <ReactQueryDevtools initialIsOpen={false} />
    )}
  </QueryClientProvider>
);
