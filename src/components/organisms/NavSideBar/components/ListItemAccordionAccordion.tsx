import { styled } from '@mui/material/styles';
import MuiAccordion, { accordionClasses } from '@mui/material/Accordion';

export const ListItemAccordionAccordion = styled(MuiAccordion)(() => ({
  width: '100%',
  height: '100%',
  boxShadow: 'none',
  [`&.${accordionClasses.gutters}`]: {
    borderRadius: 'unset',
  },
}));
