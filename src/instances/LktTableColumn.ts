//@ts-ignore
import {Option} from "lkt-field-select";
import {LktObject} from "lkt-ts-interfaces";
import {httpCall, HTTPResponse} from "lkt-http-client";

export class LktTableColumn {
    key: string
    label: string
    sortable: boolean
    hidden: boolean
    editable: boolean
    formatter?: Function
    checkEmpty?: Function
    colspan?: Function | boolean | number
    type: '' | 'link' | 'text' | 'int' | 'float' | 'check' | 'switch' | 'select' | 'action' | 'email' | 'tel' | 'file'
    link: string | Function
    action: Function
    options: Option[]
    resource: string
    resourceSlot: string
    resourceData: LktObject
    slotData: LktObject
    isMultiple: boolean
    isLoading: boolean
    isForRowKey: boolean
    tags: boolean
    autoLoadSelectOptions: boolean
    autoLoadSelectOptionsKey: string
    resourceLoaded: boolean
    valueSlot: string
    editSlot: string
    multipleDisplay: string
    multipleDisplayEdition: string
    extractTitleFromColumn: string
    equivalentToSelectValue: boolean

    constructor(key: string = '', label: string = '') {
        this.key = key;
        this.label = label;
        this.sortable = true;
        this.hidden = false;
        this.formatter = undefined;
        this.checkEmpty = undefined;
        this.colspan = undefined;
        this.resource = '';
        this.resourceData = {};
        this.isMultiple = false;
        this.isLoading = false;
        this.resourceLoaded = false;
        this.valueSlot = '';
        this.editSlot = '';
        this.multipleDisplay = '';
        this.multipleDisplayEdition = '';
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

    setIsLoading(status: boolean = true): this {
        this.isLoading = status;
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
        this.colspan = undefined;
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
        this.type = 'link';
        this.link = href;
        return this;
    }

    defineAsText() {
        this.type = 'text';
        return this;
    }

    defineAsEmail() {
        this.type = 'email';
        return this;
    }

    defineAsTel() {
        this.type = 'tel';
        return this;
    }

    defineAsInteger() {
        this.type = 'int';
        return this;
    }

    defineAsFloat() {
        this.type = 'float';
        return this;
    }

    defineAsCheck() {
        this.type = 'check';
        return this;
    }

    defineAsSwitch() {
        this.type = 'switch';
        return this;
    }

    defineAsFile() {
        this.type = 'file';
        return this;
    }

    defineAsAction(action: Function) {
        this.type = 'action';
        this.action = action;
        return this;
    }

    defineAsSelect(options: Option[]) {
        this.type = 'select';
        this.options = options;
        return this;
    }

    showLoading(): boolean {
        return this.resource !== '' && !this.resourceLoaded;
    }

    hasToLoadResource(): boolean {
        return this.resource !== '' && !this.resourceLoaded && !this.isLoading;
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

    async loadResource(): Promise<this> {
        if (this.resourceLoaded) return this;
        if (!this.resource) return this;

        try {
            this.isLoading = true;
            const r: HTTPResponse = await httpCall(this.resource, this.resourceData);
            // @ts-ignore
            this.options = r.data;
            this.isLoading = false;
            this.resourceLoaded = true;

        } catch (e) {
            this.isLoading = false;
        }

        return this;
    }

    setEditSlot(str: string): this {
        this.editSlot = str;
        return this;
    }

    setValueSlot(str: string): this {
        this.valueSlot = str;
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

    setOptions (opts: Option[] = []): this {
        this.options = opts;
        return this;
    }

    setTitleSourceColumn (key: string): this {
        this.extractTitleFromColumn = key;
        return this;
    }

    useForRowKey (enabled: boolean = true): this {
        this.isForRowKey = enabled;
        return this;
    }

    setIsEquivalentToSelectValue (enabled: boolean = true): this {
        this.equivalentToSelectValue = enabled;
        return this;
    }
}