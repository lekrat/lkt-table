import { LktTableColumn } from "../instances/LktTableColumn";
import { LktObject } from "lkt-ts-interfaces";
import { Option } from "lkt-field-select";
/**
 *
 * @param key
 * @param label
 * @param sortable
 * @returns {LktTableColumn}
 */
export declare const createColumn: (key: string, label: string, sortable?: boolean) => LktTableColumn;
export declare const createLinkColumn: (key: string, label: string, href: string | Function, sortable?: boolean) => LktTableColumn;
export declare const createActionColumn: (key: string, label: string, action: Function, sortable?: boolean) => LktTableColumn;
export declare const createTextColumn: (key: string, label: string, sortable?: boolean) => LktTableColumn;
export declare const createEmailColumn: (key: string, label: string, sortable?: boolean) => LktTableColumn;
export declare const createTelColumn: (key: string, label: string, sortable?: boolean) => LktTableColumn;
export declare const createCheckColumn: (key: string, label: string, sortable?: boolean) => LktTableColumn;
export declare const createSwitchColumn: (key: string, label: string, sortable?: boolean) => LktTableColumn;
export declare const createSelectColumn: (key: string, label: string, options: Option[], sortable?: boolean) => LktTableColumn;
export declare const createHiddenColumn: (key: string, label: string, sortable?: boolean) => LktTableColumn;
/**
 *
 * @param a
 * @param b
 * @param c
 * @param sortDirection
 * @returns {number}
 */
export declare const defaultTableSorter: (a: any, b: any, c: LktTableColumn, sortDirection: string) => number;
/**
 *
 * @param column
 * @param item
 * @param i
 * @returns {*}
 */
export declare const getColumnDisplayContent: (column: LktTableColumn, item: any, i: number) => any;
/**
 *
 * @param column
 * @param amountOfColumns
 * @param items
 */
export declare const getVerticalColSpan: (column: LktTableColumn, amountOfColumns: number, items: Array<LktObject>) => number;
/**
 *
 * @param column
 * @param item
 * @returns {boolean|*}
 */
export declare const getHorizontalColSpan: (column: LktTableColumn, item: LktObject) => any;
/**
 *
 * @param column
 * @param emptyColumns
 * @param item
 * @returns {boolean}
 */
export declare const canRenderColumn: (column: LktTableColumn, emptyColumns: string[], item: LktObject) => boolean;
export declare const getDefaultSortColumn: (columns?: LktTableColumn[]) => string;
export declare const getColumnByKey: (columns: LktTableColumn[], key: string) => LktTableColumn | null;
