declare class A {
    constructor(t?: string, r?: string);
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
    defineAsInteger(): this;
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
    setAutoLoadSelectOptions(t?: boolean, r?: string): this;
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
declare function Ll(l: any, t: any, r: any, n?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Ol(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Il(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Al(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Wl(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function $l(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Hl(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Rl(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Tl(l: any, t: any, r: any, n?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Ul(l: any, t: any, r: any, n?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Nl(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Fl(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare function Ml(l: any, t: any, r?: boolean): {
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
    setIsSortable: (t?: boolean) => A;
    setIsEditable: (t?: boolean) => A;
    editable: boolean | undefined;
    setIsHidden: (t?: boolean) => A;
    setIsLoading: (t?: boolean) => A;
    setFormatter: (t?: undefined) => A;
    formatter: any;
    setEmptyChecker: (t?: undefined) => A;
    checkEmpty: any;
    setColSpan: (t?: undefined) => A;
    getHref: (t: any) => any;
    doAction: (t: any) => any;
    defineAsLink: (t: any) => A;
    type: string | undefined;
    link: any;
    defineAsText: () => A;
    defineAsEmail: () => A;
    defineAsTel: () => A;
    defineAsInteger: () => A;
    defineAsFloat: () => A;
    defineAsCheck: () => A;
    defineAsSwitch: () => A;
    defineAsFile: () => A;
    defineAsAction: (t: any) => A;
    action: any;
    defineAsSelect: (t: any) => A;
    options: any;
    showLoading: () => boolean;
    hasToLoadResource: () => boolean;
    setIsMultiple: (t?: boolean) => A;
    setResource: (t: any) => A;
    setResourceSlot: (t: any) => A;
    resourceSlot: any;
    setResourceData: (t: any) => A;
    loadResource: () => Promise<A>;
    setEditSlot: (t: any) => A;
    setValueSlot: (t: any) => A;
    setMultipleDisplay: (t: any) => A;
    setMultipleDisplayToList: () => A;
    setMultipleDisplayToInline: () => A;
    setMultipleDisplayToCount: () => A;
    setMultipleDisplayEdition: (t: any) => A;
    setMultipleDisplayEditionToList: () => A;
    setMultipleDisplayEditionToInline: () => A;
    setSlotData: (t: any) => A;
    slotData: any;
    setAutoLoadSelectOptions: (t?: boolean, r?: string) => A;
    autoLoadSelectOptions: boolean | undefined;
    autoLoadSelectOptionsKey: string | undefined;
    setTagMode: (t?: boolean) => A;
    tags: boolean | undefined;
    setOptions: (t?: any[]) => A;
    setTitleSourceColumn: (t: any) => A;
    extractTitleFromColumn: any;
    useForRowKey: (t?: boolean) => A;
    isForRowKey: boolean | undefined;
};
declare namespace Kl {
    function install(l: any): void;
}
declare function ql(l: any): boolean;
declare function jl(l: any): boolean;
declare function Pl(l: any): boolean;
export { A as LktTableColumn, Ll as createActionColumn, Ol as createCheckColumn, Il as createColumn, Al as createEmailColumn, Wl as createFileColumn, $l as createFloatColumn, Hl as createHiddenColumn, Rl as createIntegerColumn, Tl as createLinkColumn, Ul as createSelectColumn, Nl as createSwitchColumn, Fl as createTelColumn, Ml as createTextColumn, Kl as default, ql as setTableCreateButtonSlot, jl as setTableDropButtonSlot, Pl as setTableNavButtonSlot };
