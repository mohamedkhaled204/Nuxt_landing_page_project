<template>
    <div class="max-w-7xl mx-auto px-4 my-10 md:my-28">
        <h1 class="font-black md:text-5xl text-2xl text-center mb-12">
            آراء المعلمين عن منصة سهولة
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(review, index) in reviews" :key="index"
                class="bg-[#f0f0f0] rounded-lg p-6 flex flex-col items-center space-y-6">
                <!-- التقييم (نجوم) -->
                <div class="flex self-end">
                    <svg v-for="star in 5" :key="star"
                        :class="star <= review.rating ? 'text-yellow-400' : 'text-gray-300'" class="w-6 h-6"
                        fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>

                <!-- المراجعة -->
                <p class="text-[#0D0D0D] font-medium text-sm md:text-lg mb-4">{{ review.text }}</p>

                <div class="flex justify-between items-center w-full">
                    <!-- اسم المعلم -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" viewBox="0 0 40 30" fill="none">
                        <path
                        d="M4.73544e-06 0H17.125L17.125 17.2429C17.125 21.7 16.6141 30 0 30V26.3389C7.98911 26.3389 8.98744 21.2316 8.54704 17.2454H0L4.73544e-06 0ZM22.8738 17.2429H31.422C31.8624 21.2366 30.8629 26.3364 22.875 26.3364V29.9975C39.4891 29.9975 40 21.6975 40 17.2404V2.38419e-06H22.8738L22.8738 17.2429Z"
                        fill="#0F6E32" />
                    </svg>
                    <h3 class="font-bold text-lg text-black">
                        {{ review.teacher }}
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const reviews = [
    {
        rating: 5,
        text: "منصة سهولة كانت نقطة تحوّل بالنسبة لي. المعلومة واضحة، والشرح موجه تمامًا لاختبار الرخصة.",
        teacher: "أحمد السبيعي",
    },
    {
        rating: 5,
        text: "منصة سهولة كانت نقطة تحوّل بالنسبة لي. المعلومة واضحة، والشرح موجه تمامًا لاختبار الرخصة.",
        teacher: "أحمد السبيعي",
    },
    {
        rating: 5,
        text: "منصة سهولة كانت نقطة تحوّل بالنسبة لي. المعلومة واضحة، والشرح موجه تمامًا لاختبار الرخصة.",
        teacher: "أحمد السبيعي",
    }

];
</script>
