/* eslint-disable import/prefer-default-export */
import {default as table} from "./lib-components/LktTable.vue";
import {App} from "vue";

export {createColumn, createHiddenColumn, createLinkColumn, createTextColumn, createCheckColumn, createSwitchColumn, createSelectColumn} from "./functions/table-functions";

const LktTable = {
    install: (app: App) => {
        app.component('lkt-table', table);
    },
};

export default LktTable;