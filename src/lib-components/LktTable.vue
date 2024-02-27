<script lang="ts" setup>
import draggable from "vuedraggable";
import {
    defaultTableSorter,
    getVerticalColSpan,
    getDefaultSortColumn,
    getColumnByKey
} from "../functions/table-functions";
import LktTableRow from "../components/LktTableRow.vue";
import {computed, onMounted, PropType, ref, useSlots, watch} from "vue";
import {LktTableColumn} from "../instances/LktTableColumn";
import {LktEvent} from "lkt-events";
import LktHiddenRow from "../components/LktHiddenRow.vue";
import {generateRandomString} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";
const emit = defineEmits(['update:modelValue', 'sort', 'click']);

const slots = useSlots();

const props = defineProps({
    modelValue: {type: Array as PropType<LktObject[]>, default: (): any[] => []},
    columns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => []},
    sorter: {type: Function, default: defaultTableSorter},
    sortable: {type: Boolean, default: false},
    hideEmptyColumns: {type: Boolean, default: false},
    draggableChecker: {type: Function, default: (item: any) => true},
    checkValidDrag: {type: Function, default: (evt: any) => true},
    draggableItemKey: {type: String, default: 'name'}
});

const hiddenColumnsStack: LktObject = {};

const Sorter = ref(typeof props.sorter === 'function' ? props.sorter : defaultTableSorter),
    SortBy = ref(getDefaultSortColumn(props.columns)),
    SortDirection = ref('asc'),
    Items = ref(props.modelValue),
    Hidden = ref(hiddenColumnsStack),
    drag = ref(false);


const uniqueId = generateRandomString(12);

const hasData = computed(() => {
        return Items.value.length > 0;
    }),
    emptyColumns = computed(() => {
        if (!props.hideEmptyColumns) return [];
        let r: string[] = [];
        props.columns.forEach((column: LktTableColumn) => {
            let key = column.key;

            let ok = false;
            Items.value.forEach((item: any) => {
                if (typeof item.checkEmpty === 'function') {
                    return item.checkEmpty(item);
                }
                if (item[key]) ok = true;
            });

            if (!ok) r.push(key);
        });
        return r;
    }),
    visibleColumns = computed(() => {
        return props.columns.filter((c: LktTableColumn) => !c.hidden);
    }),
    hiddenColumns = computed(() => {
        return props.columns.filter((c: LktTableColumn) => c.hidden);
    }),
    hiddenColumnsColSpan = computed(() => {
        let r = visibleColumns.value.length + 1;
        if (props.sortable) ++r;
        return r;
    }),
    displayHiddenColumnsIndicator = computed(() => {
        return hiddenColumns.value.length > 0 && !props.sortable;
    }),
    columnKeys = computed((): string[] => {
        return props.columns.map(c => c.key);

    }),
    colSlots = computed((): LktObject => {
        let r = [];
        for (let k in slots) if (columnKeys.value.indexOf(k) !== -1) r.push(k);
        return r;
    });


const getItemByEvent = (e: any) => {
        let t = e.target;
        if (typeof t.dataset.column === 'undefined') {
            do {
                t = t.parentNode;
            } while (typeof t.dataset.column === 'undefined' && t.tagName !== 'TABLE' && t.tagName !== 'body');
        }

        if (t.tagName === 'TD') {
            t = t.parentNode;
            t = t.dataset.i;
            if (typeof t !== 'undefined') return Items.value[t];
        }

        return undefined;
    },
    isVisible = (index: number) => {
        return Hidden.value['tr_' + index] === true;
    },
    sort = (column: LktTableColumn | null) => {
        if (!column) return;
        if (column.sortable) {
            Items.value = Items.value.sort((a: any, b: any) => {
                return Sorter.value(a, b, column, SortDirection.value);
            });
            SortDirection.value = SortDirection.value === 'asc' ? 'desc' : 'asc';
            SortBy.value = column.key;
            emit('sort', [SortBy.value, SortDirection.value]);
        }
    },
    onClick = ($event: any, $lkt: LktEvent) => {
        emit('click', $event, $lkt);
    },
    show = ($event: any, $lkt: LktEvent) => {
        let k = 'tr_' + $lkt.value.i;
        Hidden.value[k] = typeof Hidden.value[k] === 'undefined' ? true : !Hidden.value[k];
    };


