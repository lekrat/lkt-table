import {isFunction, isObject, isUndefined} from "lkt-tools";
import {LktTableColumn} from "@/instances/LktTableColumn";

/**
 *
 * @param key
 * @param label
 * @param sortable
 * @returns {LktTableColumn}
 */
export const createColumn = (key, label, sortable = true) => {
    return new LktTableColumn(key, label).setIsSortable(sortable);
}

/**
 *
 * @param a
 * @param b
 * @param c
 * @param sortDirection
 * @returns {number}
 */
export const defaultTableSorter = (a, b, c, sortDirection) => {
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
export const getColumnDisplayContent = (column, item, i) => {

    if (isFunction(column.formatter)) {
        return column.formatter(item[column.key], item, column, i);
    }
    return item[column.key];
}

/**
 *
 * @param column
 * @param amountOfColumns
 * @returns {boolean|number}
 */
export const getVerticalColSpan = (column, amountOfColumns) => {
    if (!column.colspan) {
        return false;
    }
    let max = amountOfColumns;
    this.Items.forEach(item => {
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
export const getHorizontalColSpan = (column, item) => {
    if (column.colspan === false) {
        return false;
    }
    if (isFunction(column.colspan)) {
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
export const canRenderColumn = (column, emptyColumns, item) => {
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
            colspan = parseInt(column.colspan());
        } else {
            colspan = parseInt(column.colspan);
        }
    }

    if (colspan > 0) {
        return true;
    }
    return false;
}

export const getDefaultSortColumn = (columns = []) => {
    if (columns.length > 0) {
        for (let i = 0; i < columns.length; ++i) {
            if (columns[i].sortable === true) {
                return columns[i].key;
            }
        }
    }
    return '';
}