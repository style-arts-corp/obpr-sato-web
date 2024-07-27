import { Table } from '@/feature/demo/components/templates/DemoTop/components/Table';
import type { TableProps } from '@/feature/demo/components/templates/DemoTop/components/Table';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

export type DemoTopProps = {
  rows: TableProps['rows'];
  isLoading: boolean;
};

export const DemoTop: React.FC<DemoTopProps> = ({ rows, isLoading }) => (
  <Stack rowGap={2}>
    {isLoading ? (
      <Box sx={{ textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    ) : (
      <Table rows={rows} />
    )}
  </Stack>
);
