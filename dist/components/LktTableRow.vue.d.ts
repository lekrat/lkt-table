import { LktTableColumn } from "../instances/LktTableColumn";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: LktObject;
    isDraggable: boolean;
    sortable: boolean;
    displayHiddenColumnsIndicator: boolean;
    hiddenIsVisible: boolean;
    addNavigation: boolean;
    latestRow: boolean;
    canDrop: boolean;
    editModeEnabled: boolean;
    i: number;
    visibleColumns: LktTableColumn[];
    emptyColumns: string[];
    dropConfirm: string;
}>, {
    modelValue: () => {};
    isDraggable: boolean;
    sortable: boolean;
    displayHiddenColumnsIndicator: boolean;
    hiddenIsVisible: boolean;
    addNavigation: boolean;
    latestRow: boolean;
    canDrop: boolean;
    editModeEnabled: boolean;
    i: number;
    visibleColumns: () => never[];
    emptyColumns: () => never[];
    dropConfirm: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    show: (...args: any[]) => void;
    click: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "item-up": (...args: any[]) => void;
    "item-down": (...args: any[]) => void;
    "item-drop": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: LktObject;
    isDraggable: boolean;
    sortable: boolean;
    displayHiddenColumnsIndicator: boolean;
    hiddenIsVisible: boolean;
    addNavigation: boolean;
    latestRow: boolean;
    canDrop: boolean;
    editModeEnabled: boolean;
    i: number;
    visibleColumns: LktTableColumn[];
    emptyColumns: string[];
    dropConfirm: string;
}>, {
    modelValue: () => {};
    isDraggable: boolean;
    sortable: boolean;
    displayHiddenColumnsIndicator: boolean;
    hiddenIsVisible: boolean;
    addNavigation: boolean;
    latestRow: boolean;
    canDrop: boolean;
    editModeEnabled: boolean;
    i: number;
    visibleColumns: () => never[];
    emptyColumns: () => never[];
    dropConfirm: string;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onShow?: ((...args: any[]) => any) | undefined;
    "onItem-up"?: ((...args: any[]) => any) | undefined;
    "onItem-down"?: ((...args: any[]) => any) | undefined;
    "onItem-drop"?: ((...args: any[]) => any) | undefined;
}, {
    i: number;
    sortable: boolean;
    modelValue: LktObject;
    editModeEnabled: boolean;
    isDraggable: boolean;
    hiddenIsVisible: boolean;
    visibleColumns: LktTableColumn[];
    emptyColumns: string[];
    displayHiddenColumnsIndicator: boolean;
    addNavigation: boolean;
    latestRow: boolean;
    canDrop: boolean;
    dropConfirm: string;
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
