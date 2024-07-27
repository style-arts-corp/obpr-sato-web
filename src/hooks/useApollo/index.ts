import { useMemo } from 'react';
import type { NormalizedCacheObject } from '@apollo/client';
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_API_URL,
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': import.meta.env.VITE_X_HASURA_ADMIN_SECRET ?? '',
  },
});

export const useApollo = (): ApolloClient<NormalizedCacheObject> => {
  const link = ApolloLink.from([httpLink]);

  return useMemo(() => initializeApollo(link), [link]);
};

const initializeApollo = (link: ApolloLink) => {
  const _apolloClient = apolloClient ?? createApolloClient(link);
  if (apolloClient !== undefined) apolloClient = _apolloClient;

  return _apolloClient;
};

const createApolloClient = (link: ApolloLink) =>
  new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
