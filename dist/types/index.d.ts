import { App } from "vue";
export { createColumn, createHiddenColumn, createLinkColumn, createActionColumn, createTextColumn, createCheckColumn, createSwitchColumn, createSelectColumn, createEmailColumn, createTelColumn } from "./functions/table-functions";
import "./../lkt-table.css";
declare const LktTable: {
    install: (app: App) => void;
};
export default LktTable;
