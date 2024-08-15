import {
  Box,
  Pagination,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TableWithPaginationProps } from './TableWithPagination.types';
import { capitalize } from 'lodash';
import { ChangeEvent } from 'react';
import DynamicTableBody from './DynamicTableBody';
import { getMaxTableHeight } from './TableWithPaginationLib';

const TableWithPagination = <TRow,>({
  pages,
  onPageChange,
  rows,
  config,
  headers,
  page,
  error,
  isPending,
}: TableWithPaginationProps<TRow>) => {
  const onPaginationChange = (_: ChangeEvent<unknown> | null, page: number) =>
    onPageChange(page);
  const headerCellCallback = config?.headerCellCallback;

  const maxTableSize = getMaxTableHeight()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <TableContainer
        component={Paper}
        style={{ maxHeight: maxTableSize, height: maxTableSize }}
      >
        <Table stickyHeader style={{ tableLayout: 'fixed' }}>
          <TableHead>
            <TableRow>
              {headers.map((header) => {
                const value = header.toString();
                const valueFromCallback =
                  headerCellCallback && header in headerCellCallback
                    ? headerCellCallback[header]
                    : null;
                return (
                  <TableCell key={`header-cell-${value}`}>
                    {valueFromCallback
                      ? valueFromCallback(value)
                      : capitalize(value)}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <DynamicTableBody<TRow>
            rows={rows}
            headers={headers}
            error={error}
            isPending={isPending}
            config={config}
          />
        </Table>
      </TableContainer>
      {pages ? (
        <Pagination
          sx={{ alignSelf: 'flex-end'}}
          page={page}
          count={pages}
          size="small"
          onChange={onPaginationChange}
        />
      ) : null}
    </Box>
  );
};

export default TableWithPagination;
