import { TableCell, TableRow } from '@mui/material';
import { DynamicTableRowProps } from './TableWithPagination.types';
import { ReactNode } from 'react';

const DynamicTableRow = <TRow,>({
  row,
  keys,
  config,
}: DynamicTableRowProps<TRow>) => {
  const bodyRowCallback = config?.bodyRowCallback;
  const bodyCellCallback = config?.bodyCellCallback;

  return (
    <TableRow
      onClick={() => bodyRowCallback?.onClick && bodyRowCallback.onClick(row)}
    >
      {keys.map((key) => {
        const valueFromCallback =
          bodyCellCallback && key in bodyCellCallback
            ? bodyCellCallback[key]
            : null;
        const cellKey = key.toString();
        const defaultValue = row[key] as ReactNode;
        return (
          <TableCell key={`cell-${defaultValue}-${cellKey}`}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              {valueFromCallback ? valueFromCallback(row, cellKey) : defaultValue}
            </div>
          </TableCell>
        );
      })}
    </TableRow>
  );
};

export default DynamicTableRow;
