import { routesMeta } from '@/routes/lib/routesMeta/routesMeta';
import type { Path } from '@/routes/lib/routesMeta/type';

export const isPathname = (val: string): val is Path =>
  Object.keys(routesMeta).includes(val);
