import { Chip, chipClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SettingMenu } from '@/components/organisms/Header/SettingMenu/SettingMenu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

type HeaderProps = {
  isProduction: boolean;
  defaultOpen?: boolean;
  belongsName: string;
  email?: string;
  userName?: string;
  onChangeTenant: () => void;
  onLogout: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  isProduction,
  defaultOpen,
  belongsName,
  email,
  userName,
  onChangeTenant: handleChangeTenant,
  onLogout: handleLogout,
}) => (
  <AppBar
    position="static"
    sx={{ color: '#FAFAFA', backgroundColor: '#212121' }}
  >
    <HeaderToolBar>
      <Link
        href="/"
        sx={{
          textDecoration: 'none',
          display: 'flex',
          color: '#fff',
        }}
      >
        <img alt="" src="/logo.png" style={{ height: '80px' }} />
        <Typography sx={{ fontSize: '1.125rem', ml: 1 }}>
          Style Arts テンプレート
        </Typography>
      </Link>
      {!isProduction && (
        <Chip
          color="warning"
          label="検証環境"
          sx={{
            ml: 2,
            borderRadius: 1,
            fontWeight: 'bold',
            fontSize: '0.9rem',
            height: '24px',
            [`& .${chipClasses.label}`]: {
              px: 1,
            },
          }}
        />
      )}
      <Box sx={{ marginLeft: 'auto' }}>
        <SettingMenu
          belongsName={belongsName}
          defaultOpen={defaultOpen}
          email={email}
          userName={userName}
          onChangeTenant={handleChangeTenant}
          onLogout={handleLogout}
        />
      </Box>
    </HeaderToolBar>
  </AppBar>
);

const HeaderToolBar = styled(Toolbar)(() => ({
  // 詳細度を上げるため指定
  'header > &': {
    minHeight: 48,
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
}));
