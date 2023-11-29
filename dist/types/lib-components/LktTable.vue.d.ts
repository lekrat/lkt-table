import { PropType } from "vue";
import { LktTableColumn } from "../instances/LktTableColumn";
import { LktEvent } from "lkt-events/dist/types/classes/LktEvent";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: ArrayConstructor;
        default: () => any[];
    };
    columns: {
        type: PropType<LktTableColumn[]>;
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
    draggableItemKey: {
        type: StringConstructor;
        default: string;
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
    slots(): import("lkt-ts-interfaces").LktObject;
    hasData(): boolean;
    emptyColumns(): string[];
    visibleColumns(): LktTableColumn[];
    hiddenColumns(): LktTableColumn[];
    hiddenColumnsColSpan(): number;
    displayHiddenColumnsIndicator(): boolean;
}, {
    getVerticalColSpan: (column: LktTableColumn, amountOfColumns: number, items: any[]) => number;
    getHorizontalColSpan: (column: LktTableColumn, item: any) => any;
    getItemByEvent(e: any): unknown;
    isVisible(index: number): boolean;
    sort(column: LktTableColumn | null): void;
    onClick($event: any, $lkt: LktEvent): void;
    show($event: any, $lkt: LktEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("sort" | "click" | "update:modelValue")[], "sort" | "click" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => any[];
    };
    columns: {
        type: PropType<LktTableColumn[]>;
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
    draggableItemKey: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onSort?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    columns: LktTableColumn[];
    sortable: boolean;
    modelValue: unknown[];
    hideEmptyColumns: boolean;
    draggableChecker: Function;
    checkValidDrag: Function;
    draggableItemKey: string;
}, {}>;
export default _default;
