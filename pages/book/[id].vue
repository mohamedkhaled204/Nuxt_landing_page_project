<template>
    <div class="container-width my-5 md:my-12">
        <div v-if="book" class="">
            <!-- Back Button -->
            <NuxtLink to="/library" class="flex items-center gap-2 mb-6 text-primary hover:underline">
                <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                العودة إلى المكتبة
            </NuxtLink>

            <!-- Book Details -->
            <div class="flex flex-col md:flex-row justify-between items-start gap-8">
                <!-- Book Image -->
                <div class="flex flex-col justify-center md:max-w-[40%]">
                    <img :src="book.image" :alt="book.title" class="max-w-full h-auto rounded-lg" />
                    <h1 class="text-3xl font-bold">{{ book.title }}</h1>
                </div>

                <!-- Book Info Card -->
                <div class="w-full md:w-[398px] shadow-md rounded-lg p-6 space-y-6 relative">
                    <!-- Pricing -->
                    <div class="flex justify-center items-center gap-3 pt-6">
                        <h4 class="text-black text-2xl font-bold">﷼ {{ book.newPrice }}</h4>
                        <span class="line-through text-gray-400 text-base">﷼{{ book.oldPrice }}</span>
                    </div>
                    <!-- Discount Badge -->
                    <div class="bg-yellow-400 text-white p-1 rounded text-base font-bold w-fit">
                        {{ Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100) }}% OFF
                    </div>

                    <!-- Rating -->
                    <div class="flex items-center gap-2">
                        <div class="flex">
                            <Icon v-for="star in 5" :key="star" name="heroicons:star-solid" class="w-7 h-7"
                                :class="star <= book.rating.stars ? 'text-yellow-400' : 'text-gray-300'" />
                        </div>
                        <span class="text-gray-600 text-lg font-medium">({{ book.rating.count }})</span>
                    </div>

                    <!-- Purchase Button -->
                    <button @click="purchaseBook"
                        class="w-full bg-primary text-white py-3 px-6 rounded-[19px] text-lg font-bold hover:bg-green-700 transition ">
                        شراء
                    </button>

                    <!-- Book Type -->
                    <div class="flex items-center gap-3">
                        <Icon name="heroicons:document-text" class="w-5 h-5 text-gray-600" />
                        <span class="text-gray-700 text-base font-medium">{{ book.bookType }}</span>
                    </div>

                    <!-- Page Count -->
                    <div class="flex items-center gap-3">
                        <Icon name="heroicons:document-duplicate" class="w-5 h-5 text-gray-600" />
                        <span class="text-gray-700 text-base font-medium">{{ book.pageCount }} صفحة</span>
                    </div>
                </div>
            </div>

            <!-- Additional Info -->
            <div class="mt-6 flex justify-between gap-6 items-start space-y-8">
                <div class="flex-1">
                    <h3 class="text-lg font-medium mb-4 border-b-2 pb-1 w-fit border-[#FACC15]">الوصف</h3>
                    <p class="text-gray-700 leading-relaxed">
                        {{ book.detailedDescription || book.description }}
                    </p>
                </div>

                <!-- Classroom Management Banner -->
                <div class="bg-gradient-to-l md:w-[398px] from-green-600 to-green-700 rounded-lg overflow-hidden">
                    <div class="flex flex-col md:flex-row items-center">
                        <!-- Text Content -->
                        <div class="flex-1 p-8 text-white">
                            <div class="mb-4">
                                <span class="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                                    جــديد
                                </span>
                            </div>
                            <h2 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                                إدارة<br>
                                الصف<br>
                                الفعالة
                            </h2>
                            <button
                                class="border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-green-700 transition">
                                سجل الآن
                            </button>
                        </div>

                        <!-- Image -->
                        <div class="md:w-1/2 relative">
                            <img src="~/assets/images/testsman.png" alt="معلم في الفصل الدراسي"
                                class="w-full h-full object-cover"
                                onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1lYWNoZXIgaW4gQ2xhc3Nyb29tPC90ZXh0Pjwvc3ZnPg=='" />
                            <p class="text-lg mb-6 opacity-90 absolute left-1/2 bottom-4">
                                طور مهاراتك<br>
                                نحو تعليم أكثر تأثيراً
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center py-20">
            <h2 class="text-2xl font-bold text-gray-600">الكتاب غير موجود</h2>
            <NuxtLink to="/library" class="text-primary hover:underline mt-4 inline-block">
                العودة إلى المكتبة
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import lib1 from '~/assets/images/lib1.png'

const route = useRoute()
const bookId = parseInt(route.params.id as string)

