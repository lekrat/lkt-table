import { PropType } from "vue";
import { LktTableColumn } from "../instances/LktTableColumn";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: PropType<LktObject[]>;
        default: () => any[];
    };
    columns: {
        type: PropType<LktTableColumn[]>;
        default: () => LktTableColumn[];
    };
    sorter: {
        type: FunctionConstructor;
        default: (a: any, b: any, c: LktTableColumn, sortDirection: string) => number;
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
}, {
    getItemByEvent: (e: any) => LktObject | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    sort: (...args: any[]) => void;
    click: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<LktObject[]>;
        default: () => any[];
    };
    columns: {
        type: PropType<LktTableColumn[]>;
        default: () => LktTableColumn[];
    };
    sorter: {
        type: FunctionConstructor;
        default: (a: any, b: any, c: LktTableColumn, sortDirection: string) => number;
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
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSort?: ((...args: any[]) => any) | undefined;
}, {
    columns: LktTableColumn[];
    sortable: boolean;
    modelValue: LktObject[];
    sorter: Function;
    hideEmptyColumns: boolean;
    draggableChecker: Function;
    checkValidDrag: Function;
    draggableItemKey: string;
}, {}>, Partial<Record<any, (_: {
    item: any;
    value: any;
    column: LktTableColumn;
}) => any>> & Partial<Record<any, (_: {
    item: any;
    value: any;
    column: LktTableColumn;
}) => any>> & Partial<Record<any, (_: {
    item: any;
    value: any;
    column: LktTableColumn;
}) => any>> & {
    "no-items"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
