import { LktTableColumn } from "../instances/LktTableColumn";
declare const _default: {
    name: string;
    emits: string[];
    props: {
        isDraggable: {
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
            type: ArrayConstructor;
            default: () => Array<any>;
        };
        hiddenColumns: {
            type: ArrayConstructor;
            default: () => Array<any>;
        };
        emptyColumns: {
            type: ArrayConstructor;
            default: () => Array<any>;
        };
        hiddenIsVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        item: {
            type: ObjectConstructor;
            default: () => {};
        };
    };
    methods: {
        canRenderColumn: (column: LktTableColumn, emptyColumns: string[], item: any) => boolean;
        getColumnDisplayContent: (column: LktTableColumn, item: any, i: number) => any;
        getVerticalColSpan: (column: LktTableColumn, amountOfColumns: number, items: any[]) => number;
        getHorizontalColSpan: (column: LktTableColumn, item: any) => any;
        onClick($event: any, item: any, column: LktTableColumn): void;
        onShow($event: any, i: any): void;
    };
};
export default _default;
