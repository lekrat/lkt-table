import {isFunction, isObject, isUndefined} from "lkt-tools";
import {LktTableColumn} from "@/instances/LktTableColumn";

/**
 *
 * @param key
 * @param label
 * @param formatter
 * @param sortable
 * @param hidden
 * @returns {LktTableColumn}
 */
export const createLktTableColumn = (key, label, formatter = undefined, sortable = true, hidden = false) => {
    return new LktTableColumn(key, label)
        .setIsSortable(sortable)
        .setIsHidden(hidden)
        .setFormatter(formatter);
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
 * @returns {boolean|number}
 */
export const getVerticalColSpan = (column) => {
    if (!column.colspan) {
        return false;
    }
    let max = this.columns.length;
    this.Items.forEach(item => {
        let i = this.getHorizontalColSpan(column, item);
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
    if (!column.colspan) {
        return false;
    }
    if (typeof column.colspan === 'function') {
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
        return columns[0].key;
    }
    return '';
}