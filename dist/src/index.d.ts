import { App } from "vue";
export { createColumn, createHiddenColumn, createLinkColumn, createActionColumn, createTextColumn, createCheckColumn, createSwitchColumn, createSelectColumn } from "./functions/table-functions";
declare const LktTable: {
    install: (app: App) => void;
};
export default LktTable;
