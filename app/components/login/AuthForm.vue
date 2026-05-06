<template>
    <div>
        <!-- Tabs -->
        <div class="mb-6 flex gap-6 border-b border-brand-muted">
            <button
                v-for="tab in tabs"
                :key="tab.key"
                :class="[
                    'relative pb-3 text-body transition-colors',
                    activeTab === tab.key ? 'text-neutral-0' : 'text-brand-muted hover:text-brand-pale',
                ]"
                @click="activeTab = tab.key"
            >
                {{ tab.label }}
                <span
                    v-if="activeTab === tab.key"
                    class="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#E84B8A]"
                />
            </button>
        </div>

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

        <!-- Email field -->
        <div class="mb-3 rounded-xl border border-brand-muted px-4 pb-3 pt-2">
            <span class="mb-0.5 block text-[11px] leading-none text-brand-muted">Email address</span>
            <div class="flex items-center gap-2">
                <input
                    v-model="email"
                    type="email"
                    placeholder="example@mail.com"
                    class="flex-1 bg-transparent text-body text-brand-pale outline-none placeholder:text-brand-muted/50"
                />
                <Check v-if="isEmailValid" class="size-4 shrink-0 text-brand-muted" />
            </div>
        </div>

        <!-- Password field -->
        <div class="rounded-xl border border-brand-muted px-4 pb-3 pt-2">
            <span class="mb-0.5 block text-[11px] leading-none text-brand-muted">Password</span>
            <div class="flex items-center gap-2">
                <input
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="••••••••"
                    class="flex-1 bg-transparent text-body text-brand-pale outline-none placeholder:text-brand-muted/50"
                />
                <div class="flex shrink-0 items-center gap-1">
                    <Check v-if="isPasswordValid" class="size-4 text-brand-muted" />
                    <button type="button" @click="showPassword = !showPassword">
                        <Eye v-if="!showPassword" class="size-4 text-brand-muted transition-colors hover:text-brand-pale" />
                        <EyeOff v-else class="size-4 text-brand-muted transition-colors hover:text-brand-pale" />
                    </button>
                </div>
            </div>
        </div>

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
import { Check, Eye, EyeOff } from 'lucide-vue-next';

const props = defineProps<{ initialTab?: 'register' | 'login' }>();
defineEmits<{ submit: [{ email: string; activeTab: 'register' | 'login' }] }>();

const activeTab = ref<'register' | 'login'>(props.initialTab ?? 'register');
const email = ref('');
const password = ref('');
const showPassword = ref(false);

const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));
const isPasswordValid = computed(() => password.value.length >= 8);

const tabs = [
    { key: 'register' as const, label: 'Register' },
    { key: 'login' as const,    label: 'Log in' },
];

const socials = [
    { label: 'Apple',    icon: '/images/shared/apple.svg' },
    { label: 'Facebook', icon: '/images/shared/fb.svg' },
    { label: 'Google',   icon: '/images/shared/google.svg' },
];
</script>