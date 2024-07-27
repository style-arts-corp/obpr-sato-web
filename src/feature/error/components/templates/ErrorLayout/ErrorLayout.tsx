import type { PropsWithChildren, ReactElement } from 'react';
import { ThemeProviderWrap } from '@/providers/GlobalUtilityProvider/ThemeProvider';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type ErrorLayoutProps = {
  mainTitle: string;
  subTitle?: string;
  iconElement: ReactElement;
};

export const ErrorLayout: React.FC<PropsWithChildren<ErrorLayoutProps>> = ({
  children,
  mainTitle,
  subTitle,
  iconElement,
}) => (
  // TODO: 一旦エラーが出るので解消する
  <ThemeProviderWrap>
    {/* エラーの範囲を調整する */}
    <Dialog sx={{ p: 0 }} fullScreen open>
      <Stack
        direction="row"
        sx={{
          background: '#000',
          color: '#fff',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
          }}
        >
          <Typography sx={{ fontSize: '5rem' }} variant="h1">
            {mainTitle}
          </Typography>
          {subTitle !== undefined && (
            <Typography sx={{ fontSize: '3rem' }} variant="h2">
              {subTitle}
            </Typography>
          )}
          <Box sx={{ mt: 2, width: '100%', textAlign: 'center' }}>
            {iconElement}
          </Box>
        </Stack>
        <Stack
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '50%',
          }}
        >
          {children}
        </Stack>
      </Stack>
    </Dialog>
  </ThemeProviderWrap>
);
