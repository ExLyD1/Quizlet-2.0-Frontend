<template>
    <button
        :class="[
            'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-body font-semibold transition-colors disabled:pointer-events-none disabled:opacity-40',
            variants[variant],
        ]"
        :disabled="disabled"
        v-bind="$attrs"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });

withDefaults(
    defineProps<{
        variant?: 'primary' | 'ghost' | 'light';
        disabled?: boolean;
    }>(),
    { variant: 'primary', disabled: false },
);

const variants = {
    primary: 'bg-brand text-neutral-0 hover:bg-brand-dark',
    ghost:   'bg-bg-surface text-brand-muted hover:bg-bg-muted',
    light:   'bg-brand-light text-brand hover:bg-brand-pale',
} as const;
</script>
