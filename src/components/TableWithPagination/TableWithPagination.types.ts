import { ReactNode } from 'react';

type Config<TRow> = {
  headerCellCallback?: Partial<{
    [key in keyof TRow]: (value: string) => ReactNode;
  }>;
  bodyCellCallback?: Partial<{
    [key in keyof TRow]: (row: TRow, key: string) => ReactNode;
  }>;
  bodyRowCallback?: {
    onClick?: (row: TRow) => void
  }
};

export type TTableWithPagination<TRow> = {
  count?: number;
  onPageChange: (pageNumber: number) => void;
  rows?: TRow[];
  config?: Config<TRow>;
  headers: Array<keyof TRow>;
  page: number;
  isPending: boolean
  error?: string
};

export type TableRowErrorProps = {
  colSpan: number,
  text: string
}

export type DynamicTableRowProps<TRow> = {
  row: TRow
  keys: Array<keyof TRow>;
  config?: Config<TRow>;
}

export type DynamicTableBodyProps<TRow> = {
  rows?: TRow[]
  headers: Array<keyof TRow>;
  config?: Config<TRow>;
  error?: string;
  isPending: boolean;
}