<script lang="ts" setup>
import {getColumnDisplayContent} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import {computed, nextTick, ref, watch} from "vue";
import {LktObject} from "lkt-ts-interfaces";
import {TypeOfColumn} from "@/enums/TypeOfColumn";

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<{
    modelValue: LktObject
    column: LktTableColumn
    columns: LktTableColumn[]
    i: number
    editModeEnabled: boolean
}>(), {
    modelValue: () => ({}),
    column: () => ({}),
    columns: () => [],
    i: 0,
    editModeEnabled: false
});

const item = ref(props.modelValue),
    value = ref(item.value[props.column.key]),
    inputElement = ref(null),
    loadingColumn = ref(props.column.showLoading());

watch(value, (v) => {
    const payload = JSON.parse(JSON.stringify(item.value));
    payload[props.column.key] = v;
    emit('update:modelValue', payload);
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

const slotData = computed(() => {
    return {...props.column.slotData, item: item.value};
})
</script>

<template>
    <template v-if="column.type === TypeOfColumn.Link">
        <lkt-anchor
            :to="column.getHref(item)"
        >{{ getColumnDisplayContent(column, item, i) }}</lkt-anchor>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Action">
        <a href="#" v-on:click="column.doAction(item)">{{ getColumnDisplayContent(column, item, i) }}</a>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Text">
        <lkt-field-text
            v-bind:read-mode="!column.editable || !editModeEnabled"
            :ref="(el:any) => inputElement = el"
            :edit-slot="column.editSlot"
            :value-slot="column.valueSlot"
            :slot-data="slotData"
            v-model="value"/>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Email">
        <lkt-field-text
            v-bind:read-mode="!column.editable || !editModeEnabled"
            :ref="(el:any) => inputElement = el"
            :edit-slot="column.editSlot"
            :value-slot="column.valueSlot"
            :slot-data="slotData"
            is-email
            v-model="value"/>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Tel">
        <lkt-field-text
            v-bind:read-mode="!column.editable || !editModeEnabled"
            :ref="(el:any) => inputElement = el"
            :edit-slot="column.editSlot"
            :value-slot="column.valueSlot"
            :slot-data="slotData"
            is-tel
            v-model="value"/>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Integer">
        <lkt-field-text
            v-bind:read-mode="!column.editable || !editModeEnabled"
            :ref="(el:any) => inputElement = el"
            :edit-slot="column.editSlot"
            :value-slot="column.valueSlot"
            :slot-data="slotData"
            is-number
            v-model="value"/>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Float">
        <lkt-field-text
            v-bind:read-mode="!column.editable || !editModeEnabled"
            :ref="(el:any) => inputElement = el"
            :edit-slot="column.editSlot"
            :value-slot="column.valueSlot"
            :slot-data="slotData"
            is-number
            v-model="value"/>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Check">
        <lkt-field-switch is-check v-bind:read-mode="!column.editable || !editModeEnabled" :ref="(el:any) => inputElement = el" v-model="value"/>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Switch">
        <lkt-field-switch v-bind:read-mode="!column.editable || !editModeEnabled" :ref="(el:any) => inputElement = el" v-model="value"/>
    </template>
    <template v-else-if="column.type === TypeOfColumn.File">
        <lkt-field-file v-bind:read-mode="!column.editable || !editModeEnabled" :ref="(el:any) => inputElement = el" v-model="value"/>
    </template>
    <template v-else-if="column.type === TypeOfColumn.Select">
        <lkt-loader v-if="loadingColumn"></lkt-loader>
        <lkt-field-select
            v-else
            v-bind:read-mode="!column.editable || !editModeEnabled"
            :ref="(el:any) => inputElement = el"
            v-model="value"
            :slot-data="slotData"
            v-bind:resource="column.resource"
            v-bind:use-resource-slot="column.resourceSlot ? column.resourceSlot : column.resource"
            v-bind:resource-data="column.resourceData"
            v-bind:options="column.options"
            v-bind:multiple="column.isMultiple"
            v-bind:tags="column.tags"
            v-bind:multiple-display="column.multipleDisplay"
            v-bind:multiple-display-edition="column.multipleDisplayEdition"/>
    </template>
    <template v-else>
        {{ getColumnDisplayContent(column, item, i, columns) }}
    </template>
</template>