import { ErrorLayout } from '@/feature/error/components/templates/ErrorLayout';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Error403Props = {
  message?: string;
};

const DEFAULT_MESSAGE = `
このページを閲覧する権限がありません。
別アカウントでログインし直していただくか、管理者に連絡して権限追加の依頼をしてください。
`.trim();

export const Error403: React.FC<Error403Props> = ({
  message = DEFAULT_MESSAGE,
}) => {
  const handleClick = () => {
    console.error('TODO: 再ログインする');
  };

  return (
    <ErrorLayout
      iconElement={<DoDisturbAltIcon sx={{ fontSize: '25rem' }} />}
      mainTitle="403"
      subTitle="Forbidden"
    >
      {/* TODO: 共通化する */}
      <Typography
        sx={{ whiteSpace: 'pre-wrap', textAlign: 'center', lineHeight: 2 }}
      >
        {message}
      </Typography>

      {/* TODO: 一旦ページの見た目のみ実装して後程具体的な対応を考える */}
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
