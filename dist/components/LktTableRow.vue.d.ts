import { LktTableColumn } from "../instances/LktTableColumn";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    item: LktObject;
    isDraggable: boolean;
    sortable: boolean;
    displayHiddenColumnsIndicator: boolean;
    hiddenIsVisible: boolean;
    i: number;
    visibleColumns: LktTableColumn[];
    emptyColumns: string[];
}>, {
    item: () => {};
    isDraggable: boolean;
    sortable: boolean;
    displayHiddenColumnsIndicator: boolean;
    hiddenIsVisible: boolean;
    i: number;
    visibleColumns: () => never[];
    emptyColumns: () => never[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    click: (...args: any[]) => void;
    edited: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    item: LktObject;
    isDraggable: boolean;
    sortable: boolean;
    displayHiddenColumnsIndicator: boolean;
    hiddenIsVisible: boolean;
    i: number;
    visibleColumns: LktTableColumn[];
    emptyColumns: string[];
}>, {
    item: () => {};
    isDraggable: boolean;
    sortable: boolean;
    displayHiddenColumnsIndicator: boolean;
    hiddenIsVisible: boolean;
    i: number;
    visibleColumns: () => never[];
    emptyColumns: () => never[];
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onEdited?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
}, {
    item: LktObject;
    i: number;
    sortable: boolean;
    isDraggable: boolean;
    hiddenIsVisible: boolean;
    visibleColumns: LktTableColumn[];
    emptyColumns: string[];
    displayHiddenColumnsIndicator: boolean;
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
