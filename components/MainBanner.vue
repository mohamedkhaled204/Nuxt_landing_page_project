<template>
    <div class="container-width mb-10 md:my-10 flex flex-col-reverse md:flex-row items-center justify-between relative">
        <img src="../assets/images/mainbannershadow.png" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0" loading="lazy" alt="Main Banner Shadow">
        <div class="w-full md:w-1/2 space-y-6 flex flex-col relative z-10">
            <h2 class="text-right text-[22px] md:text-[30px] xl:text-[45px] font-bold leading-relaxed">
                <span class="text-primary text-2xl md:text-[30px] xl:text-[60px]">سهولة الاختبار العام</span>
                <br>
                رحلة متكاملة نحو أعلى الدرجات
            </h2>

            <div class="flex items-center flex-wrap gap-2 md:gap-4">
                <BadgeItem v-for="badge in badges" :key="badge.id" :text="badge.text" />
            </div>

            <p class="font-medium text-base md:text-xl text-right text-[#666666]"> للمعلمين والخريجين الطامحين للتميز
                محتوى تعليمي شامل من ست محطات رئيسية</p>

            <div class="flex flex-wrap 2xl:justify-start gap-x-20 gap-y-3 md:gap-y-5 text-right">
                <FeatureItem v-for="feature in features" :key="feature.id" :text="feature.text" />
            </div>
        </div>
        <div class="w-[95%] md:w-2/5 mr-5 relative z-10">
            <img src="../assets/images/mainbanner.png" class="w-full h-full" loading="lazy" alt="Main Banner">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import BadgeItem from './BadgeItem.vue'
import FeatureItem from './FeatureItem.vue'

const badges = ref([
    { id: 1, text: 'لغـــــوي' },
    { id: 2, text: 'لفــــظي' },
    { id: 3, text: 'كــــــمي' }
])

const features = ref([
    { id: 1, text: 'امتحانات تفاعلية ومتطورة' },
    { id: 2, text: 'دورات معتمدة من هيئة تقويم التعليم' },
    { id: 3, text: 'متابعة مستمرة للتقدم' },
    { id: 4, text: 'التاهل للحصول على الرخصة المهنية' }
])
</script>