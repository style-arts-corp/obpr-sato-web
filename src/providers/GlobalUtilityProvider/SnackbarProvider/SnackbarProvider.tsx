import type { PropsWithChildren } from 'react';
import { SnackbarProvider } from 'notistack';

export const SnackbarProviderWrap: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    autoHideDuration={3_000}
    maxSnack={5}
  >
    {children}
  </SnackbarProvider>
);
