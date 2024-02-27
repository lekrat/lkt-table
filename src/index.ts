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

const LktTable = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-table') === undefined) app.component('lkt-table', table);
    },
};

export default LktTable;