import type { PropsWithChildren } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import { LocalizationProviderWrap } from './LocalizationProviderWrap';
import { PageTitleWrap } from './PageTitleWrap';
import { ReactQueryProvider } from './ReactQueryProvider';
import { ScrollTopProviderWrap } from './ScrollTopProviderWrap';
import { SnackbarProviderWrap } from './SnackbarProvider';
import { ThemeProviderWrap } from './ThemeProvider';

export const GlobalUtilityStoryMockProvider: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <ReactQueryProvider>
    <ThemeProviderWrap>
      <LocalizationProviderWrap>
        <PageTitleWrap />
        <ScrollTopProviderWrap />
        <SnackbarProviderWrap>
          <NiceModal.Provider>{children}</NiceModal.Provider>
        </SnackbarProviderWrap>
      </LocalizationProviderWrap>
    </ThemeProviderWrap>
  </ReactQueryProvider>
);
