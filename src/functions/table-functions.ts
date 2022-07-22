import {isFunction, isObject, isUndefined} from "lkt-tools";
import {LktTableColumn} from "../instances/LktTableColumn";

/**
 *
 * @param key
 * @param label
 * @returns {LktTableColumn}
 */
export const createColumn = (key: string, label: string): LktTableColumn => {
    return new LktTableColumn(key, label);
}

/**
 *
 * @param a
 * @param b
 * @param c
 * @param sortDirection
 * @returns {number}
 */
export const defaultTableSorter = (a: any, b: any, c: LktTableColumn, sortDirection: string) => {
    if (!c) {
        return 0;
    }
    let A = a[c.key],
        B = b[c.key];

    if (sortDirection === 'asc') {
        if (A > B) {
            return 1;
        }
        if (B > A) {
            return -1;
        }
    } else {
        if (A > B) {
            return -1;
        }
        if (B > A) {
            return 1;
        }
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

    if (isFunction(column.formatter)) {
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
export const getVerticalColSpan = (column: LktTableColumn, amountOfColumns: number, items: Array<any>) => {
    if (!column.colspan) {
        return -1;
    }
    let max = amountOfColumns;
    items.forEach(item => {
        let i = getHorizontalColSpan(column, item);
        if (i > 0 && i < max) {
            max = i;
        }
    });

    return max;
}

/**
 *
 * @param column
 * @param item
 * @returns {boolean|*}
 */
export const getHorizontalColSpan = (column: LktTableColumn, item: any) => {
    if (column.colspan === false) {
        return false;
    }
    if (isFunction(column.colspan)) {
        //@ts-ignore
        return column.colspan(item);
    }
    return column.colspan;
}
/**
 *
 * @param column
 * @param emptyColumns
 * @param item
 * @returns {boolean}
 */
export const canRenderColumn = (column: LktTableColumn, emptyColumns: string[], item: any) => {
    if (!isObject(column) || !column.key) {
        return false;
    }
    if (emptyColumns.indexOf(column.key) > -1) {
        return false;
    }

    let colspan = getHorizontalColSpan(column, item);

    if (isUndefined(column.colspan)) {
        return true;
    }

    if (!isUndefined(column.colspan)) {
        if (isFunction(column.colspan)) {
            //@ts-ignore
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
            if (columns[i].sortable === true) {
                return columns[i].key;
            }
        }
    }
    return '';
}