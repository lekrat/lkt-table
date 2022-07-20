<template>
    <div>
        <h1>Table</h1>
        <input type="text" v-model="input">
        <ul>
            <li>list start</li>
        <li v-for="(item, i) in value" v-bind:key="uniqueId + '_' +  i">
            {{item}}
        </li>
            <li>list finish</li>
        </ul>
        <div v-if="hasData" data-lkt="table" :data-sortable="sortable">
            <table>
                <thead>
                <tr>
                    <th v-if="sortable" data-role="drag-indicator"></th>
                    <th v-if="HiddenColumns.length > 0"></th>
                    <template v-for="column in VisibleColumns" v-on:click="sort(column)">
                        <th :data-column="column.key"
                            v-if="emptyColumns.indexOf(column.key) === -1"
                            v-bind:data-sortable="column.sortable === true"
                            v-bind:data-sort="column.sortable === true && SortBy === column.key ? SortDirection : ''"
                            v-bind:colspan="getVerticalColSpan(column)"
                            v-bind:title="column.label"
                        >
                            <div>{{ column.label }}</div>
                        </th>
                    </template>
                </tr>
                </thead>
                <draggable v-if="sortable" v-model="Items" v-bind:group="dragGroup" @start="drag=true" @end="drag=false"
                           tag="tbody" data-lkt="sortable-table" handle="[data-handle-drag]" :move="checkValidDrag">
                    <lkt-table-row
                        v-for="(item, i) in Items"
                        v-bind:i="i"
                        v-bind:item="item"
                        v-bind:hidden-columns="HiddenColumns"
                        v-bind:is-draggable="draggableChecker ? draggableChecker(item) : true"
                        v-bind:visible-columns="VisibleColumns"
                        v-bind:empty-columns="emptyColumns"
                        v-bind:hidden-is-visible="Hidden['tr_'+i] === true"
                    ></lkt-table-row>
                </draggable>

                <tbody v-else>
                <tr><td>{{Items}}</td></tr>
                <tr><td>{{Items2}}</td></tr>
                <tr v-for="(item, i) in Items2" v-bind:key="uniqueId + '_' +  i">
                    <td>{{item}}</td>
                </tr>
                <template v-for="(item, i) in Items">
                    <LktTableRow
                        v-bind:i="i"
                        v-bind:item="item"
                        v-bind:hidden-columns="HiddenColumns"
                        v-bind:is-draggable="draggableChecker ? draggableChecker(item) : true"
                        v-bind:visible-columns="VisibleColumns"
                        v-bind:empty-columns="emptyColumns"
                        v-bind:hidden-is-visible="Hidden['tr_'+i] === true"
                    ></LktTableRow>
                </template>
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
import {defaultTableSorter} from "@/functions/table-functions";
import LktTableRow from "@/lib-components/LktTableRow.vue";
import {defineComponent} from "vue";

export default defineComponent({
    name: "LktTable",
    components: {LktTableRow, draggable},
    props: {
        value: {type: Array, default() { return [];}},
        columns: {type: Array, default() { return [];}},
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
            SortBy: '',
            SortDirection: 'asc',
            Items: this.value,
            Items2: [1, 2, 3],
            Hidden: {},
            drag: false,
            dragGroup: generateRandomString(16),
            ready: false,
            input: '',
            uniqueId: generateRandomString(12)
        };
    },
    computed: {
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
        VisibleColumns() {
            return this.columns.filter(c => c.hidden !== true);
        },
        HiddenColumns() {
            return this.columns.filter(c => c.hidden === true);
        },
        HiddenColumnsColSpan() {
            let r = this.VisibleColumns.length + 1;
            if (this.sortable) {
                ++r;
            }
            return r;
        }
    },
    watch: {
        // columns: {
        //     handler(v) {
        //         this.$forceUpdate();
        //     }, deep: true,
        // },
        // value: {
        //     handler(v) {
        //         this.Items = v;
        //     }, deep: true,
        // },
        // Items: {
        //     handler(v) {
        //         this.$forceUpdate();
        //         this.$emit('input', v);
        //     }, deep: true,
        // }
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
        getVerticalColSpan(column) {
            if (!column.colspan) {
                return false;
            }
            let max = this.columns.length;
            this.Items.forEach(item => {
                let i = this.getHorizontalColSpan(column, item);
                if (i > 0 && i < max) {
                    max = i;
                }
            });

            return max;
        },
        getHorizontalColSpan(column, item) {
            if (!column.colspan) {
                return false;
            }
            if (typeof column.colspan === 'function') {
                return column.colspan(item);
            }
            return column.colspan;
        },
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
        click(e, item, column) {
            this.$emit('click', {
                event: e,
                item: item,
                column: column,
            });
        },
        show(e, i) {
            let k = 'tr_' + i;
            this.Hidden[k] = isUndefined(this.Hidden[k]) ? true : !this.Hidden[k];
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.ready = true;
        //     this.$forceUpdate();
        // }, 2000);
    }
})
</script>