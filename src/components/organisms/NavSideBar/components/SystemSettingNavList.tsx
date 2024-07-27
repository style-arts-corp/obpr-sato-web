import { ListItemLink } from '@/components/organisms/NavSideBar/components/ListItemLink';
import { NavList } from '@/components/organisms/NavSideBar/components/NavList';
import { NavListTitle } from '@/components/organisms/NavSideBar/components/NavListTitle';
import SecurityIcon from '@mui/icons-material/Security';

export const SystemSettingNavList: React.FC = () => (
  <>
    <NavListTitle>
      <SecurityIcon fontSize="medium" sx={{ mr: 1 }} />
      システム管理
    </NavListTitle>
    <NavList>
      <ListItemLink to="/" />
      <ListItemLink to="/demo" />
      <ListItemLink to="/demo/create" />
    </NavList>
  </>
);
