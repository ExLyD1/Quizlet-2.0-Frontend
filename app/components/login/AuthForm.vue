<template>
    <div class="max-w-[500px] w-full">
        <UiTabs v-model="activeTab" :tabs="tabs" class="mb-[32px]" />

        <div class="text-[#E3D2C8]">
            <!-- Social buttons -->
            <div class="mb-[28px] flex gap-3">
                <button
                    v-for="social in socials"
                    :key="social.label"
                    :aria-label="social.label"
                    class="flex size-12 items-center justify-center rounded-full bg-neutral-0 shadow-sm transition-opacity hover:opacity-80"
                >
                    <img :src="social.icon" :alt="social.label" class="size-5" />
                </button>
            </div>

            <div class="flex flex-col gap-[20px]">
                <p class="text-small">
                    {{ activeTab === 'login' ? 'or login with email' : 'or register with email' }}
                </p>

                <UiInputField
                    v-model="email"
                    label="Email address"
                    type="email"
                    placeholder="example@mail.com"
                >
                    <template #suffix>
                        <Check v-if="isEmailValid" class="size-4" />
                    </template>
                </UiInputField>

                <div>
                    <UiInputField
                        v-model="password"
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                    >
                        <template #suffix>
                            <Check v-if="isPasswordValid" class="size-4" />
                        </template>
                    </UiInputField>

                    <p class="h-[20px] mt-1.5 text-small">
                        <span v-if="activeTab === 'register'">8+ characters</span>
                    </p>
                </div>
            </div>

            <UiButton
                variant="light"
                class="mt-[32px] w-full rounded-xl text-body font-bold"
                @click="$emit('submit', { email, activeTab })"
            >
                {{ activeTab === 'login' ? 'Log in' : 'Create account' }}
            </UiButton>
        </div>
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
    { key: 'login', label: 'Log in' },
];

const socials = [
    { label: 'Apple', icon: '/images/shared/social/apple.svg' },
    { label: 'Facebook', icon: '/images/shared/social/facebook.svg' },
    { label: 'Google', icon: '/images/shared/social/google.svg' },
];
</script>
