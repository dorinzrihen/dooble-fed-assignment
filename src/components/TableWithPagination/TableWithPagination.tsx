import {
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

const TableWithPagination = <TRow,>({
  count,
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

  return (
    <>
      <TableContainer
        component={Paper}
        style={{ maxHeight: '75vh', height: '75vh' }}
      >
        <Table stickyHeader style={{ height: '100%', tableLayout: 'fixed' }}>
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
      {count ? (
        <Pagination
          page={page}
          count={count}
          size="small"
          onChange={onPaginationChange}
        />
      ) : null}
    </>
  );
};

export default TableWithPagination;
