import { PropType } from "vue";
import { LktTableColumn } from "../instances/LktTableColumn";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
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
        getItemByEvent: (e: any) => LktObject | undefined;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("sort" | "click" | "update:modelValue")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
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
        modelValue: LktObject[];
        sortable: boolean;
        sorter: Function;
        hideEmptyColumns: boolean;
        draggableChecker: Function;
        checkValidDrag: Function;
        draggableItemKey: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
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
        getItemByEvent: (e: any) => LktObject | undefined;
    }, {}, {}, {}, {
        columns: LktTableColumn[];
        modelValue: LktObject[];
        sortable: boolean;
        sorter: Function;
        hideEmptyColumns: boolean;
        draggableChecker: Function;
        checkValidDrag: Function;
        draggableItemKey: string;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    getItemByEvent: (e: any) => LktObject | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("sort" | "click" | "update:modelValue")[], "sort" | "click" | "update:modelValue", {
    columns: LktTableColumn[];
    modelValue: LktObject[];
    sortable: boolean;
    sorter: Function;
    hideEmptyColumns: boolean;
    draggableChecker: Function;
    checkValidDrag: Function;
    draggableItemKey: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: Record<any, {
        item: any;
        value: any;
        column: any;
    }> & Record<any, {
        item: any;
        value: any;
        column: any;
    }> & Record<any, {
        item: any;
        value: any;
        column: any;
    }> & {
        'no-items': (_: {}) => any;
    };
});
export default _default;
