<template>
    <aside class="flex h-screen w-16 flex-col items-center gap-4 bg-brand-dark py-5">
        <!-- Toggle button -->
        <button
            class="flex size-10 items-center justify-center rounded-full bg-bg-deep transition-colors hover:bg-bg-muted"
            aria-label="Toggle menu"
            @click="$emit('toggle')"
        >
            <Menu class="size-5 text-brand-pale" />
        </button>

        <hr class="w-8 border-brand-muted" />

        <!-- Main nav -->
        <nav class="flex flex-col items-center gap-5">
            <NuxtLink
                v-for="link in navLinks"
                :key="link.label"
                :to="link.to"
                :aria-label="link.label"
                class="group flex size-10 items-center justify-center rounded-xl transition-colors hover:bg-brand"
                active-class="bg-brand"
            >
                <img :src="link.icon" :alt="link.label" class="size-6 opacity-70 transition-opacity group-hover:opacity-100" />
            </NuxtLink>
        </nav>

        <hr class="w-8 border-brand-muted" />

        <!-- AI nav -->
        <nav class="flex flex-col items-center gap-5">
            <NuxtLink
                v-for="link in aiLinks"
                :key="link.label"
                :to="link.to"
                :aria-label="link.label"
                class="group flex size-10 items-center justify-center rounded-xl transition-colors hover:bg-brand"
                active-class="bg-brand"
            >
                <img :src="link.icon" :alt="link.label" class="size-6 opacity-70 transition-opacity group-hover:opacity-100" />
            </NuxtLink>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { Menu } from 'lucide-vue-next';

defineEmits<{ toggle: [] }>();

const navLinks = [
    { label: 'Home',      to: '/',          icon: '/images/layout/home.svg' },
    { label: 'My Decks',  to: '/decks',     icon: '/images/layout/folder.svg' },
    { label: 'Favorites', to: '/favorites', icon: '/images/layout/favorite.svg' },
];

const aiLinks = [
    { label: 'AI',        to: '/ai',        icon: '/images/layout/ai.svg' },
];
</script>
