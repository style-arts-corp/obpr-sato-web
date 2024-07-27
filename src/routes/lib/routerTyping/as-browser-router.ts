import type { RouteObject } from 'react-router-dom';
import type { IRoutes } from '@/routes/lib/routerTyping';

export const asBrowserRouter = (config: IRoutes): RouteObject[] =>
  config as RouteObject[];
