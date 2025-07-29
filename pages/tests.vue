<template>
    <div class=" my-5 md:my-12 space-y-7" dir="rtl">
        <!-- Heading -->
        <div class="w-full flex justify-between items-center gap-4 lg:gap-7 mb-2 lg:mb-6 text-center">
            <div class="mr-1 lg:mr-20 flex-1 flex flex-col gap-4 lg:gap-8 items-end">
                <h1 class="text-xl sm:text-2xl md:text-4xl xl:text-7xl font-bold leading-6 md:leading-normal lg:leading-relaxed">قيّم مستواك باختبارات تحاكي أســـئلة الرخصـــة الفعـــلية.</h1>
                <button
                    class="bg-primary text-white hover:text-white hover:bg-primary px-3 md:px-8 py-2 md:py-4 rounded-full border text-sm lg:text-xl font-medium">اختبر
                    نفسك الآن
                </button>
            </div>

            <div class="md:w-1/3 w-1/2 relative">
                <img src="../assets/images/testsman.png" loading="lazy" alt="test page">
                <img class="absolute bottom-0 md:bottom-[20%] -right-4 md:right-0  w-6 sm:w-12" src="../assets/images/Star9.png" loading="lazy" alt="">
                <img class="absolute top-1/4 md:top-1/4 md:right-1/4 w-6 sm:w-12" src="../assets/images/Star9.png" loading="lazy" alt="">
            </div>

        </div>

        <div class="container-width">
            <!-- Filters -->
            <div class="flex flex-wrap gap-2 justify-center mb-6">
                <button @click="selectedFilter = 'all'" :class="[
                    'px-3 md:px-8 py-1 md:py-3 rounded-full border text-base md:text-xl font-medium',
                    selectedFilter === 'all'
                        ? 'bg-primary text-white'
                        : 'bg-white border-primary text-primary hover:text-white hover:bg-primary'
                ]">
                    جميع الاختبارات 
                </button>
                <button @click="selectedFilter = 'general'" :class="[
                    'px-3 md:px-8 py-1 md:py-3 rounded-full border text-base md:text-xl font-medium',
                    selectedFilter === 'general'
                        ? 'bg-primary text-white'
                        : 'bg-white border-primary text-primary hover:text-white hover:bg-primary'
                ]">
                    الاختبار العام 
                </button>
                <button @click="selectedFilter = 'specialty'" :class="[
                    'px-3 md:px-8 py-1 md:py-3 rounded-full border text-base md:text-xl font-medium',
                    selectedFilter === 'specialty'
                        ? 'bg-primary text-white'
                        : 'bg-white border-primary text-primary hover:text-white hover:bg-primary'
                ]">
                    اختبارات التخصص 
                </button>
                <button @click="selectedFilter = 'available'" :class="[
                    'px-3 md:px-8 py-1 md:py-3 rounded-full border text-base md:text-xl font-medium',
                    selectedFilter === 'available'
                        ? 'bg-primary text-white'
                        : 'bg-white border-primary text-primary hover:text-white hover:bg-primary'
                ]">
                    متاح الآن 
                </button>
            </div>


            <!-- Test Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                <TestCard v-for="test in filteredTests" :key="test.id" :test="test" />
            </div>

            <!-- No Results -->
            <div v-if="filteredTests.length === 0" class="text-center py-12">
                <p class="text-gray-500 text-lg">لم يتم العثور على اختبارات مطابقة للفلتر المحدد</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// Import TestCard component
import TestCard from '~~/components/TestCard.vue'

