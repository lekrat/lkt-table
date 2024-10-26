<script lang="ts" setup>
import {defaultTableSorter, getColumnByKey, getDefaultSortColumn} from "../functions/table-functions";
import LktTableRow from "../components/LktTableRow.vue";
import {computed, nextTick, onMounted, ref, useSlots, watch} from "vue";
import {Column} from "../instances/Column";
import LktHiddenRow from "../components/LktHiddenRow.vue";
import {generateRandomString, replaceAll} from "lkt-string-tools";
import {LktObject} from "lkt-ts-interfaces";
import {DataState} from "lkt-data-state";
import {HTTPResponse} from "lkt-http-client";
import CreateButton from "../components/CreateButton.vue";
import Sortable from 'sortablejs';
import TableHeader from "../components/TableHeader.vue";
import {__} from "lkt-i18n";
import {time} from "lkt-date-tools";
import {Settings} from "../settings/Settings";

const emit = defineEmits(['update:modelValue', 'update:perms', 'sort', 'click', 'save', 'error', 'before-save', 'read-response', 'click-create']);

const slots = useSlots();

const props = withDefaults(defineProps<{
    modelValue: LktObject[]
    columns: Column[]
    sorter?: Function
    draggableChecker?: Function
    checkValidDrag?: Function
    sortable?: boolean
    hideEmptyColumns?: boolean
    initialSorting?: boolean
    draggableItemKey?: string
    itemDisplayChecker?: Function


    page?: number
    perms?: string[]
    resource?: string
    noResultsText?: string
    title?: string
    titleTag?: string
    titleIcon?: string
    headerClass?: string
    wrapContentTag?: string
    wrapContentClass?: string
    itemsContainerClass?: string
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
    createIcon?: string
    createRoute?: string
    dropText?: string
    dropIcon?: string
    editText?: string
    editIcon?: string
    editLink?: string
    editModeText?: string
    switchEditionEnabled?: boolean
    createDisabled?: boolean
    canCreate?: boolean
    canCreateWithoutEdition?: boolean
    canEditButton?: boolean
    canDrop?: boolean
    dropConfirm?: string
    dropResource?: string
    addNavigation?: boolean
    itemMode?: boolean
    createEnabledValidator?: Function
    newValueGenerator?: Function
    requiredItemsForTopCreate: number
    requiredItemsForBottomCreate: number

    slotItemVar: string
}>(), {
    modelValue: () => [],
    columns: () => [],
    sorter: defaultTableSorter,
    draggableChecker: (item: any) => true,
    checkValidDrag: undefined,
    sortable: false,
    hideEmptyColumns: false,
    initialSorting: false,
    draggableItemKey: 'name',


    page: 1,
    perms: [],
    resource: '',
    noResultsText: 'No results',
    title: '',
    titleTag: 'h2',
    titleIcon: '',
    headerClass: '',
    wrapContentTag: 'div',
    wrapContentClass: '',
    itemsContainerClass: '',
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
    dropIcon: '',
    editText: 'Edit',
    editIcon: '',
    editLink: '',
    createText: 'Add item',
    createIcon: '',
    createRoute: '',
    editModeText: 'Edit mode',
    switchEditionEnabled: false,
    canCreate: false,
    canCreateWithoutEdition: false,
    canEditButton: false,
    canDrop: false,
    dropConfirm: '',
    dropResource: '',
    addNavigation: false,
    itemMode: false,
    createEnabledValidator: undefined,
    newValueGenerator: undefined,
    requiredItemsForTopCreate: 0,
    requiredItemsForBottomCreate: 0,

    slotItemVar: 'item',
});

const hiddenColumnsStack: LktObject = {};

const Sorter = ref(typeof props.sorter === 'function' ? props.sorter : defaultTableSorter),
    SortBy = ref(getDefaultSortColumn(props.columns)),
    SortDirection = ref('asc'),
    Items = ref(props.modelValue),
    Hidden = ref(hiddenColumnsStack),
    tableBody = ref(null),
    Columns = ref(props.columns);

