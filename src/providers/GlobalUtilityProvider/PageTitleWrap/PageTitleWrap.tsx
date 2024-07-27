import { useLayoutEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { useTitle } from '@/providers/GlobalUtilityProvider/PageTitleWrap/useTitle';

export const PageTitleWrap: React.FC<PropsWithChildren> = () => {
  const title = useTitle();

  // NOTE: react-helmet-asyncではタイトルが変わらない事があったので修正
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);

  return <title>{title}</title>;
};
