import { lazy } from 'react';
import type { IRoutes } from '@/routes/lib/routerTyping';

const PageLayout = lazy(
  async () => await import('@/components/atoms/PageLayout'),
);
const DemoTopPage = lazy(async () => await import('@/pages/demo'));
const DemoCreatePage = lazy(async () => await import('@/pages/demo/create'));
const DemoDetailPage = lazy(async () => await import('@/pages/demo/[id]'));
const DemoEditPage = lazy(async () => await import('@/pages/demo/[id]/edit'));

export const demoRouterPaths = [
  {
    path: '/demo',
    element: <PageLayout />,
    children: [
      {
        path: '',
        element: <DemoTopPage />,
      },
      {
        path: 'create',
        element: <DemoCreatePage />,
      },
      {
        path: ':id',
        element: <DemoDetailPage />,
      },
      {
        path: ':id/edit',
        element: <DemoEditPage />,
      },
    ],
  },
] as const satisfies IRoutes;
