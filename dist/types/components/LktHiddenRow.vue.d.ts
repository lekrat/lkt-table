import { LktTableColumn } from "../instances/LktTableColumn";
import { PropType } from "vue";
declare const _default: import("vue").DefineComponent<{
    isDraggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    i: {
        type: NumberConstructor[];
        default: number;
    };
    hiddenColumnsColSpan: {
        type: NumberConstructor;
        default: number;
    };
    visibleColumns: {
        type: PropType<LktTableColumn[]>;
        default: () => LktTableColumn[];
    };
    hiddenColumns: {
        type: PropType<LktTableColumn[]>;
        default: () => LktTableColumn[];
    };
    emptyColumns: {
        type: PropType<string[]>;
        default: () => string[];
    };
    hiddenIsVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    item: {
        type: PropType<any>;
        default: () => {};
    };
}, unknown, unknown, {}, {
    canRenderColumn: (column: LktTableColumn, emptyColumns: string[], item: any) => boolean;
    getColumnDisplayContent: (column: LktTableColumn, item: any, i: number) => any;
    getVerticalColSpan: (column: LktTableColumn, amountOfColumns: number, items: any[]) => number;
    getHorizontalColSpan: (column: LktTableColumn, item: any) => any;
    onClick($event: any, item: any, column: LktTableColumn): void;
    onShow($event: any, i: any): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("show" | "click")[], "show" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    isDraggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortable: {
        type: BooleanConstructor;
        default: boolean;
    };
    i: {
        type: NumberConstructor[];
        default: number;
    };
    hiddenColumnsColSpan: {
        type: NumberConstructor;
        default: number;
    };
    visibleColumns: {
        type: PropType<LktTableColumn[]>;
        default: () => LktTableColumn[];
    };
    hiddenColumns: {
        type: PropType<LktTableColumn[]>;
        default: () => LktTableColumn[];
    };
    emptyColumns: {
        type: PropType<string[]>;
        default: () => string[];
    };
    hiddenIsVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    item: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}, {
    item: any;
    i: number;
    isDraggable: boolean;
    sortable: boolean;
    hiddenColumnsColSpan: number;
    visibleColumns: LktTableColumn[];
    hiddenColumns: LktTableColumn[];
    emptyColumns: string[];
    hiddenIsVisible: boolean;
}, {}>;
export default _default;
