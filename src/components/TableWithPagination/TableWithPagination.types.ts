import { ReactNode } from "react"

export type TTableWithPagination<THeaders extends string> = {
    count: number
    onPageChange: (pageNumber: number) => any 
    rows: {[key in THeaders]: ReactNode}[] 
    config?: {
        headerCallback?: {[key in THeaders]: (value: string) => ReactNode}
        bodyCallback?: {[key in THeaders]: (row: {[key in THeaders]: ReactNode}, key: string) => ReactNode}
    }
    headers: THeaders[]
}