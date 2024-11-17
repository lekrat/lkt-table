import {LktObject} from "lkt-ts-interfaces";
import {TypeOfColumn} from "../enums/TypeOfColumn";
import {Field} from "lkt-field";

export class Column {
    key: string = '';
    label: string = '';
    sortable: boolean = true;
    hidden: boolean = false
    editable: boolean = false;
    formatter?: Function = undefined;
    checkEmpty?: Function = undefined;
    colspan?: Function | boolean | number = undefined;
    preferSlot?: Function | boolean = true;
    type: TypeOfColumn = TypeOfColumn.None;
    link: string | Function = '';
    action?: Function = undefined;
    isForRowKey: boolean = false;
    extractTitleFromColumn: string = '';
    slotData: LktObject = {};

    field: Field = new Field();

    constructor(data: LktObject = {}) {
        for (let k in data) {
            //@ts-ignore
            this[k] = data[k];
        }

        this.field = new Field(this.field);
    }

    getHref(item: LktObject) {
        if (typeof this.link === 'function') {
            return this.link(item);
        }
        return this.link;
    }

    doAction(item: LktObject) {
        if (typeof this.action === 'function') {
            return this.action(item);
        }
        console.warn('No action defined');
    }
}