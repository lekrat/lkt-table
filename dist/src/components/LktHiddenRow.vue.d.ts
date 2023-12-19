import { LktTableColumn } from "../instances/LktTableColumn";
import { PropType } from "vue/dist/vue";
declare const _default: {
    new (...args: any[]): import("vue/dist/vue").CreateComponentPublicInstance<Readonly<import("vue/dist/vue").ExtractPropTypes<{
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
    }, {}, unknown, {}, {}, import("vue/dist/vue").ComponentOptionsMixin, import("vue/dist/vue").ComponentOptionsMixin, ("click" | "update:modelValue")[], import("vue/dist/vue").VNodeProps & import("vue/dist/vue").AllowedComponentProps & import("vue/dist/vue").ComponentCustomProps & Readonly<import("vue/dist/vue").ExtractPropTypes<{
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
        modelValue: any;
        isDraggable: boolean;
        sortable: boolean;
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
    }, Readonly<import("vue/dist/vue").ExtractPropTypes<{
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
        modelValue: any;
        isDraggable: boolean;
        sortable: boolean;
        hiddenColumnsColSpan: number;
        visibleColumns: LktTableColumn[];
        hiddenColumns: LktTableColumn[];
        emptyColumns: string[];
        hiddenIsVisible: boolean;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue/dist/vue").ComponentOptionsBase<Readonly<import("vue/dist/vue").ExtractPropTypes<{
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
}, {}, unknown, {}, {}, import("vue/dist/vue").ComponentOptionsMixin, import("vue/dist/vue").ComponentOptionsMixin, ("click" | "update:modelValue")[], "click" | "update:modelValue", {
    i: number;
    modelValue: any;
    isDraggable: boolean;
    sortable: boolean;
    hiddenColumnsColSpan: number;
    visibleColumns: LktTableColumn[];
    hiddenColumns: LktTableColumn[];
    emptyColumns: string[];
    hiddenIsVisible: boolean;
}, {}, string, {}> & import("vue/dist/vue").VNodeProps & import("vue/dist/vue").AllowedComponentProps & import("vue/dist/vue").ComponentCustomProps & (new () => {
    $slots: Record<string, {
        value: any;
        item: any;
        column: LktTableColumn;
        i: number;
    }>;
});
export default _default;
