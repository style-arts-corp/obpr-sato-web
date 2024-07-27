import { lazy } from 'react';
import type { IRoutes } from '@/routes/lib/routerTyping';

const PageLayout = lazy(
  async () => await import('@/components/atoms/PageLayout'),
);

export const demoRouterPaths = [
  {
    path: '/demo',
    element: <PageLayout />,
    children: [
      {
        path: '',
        element: <>top</>,
      },
      {
        path: 'create',
        element: <>create</>,
      },
      {
        path: ':id',
        element: <>detail</>,
      },
      {
        path: ':id/edit',
        element: <>edit</>,
      },
    ],
  },
] as const satisfies IRoutes;
