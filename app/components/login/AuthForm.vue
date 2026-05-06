<template>
    <div>
        <UiTabs v-model="activeTab" :tabs="tabs" class="mb-6" />

        <!-- Social buttons -->
        <div class="mb-5 flex gap-3">
            <button
                v-for="social in socials"
                :key="social.label"
                :aria-label="social.label"
                class="flex size-12 items-center justify-center rounded-full bg-neutral-0 shadow-sm transition-opacity hover:opacity-80"
            >
                <img :src="social.icon" :alt="social.label" class="size-5" />
            </button>
        </div>

        <p class="mb-5 text-small text-brand-muted">
            {{ activeTab === 'login' ? 'or login with email' : 'or register with email' }}
        </p>

        <UiInputField
            v-model="email"
            label="Email address"
            type="email"
            placeholder="example@mail.com"
            class="mb-3"
        >
            <template #suffix>
                <Check v-if="isEmailValid" class="size-4 text-brand-muted" />
            </template>
        </UiInputField>

        <UiInputField
            v-model="password"
            label="Password"
            type="password"
            placeholder="••••••••"
        >
            <template #suffix>
                <Check v-if="isPasswordValid" class="size-4 text-brand-muted" />
            </template>
        </UiInputField>

        <p v-if="activeTab === 'register'" class="mt-1.5 text-small text-brand-muted">
            8+ characters
        </p>

        <UiButton
            variant="light"
            class="mt-6 w-full rounded-xl py-4 text-body font-bold"
            @click="$emit('submit', { email, activeTab })"
        >
            {{ activeTab === 'login' ? 'log in' : 'Create account' }}
        </UiButton>
    </div>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next';

const props = defineProps<{ initialTab?: 'register' | 'login' }>();
defineEmits<{ submit: [{ email: string; activeTab: 'register' | 'login' }] }>();

const activeTab = ref<'register' | 'login'>(props.initialTab ?? 'register');
const email = ref('');
const password = ref('');

const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
const isPasswordValid = computed(() => password.value.length >= 8);

const tabs = [
    { key: 'register', label: 'Register' },
    { key: 'login',    label: 'Log in' },
];

const socials = [
    { label: 'Apple',    icon: '/images/shared/apple.svg' },
    { label: 'Facebook', icon: '/images/shared/fb.svg' },
    { label: 'Google',   icon: '/images/shared/google.svg' },
];
</script>