<template>
    <div class="relative min-h-screen bg-brand">
        <NuxtLink
            to="/"
            class="absolute right-8 top-6 text-body text-brand-pale transition-colors hover:text-neutral-0"
        >
            Exit
        </NuxtLink>
        <div class="flex min-h-screen items-center justify-center px-4 py-16">
            <slot />
        </div>
    </div>
</template>
