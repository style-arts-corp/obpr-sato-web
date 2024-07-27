import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { accordionDetailsClasses } from '@mui/material/AccordionDetails';

export const ListItemLinkLink = styled(NavLink)(({ theme }) => ({
  color: '#000',
  fontSize: '0.875rem',
  textDecoration: 'none',
  display: 'block',
  width: '100%',
  height: '100%',
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  [`.${accordionDetailsClasses.root} &::before`]: {
    // NOTE: わざと半角スペースでインデントを調整している
    content: '"- "',
  },
}));
