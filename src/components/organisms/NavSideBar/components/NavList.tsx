import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import type { ListProps } from '@mui/material/List';

type NavListProps = ListProps;

export const NavList: React.FC<NavListProps> = (props) => (
  <StyledNavList {...props} />
);

// TODO: 非表示処理をまともにしたい
const StyledNavList = styled(List)`
  padding: 0;
  '&:empty': {
    display: 'none
  }
`;
