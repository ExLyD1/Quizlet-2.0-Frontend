<template>
    <div class="flex min-h-screen flex-col bg-bg-base text-brand-pale">
        <LayoutHeader />
        <main class="flex-1">
            <slot />
        </main>
        <LayoutFooter />
    </div>
</template>
