<script lang="ts" setup>
import {defaultTableSorter, getColumnByKey, getDefaultSortColumn} from "../functions/table-functions";
import LktTableRow from "../components/LktTableRow.vue";
import {computed, nextTick, onMounted, ref, useSlots, watch} from "vue";
import {LktTableColumn} from "../instances/LktTableColumn";
import {LktEvent} from "lkt-events";
import LktHiddenRow from "../components/LktHiddenRow.vue";
import {generateRandomString, replaceAll} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";
import {DataState} from "lkt-data-state";
import {HTTPResponse} from "lkt-http-client";
import CreateButton from "../components/CreateButton.vue";
// import Sortable from 'sortablejs/modular/sortable.complete.esm.js';
import Sortable from 'sortablejs';
import TableHeader from "../components/TableHeader.vue";
import {__} from "lkt-i18n";

const emit = defineEmits(['update:modelValue', 'sort', 'click', 'save', 'error', 'before-save']);

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
    titleTag?: string
    titleIcon?: string
    wrapContentTag?: string
    wrapContentClass?: string
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
    createText?: string
    dropText?: string
    editModeText?: string
    switchEditionEnabled?: boolean
    canCreate?: boolean
    canDrop?: boolean
    dropConfirm?: string
    dropResource?: string
    addNavigation?: boolean
    createEnabledValidator?: Function
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
    titleTag: 'h2',
    titleIcon: 'h2',
    wrapContentTag: 'div',
    wrapContentClass: '',
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
    dropText: 'Delete',
    createText: 'Add item',
    editModeText: 'Edit mode',
    switchEditionEnabled: false,
    canCreate: false,
    canDrop: false,
    dropConfirm: '',
    dropResource: '',
    addNavigation: false,
    createEnabledValidator: undefined,
});

const hiddenColumnsStack: LktObject = {};

const Sorter = ref(typeof props.sorter === 'function' ? props.sorter : defaultTableSorter),
    SortBy = ref(getDefaultSortColumn(props.columns)),
    SortDirection = ref('asc'),
    Items = ref(props.modelValue),
    Hidden = ref(hiddenColumnsStack),
    tableBody = ref(null),
    Columns = ref(props.columns);

