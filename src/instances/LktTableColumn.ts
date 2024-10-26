import {LktObject} from "lkt-ts-interfaces";
import {TypeOfColumn} from "../enums/TypeOfColumn";
import {Field, Option} from "lkt-field";

export class LktTableColumn {
    key: string = '';
    label: string = '';
    sortable: boolean = true;
    hidden: boolean = false
    editable: boolean = false;
    formatter?: Function = undefined;
    checkEmpty?: Function = undefined;
    colspan?: Function | boolean | number = undefined;
    preferSlot?: Function | boolean = true;
    type: '' | TypeOfColumn = '';
    link: string | Function
    action: Function
    isForRowKey: boolean
    extractTitleFromColumn: string
    slotData: LktObject

    field: Field = new Field();


    options: string | Option[]

    constructor(key: string | LktObject = '', label: string = '') {
        if (typeof key === 'object') {
            for (let k in key) {
                this[k] = key[k];
            }

        } else {
            this.key = key;
            this.label = label;
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