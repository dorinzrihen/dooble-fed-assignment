export type TSelectMenu = {
    onChange: (value: string | number) => void
    label: string
    value: string
    options: { value: string | number, name: string }[]
}