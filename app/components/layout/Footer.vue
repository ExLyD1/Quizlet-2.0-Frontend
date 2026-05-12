<template>
    <footer class="bg-brand text-brand-pale">
        <!-- Main section -->
        <div class="mx-auto max-w-screen-xl px-6 py-12 lg:px-10">
            <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

                <!-- Logo + app badges -->
                <div class="flex flex-col gap-6">
                    <NuxtLink to="/">
                        <img src="/images/logo.svg" alt="Mnemio" class="h-8" />
                    </NuxtLink>
                    <hr class="border-brand-muted" />
                    <!-- App store badges: add /images/badge-appstore.svg and /images/badge-googleplay.svg to public/ to enable -->
                    <div class="flex flex-wrap gap-3">
                        <a href="#" aria-label="Download on the App Store" class="flex h-10 items-center rounded-lg border border-brand-muted px-3 text-small text-brand-pale hover:border-brand-light transition-colors">
                            App Store
                        </a>
                        <a href="#" aria-label="Get it on Google Play" class="flex h-10 items-center rounded-lg border border-brand-muted px-3 text-small text-brand-pale hover:border-brand-light transition-colors">
                            Google Play
                        </a>
                    </div>
                </div>

                <!-- About us -->
                <div class="flex flex-col gap-4">
                    <h3 class="text-h3 font-semibold text-neutral-0">About us</h3>
                    <nav class="flex flex-col gap-3">
                        <NuxtLink v-for="link in aboutLinks" :key="link.label" :to="link.to" class="hover:text-neutral-0 transition-colors">
                            {{ link.label }}
                        </NuxtLink>
                    </nav>
                </div>

                <!-- Get help -->
                <div class="flex flex-col gap-4">
                    <h3 class="text-h3 font-semibold text-neutral-0">Get help</h3>
                    <nav class="flex flex-col gap-3">
                        <NuxtLink v-for="link in helpLinks" :key="link.label" :to="link.to" class="hover:text-neutral-0 transition-colors">
                            {{ link.label }}
                        </NuxtLink>
                    </nav>
                </div>

                <!-- Contact us -->
                <div class="flex flex-col gap-4">
                    <h3 class="text-h3 font-semibold text-neutral-0">Contact us</h3>
                    <address class="flex flex-col gap-2 not-italic">
                        <span>{{ contact.address }}</span>
                        <a :href="`tel:${contact.phone}`" class="hover:text-neutral-0 transition-colors">
                            {{ contact.phone }}
                        </a>
                        <a :href="`mailto:${contact.email}`" class="hover:text-neutral-0 transition-colors">
                            {{ contact.email }}
                        </a>
                    </address>
                </div>
            </div>
        </div>

        <!-- Bottom bar -->
        <div class="border-t border-brand-muted">
            <div class="mx-auto flex max-w-screen-xl flex-col-reverse items-center gap-4 px-6 py-5 sm:flex-row sm:justify-between lg:px-10">
                <!-- Social icons -->
                <div class="flex items-center gap-4">
                    <a v-for="social in socials" :key="social.label" :href="social.href" :aria-label="social.label" target="_blank" rel="noopener">
                        <img :src="social.icon" :alt="social.label" class="size-5" />
                    </a>
                </div>

                <!-- Legal -->
                <div class="flex flex-wrap items-center justify-center gap-6 text-small sm:justify-end">
                    <NuxtLink to="/privacy-policy" class="font-semibold hover:text-neutral-0 transition-colors">
                        Privacy Policy
                    </NuxtLink>
                    <NuxtLink to="/terms" class="font-semibold hover:text-neutral-0 transition-colors">
                        Terms
                    </NuxtLink>
                    <span class="text-brand-muted">© {{ year }} Mnemio</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();

const aboutLinks = [
    { label: 'Concept', to: '/about' },
    { label: 'Features', to: '/features' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'For Business', to: '/business' },
    { label: 'For Investors', to: '/investors' },
];

const helpLinks = [
    { label: 'Read FAQs', to: '/faq' },
    { label: 'Study guides', to: '/guides' },
    { label: 'Flashcard tips', to: '/tips' },
    { label: 'Sign up to learn', to: '/register' },
    { label: 'English', to: '/language' },
];

const contact = {
    address: '123 Learning Street, Kyiv, Ukraine',
    phone: '+380 800 111 126',
    email: 'hello@mnemio.app',
};

const socials = [
    { label: 'Instagram', href: '#', icon: '/images/shared/insta.svg' },
    { label: 'Twitter', href: '#', icon: '/images/shared/twitter.svg' },
    { label: 'Facebook', href: '#', icon: '/images/shared/fb.svg' },
];
</script>
