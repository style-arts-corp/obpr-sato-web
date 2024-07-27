import { ja } from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const LocalizationProviderWrap: React.FC<React.PropsWithChildren> = ({
  children,
}) => (
  <LocalizationProvider adapterLocale={ja} dateAdapter={AdapterDateFns}>
    {children}
  </LocalizationProvider>
);
