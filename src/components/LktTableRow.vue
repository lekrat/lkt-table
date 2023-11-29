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
                    {{ getColumnDisplayContent(column, item, i) }}
                </template>
            </td>
        </template>
    </tr>

</template>

<script lang="ts">
import {createLktEvent} from "lkt-events";
import {
    getColumnDisplayContent,
    getHorizontalColSpan,
    getVerticalColSpan,
    canRenderColumn
} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import {defineComponent, PropType} from "vue";


export default defineComponent({
    name: "LktTableRow",
    emits: ['click', 'show'],
    props: {
        isDraggable: {type: Boolean, default: true},
        sortable: {type: Boolean, default: true},
        i: {type: [Number], default: 0},
        displayHiddenColumnsIndicator: {type: Boolean, default: false},
        visibleColumns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => []},
        emptyColumns: {type: Array as PropType<string[]>, default: (): string[] => []},
        hiddenIsVisible: {type: Boolean, default: false},
        item: {
            type: Object as PropType<any>, default: () => {
                return {};
            },
        },
    },
    methods: {
        canRenderColumn,
        getColumnDisplayContent,
        getVerticalColSpan,
        getHorizontalColSpan,
        onClick($event: any, item: any, column: LktTableColumn) {
            this.$emit('click', $event, createLktEvent('', {item, column}))
        },
        onShow($event: any, i: any) {
            this.$emit('show', $event, createLktEvent('', {i}))
        }
    }
})
</script>