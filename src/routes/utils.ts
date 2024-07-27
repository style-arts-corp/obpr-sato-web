import type { RouteConfig } from '@/routes';
import { generateUtils } from '@/routes/lib/routerTyping';

export const { pagePath } = generateUtils<RouteConfig>();
