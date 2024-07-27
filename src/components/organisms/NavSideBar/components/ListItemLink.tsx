import { ListItemBase } from '@/components/organisms/NavSideBar/components/ListItemBase';
import type { ListItemBaseProps } from '@/components/organisms/NavSideBar/components/ListItemBase';
import { ListItemLinkLink } from '@/components/organisms/NavSideBar/components/ListItemLinkLink';
import { routesMeta } from '@/routes/lib/routesMeta';
import type { Path } from '@/routes/lib/routesMeta/type';
import { pagePath } from '@/routes/utils';

type ListItemLinkProps = {
  to: Path;
} & Omit<ListItemBaseProps, 'children'>;

export const ListItemLink: React.FC<ListItemLinkProps> = ({ to, ...props }) => (
  // const { theme, isDisabled, isDisplayed, isAllowAccess } = useListItemLink(to);
  // if (!isDisplayed || !isAllowAccess) return null;

  <ListItemBase {...props}>
    <ListItemLinkLink
      sx={{
        // pointerEvents: isDisabled ? 'none' : 'auto',
        // backgroundColor: isDisabled ? theme.palette.grey[200] : 'inherit',
        pointerEvents: 'auto',
        backgroundColor: 'inherit',
      }}
      to={pagePath(to)}
    >
      {routesMeta[to].title}
    </ListItemLinkLink>
  </ListItemBase>
);
