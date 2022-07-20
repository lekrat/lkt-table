<template>
    <tr :data-i="i" :data-handle-drag="isDraggable">
        <td v-if="isDraggable" data-role="drag-indicator"></td>
        <td v-else data-role="invalid-drag-indicator"></td>
        <td v-if="hiddenColumns.length > 0" v-on:click="$emit('show', {$event, i})" data-role="show-more"
            :class="hiddenIsVisible ? 'state-open' : ''"></td>
        <td v-for="column in visibleColumns" v-on:click="$emit('click', {$event, item, column})"
            :data-column="column.key"
            v-if="column && column.key && emptyColumns.indexOf(column.key) === -1 && (!column.colspan || getHorizontalColSpan(column, item) > 0)"
            :colspan="getHorizontalColSpan(column,item)"
            :title="column.formatter ? column.formatter(item[column.key], item, column, i) :
                            item[column.key]"
        >
            <template v-if="!!$slots[column.key]">
                <slot v-bind:name="column.key" v-bind:value="item[column.key]" v-bind:item="item"
                      v-bind:column="column" v-bind:i="i"></slot>
            </template>
            <template v-else-if="item">
                {{getColumnDisplayContent (column, item, i)}}
            </template>
        </td>
    </tr>
    <tr v-if="hiddenColumns.length > 0" v-show="hiddenIsVisible" data-role="hidden-row">
        <td :colspan="hiddenColumns">
            <table>
                <tr>
                    <th v-for="column in hiddenColumns" :data-column="column.key">
                        <div>{{ column.label }}</div>
                    </th>
                </tr>
                <tr :data-i="i">
                    <td v-for="(column, i) in hiddenColumns" v-on:click="$emit('click', {$event, item, column})"
                        :data-column="column.key"
                        :title="column.formatter ? column.formatter(item[column.key], item, column, i) :
                            item[column.key]">
                        <template v-if="!!$slots[column.key]">
                            <slot v-bind:name="column.key" v-bind:value="item[column.key]"
                                  v-bind:item="item" v-bind:column="column" v-bind:i="i"></slot>
                        </template>
                        <template v-else>
                            {{getColumnDisplayContent (column, item, i)}}
                        </template>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</template>

<script>
import {getColumnDisplayContent} from "@/functions/table-functions";

export default {
    name: "LktTableRow",
    props: {
        isDraggable: {
            type: Boolean,
            default: true,
        },
        i: {
            type: [Number, Boolean],
            default: 0,
        },
        HiddenColumnsColSpan: {
            type: Number,
            default: 0,
        },
        visibleColumns: {
            type: Array, default: () => [],
        },
        hiddenColumns: {
            type: Array, default: () => [],
        },
        emptyColumns: {
            type: Array, default: () => [],
        },
        hiddenIsVisible: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
            default: () => { return {}; },
        },
    },
    methods: {
        getColumnDisplayContent,
        getVerticalColSpan(column) {
            if (!column.colspan) {
                return false;
            }
            let max = this.columns.length;
            this.Items.forEach(item => {
                let i = this.getHorizontalColSpan(column, item);
                if (i > 0 && i < max) {
                    max = i;
                }
            });

            return max;
        },
        getHorizontalColSpan(column, item) {
            if (!column.colspan) {
                return false;
            }
            if (typeof column.colspan === 'function') {
                return column.colspan(item);
            }
            return column.colspan;
        },
    }
}
</script>

<style scoped>

</style>