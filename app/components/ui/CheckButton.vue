<template>
    <button
        role="checkbox"
        :aria-checked="modelValue"
        :class="[
            'inline-flex items-center justify-between gap-3 rounded-full px-5 py-2.5 text-body font-semibold transition-colors',
            modelValue
                ? 'border border-transparent bg-bg-surface text-neutral-0'
                : 'border border-brand-light bg-bg-surface text-brand-light',
        ]"
        @click="$emit('update:modelValue', !modelValue)"
    >
        <span><slot /></span>
        <span
            :class="[
                'size-4 rounded-sm transition-colors',
                modelValue ? 'bg-brand-muted' : 'border border-brand-light',
            ]"
        />
    </button>
</template>

<script setup lang="ts">
defineProps<{ modelValue: boolean }>();
defineEmits<{ 'update:modelValue': [value: boolean] }>();
</script>
