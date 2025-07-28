<template>
    <div class="container-width my-5 md:my-12" dir="rtl">
        <!-- Heading -->
        <div class="w-full md:w-2/3 mx-auto flex flex-col gap-4 md:gap-7 lg:gap-10 mb-2 md:mb-6 text-center">
            <h1 class="font-bold text-4xl md:text-[53px]">اختبارات الرخصة المهنية</h1>
            <p class="text-base md:text-xl font-medium text-[#666666]">
                اجتز اختباراتنا المعتمدة واحصل على رخصتك المهنية للتعليم. جميع الاختبارات مصممة وفقاً لمعايير هيئة تقويم
                التعليم والتدريب
            </p>
        </div>

        <!-- Features -->
        <div class="flex flex-wrap justify-center gap-x-10 gap-y-3 md:gap-y-5">
            <FeatureItem v-for="feature in features" :key="feature.id" :text="feature.text" />
        </div>
        <!-- Test Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            <TestCard v-for="test in tests" :key="test.id" :test="test" />
        </div>
    </div>
</template>

<script setup>
// Features data
const features = [
    { id: 1, text: 'أسئلة محدثة وفقاً لأحدث المعايير' },
    { id: 2, text: 'تقييم فوري ومفصل للنتائج' },
    { id: 3, text: 'إمكانية إعادة المحاولة' },
    { id: 4, text: 'التأهل للامتحان الرخصة عند النجاح' }
]

const tests = [
    {
        id: 1,
        title: 'الاختبار العام للرخصة',
        description: 'استراتيجيات متقدمة لإدارة الصف وتحفيز الطلاب',
        questions: 120,
        duration: 3,
        successRate: 75,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'general'
    },
    {
        id: 2,
        title: 'الاختبار العام للرخصة - المستوى المتقدم',
        description: 'اختبار شامل للمفاهيم التعليمية المتقدمة',
        questions: 150,
        duration: 3.5,
        successRate: 70,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'general'
    },
    {
        id: 3,
        title: 'اختبار تخصص الرياضيات',
        description: 'اختبار متخصص في تدريس الرياضيات للمراحل المختلفة',
        questions: 100,
        duration: 2.5,
        successRate: 72,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'specialty'
    },
    {
        id: 4,
        title: 'اختبار تخصص اللغة العربية',
        description: 'اختبار متخصص في تدريس اللغة العربية وآدابها',
        questions: 100,
        duration: 2.5,
        successRate: 74,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'specialty'
    },
    {
        id: 5,
        title: 'اختبار تخصص العلوم',
        description: 'اختبار متخصص في تدريس العلوم الطبيعية',
        questions: 90,
        duration: 2,
        successRate: 68,
        status: 'قريباً',
        quantities: 'محدود',
        type: 'specialty'
    },
    {
        id: 6,
        title: 'اختبار تخصص التاريخ',
        description: 'اختبار متخصص في تدريس التاريخ والجغرافيا',
        questions: 80,
        duration: 2,
        successRate: 73,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'specialty'
    }
]

</script>