const books = [
    {
        id: 1,
        title: "كتاب سهولة الإختبار العام",
        type: "الكتروني",
        description: "شروحات تسهل الفهم – كل ذلك في كتاب واحد.",
        detailedDescription: "يأخذك هذا الكتاب في رحلة معرفية مبسطة لفهم مفاهيم الرخصة المهنية التربوية والاستعداد لها بشكل عملي وفعّال، من خلال نماذج محاكية للاختبار الحقيقي وشروحات تساعدك على ترسيخ الفهم وتجاوز التحديات بثقة.\n\nيقدّم لك الكتاب تغطية شاملة لمحاور الاختبار العام، مثل القيم والمسؤوليات المهنية، المعرفة التربوية، والممارسات التعليمية، مع التركيز على تبسيط المصطلحات وتوضيح الفروق المفاهيمية بطريقة منهجية وسهلة الفهم.\n\nكما يحتوي الكتاب على عدد كبير من الأسئلة التدريبية (أكثر من 120 سؤالًا) موزعة على أنماط متعددة، بالإضافة إلى إجابات مشروحة تساعدك على تحليل اختياراتك وفهم السبب وراء كل إجابة صحيحة أو خاطئة.\n\nفي نهاية الكتاب، ستكون قادرًا على:\n• فهم محاور الاختبار ومجالاته الرئيسية.\n• التدرّب على أسئلة محاكية لواقع الاختبار.\n• تحليل الإجابات واكتشاف نقاط القوة والضعف.\n• الاستعداد لاجتياز اختبار الرخصة بثقة وكفاءة.",
        oldPrice: 300,
        newPrice: 250,
        image: lib1,
        rating: {
            stars: 4,
            count: 4.8
        },
        fileInfo: "File (350.03) × 51.8 Hug",
        bookType: "الكتاب الرقمي",
        pageCount: 150,
        chapters: [
            "مقدمة في الاختبار العام",
            "استراتيجيات الاستعداد",
            "نماذج أسئلة وحلولها",
            "تقنيات إدارة الوقت",
            "المراجعة النهائية"
        ]
    },
    {
        id: 2,
        title: "الاختبار العام للرخصة",
        type: "ورقي",
        description: "استراتيجيات متقدمة لإدارة الصف وتحفيز الطلاب.",
        detailedDescription: "دليل شامل يغطي جميع جوانب الاختبار العام مع تركيز خاص على استراتيجيات إدارة الصف الفعالة وتقنيات تحفيز الطلاب.",
        oldPrice: 300,
        newPrice: 149,
        image: lib1,
        rating: {
            stars: 5,
            count: 4.9
        },
        fileInfo: "Physical Book",
        bookType: "الكتاب الورقي",
        pageCount: 200,
        chapters: [
            "أسس إدارة الصف",
            "تقنيات التحفيز",
            "حل المشكلات السلوكية",
            "التقييم والمتابعة",
            "دراسات حالة"
        ]
    },
    {
        id: 3,
        title: "دليل المعلم الشامل",
        type: "الكتروني",
        description: "أساسيات وأساليب التعليم الحديثة.",
        detailedDescription: "دليل متكامل يشمل أحدث أساليب التعليم وتقنيات التدريس الحديثة مع أمثلة تطبيقية وخطط دروس جاهزة.",
        oldPrice: 250,
        newPrice: 129,
        image: lib1,
        rating: {
            stars: 4,
            count: 4.6
        },
        fileInfo: "File (280.15) × 42.3 Hug",
        bookType: "الكتاب الرقمي",
        pageCount: 180,
        chapters: [
            "نظريات التعلم الحديثة",
            "تصميم المناهج",
            "استخدام التكنولوجيا",
            "التقييم التكويني",
            "التطوير المهني"
        ]
    },
    {
        id: 4,
        title: "كتاب استراتيجيات التعليم",
        type: "ورقي",
        description: "خطط مبتكرة لتطوير مهارات الطلاب.",
        detailedDescription: "مجموعة من الاستراتيجيات المبتكرة والخطط العملية لتطوير مهارات الطلاب في مختلف المراحل التعليمية.",
        oldPrice: 200,
        newPrice: 99,
        image: lib1,
        rating: {
            stars: 5,
            count: 4.7
        },
        fileInfo: "Physical Book",
        bookType: "الكتاب الورقي",
        pageCount: 120,
        chapters: [
            "استراتيجيات التعلم النشط",
            "تطوير مهارات التفكير",
            "التعلم التعاوني",
            "التعلم الذاتي",
            "تقييم المهارات"
        ]
    },
]

const book = computed(() => books.find(b => b.id === bookId))

const purchaseBook = () => {
    // Handle purchase logic
    console.log(`Purchasing book ${bookId}`)
}

const addToCart = () => {
    // Handle add to cart logic
    console.log(`Adding book ${bookId} to cart`)
}

// SEO
useHead({
    title: book.value ? `${book.value.title} - المكتبة` : 'كتاب غير موجود',
    meta: [
        { name: 'description', content: book.value?.description || 'كتاب غير موجود' }
    ]
})
</script>
