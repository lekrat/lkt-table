<script lang="ts">
export default {name: "LktTableRow", inheritAttrs: false}
</script>

<script lang="ts" setup>
import {createLktEvent} from "lkt-events";
import {getColumnDisplayContent, getHorizontalColSpan, canRenderColumn} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import LktTableCell from "./LktTableCell.vue";
import {ref, watch, PropType} from "vue";
import {LktObject} from "lkt-ts-interfaces";

const emit = defineEmits(['edited', 'click', 'show']);

const props = defineProps({
    isDraggable: {type: Boolean, default: true},
    sortable: {type: Boolean, default: true},
    i: {type: [Number], default: 0},
    displayHiddenColumnsIndicator: {type: Boolean, default: false},
    visibleColumns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => []},
    emptyColumns: {type: Array as PropType<string[]>, default: (): string[] => []},
    hiddenIsVisible: {type: Boolean, default: false},
    item: {type: Object as PropType<any>, default: () => ({})},
});

const Item = ref(props.item);

const onClick = ($event: any, item: any, column: LktTableColumn) => {
    emit('click', $event, createLktEvent('', {item, column}))
};
const onShow = ($event: any, i: any) => {
    emit('show', $event, createLktEvent('', {i}))
};

const onEdited = (payload: LktObject, i: any) => {
    Item.value = payload;
}

watch(() => props.item, (v) => Item.value = v);
watch(Item, () => emit('edited', Item.value, props.i));
</script>

<template>
    <tr :data-i="i" :data-handle-drag="isDraggable">
        <td v-if="sortable && isDraggable" data-role="drag-indicator"></td>
        <td v-else-if="sortable" data-role="invalid-drag-indicator"></td>
        <td v-if="displayHiddenColumnsIndicator"
            v-on:click="onShow($event, i)" data-role="show-more"
            v-bind:class="hiddenIsVisible ? 'state-open' : ''"></td>
        <template v-for="column in visibleColumns">
            <td v-if="canRenderColumn(column, emptyColumns, item)"
                v-bind:data-column="column.key"
                v-bind:colspan="getHorizontalColSpan(column,item)"
                v-bind:title="getColumnDisplayContent (column, item, i)"
                v-on:click="onClick($event, item, column)"
            >
                <template v-if="!!$slots[column.key]">
                    <slot v-bind:name="column.key"
                          v-bind:value="item[column.key]"
                          v-bind:item="item"
                          v-bind:column="column"
                          v-bind:i="i"></slot>
                </template>
                <template v-else-if="item">
                    <lkt-table-cell :column="column" v-model="Item" :i="i" v-on:edited="onEdited"></lkt-table-cell>
                </template>
            </td>
        </template>
    </tr>

</template>