import { styled } from '@mui/material/styles';
import ListItem, { listItemClasses } from '@mui/material/ListItem';
import type { ListItemProps } from '@mui/material/ListItem';

export type ListItemBaseProps = ListItemProps;

export const ListItemBase = styled(ListItem)(({ theme }) => ({
  [`&.${listItemClasses.root}`]: {
    padding: 0,
    backgroundColor: '#fff',
  },
  [`&.${listItemClasses.root}:not(:first-of-type)`]: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));
