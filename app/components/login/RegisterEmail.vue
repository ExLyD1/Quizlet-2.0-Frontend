<template>
    <div>
        <h2 class="mb-3 text-h2 font-bold text-neutral-0">Verify your email</h2>
        <p class="mb-8 text-body text-brand-muted">
            Please enter the 6 digit code we sent to
            <strong class="text-brand-pale">{{ maskedEmail }}</strong
            >. If you don't see it, please check your spam folder.
        </p>

        <UiInputOtp v-model="code" class="mb-4" />

        <p class="mb-8 text-body text-brand-muted">
            Didn't get it?
            <button class="text-accent transition-colors hover:underline">Re-send</button>
        </p>

        <UiButton
            @click="emit('submit', { email: 'qwe', password: 'qwe', code })"
            variant="light"
            class="w-full rounded-xl py-4 text-body font-bold"
        >
            Confirm
        </UiButton>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ email: string }>();

const emit = defineEmits<{
    submit: [payload: { email: string; password: string; code: string }];
}>();

const code = ref('');

const maskedEmail = computed(() => {
    const [local, domain] = props.email.split('@');
    if (!domain) return props.email;
    return `${local!.slice(0, 2)}***@${domain}`;
});
</script>
