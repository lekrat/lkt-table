import {LktTableColumn} from "../instances/LktTableColumn";
import {LktObject} from "lkt-ts-interfaces";

/**
 *
 * @param key
 * @param label
 * @param sortable
 * @returns {LktTableColumn}
 */
export const createColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return new LktTableColumn(key, label).setIsSortable(sortable);
}

export const createHiddenColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return new LktTableColumn(key, label).setIsSortable(sortable).setIsHidden(true);
}

/**
 *
 * @param a
 * @param b
 * @param c
 * @param sortDirection
 * @returns {number}
 */
export const defaultTableSorter = (a: any, b: any, c: LktTableColumn, sortDirection: string): number => {
    if (!c) return 0;

    let A = a[c.key],
        B = b[c.key];

    if (sortDirection === 'asc') {
        if (A > B) return 1;
        if (B > A) return -1;
    } else {
        if (A > B) return -1;
        if (B > A) return 1;
    }
    return 0;
}

/**
 *
 * @param column
 * @param item
 * @param i
 * @returns {*}
 */
export const getColumnDisplayContent = (column: LktTableColumn, item: any, i: number) => {

    if (column.formatter && typeof column.formatter === 'function') {
        return column.formatter(item[column.key], item, column, i);
    }
    return item[column.key];
}

/**
 *
 * @param column
 * @param amountOfColumns
 * @param items
 */
export const getVerticalColSpan = (column: LktTableColumn, amountOfColumns: number, items: Array<LktObject>) => {
    if (!column.colspan) return -1;
    let max = amountOfColumns;
    items.forEach(item => {
        let i = getHorizontalColSpan(column, item);
        if (i > 0 && i < max) max = i;
    });

    return max;
}

/**
 *
 * @param column
 * @param item
 * @returns {boolean|*}
 */
export const getHorizontalColSpan = (column: LktTableColumn, item: LktObject) => {
    if (column.colspan === false) return false;
    if (typeof column.colspan === 'function') return column.colspan(item);
    return column.colspan;
}
/**
 *
 * @param column
 * @param emptyColumns
 * @param item
 * @returns {boolean}
 */
export const canRenderColumn = (column: LktTableColumn, emptyColumns: string[], item: LktObject): boolean => {
    if (typeof column !== 'object' || !column.key) return false;
    if (emptyColumns.indexOf(column.key) > -1) return false;

    let colspan = getHorizontalColSpan(column, item);

    if (typeof column.colspan === 'undefined') return true;

    if (typeof column.colspan !== 'undefined') {
        if (typeof column.colspan === 'function') {
            colspan = parseInt(column.colspan());
        } else {
            //@ts-ignore
            colspan = parseInt(column.colspan);
        }
    }

    return colspan > 0;
}

export const getDefaultSortColumn = (columns: LktTableColumn[] = []) => {
    if (columns.length > 0) {
        for (let i = 0; i < columns.length; ++i) {
            if (columns[i].sortable) return columns[i].key;
        }
    }
    return '';
}

export const getColumnByKey = (columns: LktTableColumn[], key: string): LktTableColumn | null => {
    if (columns.length > 0) {
        for (let i = 0; i < columns.length; ++i) {
            if (columns[i].key === key) return columns[i];
        }
    }
    return null;
}