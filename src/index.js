/* eslint-disable import/prefer-default-export */
import {default as table} from "./lib-components/LktTable.vue";

export {createColumn} from "./functions/table-functions";

const LktTable = {
    install: (app, options) => {
        app.component('LktTable', table);
        /*  our code for the plugin goes here
                app is the result of createApp()
                options is user options passed in
            */
    },
};

export default LktTable;