import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import type { IRoutes, AsRouteConfig } from './lib/routerTyping';
import { asBrowserRouter } from './lib/routerTyping';
import { demoRouterPaths } from './routers';

const PageLayout = lazy(
  async () => await import('@/components/atoms/PageLayout'),
);
const TopPage = lazy(async () => await import('@/pages/index'));

// TODO: 後ほどそれぞれのfeatureごとに分割する
export const routerPaths = [
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: '',
        element: <TopPage />,
      },
    ],
  },
  ...demoRouterPaths,
  {
    path: '*',
    element: <PageLayout />,
  },
] as const satisfies IRoutes;

export type RouteConfig = AsRouteConfig<typeof routerPaths>;

export const AppRoutes: React.FC = () => {
  const element = useRoutes(asBrowserRouter(routerPaths));

  return element;
};
