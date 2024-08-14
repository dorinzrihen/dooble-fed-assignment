import { Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { TTableWithPagination } from "./TableWithPagination.types"

const TableWithPagination= <THeader extends string,>({count, onPageChange, rows, config, headers}: TTableWithPagination<THeader>) => {

    const onPaginationChange = (_: any, page: number) => onPageChange(page)

    return (
        <TableContainer component={Paper}>
            <Table>
            <TableHead>
                <TableRow>
                    {headers.map(header => {
                        const valueFromCallback = config?.headerCallback && header in config.headerCallback 
                            ? config.headerCallback[header] 
                            : null
                        return <TableCell key={`header-cell-${header}`}>{valueFromCallback ? valueFromCallback(header) : header}</TableCell>
                    })}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows?.map((row, index) => (
                    <TableRow key={index}>
                        {headers.map(key => {
                            const valueFromCallback = config?.bodyCallback && key in config.bodyCallback 
                                ? config.bodyCallback[key as THeader] 
                                : null
                            return <TableCell key={`cell-${key}-${index}`}>{valueFromCallback ? valueFromCallback(row, key) : row[key]}</TableCell>
                        })}
                    </TableRow>
                ))}
            </TableBody>
            </Table>
            <Pagination count={count} size="small" onChange={onPaginationChange} />
      </TableContainer>
    )
}

export default TableWithPagination