const onEdited = (payload: LktObject, i: any) => {
    Items.value[i] = payload;
}

onMounted(() => {
    sort(getColumnByKey(props.columns, SortBy.value));
})

watch(() => props.modelValue, (v) => Items.value = v);
watch(Items, (v: any) => {
    emit('update:modelValue', v)
});

defineExpose({getItemByEvent});

</script>

<template>
    <div v-if="hasData" class="lkt-table" :data-sortable="sortable">
        <table>
            <thead>
            <tr>
                <th v-if="sortable" data-role="drag-indicator"></th>
                <th v-if="displayHiddenColumnsIndicator"></th>
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
                       v-bind:move="checkValidDrag"
                       v-bind:itemKey="draggableItemKey"
                       v-on:start="drag=true"
                       v-on:end="drag=false"
                       tag="tbody"
                       class="lkt-sortable-table"
                       handle="[data-handle-drag]">
                <template #item="{element, index}">
                    <lkt-table-row
                        v-bind:key="uniqueId + '-'  + index"
                        v-bind:i="index"
                        v-bind:item="element"
                        v-bind:display-hidden-columns-indicator="displayHiddenColumnsIndicator"
                        v-bind:is-draggable="draggableChecker ? draggableChecker(element) : true"
                        v-bind:sortable="sortable"
                        v-bind:visible-columns="visibleColumns"
                        v-bind:empty-columns="emptyColumns"
                        v-bind:hidden-is-visible="isVisible(index)"
                        v-on:click="onClick"
                        v-on:show="show"
                    >
                        <template
                            v-for="column in colSlots"
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
                v-bind:display-hidden-columns-indicator="displayHiddenColumnsIndicator"
                v-bind:is-draggable="draggableChecker ? draggableChecker(item) : true"
                v-bind:sortable="sortable"
                v-bind:visible-columns="visibleColumns"
                v-bind:empty-columns="emptyColumns"
                v-bind:hidden-is-visible="isVisible(i)"
                v-on:click="onClick"
                v-on:show="show"
                v-on:edited="onEdited"
            >
                <template
                    v-for="column in colSlots"
                    v-slot:[column]="row">
                    <slot
                        v-bind:name="column"
                        v-bind:item="row.item"
                        v-bind:value="row.value"
                        v-bind:column="row.column"
                    ></slot>
                </template>
            </lkt-table-row>
            <lkt-hidden-row
                v-if="hiddenColumns.length > 0"
                v-for="(item, i) in Items"
                v-bind:key="uniqueId + '-'  + i"
                v-bind:i="i"
                v-bind:item="item"
                v-bind:hidden-columns="hiddenColumns"
                v-bind:hidden-columns-col-span="hiddenColumnsColSpan"
                v-bind:is-draggable="draggableChecker ? draggableChecker(item) : true"
                v-bind:sortable="sortable"
                v-bind:visible-columns="visibleColumns"
                v-bind:empty-columns="emptyColumns"
                v-bind:hidden-is-visible="isVisible(i)"
                v-on:click="onClick"
                v-on:show="show"
            >
                <template
                    v-for="column in colSlots"
                    v-slot:[column]="row">
                    <slot
                        v-bind:name="column"
                        v-bind:item="row.item"
                        v-bind:value="row.value"
                        v-bind:column="row.column"
                    ></slot>
                </template>
            </lkt-hidden-row>
            </tbody>
        </table>
    </div>
    <div v-else-if="!!$slots['no-items']" class="lkt-empty-table">
        <slot name="no-items"></slot>
    </div>
</template>