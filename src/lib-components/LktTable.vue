<script lang="ts" setup>
import draggable from "vuedraggable";
import {
    defaultTableSorter,
    getVerticalColSpan,
    getDefaultSortColumn,
    getColumnByKey
} from "../functions/table-functions";
import LktTableRow from "../components/LktTableRow.vue";
import {computed, nextTick, onMounted, PropType, ref, useSlots, watch} from "vue";
import {LktTableColumn} from "../instances/LktTableColumn";
import {LktEvent} from "lkt-events";
import LktHiddenRow from "../components/LktHiddenRow.vue";
import {generateRandomString} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";
import {DataState} from "lkt-data-state";
import {HTTPResponse} from "lkt-http-client";

const emit = defineEmits(['update:modelValue', 'sort', 'click', 'save']);

const slots = useSlots();

const props = withDefaults(defineProps<{
    modelValue: LktObject[]
    columns: LktTableColumn[]
    sorter?: Function
    draggableChecker?: Function
    checkValidDrag?: Function
    sortable?: boolean
    hideEmptyColumns?: boolean
    draggableItemKey?: string


    page?: number
    resource?: string
    noResultsText?: string
    title?: string
    filters?: LktObject[]
    dataStateConfig?: LktObject
    hiddenSave?: boolean
    editMode?: boolean
    saveDisabled?: boolean
    saveValidator?: Function
    saveConfirm?: string
    confirmData?: LktObject
    saveResource?: string
    saveResourceData?: LktObject
    saveText?: string
    editModeText?: string
    switchEditionEnabled?: boolean
    canCreate?: boolean
}>(), {
    modelValue: () => [],
    columns: () => [],
    sorter: defaultTableSorter,
    draggableChecker: (item: any) => true,
    checkValidDrag: undefined,
    sortable: false,
    hideEmptyColumns: false,
    draggableItemKey: 'name',


    page: 1,
    resource: '',
    noResultsText: 'No results',
    title: '',
    filters: () => [],
    dataStateConfig: () => ({}),
    hiddenSave: false,
    editMode: false,
    saveDisabled: false,
    saveValidator: () => true,
    saveConfirm: '',
    confirmData: () => ({}),
    saveResource: '',
    saveResourceData: () => ({}),
    saveText: 'Save',
    editModeText: 'Save',
    switchEditionEnabled: false,
    canCreate: false,
});

const hiddenColumnsStack: LktObject = {};

const Sorter = ref(typeof props.sorter === 'function' ? props.sorter : defaultTableSorter),
    SortBy = ref(getDefaultSortColumn(props.columns)),
    SortDirection = ref('asc'),
    Items = ref(props.modelValue),
    Hidden = ref(hiddenColumnsStack),
    drag = ref(false),
    Columns = ref(props.columns);

const Page = ref(props.page),
    loading = ref(true),
    firstLoadReady = ref(false),
    paginator = ref(null),
    dataState = ref(new DataState({items: Items.value}, props.dataStateConfig)),
    editModeEnabled = ref(props.editMode)
;

const onResults = (r: any) => {
        //@ts-ignore
        if (Array.isArray(r)) Items.value = r;
        loading.value = false;
        firstLoadReady.value = true;
        dataState.value.store({items: Items.value}).turnStoredIntoOriginal();
    },
    onLoading = () => nextTick(() => loading.value = true),
    doRefresh = () => {
        //@ts-ignore
        paginator.value.doRefresh();
    };


const uniqueId = generateRandomString(12);

