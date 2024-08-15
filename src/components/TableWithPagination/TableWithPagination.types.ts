import { ReactNode } from 'react';

type Config<TRow> = {
  headerCellCallback?: Partial<{
    [key in keyof TRow]: (value: string) => ReactNode;
  }>;
  bodyCellCallback?: Partial<{
    [key in keyof TRow]: (row: TRow, key: string) => ReactNode;
  }>;
  bodyRowCallback?: {
    onClick?: (row: TRow) => void;
  };
  tableHeight: string;
};

export type DynamicTableBodyProps<TRow> = {
  rows: TRow[] | null;
  headers: Array<keyof TRow>;
  config: Config<TRow>;
  error: string | null;
  isPending: boolean;
};

export type TableWithPaginationProps<TRow> = {
  pages: number | null;
  onPageChange: (pageNumber: number) => void;
  rows: TRow[] | null;
  page: number;
} & DynamicTableBodyProps<TRow>;

export type DynamicTableRowProps<TRow> = {
  row: TRow;
  keys: Array<keyof TRow>;
  config: Config<TRow>;
};
