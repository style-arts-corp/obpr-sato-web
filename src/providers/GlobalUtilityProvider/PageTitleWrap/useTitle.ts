import { useGetRoute } from '@/routes/lib/routesMeta/useGetRoute';

const DEFAULT_TITLE = 'Style Arts';

export const useTitle = (): string => {
  const routeMeta = useGetRoute();
  if (routeMeta === null) return DEFAULT_TITLE;

  const pageTitle = routeMeta.title;

  return `${pageTitle} | ${DEFAULT_TITLE}`;
};
