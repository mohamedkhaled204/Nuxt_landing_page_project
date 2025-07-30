<template>
    <div class="container-width my-5 md:my-12">
        <!-- Heading -->
        <div class="w-full md:w-1/2 mx-auto flex flex-col gap-4 md:gap-7 lg:gap-10 mb-2 md:mb-6 text-center"
            v-if="!isCoursesPage">
            <h1 class="font-extrabold text-4xl md:text-[53px]">دوراتنا المعتمدة</h1>
            <p class="text-base md:text-xl leading-9 font-medium text-[#666666]">
                اختر من مجموعة متنوعة من الدورات المصممة خصيصاً لتلبية احتياجات المعلمين وفقاً لمعايير هيئة تقويم
                التعليم والتدريب
            </p>
        </div>

        <!-- Filter bar (only on courses page) -->
        <div v-if="isCoursesPage" class="flex flex-wrap gap-2 justify-center mb-6">
            <button v-for="level in levels" :key="level" @click="selectedFilter = level" :class="[
                'px-3 md:px-8 py-1 md:py-3 rounded-full border text-xl font-medium',
                selectedFilter === level
                    ? 'bg-primary text-white'
                    : 'bg-white border-primary text-primary hover:text-white hover:bg-primary',
            ]">
                {{ level }}
            </button>
        </div>

        <!-- Courses grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 md:mt-16">
            <div v-for="(course, index) in displayedCourses" :key="index"
                class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-6">
                <!-- Course content -->
                <div class="flex flex-col justify-between space-y-4">
                    <div class="flex items-center justify-between w-full gap-5">
                        <div class="w-12 aspect-square overflow-hidden flex-shrink-0" v-if="course.image">
                            <img :src="course.image" :alt="course.title" loading="lazy"
                                class="w-full h-full object-cover" />
                        </div>
                        <span :class="{
                            'bg-green-100 text-green-800': course.level === 'مبتدئ',
                            'bg-yellow-100 text-yellow-800': course.level === 'متوسط',
                            'bg-red-100 text-red-800': course.level === 'متقدم',
                        }" class="text-xs px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap">
                            {{ course.level }}
                        </span>
                    </div>

                    <div class="space-y-3">
                        <h3 class="text-xl font-bold text-gray-900 leading-relaxed">
                            {{ course.title }}
                        </h3>
                        <p class="text-[#666666] text-base font-medium leading-relaxed">
                            {{ course.description }}
                        </p>
                    </div>

                    <div class="flex justify-between items-center text-base font-medium w-full">
                        <div class="flex items-center text-[#666666] w-1/2">
                            <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>{{ course.duration }} ساعة</span>
                        </div>
                        <div class="flex items-center text-[#666666] w-1/2">
                            <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                            <span>{{ course.students }}</span>
                        </div>
                    </div>

                    <div class="flex justify-start items-center">
                        <div class="flex items-center gap-3">
                            <div class="flex">
                                <svg v-for="star in 5" :key="star"
                                    :class="star <= Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'"
                                    class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <span class="text-gray-700 font-medium ml-2">({{ course.rating }})</span>
                        </div>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="flex items-center gap-1 text-xl font-bold text-primary">
                            <span>{{ course.price }}</span>
                            <span>ريال</span>
                        </div>
                        <button
                            class="min-w-1/4 bg-primary hover:bg-primary/80 text-white p-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-between">
                            <span>التفاصيل</span>
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- View all link -->
        <div class="p-0.5 border-2 border-[#ccebdc] w-fit rounded-lg mt-12 mx-auto"
            v-if="!isCoursesPage && courses.length > 6">
            <NuxtLink to="/courses"
                class="bg-[#F4F5F9] w-48 text-primary py-3 text-center px-3 rounded-sm border border-primary transition-colors duration-200 flex justify-between gap-0 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
                    <path
                        d="M22 1.48769C22 1.20585 21.7934 0.968823 21.5188 0.936303C14.9419 0.150778 12.0331 2.35849 11 3.49233C9.96623 2.35849 7.05809 0.152223 0.481153 0.936303C0.20732 0.968823 0 1.20585 0 1.48769V15.3634C0 15.3677 0.00141546 15.372 0.00141546 15.3764C0.00141546 15.3879 0.00283053 15.3988 0.0035381 15.4103C0.00424568 15.4161 0.00283053 15.4219 0.0035381 15.4284C0.00424568 15.4364 0.00707543 15.4436 0.00849058 15.4515C0.0106133 15.4645 0.0120293 15.4776 0.0148596 15.4898C0.0155672 15.4942 0.0155671 15.4985 0.0169822 15.5028L0.682105 18.1326C0.750032 18.4014 1.00264 18.5777 1.27152 18.5452C5.96205 17.9859 7.71826 19.5064 8.56169 20.237C8.95935 20.5817 9.46951 20.771 9.99878 20.771H11.9991C12.5284 20.771 13.0392 20.5817 13.4362 20.237C14.2803 19.5064 16.0358 17.9859 20.7264 18.5452C20.9959 18.5777 21.2478 18.4014 21.3158 18.1326L21.9809 15.5028C21.9823 15.4985 21.9816 15.4942 21.983 15.4898C21.9858 15.4776 21.988 15.4645 21.9894 15.4515C21.9908 15.4436 21.9936 15.4364 21.9943 15.4284C21.995 15.4226 21.9943 15.4161 21.9943 15.4103C21.995 15.3988 21.9965 15.3879 21.9965 15.3764C21.9965 15.372 21.9979 15.3677 21.9979 15.3634V1.48769H22ZM20.9117 1.98704V14.7477C15.6438 14.249 12.8623 15.7218 11.5434 16.8448V4.5568C11.9559 3.98012 14.2379 1.32581 20.9117 1.98704ZM10.4559 4.56041V16.8455C9.13765 15.7225 6.35546 14.2498 1.08825 14.7484V1.98704C7.70906 1.33304 10.0391 3.99241 10.4559 4.56041ZM20.3818 17.3911C16.1589 16.9857 14.1466 18.1673 12.7343 19.39C12.5326 19.5642 12.2722 19.6603 12.0005 19.6603H10.0002C9.72848 19.6603 9.46739 19.5642 9.26643 19.39C7.85411 18.1673 5.84247 16.9865 1.61894 17.3911L1.22977 15.8504C8.4598 15.182 10.4976 18.4881 10.5309 18.5445C10.5351 18.5517 10.5394 18.5575 10.5436 18.564C10.5486 18.5712 10.5535 18.5792 10.5585 18.5864C10.5755 18.611 10.5931 18.6334 10.6137 18.6543C10.6151 18.6558 10.6165 18.6572 10.6179 18.6594C10.6405 18.6825 10.6646 18.702 10.6908 18.7208C10.6964 18.7252 10.7028 18.7288 10.7085 18.7324C10.7318 18.7476 10.7559 18.7613 10.7807 18.7721C10.7849 18.7743 10.7891 18.7765 10.7934 18.7786C10.8217 18.7909 10.8514 18.7996 10.8818 18.8068C10.8896 18.8083 10.8967 18.8097 10.9045 18.8112C10.937 18.8169 10.9696 18.8213 11.0021 18.8213C11.0347 18.8213 11.0672 18.8169 11.1005 18.8112C11.1068 18.8097 11.1139 18.809 11.1203 18.8075C11.1507 18.8003 11.1804 18.7916 11.2101 18.7794C11.2151 18.7772 11.2193 18.7743 11.2243 18.7721C11.2399 18.7649 11.2561 18.7577 11.2717 18.7483C11.2774 18.7454 11.2816 18.7403 11.2866 18.7374C11.2993 18.7295 11.312 18.7208 11.3241 18.7114C11.3283 18.7078 11.3326 18.7042 11.3375 18.7006C11.3495 18.6905 11.3623 18.6811 11.3736 18.6702C11.3849 18.6594 11.3948 18.6478 11.4047 18.6363C11.4111 18.6291 11.4182 18.6218 11.4245 18.6139C11.4309 18.6059 11.4366 18.5973 11.4429 18.5893C11.4486 18.5806 11.4543 18.5727 11.4599 18.5633C11.4635 18.5575 11.4684 18.5517 11.472 18.5459C11.4918 18.5113 13.519 15.182 20.7731 15.8519L20.3818 17.3911Z"
                        fill="#0F6E32" />
                </svg>
                <span class="text-base font-bold">عرض جميع الدورات</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Images are now served from public folder

