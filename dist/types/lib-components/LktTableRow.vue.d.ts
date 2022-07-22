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
        canRenderColumn: (column: import("../instances/LktTableColumn").LktTableColumn, emptyColumns: string[], item: any) => boolean;
        getColumnDisplayContent: (column: import("../instances/LktTableColumn").LktTableColumn, item: any, i: number) => any;
        getVerticalColSpan: (column: import("../instances/LktTableColumn").LktTableColumn, amountOfColumns: number, items: any[]) => number;
        getHorizontalColSpan: (column: import("../instances/LktTableColumn").LktTableColumn, item: any) => any;
    };
};
export default _default;
