import { LktTableColumn } from "../instances/LktTableColumn";
import { PropType } from "vue/dist/vue";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: {
    new (...args: any[]): import("vue/dist/vue").CreateComponentPublicInstance<Readonly<import("vue/dist/vue").ExtractPropTypes<{
        column: {
            type: PropType<LktTableColumn>;
            default: () => {};
        };
        i: {
            type: NumberConstructor[];
            default: number;
        };
        modelValue: {
            type: PropType<LktObject>;
            default: () => {};
        };
    }>> & {
        onEdited?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue/dist/vue").ComponentOptionsMixin, import("vue/dist/vue").ComponentOptionsMixin, "edited"[], import("vue/dist/vue").VNodeProps & import("vue/dist/vue").AllowedComponentProps & import("vue/dist/vue").ComponentCustomProps & Readonly<import("vue/dist/vue").ExtractPropTypes<{
        column: {
            type: PropType<LktTableColumn>;
            default: () => {};
        };
        i: {
            type: NumberConstructor[];
            default: number;
        };
        modelValue: {
            type: PropType<LktObject>;
            default: () => {};
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
    }, Readonly<import("vue/dist/vue").ExtractPropTypes<{
        column: {
            type: PropType<LktTableColumn>;
            default: () => {};
        };
        i: {
            type: NumberConstructor[];
            default: number;
        };
        modelValue: {
            type: PropType<LktObject>;
            default: () => {};
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
} & import("vue/dist/vue").ComponentOptionsBase<Readonly<import("vue/dist/vue").ExtractPropTypes<{
    column: {
        type: PropType<LktTableColumn>;
        default: () => {};
    };
    i: {
        type: NumberConstructor[];
        default: number;
    };
    modelValue: {
        type: PropType<LktObject>;
        default: () => {};
    };
}>> & {
    onEdited?: ((...args: any[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue/dist/vue").ComponentOptionsMixin, import("vue/dist/vue").ComponentOptionsMixin, "edited"[], "edited", {
    i: number;
    column: LktTableColumn;
    modelValue: LktObject;
}, {}, string, {}> & import("vue/dist/vue").VNodeProps & import("vue/dist/vue").AllowedComponentProps & import("vue/dist/vue").ComponentCustomProps & (new () => {
    $slots: {};
});
export default _default;
