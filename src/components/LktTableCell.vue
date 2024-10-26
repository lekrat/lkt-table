<script lang="ts" setup>
import {getColumnDisplayContent} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import {computed, nextTick, ref, watch} from "vue";
import {LktObject} from "lkt-ts-interfaces";
import {TypeOfColumn} from "../enums/TypeOfColumn";

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<{
    modelValue: LktObject
    column: LktTableColumn
    columns: LktTableColumn[]
    i: number
    editModeEnabled: boolean
}>(), {
    modelValue: () => ({}),
    column: () => (new LktTableColumn()),
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

const computedModalKey = computed(() => {
    if (props.column.field?.modalKey.startsWith('prop:')) {
        let prop = props.column.field?.modalKey.substring(5);
        return item.value[prop];
    }
    return props.column.field?.modalKey;
});

const computedOptions = computed(() => {
    if (typeof props.column.field?.options === 'string' && props.column.field?.options.startsWith('prop:')) {
        let prop = props.column.field?.options.substring(5);
        return item.value[prop];
    }
    return props.column.field.options;
});

const computedColumnType = computed(() => {
    if ([TypeOfColumn.Integer, TypeOfColumn.Float].includes(props.column.type)) return TypeOfColumn.Number;
    return props.column.type;
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
    <template v-else-if="column.type !== ''">
        <lkt-field
            v-bind="column.field"
            :type="computedColumnType"
            :read-mode="!column.editable || !editModeEnabled"
            :ref="(el:any) => inputElement = el"
            :slot-data="slotData"
            :label="column.type === 'switch' || column.type === 'check' ? column.label : ''"
            :modal-key="computedModalKey"
            :options="computedOptions"
            v-model="value"/>
    </template>
    <template v-else>
        {{ getColumnDisplayContent(column, item, i, columns) }}
    </template>
</template>