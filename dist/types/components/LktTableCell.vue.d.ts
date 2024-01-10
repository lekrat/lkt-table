import { LktTableColumn } from "../instances/LktTableColumn";
import { PropType } from "vue/dist/vue";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: {
    new (...args: any[]): import("@vue/runtime-core").CreateComponentPublicInstance<Readonly<import("@vue/runtime-core").ExtractPropTypes<{
        modelValue: {
            type: PropType<LktObject>;
            default: () => {};
        };
        column: {
            type: PropType<LktTableColumn>;
            default: () => {};
        };
        i: {
            type: NumberConstructor[];
            default: number;
        };
    }>> & {
        onEdited?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, "edited"[], import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps & Readonly<import("@vue/runtime-core").ExtractPropTypes<{
        modelValue: {
            type: PropType<LktObject>;
            default: () => {};
        };
        column: {
            type: PropType<LktTableColumn>;
            default: () => {};
        };
        i: {
            type: NumberConstructor[];
            default: number;
        };
    }>> & {
        onEdited?: ((...args: any[]) => any) | undefined;
    }, {
        i: number;
        column: LktTableColumn;
        modelValue: LktObject;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("@vue/runtime-core").ExtractPropTypes<{
        modelValue: {
            type: PropType<LktObject>;
            default: () => {};
        };
        column: {
            type: PropType<LktTableColumn>;
            default: () => {};
        };
        i: {
            type: NumberConstructor[];
            default: number;
        };
    }>> & {
        onEdited?: ((...args: any[]) => any) | undefined;
    }, {}, {}, {}, {}, {
        i: number;
        column: LktTableColumn;
        modelValue: LktObject;
    }>;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("@vue/runtime-core").ComponentOptionsBase<Readonly<import("@vue/runtime-core").ExtractPropTypes<{
    modelValue: {
        type: PropType<LktObject>;
        default: () => {};
    };
    column: {
        type: PropType<LktTableColumn>;
        default: () => {};
    };
    i: {
        type: NumberConstructor[];
        default: number;
    };
}>> & {
    onEdited?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("@vue/runtime-core").ComponentOptionsMixin, import("@vue/runtime-core").ComponentOptionsMixin, "edited"[], "edited", {
    i: number;
    column: LktTableColumn;
    modelValue: LktObject;
}, {}, string, {}> & import("@vue/runtime-core").VNodeProps & import("@vue/runtime-core").AllowedComponentProps & import("@vue/runtime-core").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
