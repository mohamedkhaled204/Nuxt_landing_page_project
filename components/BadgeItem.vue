<template>
    <div class="flex gap-2 items-center bg-[#FFE48A63] rounded-3xl py-1 md:py-2 px-2 md:px-4">
        <CheckIcon color="#957700" />
        <span class="text-base md:text-xl font-bold text-[#957700]">{{ text }}</span>
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
