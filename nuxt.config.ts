export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: [
      '@pinia/nuxt',
      '@vueuse/nuxt',
      '@nuxtjs/i18n',
      '@nuxt/image',
      '@nuxtjs/color-mode',
      '@nuxtjs/tailwindcss',
    ],

    i18n: {
        defaultLocale: 'en',
        locales: [{ code: 'en', language: 'en-US' }],
    },

    css: ['~/assets/css/main.css'],

    vite: {
        optimizeDeps: {
            include: ['@vue/devtools-core', '@vue/devtools-kit'],
        },
    },
});