<script lang="ts" setup>
import {createLktEvent} from "lkt-events";
import {getColumnDisplayContent} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import LktTableCell from "./LktTableCell.vue";
import {ref, watch} from "vue";
import {LktObject} from "lkt-ts-interfaces";

const emit = defineEmits(['update:modelValue', 'click']);

const props = withDefaults(defineProps<{
    modelValue: LktObject
    isDraggable: boolean
    sortable: boolean
    hiddenIsVisible: boolean
    i: number
    hiddenColumnsColSpan: number
    visibleColumns: LktTableColumn[]
    hiddenColumns: LktTableColumn[]
    emptyColumns: string[]
}>(), {
    modelValue: () => ({}),
    isDraggable: true,
    sortable: true,
    hiddenIsVisible: false,
    i: 0,
    hiddenColumnsColSpan: 0,
    visibleColumns: () => [],
    hiddenColumns: () => [],
    emptyColumns: () => [],
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
                        v-bind:title="getColumnDisplayContent (column, item, i, hiddenColumns)"
                        v-on:click="onClick($event, item, column)">
                        <template v-if="!!$slots[column.key]">
                            <slot v-bind:name="column.key"
                                  v-bind:value="item[column.key]"
                                  v-bind:item="item"
                                  v-bind:column="column"
                                  v-bind:i="i"/>
                        </template>
                        <template v-else>
                            <lkt-table-cell :column="column" :columns="hiddenColumns" v-model="item" :i="i"/>
                        </template>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>