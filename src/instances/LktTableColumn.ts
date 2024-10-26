import {LktObject} from "lkt-ts-interfaces";
import {TypeOfColumn} from "../enums/TypeOfColumn";
import {Field, Option} from "lkt-field";

export class LktTableColumn {
    key: string
    label: string
    sortable: boolean = true;
    hidden: boolean = false
    editable: boolean
    formatter?: Function = undefined
    checkEmpty?: Function = undefined
    colspan?: Function | boolean | number = undefined
    preferSlot?: Function | boolean = true
    type: '' | TypeOfColumn = '';
    link: string | Function
    action: Function

    field: Field = new Field();


    options: string | Option[]
    resource: string = ''
    resourceSlot: string
    resourceData: LktObject = {}
    slotData: LktObject
    isMultiple: boolean = false
    isForRowKey: boolean
    tags: boolean
    autoLoadSelectOptions: boolean
    autoLoadSelectOptionsKey: string
    multipleDisplay?: string = 'inline';
    multipleDisplayEdition?: string = '';
    extractTitleFromColumn: string
    equivalentToSelectValue: boolean

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

    setIsSortable(status: boolean = true): this {
        this.sortable = status;
        return this;
    }

    setIsEditable(status: boolean = true): this {
        this.editable = status;
        return this;
    }

    setIsHidden(status: boolean = true): this {
        this.hidden = status;
        return this;
    }

    setFormatter(formatter: any = undefined): this {
        this.formatter = formatter;
        return this;
    }

    setEmptyChecker(checker: any = undefined): this {
        this.checkEmpty = checker;
        return this;
    }

    setColSpan(checker: any = undefined): this {
        this.colspan = checker;
        return this;
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

    defineAsLink(href: string | Function) {
        this.type = TypeOfColumn.Link;
        this.link = href;
        return this;
    }

    defineAsText() {
        this.type = TypeOfColumn.Text;
        return this;
    }

    defineAsEmail() {
        this.type = TypeOfColumn.Email;
        return this;
    }

    defineAsTel() {
        this.type = TypeOfColumn.Tel;
        return this;
    }

    defineAsInteger() {
        this.type = TypeOfColumn.Integer;
        return this;
    }

    defineAsFloat() {
        this.type = TypeOfColumn.Float;
        return this;
    }

    defineAsCheck() {
        this.type = TypeOfColumn.Check;
        return this;
    }

    defineAsSwitch() {
        this.type = TypeOfColumn.Switch;
        return this;
    }

    defineAsFile() {
        this.type = TypeOfColumn.File;
        return this;
    }

    defineAsAction(action: Function) {
        this.type = TypeOfColumn.Action;
        this.action = action;
        return this;
    }

    defineAsSelect(options: Option[]) {
        this.type = TypeOfColumn.Select;
        this.options = options;
        return this;
    }

    setIsMultiple(status: boolean = true): this {
        this.isMultiple = status;
        return this;
    }

    setResource(resource: string): this {
        this.resource = resource;
        return this;
    }

    setResourceSlot(resource: string): this {
        this.resourceSlot = resource;
        return this;
    }

    setResourceData(data: LktObject): this {
        this.resourceData = data;
        return this;
    }

    setMultipleDisplay(str: string): this {
        this.setIsMultiple(true);
        this.multipleDisplay = str;
        return this;
    }

    setMultipleDisplayToList(): this {
        this.setIsMultiple(true);
        this.multipleDisplay = 'list';
        return this;
    }

    setMultipleDisplayToInline(): this {
        this.setIsMultiple(true);
        this.multipleDisplay = 'inline';
        return this;
    }

    setMultipleDisplayToCount(): this {
        this.setIsMultiple(true);
        this.multipleDisplay = 'count';
        return this;
    }

    setMultipleDisplayEdition(str: string): this {
        this.setIsMultiple(true);
        this.multipleDisplayEdition = str;
        return this;
    }

    setMultipleDisplayEditionToList(): this {
        this.setIsMultiple(true);
        this.multipleDisplayEdition = 'list';
        return this;
    }

    setMultipleDisplayEditionToInline(): this {
        this.setIsMultiple(true);
        this.multipleDisplayEdition = 'inline';
        return this;
    }

    setSlotData(data: LktObject): this {
        this.slotData = data;
        return this;
    }

    setAutoLoadSelectOptions(enabled: boolean = true, searchKey: string = ''): this {
        this.autoLoadSelectOptions = enabled;
        this.autoLoadSelectOptionsKey = searchKey;
        return this;
    }

    setTagMode(enabled: boolean = true): this {
        this.tags = enabled;
        return this;
    }

    setOptions(opts: Option[] = []): this {
        this.options = opts;
        return this;
    }

    setTitleSourceColumn(key: string): this {
        this.extractTitleFromColumn = key;
        return this;
    }

    useForRowKey(enabled: boolean = true): this {
        this.isForRowKey = enabled;
        return this;
    }

    setIsEquivalentToSelectValue(enabled: boolean = true): this {
        this.equivalentToSelectValue = enabled;
        return this;
    }
}