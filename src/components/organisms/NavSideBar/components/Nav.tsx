import { styled } from '@mui/material/styles';

export const Nav = styled('nav')(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  borderRight: `1px solid ${theme.palette.divider}`,
  minWidth: '250px',
  minHeight: 'calc(100vh - 48px)', // 48px = header,
}));
