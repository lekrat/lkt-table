import {isFunction} from "lkt-tools";
import {LktTableColumn} from "./../instances/LktTableColumn";

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

export const getColumnDisplayContent = (column, item, i) => {

    if (isFunction(column.formatter)) {
        return column.formatter(item[column.key], item, column, i);
    }
    return item[column.key];
}