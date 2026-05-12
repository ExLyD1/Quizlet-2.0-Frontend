<template>
    <div class="w-full max-w-md rounded-3xl bg-brand-dark p-8">
        <LoginAuthForm
            v-if="step === 'auth'"
            :initial-tab="initialTab"
            @submit="onAuthSubmit"
        />
        <LoginVerifyEmail
            v-else-if="step === 'verify'"
            :email="email"
        />

        <p class="mt-5 text-center text-small text-brand-muted">
            By continuing I agree with the
            <NuxtLink to="/terms" class="text-accent hover:underline">Terms &amp; Conditions</NuxtLink>,
            <br />
            <NuxtLink to="/privacy-policy" class="text-accent hover:underline">Privacy Policy</NuxtLink>
        </p>
    </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' });

const route = useRoute();

const step = ref<'auth' | 'verify'>('auth');
const email = ref('');
const initialTab = route.query.tab === 'login' ? 'login' : 'register' as const;

function onAuthSubmit(payload: { email: string; activeTab: 'register' | 'login' }) {
    email.value = payload.email;
    if (payload.activeTab === 'register') step.value = 'verify';
}
</script>