import type { PropsWithChildren } from 'react';

// TODO: 使う認証プロバイダーによって実装を変える
export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) =>
  children;
