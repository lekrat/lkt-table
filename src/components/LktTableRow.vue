<script lang="ts" setup>
import {createLktEvent} from "lkt-events";
import {getColumnDisplayContent, getHorizontalColSpan, canRenderColumn} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import LktTableCell from "./LktTableCell.vue";
import {ref, watch, computed} from "vue";
import {LktObject} from "lkt-ts-interfaces";
import {Settings} from "../settings/Settings";
import DropButton from "./DropButton.vue";
import CreateButton from "./CreateButton.vue";

const emit = defineEmits(['update:modelValue', 'click', 'show', 'item-up', 'item-down', 'item-drop']);

const props = withDefaults(defineProps<{
    modelValue: LktObject
    isDraggable: boolean
    sortable: boolean
    displayHiddenColumnsIndicator: boolean
    hiddenIsVisible: boolean
    addNavigation: boolean
    latestRow: boolean
    canDrop: boolean
    editModeEnabled: boolean
    i: number
    visibleColumns: LktTableColumn[]
    emptyColumns: string[]
    dropConfirm: string
    dropText: string
    dropResource: string
}>(), {
    modelValue: () => ({}),
    isDraggable: true,
    sortable: true,
    displayHiddenColumnsIndicator: false,
    hiddenIsVisible: false,
    addNavigation: false,
    latestRow: false,
    canDrop: false,
    editModeEnabled: false,
    i: 0,
    visibleColumns: () => [],
    emptyColumns: () => [],
    dropConfirm: '',
    dropText: '',
    dropResource: '',
});

const Item = ref(props.modelValue);

const onClick = ($event: any, item: any, column: LktTableColumn) => {
        emit('click', $event, createLktEvent('', {item, column}))
    },
    onShow = ($event: any, i: any) => {
        emit('show', $event, createLktEvent('', {i}))
    },
    classes = computed(() => {
        let r = [];
        if (props.sortable && props.isDraggable) r.push('handle');
        return r.join(' ');
    }),
    hasNavButtonSlot = computed(() => {
        return Settings.navButtonSlot !== '';
    }),
    navButtonSlot = computed(() => {
        return Settings.navButtonSlot;
    }),
    hasDropButtonSlot = computed(() => {
        return Settings.dropButtonSlot !== '';
    }),
    dropButtonSlot = computed(() => {
        return Settings.dropButtonSlot;
    }),
    onClickUp = () => {
        emit('item-up', props.i);
    },
    onClickDown = () => {
        emit('item-down', props.i);
    },
    onClickDrop = () => {
        emit('item-drop', props.i);
    };

watch(() => props.modelValue, (v) => Item.value = v);
watch(Item, (v) => {
    emit('update:modelValue', v, props.i)
}, {deep: true});
</script>

<template>
    <tr :data-i="i" :data-draggable="isDraggable">
        <td v-if="sortable && isDraggable && editModeEnabled" data-role="drag-indicator" :class="classes" />
        <td v-else-if="sortable && editModeEnabled" data-role="invalid-drag-indicator"/>
        <td v-if="addNavigation && editModeEnabled" class="lkt-table-nav-cell">
            <div class="lkt-table-nav-container">
                <lkt-button palette="table-nav" :disabled="i === 0" @click="onClickUp">
                    <template v-if="hasNavButtonSlot">
                        <component
                            :is="navButtonSlot"
                            direction="up"/>
                    </template>
                    <template v-else>
                        <i class=""/> UP
                    </template>
                </lkt-button>
                <lkt-button palette="table-nav" :disabled="latestRow" @click="onClickDown">
                    <template v-if="hasNavButtonSlot">
                        <component
                            :is="navButtonSlot"
                            direction="down"/>
                    </template>
                    <template v-else>
                        <i class=""/> DOWN
                    </template>
                </lkt-button>
            </div>
        </td>
        <td v-if="displayHiddenColumnsIndicator"
            v-on:click="onShow($event, i)" data-role="show-more"
            v-bind:class="hiddenIsVisible ? 'state-open' : ''"/>
        <template v-for="column in visibleColumns">
            <td v-if="canRenderColumn(column, emptyColumns, Item)"
                v-bind:data-column="column.key"
                v-bind:colspan="getHorizontalColSpan(column,Item)"
                v-bind:title="getColumnDisplayContent (column, Item, i, visibleColumns)"
                v-on:click="onClick($event, Item, column)"
            >
                <template v-if="!!$slots[column.key]">
                    <slot v-bind:name="column.key"
                          v-bind:value="Item[column.key]"
                          v-bind:item="Item"
                          v-bind:column="column"
                          v-bind:i="i"/>
                </template>
                <template v-else-if="Item">
                    <lkt-table-cell
                        v-model="Item"
                        :column="column"
                        :columns="visibleColumns"
                        :edit-mode-enabled="editModeEnabled"
                        :i="i"/>
                </template>
            </td>
        </template>
        <td v-if="canDrop && editModeEnabled" class="lkt-table-col-drop">
            <drop-button
                :resource="dropResource"
                :resource-data="Item"
                :confirm="dropConfirm"
                :text="dropText"
                @click="onClickDrop"/>
        </td>
    </tr>

</template>