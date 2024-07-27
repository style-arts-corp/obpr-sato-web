import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

type Row = {
  id: number;
  order: number;
  description: string;
  name: string;
};

export type TableProps = {
  rows: Row[];
};

export const Table: React.FC<TableProps> = ({ rows }) => (
  <MuiTable>
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>項目名</TableCell>
        <TableCell>備考</TableCell>
        <TableCell>優先度</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.description}</TableCell>
          <TableCell>{row.order}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </MuiTable>
);
