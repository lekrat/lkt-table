import {Option} from "lkt-field-select/dist/types/types/Option";
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
    type: '' | 'link' | 'text' | 'int' | 'float' | 'check' | 'switch' | 'select' | 'action' | 'email' | 'tel'
    link: string | Function
    action: Function
    options: Option[]
    resource: string
    resourceData: LktObject
    isMultiple: boolean
    isLoading: boolean
    resourceLoaded: boolean
    valueSlot: string
    editSlot: string

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

    defineAsInt() {
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
}