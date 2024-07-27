import { ErrorLayout } from '@/feature/error/components/templates/ErrorLayout';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Hourglass from './hourglass.svg';

const DEFAULT_MESSAGE = `
セッションがタイムアウトしたか、ユーザーが登録されておりません。
再ログインしてください。
再ログインしてもこの画面が表示される場合は、管理者にお問い合わせください。
`.trim();

type Error401Props = {
  message?: string;
};

export const Error401: React.FC<Error401Props> = ({
  message = DEFAULT_MESSAGE,
}) => {
  const handleClick = () => {
    console.error('TODO: 再ログインする');
  };

  return (
    <ErrorLayout
      iconElement={<img alt="" src={Hourglass} style={{ width: '60%' }} />}
      mainTitle="401"
      subTitle="Unauthorized"
    >
      {/* TODO: 共通化する */}
      <Typography
        sx={{ whiteSpace: 'pre-wrap', textAlign: 'center', lineHeight: 2 }}
      >
        {message}
      </Typography>

      <Button
        color="secondary"
        size="large"
        sx={{ mt: 8, color: '#000' }}
        variant="contained"
        onClick={handleClick}
      >
        再ログインする
      </Button>
    </ErrorLayout>
  );
};
