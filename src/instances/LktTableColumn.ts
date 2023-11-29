import {TableColumn} from "../interfaces/TableColumn";

export class LktTableColumn implements TableColumn {
    key: string
    label: string
    sortable: boolean
    hidden: boolean
    formatter?: Function
    checkEmpty?: Function
    colspan?: Function | boolean | number

    constructor(key: string = '', label: string = '') {
        this.key = key;
        this.label = label;
        this.sortable = true;
        this.hidden = false;
        this.formatter = undefined;
        this.checkEmpty = undefined;
        this.colspan = undefined;
    }

    setIsSortable(status: boolean = true): this {
        this.sortable = status;
        return this;
    }

    setIsHidden(status: boolean = true): this {
        this.hidden = status;
        return this;
    }

    setFormatter(formatter: any = undefined): this {
        this.formatter = formatter;
        return this;
    }

    setEmptyChecker(checker: any = undefined): this {
        this.checkEmpty = checker;
        return this;
    }

    setColSpan(checker: any = undefined): this {
        this.colspan = undefined;
        return this;
    }
}