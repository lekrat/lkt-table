import {LktTableColumn} from "../instances/LktTableColumn";
import {LktObject} from "lkt-ts-interfaces";
import {Option} from "lkt-field";
import {reactive} from "vue";
import {__} from "lkt-i18n";

/**
 *
 * @param key
 * @param label
 * @param sortable
 * @returns {LktTableColumn}
 */
export const createColumn = (key: string|LktObject, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable));
}

export const createLinkColumn = (key: string, label: string, href: string | Function, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsLink(href));
}

export const createActionColumn = (key: string, label: string, action: Function, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsAction(action));
}

export const createTextColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsText());
}

export const createIntegerColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsInteger());
}

export const createFloatColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsFloat());
}

export const createEmailColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsEmail());
}

export const createTelColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsTel());
}

export const createCheckColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsCheck());
}

export const createSwitchColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsSwitch());
}

export const createSelectColumn = (key: string, label: string, options: Option[], sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsSelect(options));
}

export const createFileColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).defineAsFile());
}

export const createHiddenColumn = (key: string, label: string, sortable: boolean = true): LktTableColumn => {
    return reactive(new LktTableColumn(key, label).setIsSortable(sortable).setIsHidden(true));
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
 * @param columnStack
 * @returns {*}
 */
export const getColumnDisplayContent = (column: LktTableColumn, item: any, i: number, columnStack: LktTableColumn[] = []): any => {

    if (column.extractTitleFromColumn) {
        let columnForTitle = columnStack.find(c => c.key === column.extractTitleFromColumn);
        if (columnForTitle) {
            return getColumnDisplayContent(columnForTitle, item, i, columnStack);
        }
    }

    if (column.formatter && typeof column.formatter === 'function') {
        let formatted = column.formatter(item[column.key], item, column, i);
        if (formatted.startsWith('__:')) {
            return __(formatted.substring(3));
        }
        return formatted;
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

export const colPreferSlot = (column: LktTableColumn, item: LktObject) => {
    if (typeof column.preferSlot === 'undefined') return true;
    if (column.preferSlot === false) return false;
    if (typeof column.preferSlot === 'function') return column.preferSlot(item);
    return true;
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
            colspan = parseInt(column.colspan(item));
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