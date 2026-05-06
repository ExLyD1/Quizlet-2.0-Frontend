<template>
    <header class="bg-brand px-6 py-3 lg:px-10">
        <div class="mx-auto flex max-w-screen-xl items-center gap-4">
            <!-- Logo -->
            <NuxtLink to="/" class="shrink-0">
                <img src="/images/logo.svg" alt="Mnemio" class="h-8" />
            </NuxtLink>

            <!-- Search — hidden on mobile, visible from md -->
            <div class="hidden flex-1 justify-center md:flex">
                <UiInputSearch
                    v-model="search"
                    placeholder="Enter keyword to search"
                    variant="light"
                    class="w-full max-w-md"
                />
            </div>

            <!-- Actions -->
            <div class="ml-auto flex items-center gap-2">
                <UiButton variant="text" class="hidden sm:inline-flex" @click="navigateTo('/login')">Login</UiButton>
                <UiButton variant="ghost" @click="navigateTo('/login')">Register</UiButton>
            </div>
        </div>

        <!-- Mobile search row -->
        <div class="mt-3 md:hidden">
            <UiInputSearch
                v-model="search"
                placeholder="Enter keyword to search"
                variant="light"
                class="w-full"
            />
        </div>
    </header>
</template>

<script setup lang="ts">
const search = ref('');
</script>
