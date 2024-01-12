/* eslint-disable import/prefer-default-export */
import {default as table} from "./lib-components/LktTable.vue";
import {App} from "vue";
import LktFieldCheck from "lkt-field-check";
import LktFieldText from "lkt-field-text";
import LktFieldSwitch from "lkt-field-switch";
import LktFieldSelect from "lkt-field-select";
import LktLoader from "lkt-loader";

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

import "./../lkt-table.css"

const LktTable = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-table') === undefined) app.component('lkt-table', table);

        // Register additional components
        if (app.component('lkt-loader') === undefined) app.use(LktLoader);
        if (app.component('lkt-field-select') === undefined) app.use(LktFieldSelect);
        if (app.component('lkt-field-text') === undefined) app.use(LktFieldText);
        if (app.component('lkt-field-check') === undefined) app.use(LktFieldCheck);
        if (app.component('lkt-field-switch') === undefined) app.use(LktFieldSwitch);
    },
};

export default LktTable;