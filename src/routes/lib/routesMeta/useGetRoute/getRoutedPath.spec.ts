import { getRoutedPath } from './getRoutedPath';

describe('when valid parsed', () => {
  it('should return the routed path', () => {
    const actual = getRoutedPath('/test/123', { id: '123' });
    const expected = '/test/:id';

    expect(actual).toBe(expected);
  });
});

describe('when invalid parsed', () => {
  it('should return the no changed params path', () => {
    const actual = getRoutedPath('/test/123/foo/baz/', {
      id: '123',
      barcode: 'bar',
      foo: 'baz',
    });
    const expected = '/test/:id/foo/:foo/';

    expect(actual).toBe(expected);
  });
});
