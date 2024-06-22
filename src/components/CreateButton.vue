<script setup lang="ts">
import {computed} from "vue";
import {Settings} from "../settings/Settings";


const emit = defineEmits(['click']);

const props = withDefaults(defineProps<{
    disabled: boolean
}>(), {
    disabled: false,
});

const hasCreateButtonSlot = computed(() => {
        return Settings.createButtonSlot !== '';
    }),
    createButtonSlot = computed(() => {
        return Settings.createButtonSlot;
    })
</script>

<template>
    <lkt-button
        palette="table-create"
        :disabled="disabled"
        @click="emit('click')">
        <template v-if="hasCreateButtonSlot">
            <component
                :is="createButtonSlot"/>
        </template>
        <template v-else>
            <i class=""/> Add one
        </template>
    </lkt-button>
</template>

<style scoped>

</style>