const emptyColumns = computed(() => {
        if (!props.hideEmptyColumns) return [];
        let r: string[] = [];
        Columns.value.forEach((column: LktTableColumn) => {
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
        return Columns.value.filter((c: LktTableColumn) => !c.hidden);
    }),
    hiddenColumns = computed(() => {
        return Columns.value.filter((c: LktTableColumn) => c.hidden);
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
        return Columns.value.map(c => c.key);

    }),
    colSlots = computed((): LktObject => {
        let r = [];
        for (let k in slots) if (columnKeys.value.indexOf(k) !== -1) r.push(k);
        return r;
    }),
    showSaveButton = computed(() => {
        if (props.hiddenSave) return false;
        if (loading.value) return false;
        if (!props.saveResource) return false;
        if (editModeEnabled.value && dataState.value.changed()) return true;

        return editModeEnabled.value;
    }),
    showEditionButtons = computed(() => {
        return showSaveButton.value;
    }),
    ableToSave = computed(() => {
        if (props.saveDisabled) return false;
        if (typeof props.saveValidator === 'function' && !props.saveValidator(Items.value)) return false;
        return dataState.value.changed();
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
    },
    autoLoadSelectColumnsOptions = () => {

        Columns.value.forEach(col => {
            if (col.type === 'select' && col.autoLoadSelectOptions) {

                let key = col.autoLoadSelectOptionsKey !== '' ? col.autoLoadSelectOptionsKey : col.key,
                    opts = [];

                Items.value.forEach(item => {
                    if (Array.isArray(item[key])) {
                        item[key].forEach(opt => opts.push(opt));
                    }
                });

                let flags = {};

                opts = opts.filter(function (opt) {
                    if (flags[opt.value]) return false;
                    flags[opt.value] = true;
                    return true;
                });

                col.setOptions(opts);
            }
        })
    },
    validDragChecker = (evt: any) => {
        if (typeof props.checkValidDrag === 'function') return props.checkValidDrag(evt);
        return true;
    },
    isDraggable = (element: any) => {
        if (typeof props.draggableChecker === 'function') return props.draggableChecker(element);
        return true;
    },
    onEdited = (payload: LktObject, i: any) => {
        for (let k in payload) {
            if (Items.value[i].hasOwnProperty(k)) {
                Items.value[i][k] = payload[k];
            }
        }
        nextTick(() => {
            dataState.value.increment({items: Items.value});
        })
    },
    onClickAddItem = () => {
        Items.value.push({});
    },
    onButtonLoading = () => {
        loading.value = true;
        // httpStatus.value = -1;
    },
    onButtonLoaded = () => {
        isLoading.value = false;
    },
    onSave = ($event: PointerEvent, r: HTTPResponse) => {
        emit('before-save');
        if (saveResource.value) {
            isLoading.value = false;
            httpStatus.value = r.httpStatus;
            if (!r.success) {
                showStoreMessage.value = true;
                emit('error', r.httpStatus);
                return;
            }
            showStoreMessage.value = true;
        }
        dataState.value.turnStoredIntoOriginal();

        // if (typeof props.onUpdate === 'function') {
        //     props.onUpdate(r);
        // }
        emit('save', r)
    };

onMounted(() => {
    autoLoadSelectColumnsOptions();
    sort(getColumnByKey(props.columns, SortBy.value));
    dataState.value.store({items: Items.value}).turnStoredIntoOriginal();
})

watch(() => props.columns, (v) => Columns.value = v);
watch(() => props.modelValue, (v) => Items.value = v);
watch(Items, (v: any) => {
    autoLoadSelectColumnsOptions();
    dataState.value.increment({items: v});
    emit('update:modelValue', v);
});

defineExpose({
    getItemByEvent,
    doRefresh
})

</script>

<template>
    <section class="lkt-table-page">
        <header v-if="title || slots.title">
            <h2 v-if="title">{{ title }}</h2>
            <template v-if="slots.title">
                <slot name="title"/>
            </template>
        </header>

        <div class="lkt-table-page-buttons" v-show="showEditionButtons">

            <lkt-button
                ref="saveButton"
                v-show="showSaveButton"
                palette="success"
                v-bind:disabled="!ableToSave"
                v-bind:confirm-modal="saveConfirm"
                v-bind:confirm-data="confirmData"
                v-bind:resource="saveResource"
                v-bind:resource-data="saveResourceData"
                v-on:loading="onButtonLoading"
                v-on:loaded="onButtonLoaded"
                v-on:click="onSave">
                <slot v-if="!!slots['button-save']"
                      name="button-save"
                      v-bind:items="Items"
                      v-bind:edit-mode="editMode"
                      v-bind:can-update="!saveDisabled"></slot>
                <span v-else>{{ saveText }}</span>
            </lkt-button>

            <lkt-field-switch
                v-show="switchEditionEnabled" v-model="editModeEnabled"
                :label="editModeText"></lkt-field-switch>
        </div>

        <div class="lkt-table-page-buttons" v-if="slots.buttons">
            <slot name="buttons"/>
        </div>

        <div class="lkt-table-page-filters" v-if="firstLoadReady && slots.filters">
            <slot name="filters"/>
        </div>

        <lkt-loader v-if="loading"/>

        <div v-if="!loading && Items.length > 0" class="lkt-table" :data-sortable="sortable">
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
                           v-bind:move="validDragChecker"
                           v-bind:itemKey="draggableItemKey"
                           v-on:start="drag=true"
                           v-on:end="drag=false"
                           tag="tbody"
                           class="lkt-sortable-table"
                           handle=".handle">
                    <template #item="{element, index}">
                        <lkt-table-row
                            v-bind:key="uniqueId + '-'  + index"
                            v-bind:i="index"
                            v-bind:item="element"
                            v-bind:display-hidden-columns-indicator="displayHiddenColumnsIndicator"
                            v-bind:is-draggable="isDraggable(element)"
                            v-bind:sortable="sortable"
                            v-bind:visible-columns="visibleColumns"
                            v-bind:empty-columns="emptyColumns"
                            v-bind:hidden-is-visible="isVisible(index)"
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
                                />
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
                        />
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
                        />
                    </template>
                </lkt-hidden-row>
                </tbody>
            </table>
        </div>

        <div v-else-if="!!$slots['no-items']" class="lkt-empty-table">
            <slot name="no-items"/>
        </div>


        <div class="lkt-table-page-empty" v-if="!loading && Items.length === 0">
            {{ noResultsText }}
        </div>

        <div class="lkt-table-page-buttons">
            <lkt-button @click="onClickAddItem" v-if="canCreate">
                Add one
            </lkt-button>
        </div>

        <lkt-paginator
            ref="paginator"
            v-model="Page"
            v-bind:resource="resource"
            v-bind:filters="filters"
            v-on:results="onResults"
            v-on:loading="onLoading"
        />
    </section>
</template>