/* eslint-disable import/prefer-default-export */
import {default as table} from "./lib-components/LktTable.vue";

export {createColumn} from "./functions/table-functions";

const LktTable = {
    install: (app: any, options: any) => {
        app.component('LktTable', table);
    },
};

export default LktTable;