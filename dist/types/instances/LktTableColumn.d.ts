export declare class LktTableColumn {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    formatter: Function | undefined;
    checkEmpty: Function | undefined;
    colspan: Function | boolean | number | undefined;
    constructor(key?: string, label?: string);
    setIsSortable(status?: boolean): this;
    setIsHidden(status?: boolean): this;
    setFormatter(formatter?: any): this;
    setEmptyChecker(checker?: any): this;
    setColSpan(checker?: any): this;
}
