<script lang="ts" setup>
import {createLktEvent} from "lkt-events";
import {getColumnDisplayContent, getHorizontalColSpan, canRenderColumn} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import LktTableCell from "./LktTableCell.vue";
import {ref, watch, computed} from "vue";
import {LktObject} from "lkt-ts-interfaces";

const emit = defineEmits(['edited', 'click', 'show']);

const props = withDefaults(defineProps<{
    item: LktObject
    isDraggable: boolean
    sortable: boolean
    displayHiddenColumnsIndicator: boolean
    hiddenIsVisible: boolean
    i: number
    visibleColumns: LktTableColumn[]
    emptyColumns: string[]
}>(), {
    item: () => ({}),
    isDraggable: true,
    sortable: true,
    displayHiddenColumnsIndicator: false,
    hiddenIsVisible: false,
    i: 0,
    visibleColumns: () => [],
    emptyColumns: () => [],
});

const Item = ref(props.item);

const onClick = ($event: any, item: any, column: LktTableColumn) => {
        emit('click', $event, createLktEvent('', {item, column}))
    },
    onShow = ($event: any, i: any) => {
        emit('show', $event, createLktEvent('', {i}))
    },
    onEdited = (payload: LktObject, i: any) => {
        Item.value = payload;
    },
    classes = computed(() => {
        let r = [];
        if (props.sortable && props.isDraggable) r.push('handle');
        return r.join(' ');
    });

watch(() => props.item, (v) => Item.value = v);
watch(Item, () => emit('edited', Item.value, props.i));
</script>

<template>
    <tr :data-i="i" :class="classes" :data-draggable="isDraggable">
        <td v-if="sortable && isDraggable" data-role="drag-indicator"/>
        <td v-else-if="sortable" data-role="invalid-drag-indicator"/>
        <td v-if="displayHiddenColumnsIndicator"
            v-on:click="onShow($event, i)" data-role="show-more"
            v-bind:class="hiddenIsVisible ? 'state-open' : ''"/>
        <template v-for="column in visibleColumns">
            <td v-if="canRenderColumn(column, emptyColumns, item)"
                v-bind:data-column="column.key"
                v-bind:colspan="getHorizontalColSpan(column,item)"
                v-bind:title="getColumnDisplayContent (column, item, i, visibleColumns)"
                v-on:click="onClick($event, item, column)"
            >
                <template v-if="!!$slots[column.key]">
                    <slot v-bind:name="column.key"
                          v-bind:value="item[column.key]"
                          v-bind:item="item"
                          v-bind:column="column"
                          v-bind:i="i"/>
                </template>
                <template v-else-if="item">
                    <lkt-table-cell :column="column" :columns="visibleColumns" v-model="Item" :i="i"
                                    v-on:edited="onEdited"/>
                </template>
            </td>
        </template>
    </tr>

</template>