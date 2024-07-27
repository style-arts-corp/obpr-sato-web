import type {
  castRouterRoute,
  reactRouterParameters,
} from 'storybook-addon-remix-react-router';
import type { RouteConfig } from '@/routes';

type PathParams<T extends keyof RouteConfig> = RouteConfig[T] extends {
  params: Record<PropertyKey, string>;
}
  ? {
      pathParams: RouteConfig[T]['params'];
    }
  : {
      pathParams?: never;
    };

type ReactRouterParameters = typeof reactRouterParameters;
type Args<T> = T extends (props: infer U) => unknown ? U : never;
type ReactRouterParametersArgs = Args<ReactRouterParameters>;

type Result<T extends keyof RouteConfig> = {
  path: T;
  location?: Omit<ReactRouterParametersArgs['location'], 'pathParams'>;
  routing?: Omit<ReturnType<typeof castRouterRoute>, 'path'>;
} & PathParams<T>;

export const createRoute = <T extends keyof RouteConfig>({
  path,
  pathParams,
  location,
  routing,
}: Result<T>): ReturnType<ReactRouterParameters> => ({
  location: {
    ...location,
    pathParams,
  },
  routing: {
    ...routing,
    path,
  },
});
