import { ListItemAccordion } from '@/components/organisms/NavSideBar/components/ListItemAccordion';
import type { ListItemAccordionProps } from '@/components/organisms/NavSideBar/components/ListItemAccordion';
import { ListItemLink } from '@/components/organisms/NavSideBar/components/ListItemLink';
import { NavList } from '@/components/organisms/NavSideBar/components/NavList';
import { NavListTitle } from '@/components/organisms/NavSideBar/components/NavListTitle';
import SecurityIcon from '@mui/icons-material/Security';

const GROUP_URLS: ListItemAccordionProps['paths'] = [
  '/demo',
  '/demo/create',
] as const;

export const DemoNavList: React.FC = () => (
  <>
    <NavListTitle>
      <SecurityIcon fontSize="medium" sx={{ mr: 1 }} />
      サンプル
    </NavListTitle>
    <NavList>
      <ListItemLink to="/" />
      <ListItemAccordion paths={GROUP_URLS} title="デモ" />
    </NavList>
  </>
);
