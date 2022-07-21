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
                            v-bind:colspan="getVerticalColSpan(column, this.columns.length)"
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
                           v-on:start="drag=true"
                           v-on:end="drag=false"
                           tag="tbody"
                           data-lkt="sortable-table"
                           handle="[data-handle-drag]">
                    <template #item="{element, index}">
                        <LktTableRow
                            v-bind:key="uniqueId + '-'  + index"
                            v-bind:i="index"
                            v-bind:item="element"
                            v-bind:hidden-columns="hiddenColumns"
                            v-bind:hidden-columns-col-span="hiddenColumnsColSpan"
                            v-bind:is-draggable="draggableChecker ? draggableChecker(element) : true"
                            v-bind:visible-columns="visibleColumns"
                            v-bind:empty-columns="emptyColumns"
                            v-bind:hidden-is-visible="Hidden['tr_'+index] === true"
                            v-on:click="click"
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
                        </LktTableRow>
                    </template>
                </draggable>

                <tbody v-else>
                <LktTableRow
                    v-for="(item, i) in Items"
                    v-bind:key="uniqueId + '-'  + i"
                    v-bind:i="i"
                    v-bind:item="item"
                    v-bind:hidden-columns="hiddenColumns"
                    v-bind:hidden-columns-col-span="hiddenColumnsColSpan"
                    v-bind:is-draggable="draggableChecker ? draggableChecker(item) : true"
                    v-bind:visible-columns="visibleColumns"
                    v-bind:empty-columns="emptyColumns"
                    v-bind:hidden-is-visible="Hidden['tr_'+i] === true"
                    v-on:click="click"
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
                </LktTableRow>
                </tbody>
            </table>
        </div>
        <div v-else-if="!!$slots['no-items']" data-lkt="empty-table">
            <slot name="no-items"></slot>
        </div>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import {generateRandomString, isFunction, isUndefined} from "lkt-tools";
import {
    defaultTableSorter,
    getVerticalColSpan,
    getHorizontalColSpan,
    getDefaultSortColumn
} from "@/functions/table-functions";
import LktTableRow from "@/lib-components/LktTableRow.vue";
import {defineComponent} from "vue";

export default defineComponent({
    name: "LktTable",
    components: {LktTableRow, draggable},
    props: {
        value: {type: Array, default: () => []},
        columns: {type: Array, default: () => []},
        sorter: {type: Function},
        sortable: {type: Boolean, default: false},
        hideEmptyColumns: {type: Boolean, default: false},
        draggableChecker: {type: Function, default: (item) => true},
        checkValidDrag: {type: Function, default: (evt) => true}
    },
    emits: ['input', 'sort'],
    data() {
        let Sorter = isFunction(this.sorter) ? this.sorter : defaultTableSorter;

        return {
            Sorter,
            SortBy: getDefaultSortColumn(this.columns),
            SortDirection: 'asc',
            Items: this.value,
            Hidden: {},
            drag: false,
            dragGroup: generateRandomString(16),
            input: '',
            uniqueId: generateRandomString(12)
        };
    },
    computed: {
        slots() {
            let r = {};
            let i = 0;
            let haystack = {};
            if (this.$slots) {
                haystack = Object.assign(haystack, this.$slots);
            }
            for (let k in haystack) {
                r[k] = haystack[k];
                ++i;
            }
            return r;
        },
        hasData() {
            return this.Items.length > 0;
        },
        emptyColumns() {
            if (!this.hideEmptyColumns) {
                return [];
            }
            let r = [];
            this.columns.forEach(column => {
                let key = column.key;

                let ok = false;
                this.Items.forEach(item => {
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
            return this.columns.filter(c => c.hidden !== true);
        },
        hiddenColumns() {
            return this.columns.filter(c => c.hidden === true);
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
        value: {
            handler(v) {
                this.Items = v;
            }, deep: true,
        },
        Items: {
            handler(v) {
                this.$emit('input', v);
            }, deep: true,
        }
    },
    methods: {
        getItemByEvent(e) {
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
        getVerticalColSpan,
        getHorizontalColSpan,
        sort(column) {
            if (column.sortable === true) {
                this.Items = this.Items.sort((a, b) => {
                    return this.Sorter(a, b, column, this.SortDirection);
                });
                this.SortDirection = this.SortDirection === 'asc' ? 'desc' : 'asc';
                this.SortBy = column.key;
                this.$emit('sort', [this.SortBy, this.SortDirection]);
            }
        },
        click($event) {
            this.$emit('click', $event);
        },
        show($event) {
            let k = 'tr_' + $event.i;
            this.Hidden[k] = isUndefined(this.Hidden[k]) ? true : !this.Hidden[k];
        }
    },
})
</script>