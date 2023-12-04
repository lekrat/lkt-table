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
        displayHiddenColumnsIndicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        visibleColumns: {
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
    }, {}, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, ("show" | "click")[], import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps & Readonly<import("@vue/runtime-core").ExtractPropTypes<{
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
        displayHiddenColumnsIndicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        visibleColumns: {
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
        visibleColumns: LktTableColumn[];
        emptyColumns: string[];
        hiddenIsVisible: boolean;
        displayHiddenColumnsIndicator: boolean;
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
        displayHiddenColumnsIndicator: {
            type: BooleanConstructor;
            default: boolean;
        };
        visibleColumns: {
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
    }, {}, {}, {}, {}, {
        item: any;
        i: number;
        isDraggable: boolean;
        sortable: boolean;
        visibleColumns: LktTableColumn[];
        emptyColumns: string[];
        hiddenIsVisible: boolean;
        displayHiddenColumnsIndicator: boolean;
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
    displayHiddenColumnsIndicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibleColumns: {
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
}, {}, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, ("show" | "click")[], "show" | "click", {
    item: any;
    i: number;
    isDraggable: boolean;
    sortable: boolean;
    visibleColumns: LktTableColumn[];
    emptyColumns: string[];
    hiddenIsVisible: boolean;
    displayHiddenColumnsIndicator: boolean;
}, {}, string, {}> & import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps & (new () => {
    $slots: Record<string, {
        value: any;
        item: any;
        column: LktTableColumn;
        i: number;
    }>;
});
export default _default;