let basePerms: string[] = [];
const Page = ref(props.page),
    loading = ref(true),
    firstLoadReady = ref(false),
    perms = ref(basePerms),
    paginator = ref(null),
    sortableObject = ref({}),
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
    onPerms = (r: string[]) => {
        perms.value = r;
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
    rowKeyColumns = computed(() => {
        return Columns.value.filter((c: LktTableColumn) => c.isForRowKey);
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
        if (props.switchEditionEnabled) return true;
        return showSaveButton.value || (editModeEnabled.value && props.canCreate);
    }),
    ableToSave = computed(() => {
        if (props.saveDisabled) return false;
        if (typeof props.saveValidator === 'function' && !props.saveValidator(Items.value)) return false;
        return dataState.value.changed();
    }),
    amountOfItems = computed(() => {
        return Items.value.length;
    }),
    computedSaveResourceData = computed(() => {
        return {
            items: Items.value,
            ...props.saveResourceData
        }
    }),
    computedTitleTag = computed(() => {
        if (props.titleTag === '') return 'h2';
        return props.titleTag;
    }),
    computedWrapContentTag = computed(() => {
        if (props.wrapContentTag === '') return 'div';
        return props.wrapContentTag;
    }),
    computedTitle = computed(() => {
        if (props.title.startsWith('__:')) {
            return __(props.title.substring(3));
        }
        return props.title;
    }),
    computedSaveText = computed(() => {
        if (props.saveText.startsWith('__:')) {
            return __(props.saveText.substring(3));
        }
        return props.saveText;
    }),
    computedEditModeText = computed(() => {
        if (props.editModeText.startsWith('__:')) {
            return __(props.editModeText.substring(3));
        }
        return props.editModeText;
    }),
    hasCreatePerm = computed(() => perms.value.includes('create')),
    hasReadPerm = computed(() => perms.value.includes('read')),
    hasUpdatePerm = computed(() => perms.value.includes('update')),
    hasDropPerm = computed(() => perms.value.includes('drop'));


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
    onClickAddItem = () => {
        Items.value.push({});
    },
    onButtonLoading = () => {
        loading.value = true;
    },
    onButtonLoaded = () => {
        loading.value = false;
    },
    onSave = ($event: PointerEvent, r: HTTPResponse) => {
        emit('before-save');
        if (props.saveResource) {
            loading.value = false;
            // httpStatus.value = r.httpStatus;
            if (!r.success) {
                emit('error', r.httpStatus);
                return;
            }
        }
        dataState.value.turnStoredIntoOriginal();

        emit('save', r)
    },
    moveArrayPosition = (arr, oldIndex, newIndex) => {
        if (newIndex >= arr.length) {
            let k = newIndex - arr.length + 1;
            while (k--) arr.push(undefined);
        }
        arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        return arr; // for testing
    },
    onItemUp = (i) => {
        moveArrayPosition(Items.value, i, i - 1);
    },
    onItemDown = (i) => {
        moveArrayPosition(Items.value, i, i + 1);
    },
    onItemDrop = (i) => {
        Items.value.splice(i, 1);
    },
    initSortable = () => {
        let tbody = document.getElementById('lkt-table-body-' + uniqueId);

        sortableObject.value = new Sortable(tbody, {
            direction: 'vertical',
            handle: '.handle',
            animation: 150,
            onEnd: function (evt: CustomEvent) {
                let oldIndex = evt.oldIndex;
                let newIndex = evt.newIndex;

                let clone = JSON.parse(JSON.stringify(Items.value));
                Items.value.splice(oldIndex, 1, clone[newIndex]);
                Items.value.splice(newIndex, 1, clone[oldIndex]);
            },
            onMove: function (evt, originalEvent) {
                return validDragChecker(evt);
                // return false; — for cancel
                // return -1; — insert before target
                // return 1; — insert after target
                // return true; — keep default insertion point based on the direction
                // return void; — keep default insertion point based on the direction
            },
        });
    },
    getRowKey = (item: LktObject, index: number, isHidden: boolean = false) => {
        let r = [uniqueId, 'row', index];
        if (isHidden) r.push('hidden');

        rowKeyColumns.value.forEach(col => {
            let text = String(item[col.key]).toLowerCase();
            if (text.length > 50) text = text.substring(0, 50);
            text = replaceAll(text, ' ', '-');
            r.push(text);
        });

        return r.join('-');
    },
    createEnabled = computed(() => {
        if (typeof props.createEnabledValidator === 'function') return props.createEnabledValidator({items: Items.value});
        return true;
    });

onMounted(() => {
    autoLoadSelectColumnsOptions();
    sort(getColumnByKey(props.columns, SortBy.value));
    dataState.value.store({items: Items.value}).turnStoredIntoOriginal();
    if (props.sortable) {
        nextTick(() => {
            initSortable();
        })
    }
})

watch(() => props.columns, (v) => Columns.value = v);
watch(() => props.modelValue, (v) => Items.value = v);
watch(Items, (v: any) => {
    autoLoadSelectColumnsOptions();
    dataState.value.increment({items: v});
    emit('update:modelValue', v);
}, {deep: true});

defineExpose({
    getItemByEvent,
    doRefresh,
});

</script>

<template>
    <section class="lkt-table-page" :id="'lkt-table-page-' + uniqueId">
        <header v-if="computedTitle || slots.title">
            <component :is="computedTitleTag" v-if="computedTitle">
                <i v-if="titleIcon" :class="titleIcon"/>
                {{ computedTitle }}
            </component>
            <template v-if="slots.title">
                <slot name="title"/>
            </template>
        </header>

        <component
            :is="computedWrapContentTag"
            class="lkt-table-page-content-wrapper"
            :class="wrapContentClass"
        >

            <div class="lkt-table-page-buttons" v-show="showEditionButtons">

                <lkt-button
                    ref="saveButton"
                    v-show="showSaveButton"
                    palette="success"
                    :disabled="!ableToSave"
                    :confirm-modal="saveConfirm"
                    :confirm-data="confirmData"
                    :resource="saveResource"
                    :resource-data="computedSaveResourceData"
                    v-on:loading="onButtonLoading"
                    v-on:loaded="onButtonLoaded"
                    v-on:click="onSave">
                    <slot v-if="!!slots['button-save']"
                          name="button-save"
                          :items="Items"
                          :edit-mode="editMode"
                          :can-update="!saveDisabled"></slot>
                    <span v-else>{{ computedSaveText }}</span>
                </lkt-button>

                <create-button
                    v-if="canCreate && editModeEnabled"
                    :disabled="!createEnabled"
                    :text="createText"
                    @click="onClickAddItem"
                />

                <div class="switch-edition-mode">
                    <lkt-field-switch
                        v-show="switchEditionEnabled"
                        v-model="editModeEnabled"
                        :label="computedEditModeText"/>
                </div>
            </div>

            <div class="lkt-table-page-buttons" v-if="slots.buttons">
                <slot name="buttons"/>
            </div>

            <div class="lkt-table-page-filters" v-if="firstLoadReady && slots.filters">
                <slot name="filters" :items="Items" :is-loading="loading"/>
            </div>

            <lkt-loader v-if="loading"/>

            <div v-show="!loading && Items.length > 0" class="lkt-table" :data-sortable="sortable">
                <table>
                    <thead>
                    <tr>
                        <th v-if="sortable && editModeEnabled" data-role="drag-indicator"/>
                        <th v-if="addNavigation && editModeEnabled"/>
                        <th v-if="displayHiddenColumnsIndicator"/>
                        <template v-for="column in visibleColumns">
                            <table-header
                                v-if="emptyColumns.indexOf(column.key) === -1"
                                :column="column"
                                :sort-by="SortBy"
                                :sort-direction="SortDirection"
                                :amount-of-columns="columns.length"
                                :items="Items"
                                v-on:click="sort(column)"
                            />
                        </template>
                        <th
                            v-if="canDrop && hasDropPerm && editModeEnabled"
                            class="lkt-table-col-drop"
                        />
                    </tr>
                    </thead>
                    <tbody
                        :ref="(el) => tableBody = el"
                        :id="'lkt-table-body-' + uniqueId"
                    >
                    <lkt-table-row
                        v-for="(item, i) in Items"
                        v-model="Items[i]"
                        :key="getRowKey(item, i)"
                        :i="i"
                        :display-hidden-columns-indicator="displayHiddenColumnsIndicator"
                        :is-draggable="isDraggable(item)"
                        :sortable="sortable"
                        :visible-columns="visibleColumns"
                        :empty-columns="emptyColumns"
                        :add-navigation="addNavigation"
                        :hidden-is-visible="isVisible(i)"
                        :latest-row="i+1 === amountOfItems"
                        :can-drop="canDrop && hasDropPerm && editModeEnabled"
                        :drop-confirm="dropConfirm"
                        :drop-resource="dropResource"
                        :drop-text="dropText"
                        :edit-mode-enabled="editModeEnabled"
                        v-on:click="onClick"
                        v-on:show="show"
                        v-on:item-up="onItemUp"
                        v-on:item-down="onItemDown"
                        v-on:item-drop="onItemDrop"
                    >
                        <template
                            v-for="column in colSlots"
                            v-slot:[column]="row">
                            <slot
                                :name="column"
                                :item="row.item"
                                :value="row.value"
                                :column="row.column"
                            />
                        </template>
                    </lkt-table-row>
                    <lkt-hidden-row
                        v-if="hiddenColumns.length > 0"
                        v-model="Items[i]"
                        v-for="(item, i) in Items"
                        :key="getRowKey(item, i, true)"
                        :i="i"
                        :hidden-columns="hiddenColumns"
                        :hidden-columns-col-span="hiddenColumnsColSpan"
                        :is-draggable="isDraggable(item)"
                        :sortable="sortable"
                        :visible-columns="visibleColumns"
                        :empty-columns="emptyColumns"
                        :hidden-is-visible="isVisible(i)"
                        v-on:click="onClick"
                        v-on:show="show"
                    >
                        <template
                            v-for="column in colSlots"
                            v-slot:[column]="row">
                            <slot
                                :name="column"
                                :item="row.item"
                                :value="row.value"
                                :column="row.column"
                            />
                        </template>
                    </lkt-hidden-row>
                    </tbody>
                </table>
            </div>

            <div v-if="!!$slots['no-items']" class="lkt-empty-table">
                <slot name="no-items"/>
            </div>


            <div class="lkt-table-page-empty" v-if="!loading && Items.length === 0">
                {{ noResultsText }}
            </div>

            <div v-if="canCreate && editModeEnabled" class="lkt-table-page-buttons lkt-table-page-buttons-bottom">
                <create-button
                    v-if="canCreate && editModeEnabled"
                    :disabled="!createEnabled"
                    :text="createText"
                    @click="onClickAddItem"
                />
            </div>

            <lkt-paginator
                ref="paginator"
                v-model="Page"
                :resource="resource"
                :filters="filters"
                v-on:results="onResults"
                v-on:loading="onLoading"
                v-on:perms="onPerms"
            />

        </component>
    </section>
</template>