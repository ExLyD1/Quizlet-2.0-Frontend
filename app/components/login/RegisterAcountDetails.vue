<template>
    <div class="max-w-[500px] w-full">
        <div class="bg-[#8E7592] h-[10px] rounded-[10px] w-full mb-5">
            <span class="bg-[#CEB2BE] w-[25%] rounded-[10px]"></span>
        </div>

        <div class="flex flex-col items-center text-[#E3D2C8]">
            <h2 class="mb-3 text-h2 font-bold">Account details</h2>

            <div class="size-10 rounded-full bg-[#E3D2C8] border-3 border-[#8E7592]"></div>

            <div class="flex flex-col gap-[20px]">
                <UiInputField
                    v-model="data.fullName"
                    label="Full name*"
                    type="text"
                    placeholder="Dracula Alucard"
                >
                </UiInputField>

                <UiInputField
                    v-model="data.username"
                    label="Username*"
                    type="text"
                    placeholder="Dracula_Rules34"
                >
                </UiInputField>

                <UiInputField
                    v-model="data.birthday"
                    label="Birthday*"
                    type="text"
                    placeholder="MM/DD/YYYY"
                >
                </UiInputField>
            </div>

            <UiButton variant="light" class="w-full rounded-xl py-4 text-body font-bold">
                Next
            </UiButton>
        </div>
    </div>
</template>

<script setup lang="ts">
const data = reactive({
    fullName: '',
    username: '',
    birthday: '',
});
</script>

<style scoped></style>
