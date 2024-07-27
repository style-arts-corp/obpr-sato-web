import { useGetRoute } from '@/routes/lib/routesMeta';
import type { Path, RoutesMeta } from '@/routes/lib/routesMeta/type';

type BreadCrumbs = RoutesMeta[Path]['breadCrumbs'];

export const useBreadCrumbs = (): BreadCrumbs => {
  const route = useGetRoute();
  if (route === null) return [];

  const breadCrumbs = route.breadCrumbs;

  return breadCrumbs.map((x) => ({
    ...x,
    isAccessible: false,
    // x.isAccessible && index !== breadCrumbs.length - 1,
  }));
};
