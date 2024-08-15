import { TableBody, TableCell, TableRow } from "@mui/material"
import TableRowError from "./TableRowError"
import DynamicTableRow from "./DynamicTableRow"
import { DynamicTableBodyProps } from "./TableWithPagination.types"

const DynamicTableBody = <TRow,>({ headers, error, config, rows, isPending }: DynamicTableBodyProps<TRow>) => {

    if (isPending) {
        return <TableBody>
            <TableRow>
                <TableCell colSpan={headers.length} align="center">
                    <img style={{ width: '100px', height: '100px' }} src={'./portal-rick-and-morty.gif'} />
                </TableCell>
            </TableRow>
        </TableBody>
    }

    return <TableBody>
        {error
            ? <TableRowError text={error} colSpan={headers.length} />
            : rows?.map((row, index) => (
                <DynamicTableRow
                    key={index}
                    row={row}
                    keys={headers}
                    config={config}
                />))}
    </TableBody>
}

export default DynamicTableBody