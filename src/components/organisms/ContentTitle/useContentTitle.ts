import { useGetRoute } from '@/routes/lib/routesMeta';

type Result = {
  pageTitle: string;
};

export const useContentTitle = (): Result => {
  const route = useGetRoute();

  return {
    pageTitle: route?.title ?? '',
  };
};