const defaultCourses = [
    {
        title: "أساسيات التربية والتعليم",
        description: "دورة شاملة تغطي أساسيات علم النفس التربوي وطرق التدريس الحديثة",
        level: "مبتدئ",
        duration: "40",
        students: "2,400",
        rating: 4.8,
        price: "100",
        image: "../assets/images/education-basics.png",
    },
    {
        title: "استراتيجيات التعلم النشط",
        description: "تعلم أحدث استراتيجيات التعلم النشط وتطبيقها في الفصول الدراسية",
        level: "متوسط",
        duration: "35",
        students: "1,800",
        rating: 4.7,
        price: "150",
        image: "../assets/images/education-basics2.png",
    },
    {
        title: "إدارة الصف الفعالة",
        description: "أساليب متقدمة لإدارة الصف وضبط السلوك وتحفيز الطلاب",
        level: "متقدم",
        duration: "30",
        students: "1,500",
        rating: 4.9,
        price: "200",
        image: "../assets/images/education-basics3.png",
    },
    {
        title: "التقويم التربوي المعاصر",
        description: "تعلم أحدث أساليب التقويم والقياس في العملية التعليمية",
        level: "متوسط",
        duration: "45",
        students: "2,100",
        rating: 4.6,
        price: "180",
        image: "../assets/images/education-basics.png",
    },
    {
        title: "تكنولوجيا التعليم",
        description: "دمج التكنولوجيا في التعليم واستخدام الأدوات الرقمية",
        level: "مبتدئ",
        duration: "50",
        students: "3,200",
        rating: 4.8,
        price: "120",
        image: "../assets/images/education-basics2.png",
    },
    {
        title: "التعلم الإلكتروني والتعليم عن بعد",
        description: "استراتيجيات وأدوات التعليم الإلكتروني والتعلم عن بعد",
        level: "متقدم",
        duration: "60",
        students: "2,800",
        rating: 4.9,
        price: "250",
        image: "../assets/images/education-basics3.png",
    },
    {
        title: "علم النفس التربوي",
        description: "فهم سلوك الطلاب وتطبيق مبادئ علم النفس في التعليم",
        level: "متوسط",
        duration: "55",
        students: "1,900",
        rating: 4.7,
        price: "190",
        image: "../assets/images/education-basics.png",
    },
    {
        title: "التخطيط التربوي الاستراتيجي",
        description: "تعلم كيفية وضع الخطط التربوية الفعالة وتطبيقها",
        level: "متقدم",
        duration: "48",
        students: "1,200",
        rating: 4.8,
        price: "220",
        image: "../assets/images/education-basics2.png",
    },
    {
        title: "البحث العلمي في التربية",
        description: "منهجيات البحث العلمي وتطبيقها في المجال التربوي",
        level: "متقدم",
        duration: "65",
        students: "950",
        rating: 4.6,
        price: "280",
        image: "../assets/images/education-basics3.png",
    },
    {
        title: "الإرشاد النفسي والتربوي",
        description: "تقنيات الإرشاد النفسي والتعامل مع المشكلات السلوكية",
        level: "متوسط",
        duration: "42",
        students: "1,650",
        rating: 4.7,
        price: "170",
        image: "../assets/images/education-basics.png",
    },
    {
        title: "تطوير المناهج التعليمية",
        description: "أسس تطوير المناهج وفقاً للمعايير التعليمية الحديثة",
        level: "متقدم",
        duration: "58",
        students: "1,100",
        rating: 4.9,
        price: "260",
        image: "../assets/images/education-basics2.png",
    },
    {
        title: "التعليم المتمايز",
        description: "استراتيجيات التعليم المتمايز لمراعاة الفروق الفردية",
        level: "متوسط",
        duration: "40",
        students: "2,200",
        rating: 4.8,
        price: "160",
        image: "../assets/images/education-basics3.png",
    }
];

const props = defineProps({
    courses: {
        type: Array,
        default: undefined,
    },
});

const courses = computed(() => (props.courses?.length ? props.courses : defaultCourses));
const isCoursesPage = computed(() => route.path === "/courses");

const selectedFilter = ref("الكل");
const levels = ["الكل", "مبتدئ", "متوسط", "متقدم"];

const filteredCourses = computed(() => {
    if (selectedFilter.value === "الكل") return courses.value;
    return courses.value.filter((c) => c.level === selectedFilter.value);
});

const displayedCourses = computed(() => {
    if (isCoursesPage.value) return filteredCourses.value;
    return courses.value.slice(0, 6);
});
</script>

<style>
[dir="rtl"] {
    direction: rtl;
}
</style>

