import { styled } from '@mui/material/styles';
import { ListItemAccordionAccordion } from '@/components/organisms/NavSideBar/components/ListItemAccordionAccordion';
import { ListItemAccordionAccordionContent } from '@/components/organisms/NavSideBar/components/ListItemAccordionAccordionContent';
import { ListItemAccordionAccordionTitle } from '@/components/organisms/NavSideBar/components/ListItemAccordionAccordionTitle';
import { ListItemLink } from '@/components/organisms/NavSideBar/components/ListItemLink';
import { NavList } from '@/components/organisms/NavSideBar/components/NavList';
import { accordionDetailsClasses } from '@mui/material/AccordionDetails';
import { listClasses } from '@mui/material/List';
import ListItem, { listItemClasses } from '@mui/material/ListItem';
// import { useListItemAccordion } from '@/components/organisms/NavSideBar/hooks/useListItemAccordion';
import type { Path } from '@/routes/lib/routesMeta/type';

export type ListItemAccordionProps = {
  paths: Path[];
  title: string;
};

export const ListItemAccordion: React.FC<ListItemAccordionProps> = ({
  paths,
  title,
}) => (
  // const { expanded, handleExpanded } = useListItemAccordion(paths);

  <StyledListItem>
    <ListItemAccordionAccordion>
      <ListItemAccordionAccordionTitle>{title}</ListItemAccordionAccordionTitle>
      <ListItemAccordionAccordionContent>
        <NavList>
          {paths.map((url) => (
            <ListItemLink key={url} to={url} />
          ))}
        </NavList>
      </ListItemAccordionAccordionContent>
    </ListItemAccordionAccordion>
  </StyledListItem>
);

const StyledListItem = styled(ListItem)(({ theme }) => ({
  [`&.${listItemClasses.root}:not(:first-of-type)`]: {
    // FIXME: 他と合わせたtheme.palette.dividerだと濃くなりすぎてしまったのでgrey300で指定する
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    padding: 0,
  },
  // TODO: 非表示処理をまともにしたい
  [`&:has(.${accordionDetailsClasses.root} .${listClasses.root}:empty)`]: {
    display: 'none',
  },
}));
