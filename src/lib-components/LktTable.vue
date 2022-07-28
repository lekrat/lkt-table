<template>
    <div>
        <div v-if="hasData" data-lkt="table" :data-sortable="sortable">
            <table>
                <thead>
                <tr>
                    <th v-if="sortable" data-role="drag-indicator"></th>
                    <th v-if="hiddenColumns.length > 0"></th>
                    <template v-for="column in visibleColumns">
                        <th :data-column="column.key"
                            v-if="emptyColumns.indexOf(column.key) === -1"
                            v-bind:data-sortable="column.sortable === true"
                            v-bind:data-sort="column.sortable === true && SortBy === column.key ? SortDirection : ''"
                            v-bind:colspan="getVerticalColSpan(column, columns.length, Items)"
                            v-bind:title="column.label"
                            v-on:click="sort(column)"
                        >
                            <div>{{ column.label }}</div>
                        </th>
                    </template>
                </tr>
                </thead>
                <draggable v-if="sortable"
                           v-model="Items"
                           v-bind:group="dragGroup"
                           v-bind:move="checkValidDrag"
                           v-bind:item-key="draggableItemKey"
                           v-on:start="drag=true"
                           v-on:end="drag=false"
                           tag="tbody"
                           data-lkt="sortable-table"
                           handle="[data-handle-drag]">
                    <template #item="{element, index}">
                        <lkt-table-row
                            v-bind:key="uniqueId + '-'  + index"
                            v-bind:i="index"
                            v-bind:item="element"
                            v-bind:hidden-columns="hiddenColumns"
                            v-bind:hidden-columns-col-span="hiddenColumnsColSpan"
                            v-bind:is-draggable="draggableChecker ? draggableChecker(element) : true"
                            v-bind:visible-columns="visibleColumns"
                            v-bind:empty-columns="emptyColumns"
                            v-bind:hidden-is-visible="isVisible(index)"
                            v-on:click="onClick"
                            v-on:show="show"
                        >
                            <template
                                v-for="(slot, column) in slots"
                                v-slot:[column]="row">
                                <slot
                                    v-bind:name="column"
                                    v-bind:item="row.item"
                                    v-bind:value="row.value"
                                    v-bind:column="row.column"
                                ></slot>
                            </template>
                        </lkt-table-row>
                    </template>
                </draggable>

                <tbody v-else>
                <lkt-table-row
                    v-for="(item, i) in Items"
                    v-bind:key="uniqueId + '-'  + i"
                    v-bind:i="i"
                    v-bind:item="item"
                    v-bind:hidden-columns="hiddenColumns"
                    v-bind:hidden-columns-col-span="hiddenColumnsColSpan"
                    v-bind:is-draggable="draggableChecker ? draggableChecker(item) : true"
                    v-bind:visible-columns="visibleColumns"
                    v-bind:empty-columns="emptyColumns"
                    v-bind:hidden-is-visible="isVisible(i)"
                    v-on:click="onClick"
                    v-on:show="show"
                >
                    <template
                        v-for="(_, column) in slots"
                        v-slot:[column]="row">
                        <slot
                            v-bind:name="column"
                            v-bind:item="row.item"
                            v-bind:value="row.value"
                            v-bind:column="row.column"
                        ></slot>
                    </template>
                </lkt-table-row>
                </tbody>
            </table>
        </div>
        <div v-else-if="!!$slots['no-items']" data-lkt="empty-table">
            <slot name="no-items"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import draggable from "vuedraggable";
import {generateRandomString, getSlots, isFunction, isUndefined} from "lkt-tools";
import {
    defaultTableSorter,
    getVerticalColSpan,
    getHorizontalColSpan,
    getDefaultSortColumn
} from "../functions/table-functions";
import LktTableRow from "../lib-components/LktTableRow.vue";
import {defineComponent} from "vue";
import {LktTableColumn} from "../instances/LktTableColumn";
import {LktEvent} from "lkt-events/dist/types/classes/LktEvent";

export default defineComponent({
    name: "LktTable",
    components: {LktTableRow, draggable},
    props: {
        modelValue: {type: Array, default: ():Array<any> => []},
        columns: {type: Array, default: ():LktTableColumn[] => []},
        sorter: {type: Function},
        sortable: {type: Boolean, default: false},
        hideEmptyColumns: {type: Boolean, default: false},
        draggableChecker: {type: Function, default: (item: any) => true},
        checkValidDrag: {type: Function, default: (evt: any) => true},
        draggableItemKey: {type: String, default: 'name'}
    },
    emits: ['update:modelValue', 'sort', 'click'],
    data() {
        let Sorter = isFunction(this.sorter) ? this.sorter : defaultTableSorter;

        return {
            Sorter,
            //@ts-ignore
            SortBy: getDefaultSortColumn(this.columns),
            SortDirection: 'asc',
            Items: this.modelValue,
            Hidden: {},
            drag: false,
            dragGroup: generateRandomString(16),
            uniqueId: generateRandomString(12)
        };
    },
    computed: {
        slots() {
            return getSlots(this.$slots);
        },
        hasData() {
            return this.Items.length > 0;
        },
        emptyColumns() {
            if (!this.hideEmptyColumns) {
                return [];
            }
            let r: string[] = [];
            this.columns.forEach((column: LktTableColumn) => {
                let key = column.key;

                let ok = false;
                this.Items.forEach((item: any) => {
                    if (isFunction(item.checkEmpty)) {
                        return item.checkEmpty(item);
                    }
                    if (item[key]) {
                        ok = true;
                    }
                });

                if (!ok) {
                    r.push(key);
                }
            });
            return r;
        },
        visibleColumns() {
            return this.columns.filter((c: LktTableColumn) => c.hidden !== true);
        },
        hiddenColumns() {
            return this.columns.filter((c: LktTableColumn) => c.hidden === true);
        },
        hiddenColumnsColSpan() {
            let r = this.visibleColumns.length + 1;
            if (this.sortable) {
                ++r;
            }
            return r;
        }
    },
    watch: {
        modelValue: {
            handler(v) {
                this.Items = v;
            }, deep: true,
        },
        Items: {
            handler(v) {
                this.$emit('update:modelValue', v);
            }, deep: true,
        }
    },
    methods: {
        getVerticalColSpan,
        getHorizontalColSpan,
        getItemByEvent(e: any) {
            let t = e.target;
            if (isUndefined(t.dataset.column)) {
                do {
                    t = t.parentNode;
                } while (isUndefined(t.dataset.column) && t.tagName !== 'TABLE' && t.tagName !== 'body');
            }

            if (t.tagName === 'TD') {
                t = t.parentNode;
                t = t.dataset.i;
                if (!isUndefined(t)) {
                    return this.Items[t];
                }
            }

            return undefined;
        },
        isVisible(index: number) {
            return this.Hidden['tr_'+index] === true;
        },
        sort(column: LktTableColumn) {
            if (column.sortable === true) {
                this.Items = this.Items.sort((a: any, b: any) => {
                    return this.Sorter(a, b, column, this.SortDirection);
                });
                this.SortDirection = this.SortDirection === 'asc' ? 'desc' : 'asc';
                this.SortBy = column.key;
                this.$emit('sort', [this.SortBy, this.SortDirection]);
            }
        },
        onClick($event: any, $lkt: LktEvent) {
            this.$emit('click', $event, $lkt);
        },
        show($event: any, $lkt: LktEvent) {
            let k = 'tr_' + $lkt.value.i;
            //@ts-ignore
            this.Hidden[k] = isUndefined(this.Hidden[k]) ? true : !this.Hidden[k];
        }
    },
})
</script>