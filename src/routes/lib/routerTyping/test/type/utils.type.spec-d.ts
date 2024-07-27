import type {
  FlattenSlash,
  RemoveTrailingSlash,
} from '@/routes/lib/routerTyping/type/utils.type';

describe('FlattenSlash', () => {
  type literal = '//foo//bar///baz//foo/bar/baz';
  type Input = FlattenSlash<literal>;

  type Expect = '/foo/bar/baz/foo/bar/baz';

  it('remove duplicated slashes', () => {
    expectTypeOf<Input>().toEqualTypeOf<Expect>();
  });
});

describe('RemoveTrailingSlash', () => {
  type literal = '/foo/';
  type Input = RemoveTrailingSlash<literal>;

  type Expect = '/foo';

  it('remove suffix slashes', () => {
    expectTypeOf<Input>().toEqualTypeOf<Expect>();
  });
});
