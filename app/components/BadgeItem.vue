<template>
    <div class="flex gap-2 items-center bg-[#0F6E3226] rounded-3xl py-1 md:py-2 px-2 md:px-4">
        <span class="text-base md:text-xl font-semibold text-primary">{{ text }}</span>
        <CheckIcon />
    </div>
</template>

<script setup>
import CheckIcon from './CheckIcon.vue'

defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>
