<script lang="ts">
export default {name: "LktHiddenRow", inheritAttrs: false}
</script>

<script lang="ts" setup>
import {createLktEvent} from "lkt-events";
import {getColumnDisplayContent} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import LktTableCell from "./LktTableCell.vue";
import {ref, watch, PropType} from "vue";

const emit = defineEmits(['update:modelValue', 'click']);

const props = defineProps({
    isDraggable: {type: Boolean, default: true},
    sortable: {type: Boolean, default: true},
    i: {type: [Number], default: 0},
    hiddenColumnsColSpan: {type: Number, default: 0},
    visibleColumns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => []},
    hiddenColumns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => []},
    emptyColumns: {type: Array as PropType<string[]>, default: (): string[] => []},
    hiddenIsVisible: {type: Boolean, default: false},
    modelValue: {type: Object as PropType<any>, default: () => ({})},
});

const item = ref(props.modelValue);

const onClick = ($event: any, item: any, column: LktTableColumn) => {
    emit('click', $event, createLktEvent('', {item, column}))
};

watch(() => props.modelValue, (v) => item.value = v);
watch(item, () => emit('update:modelValue', item.value));
</script>

<template>
    <tr v-show="hiddenIsVisible" data-role="hidden-row">
        <td :colspan="hiddenColumnsColSpan">
            <table>
                <tr>
                    <th v-for="column in hiddenColumns" :data-column="column.key">
                        <div>{{ column.label }}</div>
                    </th>
                </tr>
                <tr :data-i="i">
                    <td v-for="(column, i) in hiddenColumns"
                        v-bind:data-column="column.key"
                        v-bind:title="getColumnDisplayContent (column, item, i)"
                        v-on:click="onClick($event, item, column)">
                        <template v-if="!!$slots[column.key]">
                            <slot v-bind:name="column.key"
                                  v-bind:value="item[column.key]"
                                  v-bind:item="item"
                                  v-bind:column="column"
                                  v-bind:i="i"></slot>
                        </template>
                        <template v-else>
                            <lkt-table-cell :column="column" v-model="item" :i="i"></lkt-table-cell>
                        </template>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>