<script setup lang="ts">
import {computed} from "vue";
import {Settings} from "../settings/Settings";
import {__} from "lkt-i18n";
import {LktObject} from "lkt-ts-interfaces";

const emit = defineEmits(['click']);

const props = withDefaults(defineProps<{
    disabled: boolean
    text: string
    icon: string
    confirm: string
    link: string
    resource: string
    resourceData: LktObject
}>(), {
    disabled: false,
    text: '',
    icon: '',
    link: '',
    confirm: '',
    resource: '',
    resourceData: () => ({}),
});

const hasButtonSlot = computed(() => {
        return Settings.editButtonSlot !== '';
    }),
    buttonSlot = computed(() => {
        return Settings.editButtonSlot;
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
        palette="table-delete"
        :icon="hasButtonSlot ? '' : icon"
        :text="hasButtonSlot ? '' : computedText"
        :on-click-to="link"
        :resource="resource"
        :resource-data="resourceData"
        :confirm-modal="confirm"
        :disabled="disabled"
        @click.prevent.stop="emit('click')">
        <template v-if="hasButtonSlot">
            <component
                :is="buttonSlot"/>
        </template>
    </lkt-button>
</template>