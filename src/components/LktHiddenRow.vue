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
                            {{ getColumnDisplayContent(column, item, i) }}
                        </template>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>

<script lang="ts">
import {
    canRenderColumn,
    getColumnDisplayContent,
    getHorizontalColSpan,
    getVerticalColSpan
} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import {createLktEvent} from "lkt-events";
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "LktHiddenRow",
    emits: ['click', 'show'],
    props: {
        isDraggable: {type: Boolean, default: true,},
        sortable: {type: Boolean, default: true,},
        i: {type: [Number], default: 0,},
        hiddenColumnsColSpan: {type: Number, default: 0,},
        visibleColumns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => [],},
        hiddenColumns: {type: Array as PropType<LktTableColumn[]>, default: (): LktTableColumn[] => [],},
        emptyColumns: {type: Array as PropType<string[]>, default: (): string[] => [],},
        hiddenIsVisible: {type: Boolean, default: false,},
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