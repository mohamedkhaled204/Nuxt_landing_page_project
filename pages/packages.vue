<template>
    <div class="container-width my-5 md:my-12">
        <div class="text-center my-32 w-full md:w-1/2 mx-auto">
            <h1 class="font-bold text-4xl md:text-[53px] mb-8">باقاتنا المميزة</h1>
            <p class="text-base md:text-xl leading-9 font-medium text-[#666666]">اختر من مجموعة متنوعة من الدورات المصممة خصيصاً لتلبية احتياجات المعلمين وفقاً لمعايير هيئة تقويم التعليم والتدريب</p>
        </div>

        <div class="container-width my-5 md:my-12">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-20 w-full md:w-3/4 mx-auto">
                <PackageCard v-for="pkg in packages" :key="pkg.id" :package-item="pkg" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PackageCard from '~/components/PackageCard.vue'
import PackagesData from '~/components/PackagesData.json'
import Star10 from '~/assets/images/Star10.png'
import Crown from '~/assets/images/Crown.png'
const imageMap = {
    Star10,
    Crown,
}

const packages = PackagesData.map(course => ({
    ...course,
    image: imageMap[course.image]
}))
</script>
