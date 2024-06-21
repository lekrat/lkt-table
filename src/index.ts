/* eslint-disable import/prefer-default-export */
import {default as table} from "./lib-components/LktTable.vue";
import {App} from "vue";

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
    createTelColumn
} from "./functions/table-functions";

export {LktTableColumn} from "./instances/LktTableColumn";

import "./../lkt-table.css"
import {Settings} from "./settings/Settings";

const LktTable = {
    install: (app: App) => {
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