import { ErrorLayout } from '@/feature/error/components/templates/ErrorLayout';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Error404Props = {
  message?: string;
};

const DEFAULT_MESSAGE = `
ページが見つかりません
お探しのページは移動または削除された可能性があります。
`.trim();

export const Error404: React.FC<Error404Props> = ({
  message = DEFAULT_MESSAGE,
}) => {
  const handleClick = () => {
    window.location.replace('/');
  };

  return (
    <ErrorLayout
      iconElement={<SearchOffIcon sx={{ fontSize: '25rem' }} />}
      mainTitle="404"
      subTitle="Not Found"
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
        トップに戻る
      </Button>
    </ErrorLayout>
  );
};
