<script setup lang="ts">
import OurCourses from "~~/components/OurCourses.vue";

definePageMeta({
  title: "الدورات",
});


const allCourses = [
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


function definePageMeta(arg0: { title: string; }) {
  throw new Error("Function not implemented.");
}
</script>

<template>
  <div>
    <div class="container-width h-[60vh] relative">
      <div class="flex flex-col justify-center space-y-6 items-center h-full w-1/2 mx-auto text-center">
        <h1 class="font-bold text-3xl md:text-[60px] leading-tight mb-7">طـــوّر مهاراتك مع تدريب مُقدَّم من خبراء
          محترفين</h1>
        <div class="flex items-center gap-2 md:gap-4">
          <div>
            <div class="flex flex-row-reverse mb-2">
              <svg v-for="star in 5" :key="star" :class="star <= Math.floor(4.5) ? 'text-yellow-400' : 'text-gray-300'"
                class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="text-sm md:text-base">من 2.5 الف تقييم</span>
          </div>
          <div class="flex items-center">
            <img src="../assets/images/person1.jpg" class="w-10 md:w-16 h-10 md:h-16 aspect-square rounded-full" loading="lazy" alt="person">
            <img src="../assets/images/person2.jpg" class="w-10 md:w-16 h-10 md:h-16 aspect-square rounded-full" loading="lazy" alt="person">
            <img src="../assets/images/person3.jpg" class="w-10 md:w-16 h-10 md:h-16 aspect-square rounded-full" loading="lazy" alt="person">
          </div>

        </div>

        <button class="px-3 md:px-8 py-2 md:py-3 rounded-full border text-sm md:text-xl font-medium bg-primary text-white">
          ابدأ رحلتك لسهولة الأن
        </button>
      </div>
      <img src="../assets/images/person1.jpg" loading="lazy" class="w-14 md:w-20 h-14 md:h-20 rounded-full aspect-square absolute top-1/4 left-[8%] md:left-[15%]" alt="person">
      <img src="../assets/images/person2.jpg" loading="lazy" class="w-14 md:w-20 h-14 md:h-20 rounded-full aspect-square absolute top-3/4 left-[10%] md:left-[20%]" alt="person">
      <img src="../assets/images/person3.jpg" loading="lazy" class="w-14 md:w-20 h-14 md:h-20 rounded-full aspect-square absolute top-1/4 right-[8%] md:right-[15%]" alt="person">
      <img src="../assets/images/person4.jpg" loading="lazy" class="w-14 md:w-20 h-14 md:h-20 rounded-full aspect-square absolute top-3/4 right-[10%] md:right-[20%]" alt="person">
      <img src="../assets/images/Star8.png" loading="lazy" class="w-10 h-10 aspect-square absolute top-1/2 left-[20%]" alt="person">
      <img src="../assets/images/Star9.png" loading="lazy" class="w-10 h-10 aspect-square absolute top-[60%] right-[15%]" alt="person">


    </div>
    <OurCourses :courses="allCourses" />
  </div>
</template>


