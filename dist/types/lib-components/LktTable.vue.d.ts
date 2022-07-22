import { LktTableColumn } from "../instances/LktTableColumn";
declare const _default: import("vue").DefineComponent<{
    value: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    columns: {
        type: ArrayConstructor;
        default: () => LktTableColumn[];
    };
    sorter: {
        type: FunctionConstructor;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideEmptyColumns: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggableChecker: {
        type: FunctionConstructor;
        default: (item: any) => true;
    };
    checkValidDrag: {
        type: FunctionConstructor;
        default: (evt: any) => true;
    };
}, unknown, {
    Sorter: Function;
    SortBy: string;
    SortDirection: string;
    Items: unknown[];
    Hidden: {};
    drag: boolean;
    dragGroup: string;
    uniqueId: string;
}, {
    slots(): {};
    hasData(): boolean;
    emptyColumns(): string[];
    visibleColumns(): any;
    hiddenColumns(): any;
    hiddenColumnsColSpan(): any;
}, {
    getVerticalColSpan: (column: LktTableColumn, amountOfColumns: number, items: any[]) => number;
    getHorizontalColSpan: (column: LktTableColumn, item: any) => any;
    getItemByEvent(e: any): any;
    isVisible(index: number): boolean;
    sort(column: LktTableColumn): void;
    click($event: any): void;
    show($event: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "sort")[], "input" | "sort", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    columns: {
        type: ArrayConstructor;
        default: () => LktTableColumn[];
    };
    sorter: {
        type: FunctionConstructor;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideEmptyColumns: {
        type: BooleanConstructor;
        default: boolean;
    };
    draggableChecker: {
        type: FunctionConstructor;
        default: (item: any) => true;
    };
    checkValidDrag: {
        type: FunctionConstructor;
        default: (evt: any) => true;
    };
}>> & {
    onInput?: (...args: any[]) => any;
    onSort?: (...args: any[]) => any;
}, {
    columns: unknown[];
    value: unknown[];
    sortable: boolean;
    hideEmptyColumns: boolean;
    draggableChecker: Function;
    checkValidDrag: Function;
}>;
export default _default;
