import {
  Box,
  Pagination,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { TableWithPaginationProps } from './TableWithPagination.types';
import { ChangeEvent } from 'react';

const TableWithPagination = <TRow,>({
  pages,
  onPageChange,
  rows,
  columns,
  page,
  isPending,
  error
}: TableWithPaginationProps<TRow>) => {
  const onPaginationChange = (_: ChangeEvent<unknown> | null, page: number) =>
    onPageChange(page);


  return (
    <Box sx={{ height: 1, width: '100%' }}>
      <DataGrid
        rows={rows ?? []}
        columns={columns}
        hideFooterPagination
        hideFooter
        disableColumnMenu
        loading={isPending}
        localeText={{ noRowsLabel: error?.toString()}}
        sx={{
          height: {
            xs: '60vh', 
            sm: '70vh',
            md: '75vh',
          },
          '& .MuiDataGrid-cell': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      />
      {pages ? (
        <Pagination
          sx={{ alignSelf: 'flex-end' }}
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
