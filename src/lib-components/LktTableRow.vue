<template>
    <tr :data-i="i" :data-handle-drag="isDraggable">
        <td v-if="isDraggable" data-role="drag-indicator"></td>
        <td v-else data-role="invalid-drag-indicator"></td>
        <td v-if="hiddenColumns.length > 0"
            v-on:click="$emit('show', {$event, i})" data-role="show-more"
            v-bind:class="hiddenIsVisible ? 'state-open' : ''"></td>
        <template v-for="column in visibleColumns">
            <td v-if="canRenderColumn(column, emptyColumns, item)"
                v-bind:data-column="column.key"
                v-bind:colspan="getHorizontalColSpan(column,item)"
                v-bind:title="getColumnDisplayContent (column, item, i)"
                v-on:click="$emit('click', {$event, item, column})"
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
    <tr v-if="hiddenColumns.length > 0" v-show="hiddenIsVisible" data-role="hidden-row">
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
                        v-on:click="$emit('click', {$event, item, column})">
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
    getColumnDisplayContent,
    getHorizontalColSpan,
    getVerticalColSpan,
    canRenderColumn
} from "../functions/table-functions";

export default {
    name: "LktTableRow",
    emits: ['click', 'show'],
    props: {
        isDraggable: {type: Boolean, default: true,},
        i: {type: [Number, Boolean], default: 0,},
        hiddenColumnsColSpan: {type: Number, default: 0,},
        visibleColumns: {type: Array, default: (): Array<any> => [],},
        hiddenColumns: {type: Array, default: (): Array<any> => [],},
        emptyColumns: {type: Array, default: (): Array<any> => [],},
        hiddenIsVisible: {type: Boolean, default: false,},
        item: {
            type: Object, default: () => {
                return {};
            },
        },
    },
    methods: {
        canRenderColumn,
        getColumnDisplayContent,
        getVerticalColSpan,
        getHorizontalColSpan,
    }
}
</script>