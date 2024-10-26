import {Column} from "../instances/Column";
import {LktObject} from "lkt-ts-interfaces";
import {Option} from "lkt-field";
import {reactive} from "vue";
import {__} from "lkt-i18n";
import {TypeOfColumn} from "../enums/TypeOfColumn";

/**
 *
 * @param data
 */
export const createColumn = (data: Column): Column => {
    return reactive(new Column(data));
}

/**
 * @deprecated
 */
export const createLinkColumn = (key: string, label: string, href: string | Function, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, sortable, type: TypeOfColumn.Link, link: href}));
}

/**
 * @deprecated
 */
export const createActionColumn = (key: string, label: string, action: Function, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, sortable, type: TypeOfColumn.Action, action}));
}

/**
 * @deprecated
 */
export const createTextColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.Text, sortable}));
}

/**
 * @deprecated
 */
export const createIntegerColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.Number, sortable}));
}

/**
 * @deprecated
 */
export const createFloatColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.Number, sortable}));
}

/**
 * @deprecated
 */
export const createEmailColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.Email, sortable}));
}

/**
 * @deprecated
 */
export const createTelColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.Tel, sortable}));
}

/**
 * @deprecated
 */
export const createCheckColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.Check, sortable}));
}

/**
 * @deprecated
 */
export const createSwitchColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.Switch, sortable}));
}

/**
 * @deprecated
 */
export const createSelectColumn = (key: string, label: string, options: Option[], sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.Select, sortable}));
}

/**
 * @deprecated
 */
export const createFileColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, type: TypeOfColumn.File, sortable}));
}

/**
 * @deprecated
 */
export const createHiddenColumn = (key: string, label: string, sortable: boolean = true): Column => {
    return reactive(new Column({key, label, sortable, hidden: true}));
}

/**
 *
 * @param a
 * @param b
 * @param c
 * @param sortDirection
 * @returns {number}
 */
export const defaultTableSorter = (a: any, b: any, c: Column, sortDirection: string): number => {
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
export const getColumnDisplayContent = (column: Column, item: any, i: number, columnStack: Column[] = []): any => {

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
export const getVerticalColSpan = (column: Column, amountOfColumns: number, items: Array<LktObject>) => {
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
export const getHorizontalColSpan = (column: Column, item: LktObject) => {
    if (column.colspan === false) return false;
    if (typeof column.colspan === 'function') return column.colspan(item);
    return column.colspan;
}

export const colPreferSlot = (column: Column, item: LktObject) => {
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
export const canRenderColumn = (column: Column, emptyColumns: string[], item: LktObject): boolean => {
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

export const getDefaultSortColumn = (columns: Column[] = []) => {
    if (columns.length > 0) {
        for (let i = 0; i < columns.length; ++i) {
            if (columns[i].sortable) return columns[i].key;
        }
    }
    return '';
}

export const getColumnByKey = (columns: Column[], key: string): Column | null => {
    if (columns.length > 0) {
        for (let i = 0; i < columns.length; ++i) {
            if (columns[i].key === key) return columns[i];
        }
    }
    return null;
}