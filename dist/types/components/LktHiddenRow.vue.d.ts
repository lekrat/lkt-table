import { LktTableColumn } from "../instances/LktTableColumn";
import { PropType } from "vue/dist/vue";
declare const _default: {
    new (...args: any[]): import("@vue/runtime-core").CreateComponentPublicInstance<Readonly<import("@vue/runtime-core").ExtractPropTypes<{
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
        modelValue: {
            type: PropType<any>;
            default: () => {};
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, ("click" | "update:modelValue")[], import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps & Readonly<import("@vue/runtime-core").ExtractPropTypes<{
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
        modelValue: {
            type: PropType<any>;
            default: () => {};
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {
        i: number;
        sortable: boolean;
        modelValue: any;
        isDraggable: boolean;
        hiddenColumnsColSpan: number;
        visibleColumns: LktTableColumn[];
        hiddenColumns: LktTableColumn[];
        emptyColumns: string[];
        hiddenIsVisible: boolean;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("@vue/runtime-core").ExtractPropTypes<{
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
        modelValue: {
            type: PropType<any>;
            default: () => {};
        };
    }>> & {
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        i: number;
        sortable: boolean;
        modelValue: any;
        isDraggable: boolean;
        hiddenColumnsColSpan: number;
        visibleColumns: LktTableColumn[];
        hiddenColumns: LktTableColumn[];
        emptyColumns: string[];
        hiddenIsVisible: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("@vue/runtime-core").ComponentOptionsBase<Readonly<import("@vue/runtime-core").ExtractPropTypes<{
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
    modelValue: {
        type: PropType<any>;
        default: () => {};
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, ("click" | "update:modelValue")[], "click" | "update:modelValue", {
    i: number;
    sortable: boolean;
    modelValue: any;
    isDraggable: boolean;
    hiddenColumnsColSpan: number;
    visibleColumns: LktTableColumn[];
    hiddenColumns: LktTableColumn[];
    emptyColumns: string[];
    hiddenIsVisible: boolean;
}, {}, string, {}> & import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps & (new () => {
    $slots: Record<string, {
        value: any;
        item: any;
        column: LktTableColumn;
        i: number;
    }>;
});
export default _default;
