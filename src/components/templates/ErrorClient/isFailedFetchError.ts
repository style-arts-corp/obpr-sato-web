export const FAILED_FETCH_ERROR_MESSAGE =
  'Failed to fetch dynamically imported module';

export const isFailedFetchError = (message: string): boolean =>
  message.includes(FAILED_FETCH_ERROR_MESSAGE);
