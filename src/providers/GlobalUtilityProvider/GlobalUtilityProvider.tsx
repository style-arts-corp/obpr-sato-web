import type { PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';
import NiceModal from '@ebay/nice-modal-react';
import { useApollo } from '@/hooks/useApollo';
import { LocalizationProviderWrap } from './LocalizationProviderWrap';
import { PageTitleWrap } from './PageTitleWrap';
import { ScrollTopProviderWrap } from './ScrollTopProviderWrap';
import { SnackbarProviderWrap } from './SnackbarProvider';
import { ThemeProviderWrap } from './ThemeProvider';

export const GlobalUtilityProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const client = useApollo();

  return (
    <ApolloProvider client={client}>
      {/* <ReactQueryProvider> */}
      <ThemeProviderWrap>
        {/* <UserProvider> */}
        <LocalizationProviderWrap>
          <PageTitleWrap />
          <ScrollTopProviderWrap />
          <SnackbarProviderWrap>
            <NiceModal.Provider>{children}</NiceModal.Provider>
          </SnackbarProviderWrap>
        </LocalizationProviderWrap>
        {/* </UserProvider> */}
      </ThemeProviderWrap>
      {/* </ReactQueryProvider> */}
    </ApolloProvider>
  );
};
