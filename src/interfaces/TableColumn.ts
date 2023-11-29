export interface TableColumn {
    key: string
    label: string
    sortable: boolean
    hidden?: boolean
    formatter?: Function
    checkEmpty?: Function
    colspan?: Function | boolean | number
}