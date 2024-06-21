import { App } from "vue";
export { createColumn, createHiddenColumn, createLinkColumn, createActionColumn, createTextColumn, createCheckColumn, createSwitchColumn, createSelectColumn, createEmailColumn, createTelColumn } from "./functions/table-functions";
export { LktTableColumn } from "./instances/LktTableColumn";
import "./../lkt-table.css";
declare const LktTable: {
    install: (app: App) => void;
};
export default LktTable;
export declare const setTableNavButtonSlot: (component: string | Component) => boolean;
export declare const setTableDropButtonSlot: (component: string | Component) => boolean;
export declare const setTableCreateButtonSlot: (component: string | Component) => boolean;
