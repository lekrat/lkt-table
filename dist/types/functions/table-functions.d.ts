import { LktTableColumn } from "../instances/LktTableColumn";
/**
 *
 * @param key
 * @param label
 * @param sortable
 * @returns {LktTableColumn}
 */
export declare const createColumn: (key: string, label: string, sortable?: boolean) => LktTableColumn;
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
export declare const getVerticalColSpan: (column: LktTableColumn, amountOfColumns: number, items: Array<any>) => number;
/**
 *
 * @param column
 * @param item
 * @returns {boolean|*}
 */
export declare const getHorizontalColSpan: (column: LktTableColumn, item: any) => any;
/**
 *
 * @param column
 * @param emptyColumns
 * @param item
 * @returns {boolean}
 */
export declare const canRenderColumn: (column: LktTableColumn, emptyColumns: string[], item: any) => boolean;
export declare const getDefaultSortColumn: (columns?: LktTableColumn[]) => string;
export declare const getColumnByKey: (columns: LktTableColumn[], key: string) => LktTableColumn | null;
