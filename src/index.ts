/* eslint-disable import/prefer-default-export */
import {default as table} from "./lib-components/LktTable.vue";
import {App, Plugin} from "vue";

export {
    createColumn,
    createHiddenColumn,
    createLinkColumn,
    createActionColumn,
    createTextColumn,
    createCheckColumn,
    createSwitchColumn,
    createSelectColumn,
    createEmailColumn,
    createTelColumn,
    createFileColumn,
    createIntegerColumn,
    createFloatColumn
} from "./functions/table-functions";

export {LktTableColumn} from "./instances/LktTableColumn";

import "./../lkt-table.css"
import {Settings} from "./settings/Settings";
import LktLoader from "lkt-loader";
import LktButton from "lkt-button";
import LktPaginator from "lkt-paginator";
import LktFieldText from "lkt-field-text";
import LktFieldTextArea from "lkt-field-textarea";
import LktFieldSelect from "lkt-field-select";
import LktFieldSwitch from "lkt-field-switch";
import LktFieldFile from "lkt-field-file";

const LktTable: Plugin = {
    install: (app: App) => {
        // Register plugin dependencies
        if (app.component('lkt-loader') === undefined) app.use(LktLoader);
        if (app.component('lkt-button') === undefined) app.use(LktButton);
        if (app.component('lkt-paginator') === undefined) app.use(LktPaginator);
        if (app.component('lkt-field-text') === undefined) app.use(LktFieldText);
        if (app.component('lkt-field-textarea') === undefined) app.use(LktFieldTextArea);
        if (app.component('lkt-field-select') === undefined) app.use(LktFieldSelect);
        if (app.component('lkt-field-switch') === undefined) app.use(LktFieldSwitch);
        if (app.component('lkt-field-file') === undefined) app.use(LktFieldFile);


        // Register plugin components
        if (app.component('lkt-table') === undefined) app.component('lkt-table', table);
    },
};

export default LktTable;

export const setTableNavButtonSlot = (component: string|Component) => {
    Settings.navButtonSlot = component;
    return true;
}

export const setTableDropButtonSlot = (component: string|Component) => {
    Settings.dropButtonSlot = component;
    return true;
}

export const setTableCreateButtonSlot = (component: string|Component) => {
    Settings.createButtonSlot = component;
    return true;
}

export const setTableEmptySlot = (component?: string|Component) => {
    Settings.defaultEmptySlot = component;
}