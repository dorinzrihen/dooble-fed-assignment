import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { TTableWithPagination } from "./TableWithPagination.types"
import { ReactNode } from "react"

const TableWithPagination= <TRow,>({count, onPageChange, rows, config, headers, page}: TTableWithPagination<TRow>) => {

    const onPaginationChange = (_: any, page: number) => onPageChange(page)

    return (
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                    {headers.map(header => {
                        const value = header.toString()
                        const valueFromCallback = config?.headerCallback && header in config.headerCallback 
                            ? config.headerCallback[header] 
                            : null
                        return <TableCell key={`header-cell-${value}`}>{valueFromCallback ? valueFromCallback(value) : value}</TableCell>
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows?.map((row, index) => (
                    <TableRow key={index}>
                        {headers.map(key => {
                            const valueFromCallback = config?.bodyCallback && key in config.bodyCallback 
                                ? config.bodyCallback[key] 
                                : null
                            const value = key.toString()
                            const defaultValue = row[key] as ReactNode
                            return <TableCell key={`cell-${value}-${index}`}>{valueFromCallback ? valueFromCallback(row, value) : defaultValue}</TableCell>
                        })}
                    </TableRow>
                ))}
            </TableBody>
            </Table>
            <Pagination page={page} count={count} size="small" onChange={onPaginationChange} />
      </TableContainer>
    )
}

export default TableWithPagination