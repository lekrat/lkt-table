<script lang="ts">
export default {name: "LktTableCell", inheritAttrs: false}
</script>

<script lang="ts" setup>
import {getColumnDisplayContent} from "../functions/table-functions";
import {LktTableColumn} from "../instances/LktTableColumn";
import {PropType} from "vue/dist/vue";
import {ref, watch} from "vue";
import {LktObject} from "lkt-ts-interfaces";

const emit = defineEmits(['edited']);

const props = defineProps({
    column: {type: Object as PropType<LktTableColumn>, default: () => ({})},
    i: {type: [Number], default: 0},
    modelValue: {type: Object as PropType<LktObject>, default: () => ({})},
});

const item = ref(props.modelValue),
    value = ref(item.value[props.column.key]),
    inputElement = ref(null);

watch(value, () => {
    const payload = JSON.parse(JSON.stringify(item.value));
    payload[props.column.key] = value.value;
    emit('edited', payload, props.i);
})

watch(() => props.modelValue, (v) => {
    item.value = v
    value.value = item.value[props.column.key];
});
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
            v-model="value"></lkt-field-text>
    </template>
    <template v-else-if="column.type === 'email'">
        <lkt-field-text
            v-bind:read-mode="!column.editable"
            :ref="(el:any) => inputElement = el"
            is-email
            v-model="value"></lkt-field-text>
    </template>
    <template v-else-if="column.type === 'tel'">
        <lkt-field-text
            v-bind:read-mode="!column.editable"
            :ref="(el:any) => inputElement = el"
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
        <lkt-field-select
            v-bind:read-mode="!column.editable" :ref="(el:any) => inputElement = el" v-model="value" v-bind:options="column.options"></lkt-field-select>
    </template>
    <template v-else>
        {{ getColumnDisplayContent(column, item, i) }}
    </template>
</template>