import { useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logout from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type SettingMenuProps = {
  defaultOpen?: boolean;
  belongsName: string;
  email?: string;
  userName?: string;
  onLogout: () => void;
  onChangeTenant: () => void;
};

export const SettingMenu: React.FC<SettingMenuProps> = ({
  defaultOpen = false,
  belongsName,
  email,
  userName,
  onLogout: handleLogout,
  onChangeTenant: handleChangeTenant,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = defaultOpen || !(anchorEl == null);

  const handleClickButton = useCallback(
    (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      setAnchorEl(e.currentTarget);
    },
    [setAnchorEl],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <Box>
      <Button
        startIcon={
          email === undefined && userName === undefined && <AccountCircleIcon />
        }
        sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}
        onClick={handleClickButton}
      >
        <Stack direction="row">
          <Typography
            component="span"
            sx={{ color: 'gray', fontSize: '0.875rem' }}
          >
            {belongsName}
          </Typography>
          <Typography
            component="span"
            sx={{ ml: 4, color: '#fff', fontSize: '0.875rem' }}
          >
            {userName}
          </Typography>
        </Stack>
      </Button>
      <Menu
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={open}
        sx={{ color: '#000', maxWidth: 300 }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        onClose={handleClose}
      >
        <MenuItem sx={{ cursor: 'default', userSelect: 'text' }} disableRipple>
          <Typography noWrap>{email}</Typography>
        </MenuItem>

        <Divider />

        <MenuItem sx={{ p: 0 }} disableGutters>
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              py: 1,
              px: 2,
              width: '100%',
            }}
            variant="text"
            onClick={handleChangeTenant}
          >
            <StyledIconWrapper>
              <SettingsIcon fontSize="small" />
            </StyledIconWrapper>
            <Typography
              sx={{
                fontSize: '0.875rem',
                color: 'text.primary',
                boxSizing: 'border-box',
                pt: 0.25,
              }}
            >
              所属拠点変更
            </Typography>
          </Button>
        </MenuItem>
        <MenuItem sx={{ p: 0 }} disableGutters>
          <Button
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              py: 1,
              px: 2,
              width: '100%',
            }}
            variant="text"
            onClick={handleLogout}
          >
            <StyledIconWrapper>
              <Logout fontSize="small" />
            </StyledIconWrapper>
            <Typography
              sx={{
                fontSize: '0.875rem',
                color: 'text.primary',
                boxSizing: 'border-box',
                pt: 0.25,
              }}
            >
              ログアウト
            </Typography>
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
};

const StyledIconWrapper = styled(ListItemIcon)(({ theme }) => ({
  [`&.${listItemIconClasses.root}`]: {
    minWidth: '0px',
    marginRight: theme.spacing(1),
  },
}));
