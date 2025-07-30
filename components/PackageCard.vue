<template>
    <div :class="packageItem.best_seller ? 'border-[#0F6E32] md:scale-[1.08] origin-bottom' : 'border-[#66666652] scale-y-1'"
        class="relative rounded-2xl border p-6 w-full bg-white shadow-md space-y-5">
        <!-- Best Seller Badge -->
        <div v-if="packageItem.best_seller"
            class="absolute top-3 right-3 bg-[#FDF4E0] text-[#957700] px-3 py-1 rounded-full text-sm font-medium">
            الأكثر طلبًا
        </div>

        <!-- Icon -->
        <div class="flex justify-center mb-4">
            <div class="w-14 h-14 rounded-full flex items-center justify-center"
                :class="packageItem.best_seller ? 'bg-[#0F6E32]' : 'bg-[#0F6E3224]'">
                <img :src="packageItem.image" width="36px" height="36px" alt="package image">
            </div>
        </div>

        <!-- Package Name -->
        <h2 class="text-center font-black text-xl mb-3">
            {{ packageItem.name }}
        </h2>

        <!-- Price -->
        <div class="text-center mb-2 w-3/4 mx-auto">
            <div class="text-[#3D3D3D] line-through text-sm text-left">
                {{ packageItem.price_before_discount }} ر.س
            </div>
            <div class="text-[#0F6E32] text-3xl font-extrabold flex justify-center items-baseline">
                <span class="text-base text-[#3D3D3D] font-normal">{{ durationInMonths }}mo/</span>
                <span>{{ packageItem.price_after_discount }}ر.س</span>
            </div>
        </div>

        <!-- Discount Value -->
        <div
            class="bg-[#C70F2B21] text-[#C70F2B] text-center text-sm px-3 py-0.5 rounded-full mb-5 w-fit mx-auto flex justify-center">
            قيمة التوفير {{ packageItem.discount_value }} ر.س
        </div>

        <!-- Features -->
        <ul class="space-y-2 mb-6 text-right">
            <li v-for="(feature, i) in packageItem.features" :key="i"
                class="flex items-center gap-2 text-gray-700 text-base font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <path opacity="0.9"
                        d="M9.56693 0.275879C4.81316 0.275879 0.959473 4.12957 0.959473 8.88334C0.959473 13.6371 4.81316 17.4908 9.56693 17.4908C14.3207 17.4908 18.1744 13.6371 18.1744 8.88334C18.1689 4.13186 14.3184 0.281413 9.56693 0.275879Z"
                        fill="#FACC15" />
                    <path
                        d="M14.5358 6.15734L9.626 12.8202C9.5089 12.9756 9.3343 13.0774 9.14141 13.1027C8.94853 13.1281 8.75355 13.0749 8.60028 12.9551L5.09417 10.1519C4.78478 9.90432 4.73468 9.4528 4.98227 9.14341C5.22987 8.83402 5.68139 8.78392 5.99078 9.03151L8.91445 11.3706L13.381 5.30879C13.5275 5.089 13.7829 4.96749 14.0458 4.99249C14.3087 5.01749 14.5366 5.18496 14.6391 5.42841C14.7415 5.67186 14.7018 5.9519 14.5358 6.15734Z"
                        fill="white" />
                </svg>
                <span>{{ feature }}</span>
            </li>
        </ul>

        <div class="flex justify-center py-6 items-center">
            <button class="w-3/4 bg-[#FACC15] text-white font-bold py-2 rounded-md">
                اختر هذه الباقة
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Package {
    id: number
    name: string
    image: string
    price_before_discount: number
    price_after_discount: number
    discount_percentage: number
    discount_value: number
    discount_duration: string
    features: string[]
    best_seller: boolean
}

const props = defineProps<{ packageItem: Package }>()

const durationInMonths = computed(() => {
    if (props.packageItem.discount_duration === 'غير محدودة') {
        return 'غير محدود'
    }

    const endDate = new Date(props.packageItem.discount_duration)
    const currentDate = new Date()
    const diffTime = endDate.getTime() - currentDate.getTime()
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30))

    return diffMonths > 0 ? diffMonths : 3
})
</script>
