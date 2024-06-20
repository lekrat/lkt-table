import { LktTableColumn } from "../instances/LktTableColumn";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: LktObject[];
    columns: LktTableColumn[];
    sorter?: Function | undefined;
    draggableChecker?: Function | undefined;
    checkValidDrag?: Function | undefined;
    sortable?: boolean | undefined;
    hideEmptyColumns?: boolean | undefined;
    draggableItemKey?: string | undefined;
    page?: number | undefined;
    resource?: string | undefined;
    noResultsText?: string | undefined;
    title?: string | undefined;
    filters?: LktObject[] | undefined;
    dataStateConfig?: LktObject | undefined;
    hiddenSave?: boolean | undefined;
    editMode?: boolean | undefined;
    saveDisabled?: boolean | undefined;
    saveValidator?: Function | undefined;
    saveConfirm?: string | undefined;
    confirmData?: LktObject | undefined;
    saveResource?: string | undefined;
    saveResourceData?: LktObject | undefined;
    saveText?: string | undefined;
    editModeText?: string | undefined;
    switchEditionEnabled?: boolean | undefined;
    canCreate?: boolean | undefined;
}>, {
    modelValue: () => never[];
    columns: () => never[];
    sorter: (a: any, b: any, c: LktTableColumn, sortDirection: string) => number;
    draggableChecker: (item: any) => true;
    checkValidDrag: undefined;
    sortable: boolean;
    hideEmptyColumns: boolean;
    draggableItemKey: string;
    page: number;
    resource: string;
    noResultsText: string;
    title: string;
    filters: () => never[];
    dataStateConfig: () => {};
    hiddenSave: boolean;
    editMode: boolean;
    saveDisabled: boolean;
    saveValidator: () => true;
    saveConfirm: string;
    confirmData: () => {};
    saveResource: string;
    saveResourceData: () => {};
    saveText: string;
    editModeText: string;
    switchEditionEnabled: boolean;
    canCreate: boolean;
}>, {
    getItemByEvent: (e: any) => LktObject | undefined;
    doRefresh: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    sort: (...args: any[]) => void;
    click: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    save: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: LktObject[];
    columns: LktTableColumn[];
    sorter?: Function | undefined;
    draggableChecker?: Function | undefined;
    checkValidDrag?: Function | undefined;
    sortable?: boolean | undefined;
    hideEmptyColumns?: boolean | undefined;
    draggableItemKey?: string | undefined;
    page?: number | undefined;
    resource?: string | undefined;
    noResultsText?: string | undefined;
    title?: string | undefined;
    filters?: LktObject[] | undefined;
    dataStateConfig?: LktObject | undefined;
    hiddenSave?: boolean | undefined;
    editMode?: boolean | undefined;
    saveDisabled?: boolean | undefined;
    saveValidator?: Function | undefined;
    saveConfirm?: string | undefined;
    confirmData?: LktObject | undefined;
    saveResource?: string | undefined;
    saveResourceData?: LktObject | undefined;
    saveText?: string | undefined;
    editModeText?: string | undefined;
    switchEditionEnabled?: boolean | undefined;
    canCreate?: boolean | undefined;
}>, {
    modelValue: () => never[];
    columns: () => never[];
    sorter: (a: any, b: any, c: LktTableColumn, sortDirection: string) => number;
    draggableChecker: (item: any) => true;
    checkValidDrag: undefined;
    sortable: boolean;
    hideEmptyColumns: boolean;
    draggableItemKey: string;
    page: number;
    resource: string;
    noResultsText: string;
    title: string;
    filters: () => never[];
    dataStateConfig: () => {};
    hiddenSave: boolean;
    editMode: boolean;
    saveDisabled: boolean;
    saveValidator: () => true;
    saveConfirm: string;
    confirmData: () => {};
    saveResource: string;
    saveResourceData: () => {};
    saveText: string;
    editModeText: string;
    switchEditionEnabled: boolean;
    canCreate: boolean;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSave?: ((...args: any[]) => any) | undefined;
    onSort?: ((...args: any[]) => any) | undefined;
}, {
    columns: LktTableColumn[];
    page: number;
    title: string;
    filters: LktObject[];
    resource: string;
    sortable: boolean;
    modelValue: LktObject[];
    sorter: Function;
    draggableChecker: Function;
    checkValidDrag: Function;
    hideEmptyColumns: boolean;
    draggableItemKey: string;
    noResultsText: string;
    dataStateConfig: LktObject;
    hiddenSave: boolean;
    editMode: boolean;
    saveDisabled: boolean;
    saveValidator: Function;
    saveConfirm: string;
    confirmData: LktObject;
    saveResource: string;
    saveResourceData: LktObject;
    saveText: string;
    editModeText: string;
    switchEditionEnabled: boolean;
    canCreate: boolean;
}, {}>, Partial<Record<any, (_: {
    item: LktObject;
    value: any;
    column: LktTableColumn;
}) => any>> & Partial<Record<any, (_: {
    item: LktObject;
    value: any;
    column: LktTableColumn;
}) => any>> & Partial<Record<any, (_: {
    item: LktObject;
    value: any;
    column: LktTableColumn;
}) => any>> & {
    title?(_: {}): any;
    "button-save"?(_: {
        items: LktObject[];
        editMode: boolean;
        canUpdate: boolean;
    }): any;
    buttons?(_: {}): any;
    filters?(_: {}): any;
    "no-items"?(_: {}): any;
}>;
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
