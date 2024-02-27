import { LktTableColumn } from "../instances/LktTableColumn";
import { PropType } from "vue";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: import("vue").DefineComponent<{
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
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    edited: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}>;
export default _default;
