<script lang="ts">
export default {name: "LktTableCell", inheritAttrs: false}
</script>

<script lang="ts" setup>
import {getColumnDisplayContent} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import {nextTick, ref, watch, PropType} from "vue";
import {LktObject} from "lkt-ts-interfaces";

const emit = defineEmits(['edited']);

const props = defineProps({
    modelValue: {type: Object as PropType<LktObject>, default: () => ({})},
    column: {type: Object as PropType<LktTableColumn>, default: () => ({})},
    i: {type: [Number], default: 0},
});

const item = ref(props.modelValue),
    value = ref(item.value[props.column.key]),
    inputElement = ref(null),
    loadingColumn = ref(props.column.showLoading());

watch(value, () => {
    const payload = JSON.parse(JSON.stringify(item.value));
    payload[props.column.key] = value.value;
    emit('edited', payload, props.i);
})

watch(() => props.modelValue, (v) => {
    item.value = v
    value.value = item.value[props.column.key];
});

watch(() => props.column, () => {
    if (props.column.resourceLoaded) {
        nextTick(() => loadingColumn.value = false)
    }
}, {deep: true});

if (props.column.hasToLoadResource()) {
    props.column.loadResource();
}
</script>

<template>
    <template v-if="column.type === 'link'">
        <router-link :to="column.getHref(item)">{{ getColumnDisplayContent(column, item, i) }}</router-link>
    </template>
    <template v-else-if="column.type === 'action'">
        <a href="#" v-on:click="column.doAction(item)">{{ getColumnDisplayContent(column, item, i) }}</a>
    </template>
    <template v-else-if="column.type === 'text'">
        <lkt-field-text
            v-bind:read-mode="!column.editable"
            :ref="(el:any) => inputElement = el"
            :edit-slot="column.editSlot"
            :value-slot="column.valueSlot"
            :slot-data="column.slotData"
            v-model="value"></lkt-field-text>
    </template>
    <template v-else-if="column.type === 'email'">
        <lkt-field-text
            v-bind:read-mode="!column.editable"
            :ref="(el:any) => inputElement = el"
            :edit-slot="column.editSlot"
            :value-slot="column.valueSlot"
            :slot-data="column.slotData"
            is-email
            v-model="value"></lkt-field-text>
    </template>
    <template v-else-if="column.type === 'tel'">
        <lkt-field-text
            v-bind:read-mode="!column.editable"
            :ref="(el:any) => inputElement = el"
            :edit-slot="column.editSlot"
            :value-slot="column.valueSlot"
            :slot-data="column.slotData"
            is-tel
            v-model="value"></lkt-field-text>
    </template>
    <template v-else-if="column.type === 'check'">
        <lkt-field-check v-bind:read-mode="!column.editable" :ref="(el:any) => inputElement = el" v-model="value"></lkt-field-check>
    </template>
    <template v-else-if="column.type === 'switch'">
        <lkt-field-switch v-bind:read-mode="!column.editable" :ref="(el:any) => inputElement = el" v-model="value"></lkt-field-switch>
    </template>
    <template v-else-if="column.type === 'select'">
        <lkt-loader v-if="loadingColumn"></lkt-loader>
        <lkt-field-select
            v-else
            v-bind:read-mode="!column.editable"
            :ref="(el:any) => inputElement = el"
            v-model="value"
            :slot-data="column.slotData"
            v-bind:resource="column.resource"
            v-bind:resource-data="column.resourceData"
            v-bind:options="column.options"
            v-bind:multiple="column.isMultiple"
            v-bind:multiple-display="column.multipleDisplay"
            v-bind:multiple-display-edition="column.multipleDisplayEdition"></lkt-field-select>
    </template>
    <template v-else>
        {{ getColumnDisplayContent(column, item, i) }}
    </template>
</template>