import { ReactNode } from "react"

export type TModal = {
    open: boolean
    onClose: () => void
    children: ReactNode
}