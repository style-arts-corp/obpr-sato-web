import { Nav } from '@/components/organisms/NavSideBar/components/Nav';
import { SystemSettingNavList } from '@/components/organisms/NavSideBar/components/SystemSettingNavList';

export const NavSideBar: React.FC = () => (
  <Nav>
    <SystemSettingNavList />
  </Nav>
);
