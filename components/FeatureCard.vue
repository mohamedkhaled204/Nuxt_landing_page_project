<template>
    <article class="flex flex-col items-center justify-center gap-3 text-white text-center transition-transform duration-200 ease-in-out hover:scale-105" role="img" :aria-label="accessibilityLabel">
        <div class="feature-icon w-[55px] md:w-[67px] h-[55px] md:h-[66px] flex items-center justify-center" v-html="icon" aria-hidden="true"></div>
        <h3 class="text-xl md:text-3xl font-semibold text-[#FFE48A] mt-2">{{ value }}</h3>
        <p class="text-base md:text-xl font-semibold text-white/90 m-0">{{ label }}</p>
    </article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    icon: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    }
})

const accessibilityLabel = computed(() => `${props.label}: ${props.value}`)
</script>

<style scoped>
.feature-icon :deep(svg) {
    width: 100%;
    height: 100%;
}
</style>
