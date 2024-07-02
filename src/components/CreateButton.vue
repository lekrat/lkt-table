<script setup lang="ts">
import {computed} from "vue";
import {Settings} from "../settings/Settings";
import {__} from "lkt-i18n";

const emit = defineEmits(['click']);

const props = withDefaults(defineProps<{
    disabled: boolean
    text: string
    icon: string
    to: string
}>(), {
    disabled: false,
    text: '',
    icon: '',
    to: '',
});

const hasCreateButtonSlot = computed(() => {
        return Settings.createButtonSlot !== '';
    }),
    createButtonSlot = computed(() => {
        return Settings.createButtonSlot;
    }),
    computedText = computed(() => {
        if (props.text.startsWith('__:')) {
            return __(props.text.substring(3));
        }
        return props.text;
    })
</script>

<template>
    <lkt-button
        palette="table-create"
        :disabled="disabled"
        :icon="hasCreateButtonSlot ? '' : icon"
        :text="hasCreateButtonSlot ? '' : computedText"
        :on-click-to="to"
        @click="emit('click')">
        <template v-if="hasCreateButtonSlot">
            <component
                :is="createButtonSlot"/>
        </template>
    </lkt-button>
</template>