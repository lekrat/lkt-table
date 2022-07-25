/* eslint-disable import/prefer-default-export */
import {default as table} from "./lib-components/LktTable.vue";
import draggable from "vuedraggable";
import {isObject, isUndefined} from "lkt-tools";

export {createColumn} from "./functions/table-functions";

const LktTable = {
    install: (app: any, options: any) => {
        app.component('lkt-table', table);

        let mountDraggableComponent = true;

        if (isObject(options)) {
            if (!isUndefined(options.mountDraggableComponent) && options.mountDraggableComponent === false) {
                mountDraggableComponent = false;

            }
        }

        if (mountDraggableComponent) {
            app.component('draggable', draggable);
        }
    },
};

export default LktTable;