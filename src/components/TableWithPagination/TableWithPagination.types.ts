import { ReactNode } from "react"

export type TTableWithPagination<TRow> = {
    count: number
    onPageChange: (pageNumber: number) => any
    rows: TRow[]
    config?: {
        headerCallback?: Partial<{ [key in keyof TRow]: (value: string) => ReactNode }>
        bodyCallback?: Partial<{ [key in keyof TRow]: (row: TRow, key: string) => ReactNode }>
    }
    headers: Array<keyof TRow>
    page: number
}