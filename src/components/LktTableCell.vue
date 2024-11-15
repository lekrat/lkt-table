<script lang="ts" setup>
import {getColumnDisplayContent} from "../functions/table-functions";
import {Column} from "../instances/Column";
import {computed, ref, watch} from "vue";
import {LktObject} from "lkt-ts-interfaces";
import {TypeOfColumn} from "../enums/TypeOfColumn";

const emit = defineEmits(['update:modelValue']);

const props = withDefaults(defineProps<{
    modelValue: LktObject
    column: Column
    columns: Column[]
    i: number
    editModeEnabled: boolean
    hasInlineEditPerm: boolean
}>(), {
    modelValue: () => ({}),
    column: () => (new Column()),
    columns: () => [],
    i: 0,
    editModeEnabled: false,
    hasInlineEditPerm: false,
});

const item = ref(props.modelValue),
    value = ref(item.value[props.column.key]),
    inputElement = ref(null);

watch(value, (v) => {
    const payload = JSON.parse(JSON.stringify(item.value));
    payload[props.column.key] = v;
    emit('update:modelValue', payload);
})

watch(() => props.modelValue, (v) => {
    item.value = v
    value.value = item.value[props.column.key];
});

const slotData = computed(() => {
    return {...props.column.slotData, item: item.value};
})

const computedModalData = computed(() => {
    if (props.column.field?.modalData && typeof props.column.field?.modalData === 'object') {
        let r = {};
        for (let k in props.column.field.modalData) {
            if (typeof props.column.field?.modalData[k] === 'string' && props.column.field.modalData[k].startsWith('prop:')) {
                let prop = props.column.field.modalData[k].substring(5);
                r[k] = item.value[prop];
            } else {
                r[k] = props.column.field.modalData[k];
            }
        }
    }
    return props.column.field?.modalData;
});

// const computedModalKey = computed(() => {
//     if (props.column.field?.modalKey.startsWith('prop:')) {
//         let prop = props.column.field?.modalKey.substring(5);
//         return item.value[prop];
//     }
//     return props.column.field?.modalKey;
// });
//
// const computedIcon = computed(() => {
//     if (typeof props.column.field?.icon === 'string' && props.column.field?.icon.startsWith('prop:')) {
//         let prop = props.column.field?.icon.substring(5);
//         return item.value[prop];
//     }
//     return props.column.field?.icon;
// });
//
// const computedDownload = computed(() => {
//     if (typeof props.column.field?.download === 'string' && props.column.field?.download.startsWith('prop:')) {
//         let prop = props.column.field?.download.substring(5);
//         return item.value[prop];
//     }
//     return props.column.field?.download;
// });

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
    <template v-else-if="column.type !== '' && hasInlineEditPerm">
        <lkt-field
            v-bind="column.field"
            :type="computedColumnType"
            :read-mode="!column.editable || !editModeEnabled"
            :ref="(el:any) => inputElement = el"
            :slot-data="slotData"
            :label="column.type === 'switch' || column.type === 'check' ? column.label : ''"
            :modal-data="computedModalData"
            :options="computedOptions"
            :prop="item"
            v-model="value"/>
    </template>
    <template v-else-if="column.type !== ''">
        <lkt-field
            v-bind="column.field"
            :type="computedColumnType"
            read-mode
            :ref="(el:any) => inputElement = el"
            :slot-data="slotData"
            :label="column.type === 'switch' || column.type === 'check' ? column.label : ''"
            :modal-data="computedModalData"
            :options="computedOptions"
            :prop="item"
            :model-value="value"/>
    </template>
    <template v-else>
        {{ getColumnDisplayContent(column, item, i, columns) }}
    </template>
</template>