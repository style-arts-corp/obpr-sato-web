import type { ReadonlyObjectDeep } from 'type-fest/source/readonly-deep';
import type { RoutesMeta } from '@/routes/lib/routesMeta/type';

// TODO: children or componentを持たないroutesは削除する
/**
 * 各ぺージの権限・メタ情報を一元管理する
 */
export const routesMeta = {
  '/': {
    title: 'Top',
    accessControl: {
      allowPermissions: [
        // NOTE: 全ての権限でトップページを表示する
        'owner',
        'admin',
        'system_admin',
        'normal',
        'staff',
      ],
    },
    breadCrumbs: [],
  },
  '/demo': {
    title: 'デモトップページ',
    accessControl: {
      allowPermissions: ['owner', 'admin', 'system_admin', 'normal', 'staff'],
    },
    breadCrumbs: [
      {
        label: 'トップページ',
        path: '/',
        isAccessible: false,
      },
    ],
  },
  '/demo/create': {
    title: 'デモ作成ページ',
    accessControl: {
      allowPermissions: ['owner', 'admin', 'system_admin', 'normal', 'staff'],
    },
    breadCrumbs: [
      {
        label: 'テスト用ページ',
        path: '/demo',
        isAccessible: false,
      },
    ],
  },
  '/demo/:id': {
    title: 'デモ詳細ページ',
    accessControl: {
      allowPermissions: ['owner', 'admin', 'system_admin', 'normal', 'staff'],
    },
    breadCrumbs: [
      {
        label: 'テスト用ページ',
        path: '/demo',
        isAccessible: false,
      },
    ],
  },
  '/demo/:id/edit': {
    title: 'デモ編集ページ',
    accessControl: {
      allowPermissions: ['owner', 'admin', 'system_admin', 'staff'],
    },
    breadCrumbs: [
      {
        label: 'テスト用ページ',
        path: '/demo',
        isAccessible: false,
      },
    ],
  },
} as const satisfies ReadonlyObjectDeep<RoutesMeta>;
