import { TableCell, TableRow, Typography } from "@mui/material"
import { TableRowErrorProps } from "./TableWithPagination.types"

const TableRowError = ({ colSpan, text }: TableRowErrorProps) => {
    return (
        <TableRow>
            <TableCell colSpan={colSpan} align="center">
                <Typography variant="h4">
                    {text}
                </Typography>
            </TableCell>
        </TableRow>
    )
}

export default TableRowError