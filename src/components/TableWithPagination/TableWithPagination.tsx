import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { TTableWithPagination } from './TableWithPagination.types';
import { ReactNode } from 'react';
import TableRowError from './TableRowError';
import { capitalize } from 'lodash';

const TableWithPagination = <TRow,>({
  count,
  onPageChange,
  rows,
  config,
  headers,
  page,
  error,
  isPending
}: TTableWithPagination<TRow>) => {
  const onPaginationChange = (_: any, page: number) => onPageChange(page);

  const { headerCellCallback, bodyCellCallback, bodyRowCallback } = config
  return (
    <>
      <TableContainer component={Paper} style={{ maxHeight: '75vh', height: '75vh' }} >
        <Table stickyHeader style={{ height: '100%', tableLayout:'fixed'}}>
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
                    {valueFromCallback ? valueFromCallback(value) : capitalize(value)}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? <TableRowError text={error} colSpan={headers.length}/>
            : rows?.map((row, index) => (
              <TableRow key={index} onClick={() => bodyRowCallback.onClick(row)}>
                {headers.map((key) => {
                  const valueFromCallback =
                  bodyCellCallback && key in bodyCellCallback
                      ? bodyCellCallback[key]
                      : null;
                  const value = key.toString();
                  const defaultValue = row[key] as ReactNode;
                  return (
                    <TableCell key={`cell-${value}-${index}`}>
                      {valueFromCallback
                        ? valueFromCallback(row, value)
                        : defaultValue}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!error 
        ? <Pagination
          page={page}
          count={count}
          size="small"
          onChange={onPaginationChange}
        />
      : null 
    }

    </>
  );
};

export default TableWithPagination;
