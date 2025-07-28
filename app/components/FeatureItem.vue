<template>
    <div class="flex items-center gap-2">
        <CheckIcon />
        <span class="text-base md:text-xl font-medium text-primary">{{ text }}</span>
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
