import { styled } from '@mui/material/styles';
import AccordionDetails from '@mui/material/AccordionDetails';

export const ListItemAccordionAccordionContent = styled(AccordionDetails)(
  ({ theme }) => ({
    padding: 0,
    borderTop: `1px solid ${theme.palette.divider}`,
  }),
);
