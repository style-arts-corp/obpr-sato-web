import { matchRoutes, useLocation } from 'react-router-dom';
import { routerPaths } from '@/routes';
import { asBrowserRouter } from '@/routes/lib/routerTyping';
import { routesMeta } from '@/routes/lib/routesMeta/routesMeta';
import { getRoutedPath } from './getRoutedPath';
import { isPathname } from './isPathname';

export const useGetRoute = ():
  | (typeof routesMeta)[keyof typeof routesMeta]
  | null => {
  const { pathname: currentPathname } = useLocation();
  const routes = asBrowserRouter(routerPaths);

  const results = matchRoutes(routes, currentPathname);
  const routeObject = results?.find((x) => x.pathname === currentPathname);
  if (results === null || routeObject === undefined) return null;

  const { params } = routeObject;
  const parsedPath = getRoutedPath(currentPathname, params);
  if (!isPathname(parsedPath)) return null;

  return routesMeta[parsedPath];
};
