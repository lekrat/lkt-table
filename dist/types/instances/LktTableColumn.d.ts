import { TableColumn } from "../interfaces/TableColumn";
export declare class LktTableColumn implements TableColumn {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    formatter?: Function;
    checkEmpty?: Function;
    colspan?: Function | boolean | number;
    constructor(key?: string, label?: string);
    setIsSortable(status?: boolean): this;
    setIsHidden(status?: boolean): this;
    setFormatter(formatter?: any): this;
    setEmptyChecker(checker?: any): this;
    setColSpan(checker?: any): this;
}
