import { ErrorLayout } from '@/feature/error/components/templates/ErrorLayout';
import ErrorIcon from '@mui/icons-material/Error';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const ErrorDefaultPage: React.FC = () => {
  const handleClick = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    console.error('TODO: 再ログインする');
  };

  return (
    <ErrorLayout
      iconElement={<ErrorIcon sx={{ fontSize: '25rem' }} />}
      mainTitle="Unexpected"
      subTitle="Error has Occurred"
    >
      <Typography>意図しないエラーが発生しました。</Typography>
      <Typography>
        再リロードまたは再ログインを行なって、操作をやり直してください。
      </Typography>
      <Typography>
        同様のエラーが何回も発生する場合は、管理者にお問い合わせ下さい。
      </Typography>

      <Stack sx={{ mt: 8, flexDirection: 'row' }}>
        <Button
          color="secondary"
          size="large"
          sx={{ color: '#000', mr: 2 }}
          variant="contained"
          onClick={handleClick}
        >
          画面をリロードする
        </Button>
        <Button
          color="error"
          size="large"
          variant="contained"
          onClick={handleLogout}
        >
          再ログインする
        </Button>
      </Stack>
    </ErrorLayout>
  );
};
