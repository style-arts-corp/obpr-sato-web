import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary';

type NavAccordionTitleProps = Omit<AccordionSummaryProps, 'expandIcon'>;

export const ListItemAccordionAccordionTitle: React.FC<
  NavAccordionTitleProps
> = (props) => (
  <StyledAccordionSummary {...props} expandIcon={<ExpandMoreIcon />} />
);

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  fontSize: '0.875rem',
  padding: `${theme.spacing(1)}`,
  paddingLeft: `${theme.spacing(3)}`,
  minHeight: 'unset',
  [`& .${accordionSummaryClasses.content}, & .${accordionSummaryClasses.content}.${accordionSummaryClasses.expanded}`]:
    {
      margin: 0,
    },
  [`&.${accordionSummaryClasses.expanded}`]: {
    minHeight: 'unset',
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    transform: 'rotate(-90deg)',
  },
  [`&.${accordionSummaryClasses.expanded} .${accordionSummaryClasses.expandIconWrapper}`]:
    {
      transform: 'rotate(0deg)',
    },
}));
