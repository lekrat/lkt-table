import { LktTableColumn } from "../instances/LktTableColumn";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: LktObject;
    isDraggable: boolean;
    sortable: boolean;
    hiddenIsVisible: boolean;
    i: number;
    hiddenColumnsColSpan: number;
    visibleColumns: LktTableColumn[];
    hiddenColumns: LktTableColumn[];
    emptyColumns: string[];
}>, {
    modelValue: () => {};
    isDraggable: boolean;
    sortable: boolean;
    hiddenIsVisible: boolean;
    i: number;
    hiddenColumnsColSpan: number;
    visibleColumns: () => never[];
    hiddenColumns: () => never[];
    emptyColumns: () => never[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: LktObject;
    isDraggable: boolean;
    sortable: boolean;
    hiddenIsVisible: boolean;
    i: number;
    hiddenColumnsColSpan: number;
    visibleColumns: LktTableColumn[];
    hiddenColumns: LktTableColumn[];
    emptyColumns: string[];
}>, {
    modelValue: () => {};
    isDraggable: boolean;
    sortable: boolean;
    hiddenIsVisible: boolean;
    i: number;
    hiddenColumnsColSpan: number;
    visibleColumns: () => never[];
    hiddenColumns: () => never[];
    emptyColumns: () => never[];
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    i: number;
    sortable: boolean;
    modelValue: LktObject;
    isDraggable: boolean;
    hiddenIsVisible: boolean;
    hiddenColumnsColSpan: number;
    visibleColumns: LktTableColumn[];
    hiddenColumns: LktTableColumn[];
    emptyColumns: string[];
}, {}>, Partial<Record<string, (_: {
    value: any;
    item: LktObject;
    column: LktTableColumn;
    i: number;
}) => any>>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
