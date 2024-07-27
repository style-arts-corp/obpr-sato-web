import { styled } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import type { ListItemProps } from '@mui/material/ListItem';

type NavItemTitleProps = ListItemProps;

export const NavListTitle: React.FC<NavItemTitleProps> = (props) => (
  <StyledListItem component="p" {...props} />
);

const StyledListItem = styled(ListItem)`
  margin: 0;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
`;
