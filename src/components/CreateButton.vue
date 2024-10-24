<script setup lang="ts">
import {computed} from "vue";
import {Settings} from "../settings/Settings";

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

const hasCreateButtonSlot = computed(() => Settings.createButtonSlot !== ''),
    createButtonSlot = computed(() => Settings.createButtonSlot)
</script>

<template>
    <lkt-button
        palette="table-create"
        :disabled="disabled"
        :icon="hasCreateButtonSlot ? '' : icon"
        :text="hasCreateButtonSlot ? '' : text"
        :on-click-to="to"
        @click="emit('click')">
        <template v-if="hasCreateButtonSlot">
            <component
                :is="createButtonSlot"/>
        </template>
    </lkt-button>
</template>