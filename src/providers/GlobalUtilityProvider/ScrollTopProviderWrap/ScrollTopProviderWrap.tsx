import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollTopProviderWrap: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [hash, pathname]);

  return children;
};
