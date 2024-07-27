import type { RouteConfig } from '@/routes/router';

export type Path = Exclude<keyof RouteConfig, '*'>;

type ModelPermissionKey =
  | 'owner'
  | 'admin'
  | 'system_admin'
  | 'normal'
  | 'staff';

type Meta = {
  title: string;
  accessControl: {
    allowPermissions: ModelPermissionKey[];
  };
  breadCrumbs: Array<{
    label: string;
    path: Path;
    isAccessible: boolean;
  }>;
};

export type RoutesMeta = {
  [key in Path]: Meta;
};
