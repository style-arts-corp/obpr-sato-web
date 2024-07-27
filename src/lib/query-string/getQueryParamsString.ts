import queryString from 'query-string';

export const getQueryParamString = (params: Record<string, unknown>): string =>
  queryString.stringify(params, {
    skipNull: true,
  });
