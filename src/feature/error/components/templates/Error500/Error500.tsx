import { ErrorLayout } from '@/feature/error/components/templates/ErrorLayout';
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Error500Props = {
  message?: string;
};

const DEFAULT_MESSAGE = `
サーバーエラーが発生しました。
お探しのページを表示できません。
再度時間をおいてアクセスしてください。
`.trim();

export const Error500: React.FC<Error500Props> = ({
  message = DEFAULT_MESSAGE,
}) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <ErrorLayout
      iconElement={<DesktopAccessDisabledIcon sx={{ fontSize: '25rem' }} />}
      mainTitle="500"
      subTitle="Internal Server Error"
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
        画面をリロードする
      </Button>
    </ErrorLayout>
  );
};
