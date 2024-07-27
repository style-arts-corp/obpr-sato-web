import { useCallback } from 'react';
import { ENV_FLAG } from '@/constant/env';
// import { useNiceModalShow } from '@/hooks/useNiceModalShow';
import { Header } from './Presenter';

export const HeaderContainer: React.FC = () => {
  const belongsName = `スタイルアーツ （相曽）`;
  const userName = '相曽結';
  const email = 'yui@style-arts.jp';

  const handleOpenModal = useCallback(() => {
    console.log('処理を書く');
  }, []);

  const handleLogout = useCallback(() => {
    console.log('ログアウト処理を書く');
  }, []);

  // NOTE: 本番環境以外は開発環境用のチップを表示する
  // NOTE: chromatic/storybook上はbuildされているため、viteのdefault設定であるproductionとなり、チップが表示されていない状態でスナップショットが撮られる
  const isProduction = ENV_FLAG.isProduction;

  return (
    <Header
      belongsName={belongsName}
      email={email}
      isProduction={isProduction}
      userName={userName}
      onChangeTenant={handleOpenModal}
      onLogout={handleLogout}
    />
  );
};
