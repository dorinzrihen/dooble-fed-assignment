import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import DynamicTableRow from './DynamicTableRow';
import { DynamicTableBodyProps } from './TableWithPagination.types';

const DynamicTableBody = <TRow,>({
  headers,
  error,
  config,
  rows,
  isPending,
}: DynamicTableBodyProps<TRow>) => {
  if (isPending || error) {

    return (
      <TableBody>
        <TableRow>
          <TableCell
            colSpan={headers.length}
            align="center"
            sx={{ padding: 0, height: `calc(${config?.tableHeight} - 60px)` }}
          >
            {error ? (
              <Typography variant="h4">{error}</Typography>
            ) : (
              <img
                style={{ width: '100px', height: '100px' }}
                src={'./portal-rick-and-morty.gif'}
              />
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {rows?.map((row, index) => (
        <DynamicTableRow key={index} row={row} keys={headers} config={config} />
      ))}
    </TableBody>
  );
};

export default DynamicTableBody;
