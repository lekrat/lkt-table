declare class H {
    constructor(t?: string, d?: string);
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable(t?: boolean): this;
    setIsEditable(t?: boolean): this;
    editable: boolean | undefined;
    setIsHidden(t?: boolean): this;
    setIsLoading(t?: boolean): this;
    setFormatter(t?: undefined): this;
    formatter: any;
    setEmptyChecker(t?: undefined): this;
    checkEmpty: any;
    setColSpan(t?: undefined): this;
    getHref(t: any): any;
    doAction(t: any): any;
    defineAsLink(t: any): this;
    type: string | undefined;
    link: any;
    defineAsText(): this;
    defineAsEmail(): this;
    defineAsTel(): this;
    defineAsInt(): this;
    defineAsFloat(): this;
    defineAsCheck(): this;
    defineAsSwitch(): this;
    defineAsFile(): this;
    defineAsAction(t: any): this;
    action: any;
    defineAsSelect(t: any): this;
    options: any;
    showLoading(): boolean;
    hasToLoadResource(): boolean;
    setIsMultiple(t?: boolean): this;
    setResource(t: any): this;
    setResourceSlot(t: any): this;
    resourceSlot: any;
    setResourceData(t: any): this;
    loadResource(): Promise<this>;
    setEditSlot(t: any): this;
    setValueSlot(t: any): this;
    setMultipleDisplay(t: any): this;
    setMultipleDisplayToList(): this;
    setMultipleDisplayToInline(): this;
    setMultipleDisplayToCount(): this;
    setMultipleDisplayEdition(t: any): this;
    setMultipleDisplayEditionToList(): this;
    setMultipleDisplayEditionToInline(): this;
    setSlotData(t: any): this;
    slotData: any;
    setAutoLoadSelectOptions(t?: boolean, d?: string): this;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode(t?: boolean): this;
    tags: boolean | undefined;
    setOptions(t?: any[]): this;
    setTitleSourceColumn(t: any): this;
    extractTitleFromColumn: any;
    useForRowKey(t?: boolean): this;
    isForRowKey: boolean | undefined;
}
declare function Ll(l: any, t: any, d: any, a?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function Al(l: any, t: any, d?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function wl(l: any, t: any, d?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function Rl(l: any, t: any, d?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function Nl(l: any, t: any, d?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function Il(l: any, t: any, d: any, a?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function Ol(l: any, t: any, d: any, a?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function Fl(l: any, t: any, d?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function $l(l: any, t: any, d?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare function Ml(l: any, t: any, d?: boolean): {
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    resource: string;
    resourceData: {};
    isMultiple: boolean;
    isLoading: boolean;
    resourceLoaded: boolean;
    valueSlot: string;
    editSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    setIsSortable: (t?: boolean) => H;
    setIsEditable: (t?: boolean) => H;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => H;
    setIsLoading: (t?: boolean) => H;
    setFormatter: (t?: undefined) => H;
    formatter: any;
    setEmptyChecker: (t?: undefined) => H;
    checkEmpty: any;
    setColSpan: (t?: undefined) => H;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => H;
    type: string | undefined;
    link: any;
    defineAsText: () => H;
    defineAsEmail: () => H;
    defineAsTel: () => H;
    defineAsInt: () => H;
    defineAsFloat: () => H;
    defineAsCheck: () => H;
    defineAsSwitch: () => H;
    defineAsFile: () => H;
    defineAsAction: (t: any) => H;
    action: any;
    defineAsSelect: (t: any) => H;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => H;
    setResource: (t: any) => H;
    setResourceSlot: (t: any) => H;
    resourceSlot: any;
    setResourceData: (t: any) => H;
    loadResource: () => Promise<H>;
    setEditSlot: (t: any) => H;
    setValueSlot: (t: any) => H;
    setMultipleDisplay: (t: any) => H;
    setMultipleDisplayToList: () => H;
    setMultipleDisplayToInline: () => H;
    setMultipleDisplayToCount: () => H;
    setMultipleDisplayEdition: (t: any) => H;
    setMultipleDisplayEditionToList: () => H;
    setMultipleDisplayEditionToInline: () => H;
    setSlotData: (t: any) => H;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, d?: string) => H;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => H;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => H;
    setTitleSourceColumn: (t: any) => H;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => H;
    isForRowKey: boolean | undefined;
};
declare namespace Ul {
    function install(l: any): void;
}
declare function Kl(l: any): boolean;
declare function Hl(l: any): boolean;
declare function Wl(l: any): boolean;
export { H as LktTableColumn, Ll as createActionColumn, Al as createCheckColumn, wl as createColumn, Rl as createEmailColumn, Nl as createHiddenColumn, Il as createLinkColumn, Ol as createSelectColumn, Fl as createSwitchColumn, $l as createTelColumn, Ml as createTextColumn, Ul as default, Kl as setTableCreateButtonSlot, Hl as setTableDropButtonSlot, Wl as setTableNavButtonSlot };
