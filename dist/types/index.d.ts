import { App } from "vue";
export { createColumn, createHiddenColumn } from "./functions/table-functions";
declare const LktTable: {
    install: (app: App) => void;
};
export default LktTable;