const Page = ref(props.page),
    loading = ref(false),
    firstLoadReady = ref(false),
    permissions = ref(props.perms),
    paginator = ref(null),
    sortableObject = ref({}),
    dataState = ref(new DataState({items: Items.value}, props.dataStateConfig)),
    editModeEnabled = ref(props.editMode),
    updateTimeStamp = ref(0)
;

const onResults = (r: any) => {
        //@ts-ignore
        if (Array.isArray(r)) Items.value = r;
        loading.value = false;
        firstLoadReady.value = true;
        dataState.value.store({items: Items.value}).turnStoredIntoOriginal();
    },
    onPerms = (r: string[]) => {
        permissions.value = r;
    },
    onCustomReceived = (r: LktObject) => {
        // permissions = r;
    },
    onPaginatorResponse = (r: HTTPResponse) => {
        emit('read-response', r);
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
        Columns.value.forEach((column: Column) => {
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
        return Columns.value.filter((c: Column) => !c.hidden);
    }),
    hiddenColumns = computed(() => {
        return Columns.value.filter((c: Column) => c.hidden);
    }),
    hiddenColumnsColSpan = computed(() => {
        let r = visibleColumns.value.length + 1;
        if (props.sortable) ++r;
        return r;
    }),
    rowKeyColumns = computed(() => {
        return Columns.value.filter((c: Column) => c.isForRowKey);
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
        if (computedDisplayCreateButton.value && Items.value.length >= props.requiredItemsForTopCreate) return true;
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
    hasCreatePerm = computed(() => permissions.value.includes('create')),
    hasReadPerm = computed(() => permissions.value.includes('read')),
    hasUpdatePerm = computed(() => permissions.value.includes('update')),
    hasDropPerm = computed(() => permissions.value.includes('drop'));


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
    sort = (column: Column | null) => {
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
    onClick = ($event: any) => {
        emit('click', $event);
    },
    show = ($event: any, i: number) => {
        let k = 'tr_' + i;
        Hidden.value[k] = typeof Hidden.value[k] === 'undefined' ? true : !Hidden.value[k];
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
        if (!props.canCreateWithoutEdition) {
            if (typeof props.newValueGenerator === 'function') {
                let newValue = props.newValueGenerator();

                if (typeof newValue === 'object') {
                    Items.value.push(newValue);
                    return;
                }
            }
            Items.value.push({});
        } else {
            emit('click-create');
        }
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
        updateTimeStamp.value = time();
    },
    onItemDown = (i) => {
        moveArrayPosition(Items.value, i, i + 1);
        updateTimeStamp.value = time();
    },
    onItemDrop = (i) => {
        Items.value.splice(i, 1);
        updateTimeStamp.value = time();
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
                Items.value.splice(newIndex, 0, Items.value.splice(oldIndex, 1)[0]);
                updateTimeStamp.value = time();
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
        let r = [updateTimeStamp.value, uniqueId, 'row', index];
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
    }),
    computedDisplayCreateButton = computed(() => {
        if (!hasCreatePerm.value) return false;
        return props.canCreateWithoutEdition || (props.canCreate && editModeEnabled.value);
    }),
    canDisplayItem = (item) => {
        if (typeof props.itemDisplayChecker === 'function') return props.itemDisplayChecker(item);
        return true;
    };

onMounted(() => {
    if (props.initialSorting) {
        sort(getColumnByKey(props.columns, SortBy.value));
    }
    dataState.value.store({items: Items.value}).turnStoredIntoOriginal();
    if (props.sortable) {
        nextTick(() => {
            initSortable();
        })
    }
})

watch(() => props.perms, (v) => permissions.value = v);
watch(permissions, (v) => emit('update:perms', v));

watch(() => props.editMode, (v) => editModeEnabled.value = v);
watch(() => props.columns, (v) => Columns.value = v);
watch(() => props.modelValue, (v) => Items.value = v);
watch(Items, (v: any) => {
    dataState.value.increment({items: v});
    emit('update:modelValue', v);
}, {deep: true});

defineExpose({
    getItemByEvent,
    doRefresh,
});

const hasEmptySlot = computed(() => {
        return typeof Settings.defaultEmptySlot !== 'undefined';
    }),
    emptySlot = computed(() => {
        return Settings.defaultEmptySlot;
    });

</script>

<template>
    <section class="lkt-table-page" :id="'lkt-table-page-' + uniqueId">
        <header v-if="computedTitle || slots.title" :class="headerClass">
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
                    v-if="computedDisplayCreateButton && Items.length >= requiredItemsForTopCreate"
                    :disabled="!createEnabled || createDisabled"
                    :text="createText"
                    :icon="createIcon"
                    :to="createRoute"
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
                <table v-if="!itemMode">
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
                        <th
                            v-if="canEditButton && hasUpdatePerm && editModeEnabled"
                            class="lkt-table-col-edit"
                        />
                    </tr>
                    </thead>
                    <tbody
                        :ref="(el) => tableBody = el"
                        :id="'lkt-table-body-' + uniqueId"
                    >
                    <template
                        v-for="(item, i) in Items">
                        <lkt-table-row
                            v-if="canDisplayItem(item)"
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
                            :drop-icon="dropIcon"
                            :can-edit="canEditButton && hasUpdatePerm && editModeEnabled"
                            :edit-text="editText"
                            :edit-icon="editIcon"
                            :edit-link="editLink"
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
                                    :[slotItemVar]="row.item"
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
                                    :[slotItemVar]="row.item"
                                    :value="row.value"
                                    :column="row.column"
                                />
                            </template>
                        </lkt-hidden-row>
                    </template>
                    </tbody>
                </table>

                <div v-else class="lkt-table-items-container" :class="itemsContainerClass">
                    <template
                        v-for="(item, i) in Items">
                            <div class="lkt-table-item" v-if="canDisplayItem(item)">
                                <slot name="item"
                                      v-bind:[slotItemVar]="item"
                                      v-bind:index="i"
                                      v-bind:can-create="hasCreatePerm"
                                      v-bind:can-read="hasReadPerm"
                                      v-bind:can-update="hasUpdatePerm"
                                      v-bind:can-drop="hasDropPerm"
                                      v-bind:is-loading="loading"
                                      v-bind:do-drop="() => onItemDrop(i)"
                                />
                            </div>
                    </template>
                </div>
            </div>

            <div class="lkt-table-empty" v-if="!loading && Items.length === 0">
                <template v-if="slots.empty">
                    <slot name="empty"/>
                </template>
                <template v-else-if="hasEmptySlot">
                    <component :is="emptySlot" :message="noResultsText"/>
                </template>
                <template v-else-if="noResultsText">
                    {{noResultsText}}
                </template>
            </div>

            <div v-if="computedDisplayCreateButton || slots.bottomButtons" class="lkt-table-page-buttons lkt-table-page-buttons-bottom">
                <create-button
                    v-if="computedDisplayCreateButton && Items.length >= requiredItemsForBottomCreate"
                    :disabled="!createEnabled || createDisabled"
                    :text="createText"
                    :icon="createIcon"
                    :to="createRoute"
                    @click="onClickAddItem"
                />
                <slot name="bottom-buttons"/>
            </div>

            <lkt-paginator
                ref="paginator"
                v-if="resource.length > 0"
                v-model="Page"
                :resource="resource"
                :filters="filters"
                v-on:results="onResults"
                v-on:loading="onLoading"
                v-on:perms="onPerms"
                v-on:custom="onCustomReceived"
                v-on:response="onPaginatorResponse"
            />

        </component>
    </section>
</template>