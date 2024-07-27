import Typography from '@mui/material/Typography';
import { useContentTitle } from './useContentTitle';

export const ContentTitle: React.FC = () => {
  const { pageTitle } = useContentTitle();

  return (
    <Typography component="h1" sx={{ display: 'inline' }} variant="h1">
      {pageTitle}
    </Typography>
  );
};
