import {
  FAILED_FETCH_ERROR_MESSAGE,
  isFailedFetchError,
} from './isFailedFetchError';

const context = describe;

describe('isFailedFetchError', () => {
  context('error message is contained', () => {
    it('should return true', () => {
      const input = FAILED_FETCH_ERROR_MESSAGE;
      const actual = isFailedFetchError(input);

      expect(actual).toBe(true);
    });
  });
  context('error message is not contained', () => {
    it('should return false', () => {
      const input = 'foo';
      const actual = isFailedFetchError(input);

      expect(actual).toBe(false);
    });
  });
  context('error message & extra message is contained', () => {
    it('should return true', () => {
      const input = `foo${FAILED_FETCH_ERROR_MESSAGE}bar`;
      const actual = isFailedFetchError(input);

      expect(actual).toBe(true);
    });
  });
});
