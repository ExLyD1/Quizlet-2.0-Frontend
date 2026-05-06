<template>
    <div class="flex h-screen overflow-hidden bg-bg-base text-brand-pale">
        <LayoutAside />
        <div class="flex flex-1 flex-col overflow-hidden">
            <LayoutHeader />
            <main class="flex-1 overflow-y-auto">
                <slot />
            </main>
        </div>
    </div>
</template>