// Make sure ref is imported and used correctly
const selectedFilter = ref('all')

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
    },
    {
        id: 7,
        title: 'اختبار تخصص اللغة الإنجليزية',
        description: 'اختبار متخصص في تدريس اللغة الإنجليزية',
        questions: 95,
        duration: 2.5,
        successRate: 71,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'specialty'
    },
    {
        id: 8,
        title: 'اختبار تخصص التربية الفنية',
        description: 'اختبار متخصص في تدريس التربية الفنية والجمالية',
        questions: 70,
        duration: 2,
        successRate: 76,
        status: 'متاح',
        quantities: 'محدود',
        type: 'specialty'
    },
    {
        id: 9,
        title: 'اختبار تخصص التربية البدنية',
        description: 'اختبار متخصص في تدريس التربية البدنية والرياضة',
        questions: 85,
        duration: 2,
        successRate: 69,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'specialty'
    },
    {
        id: 10,
        title: 'اختبار تخصص الحاسب الآلي',
        description: 'اختبار متخصص في تدريس علوم الحاسب والتقنية',
        questions: 110,
        duration: 3,
        successRate: 78,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'specialty'
    },
    {
        id: 11,
        title: 'اختبار تخصص التربية الإسلامية',
        description: 'اختبار متخصص في تدريس التربية الإسلامية والدراسات الدينية',
        questions: 90,
        duration: 2.5,
        successRate: 82,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'specialty'
    },
    {
        id: 12,
        title: 'اختبار تخصص التربية الخاصة',
        description: 'اختبار متخصص في تعليم ذوي الاحتياجات الخاصة',
        questions: 100,
        duration: 3,
        successRate: 75,
        status: 'قريباً',
        quantities: 'محدود',
        type: 'specialty'
    },
    {
        id: 13,
        title: 'اختبار القيادة التربوية',
        description: 'اختبار متخصص في القيادة والإدارة التعليمية',
        questions: 120,
        duration: 3.5,
        successRate: 77,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'general'
    },
    {
        id: 14,
        title: 'اختبار التطوير المهني',
        description: 'اختبار في التطوير المهني المستمر للمعلمين',
        questions: 80,
        duration: 2,
        successRate: 80,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'general'
    },
    {
        id: 15,
        title: 'اختبار التقويم والقياس',
        description: 'اختبار متخصص في أساليب التقويم والقياس التربوي',
        questions: 90,
        duration: 2.5,
        successRate: 74,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'general'
    },
    {
        id: 16,
        title: 'اختبار الإرشاد الطلابي',
        description: 'اختبار في الإرشاد النفسي والتربوي للطلاب',
        questions: 85,
        duration: 2,
        successRate: 72,
        status: 'متاح',
        quantities: 'محدود',
        type: 'specialty'
    },
    {
        id: 17,
        title: 'اختبار تقنيات التعليم الحديثة',
        description: 'اختبار في استخدام التقنيات والوسائل التعليمية المتطورة',
        questions: 95,
        duration: 2.5,
        successRate: 79,
        status: 'متاح',
        quantities: 'غير محدود',
        type: 'general'
    },
    {
        id: 18,
        title: 'اختبار صعوبات التعلم',
        description: 'اختبار متخصص في تشخيص وعلاج صعوبات التعلم',
        questions: 100,
        duration: 3,
        successRate: 71,
        status: 'قريباً',
        quantities: 'محدود',
        type: 'specialty'
    }
]


const filteredTests = computed(() => {
    console.log('Filter changed to:', selectedFilter.value)
    console.log('Total tests:', tests.length)
    
    let filtered = []
    
    switch (selectedFilter.value) {
        case 'general':
            filtered = tests.filter(test => test.type === 'general')
            break
        case 'specialty':
            filtered = tests.filter(test => test.type === 'specialty')
            break
        case 'available':
            filtered = tests.filter(test => test.status === 'متاح')
            break
        default:
            filtered = tests
    }
    
    console.log('Filtered tests:', filtered.length)
    return filtered
})

// Helper computed properties for button counts
const getAllTestsCount = computed(() => tests.length)
const getGeneralTestsCount = computed(() => tests.filter(test => test.type === 'general').length)
const getSpecialtyTestsCount = computed(() => tests.filter(test => test.type === 'specialty').length)
const getAvailableTestsCount = computed(() => tests.filter(test => test.status === 'متاح').length)
</script>