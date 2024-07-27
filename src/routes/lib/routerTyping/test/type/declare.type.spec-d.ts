import { defineRoutes } from '@/routes/lib/routerTyping/define-routes';
import type {
  IRoutes,
  AsRouteConfig,
  ToRouteUnion,
  MergeChild,
  AsObjectShape,
  ParsePathParams,
} from '@/routes/lib/routerTyping/type/declare.type';

const HomePage = undefined as unknown as JSX.Element;
const ExamplePage = undefined as unknown as JSX.Element;
const NestListPage = undefined as unknown as JSX.Element;
const NestDetailPage = undefined as unknown as JSX.Element;

describe('defineRoutes', () => {
  const routes = defineRoutes([
    {
      path: '/',
      element: HomePage,
    },
    {
      path: '/example',
      element: ExamplePage,
    },
    {
      path: '/nests',
      element: NestListPage,
      children: [
        {
          path: ':nestId',
          element: NestDetailPage,
        },
      ],
    },
  ] as const);

  type RouteConfig = AsRouteConfig<typeof routes>;
  type Expect = {
    '/': {
      path: '/';
    };
    '/example': {
      path: '/example';
    };
    '/nests': {
      path: '/nests';
    };
    '/nests/:nestId': {
      path: '/nests/:nestId';
    } & {
      params: {
        nestId: string;
      };
    };
  };

  it('should be mapped as expected format.', () => {
    expectTypeOf<RouteConfig>().toEqualTypeOf<Expect>();
  });
});

describe('AsRouteConfig', () => {
  const routes = [
    {
      path: '/',
      element: HomePage,
    },
    {
      path: '/example',
      element: ExamplePage,
    },
    {
      path: '/nests',
      element: NestListPage,
      children: [
        {
          path: ':nestId',
          element: NestDetailPage,
        },
      ],
    },
  ] as const satisfies IRoutes;

  type RouteConfig = AsRouteConfig<typeof routes>;
  type Expect = {
    '/': {
      path: '/';
    };
    '/example': {
      path: '/example';
    };
    '/nests': {
      path: '/nests';
    };
    '/nests/:nestId': {
      path: '/nests/:nestId';
    } & {
      params: {
        nestId: string;
      };
    };
  };

  it('should be mapped as expected format.', () => {
    expectTypeOf<RouteConfig>().toEqualTypeOf<Expect>();
  });
});

describe('ToRouteUnion', () => {
  const routes = [
    {
      path: '/',
      element: HomePage,
    },
    {
      path: '/example',
      element: ExamplePage,
    },
    {
      path: '/nests',
      element: NestListPage,
      children: [
        {
          path: ':nestId',
          element: NestDetailPage,
        },
      ],
    },
  ] as const satisfies IRoutes;

  type RouteUnion = ToRouteUnion<typeof routes>;
  type Expect =
    | {
        readonly path: '/';
        readonly element: JSX.Element;
      }
    | {
        readonly path: '/example';
        readonly element: JSX.Element;
      }
    | {
        readonly path: '/nests';
        readonly element: JSX.Element;
        readonly children: readonly [
          {
            readonly path: ':nestId';
            readonly element: JSX.Element;
          },
        ];
      }
    | {
        path: '/nests/:nestId';
      };

  it('should be mapped as expected format.', () => {
    expectTypeOf<RouteUnion>().toEqualTypeOf<Expect>();
  });
});

describe('MergeChild', () => {
  const routes = [
    {
      path: '/',
      element: HomePage,
    },
    {
      path: '/example',
      element: ExamplePage,
    },
    {
      path: '/nests',
      element: NestListPage,
      children: [
        {
          path: ':nestId',
          element: NestDetailPage,
        },
      ],
    },
  ] as const satisfies IRoutes;

  type Actual =
    typeof routes extends ReadonlyArray<infer I> ? MergeChild<I> : never;
  type Expect =
    | {
        readonly path: '/';
        readonly element: JSX.Element;
      }
    | {
        readonly path: '/example';
        readonly element: JSX.Element;
      }
    | {
        readonly path: '/nests';
        readonly element: JSX.Element;
        readonly children: readonly [
          {
            readonly path: ':nestId';
            readonly element: JSX.Element;
          },
        ];
      }
    | {
        path: '/nests/:nestId';
      };

  it('should be mapped as expected format.', () => {
    expectTypeOf<Actual>().toEqualTypeOf<Expect>();
  });
});

describe('AsObjectShape', () => {
  type MergedChild =
    | {
        readonly path: '/';
        readonly element: JSX.Element;
      }
    | {
        readonly path: '/example';
        readonly element: JSX.Element;
      }
    | {
        readonly path: '/nests';
        readonly element: JSX.Element;
        readonly children: readonly [
          {
            readonly path: ':nestId';
            readonly element: JSX.Element;
          },
        ];
      }
    | {
        path: '/nests/:nestId';
      };

  type Actual = AsObjectShape<MergedChild>;
  type Expect = {
    '/example': {
      path: '/example';
    };
    '/nests': {
      path: '/nests';
    };
    '/': {
      path: '/';
    };
    '/nests/:nestId': {
      path: '/nests/:nestId';
    } & {
      params: {
        nestId: string;
      };
    };
  };

  it('should be mapped as expected format.', () => {
    expectTypeOf<Actual>().toEqualTypeOf<Expect>();
  });
});

describe('ParsePathParams', () => {
  describe('when path parameter is only one', () => {
    type Input = '/nests/:nestId';

    type Actual = ParsePathParams<Input>;
    type Expect = {
      nestId: string;
    };

    it('should be mapped as expected format.', () => {
      expectTypeOf<Actual>().toEqualTypeOf<Expect>();
    });
  });

  describe('when path parameter is multiple', () => {
    type Input = '/nests/:nestId1/foo/:nestId2/bar/baz/:nestId3';

    type Actual = ParsePathParams<Input>;
    type Expect = {
      nestId1: string;
      nestId2: string;
      nestId3: string;
    };

    it('should be mapped as expected format.', () => {
      expectTypeOf<Actual>().toEqualTypeOf<Expect>();
    });
  });
});
