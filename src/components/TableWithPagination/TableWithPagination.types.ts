import { ReactNode } from 'react';

export type TTableWithPagination<TRow> = {
  count?: number;
  onPageChange: (pageNumber: number) => void;
  rows?: TRow[];
  config?: {
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
  headers: Array<keyof TRow>;
  page: number;
  isPending: boolean
  error?: string
};
