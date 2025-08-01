<template>
  <div class="container-width my-5 md:my-12">
    <!-- Heading -->
    <div class="w-full flex justify-between items-center gap-4 lg:gap-7 mb-2 lg:mb-6 text-center py-14">
      <div class="mr-1 lg:mr-20 flex-1 flex flex-col gap-4 lg:gap-8 items-end">
        <h1
          class="text-xl sm:text-2xl md:text-4xl xl:text-7xl font-bold leading-6 md:leading-normal lg:leading-loose text-start">
          كتاب "سهولة الإختبار العام" هو رفيقك لاجتياز الرخصة بثقة.
        </h1>
      </div>

      <div class="md:w-1/3 w-1/2 relative">
        <img src="../assets/images/lib1.png" width="100%" loading="lazy" alt="test page" />
        <img class="absolute top-1/4 md:top-[10%] left-1/2 md:left-[40%] w-6 sm:w-12" src="../assets/images/Star9.png"
          loading="lazy" alt="" />
        <img class="absolute top-0 md:top-[0%] left-[5%] md:left-[5%] w-6 sm:w-12" src="../assets/images/Star8.png"
          loading="lazy" alt="" />
      </div>
    </div>

    <!-- Book Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
      <div v-for="book in books" :key="book.id"
        class="border rounded-lg p-4 flex flex-col space-y-7 items-center text-center shadow-sm cursor-pointer hover:shadow-lg transition-shadow"
        @click="navigateToBook(book.id)">

        <div class="w-full flex flex-col items-start">
          <div class="flex justify-between items-center w-full mb-2">
            <h2 class="text-[17px] font-bold text-right">{{ book.title }}</h2>
            <span class="text-xs px-4 py-1 rounded-full font-medium whitespace-nowrap" :class="book.type === 'ورقي'
              ? 'text-[#0F6E32] bg-[#0F6E3224]'
              : 'text-[#A3835D] bg-[#FACC1521] '">
              {{ book.type }}
            </span>
          </div>
          <p class="text-gray-600 text-[13px] font-medium mb-2">{{ book.description }}</p>
        </div>


        <img :src="book.image" alt="" class="h-48 object-contain mb-4" />


        <div class="flex items-center gap-2 mb-3">
          <span class="text-[#FACC15] text-4xl font-bold">{{ book.newPrice }} ﷼</span>
          <span class="line-through text-gray-400 text-base font-normal">{{ book.oldPrice }} ﷼</span>
        </div>

        <div class="flex justify-center items-center gap-3 w-full">
          <button 
            @click.stop="purchaseBook(book.id)"
            class="bg-primary text-white p-2 text-sm font-bold rounded transition">
            احصل على نسختك الآن
          </button>
          <button 
            @click.stop="viewBookDetails(book.id)"
            class="bg-primary text-white p-2 text-sm font-bold rounded transition">
            تفاصيل الكتاب
          </button>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import lib1 from '~/assets/images/lib1.png'
const books = [
  {
    id: 1,
    title: "كتاب سهولة الإختبار العام",
    type: "الكتروني",
    description: "شروحات تسهل الفهم – كل ذلك في كتاب واحد.",
    oldPrice: 300,
    newPrice: 149,
    image: lib1,
  },
  {
    id: 2,
    title: "الاختبار العام للرخصة",
    type: "ورقي",
    description: "استراتيجيات متقدمة لإدارة الصف وتحفيز الطلاب.",
    oldPrice: 300,
    newPrice: 149,
    image: lib1,
  },
  {
    id: 3,
    title: "دليل المعلم الشامل",
    type: "الكتروني",
    description: "أساسيات وأساليب التعليم الحديثة.",
    oldPrice: 250,
    newPrice: 129,
    image: lib1,
  },
  {
    id: 4,
    title: "كتاب استراتيجيات التعليم",
    type: "ورقي",
    description: "خطط مبتكرة لتطوير مهارات الطلاب.",
    oldPrice: 200,
    newPrice: 99,
    image: lib1,
  },
];

const navigateToBook = (bookId: number) => {
  navigateTo(`/book/${bookId}`)
}

const purchaseBook = (bookId: number) => {
  // Handle purchase logic
  console.log(`Purchasing book ${bookId}`)
}

const viewBookDetails = (bookId: number) => {
  navigateTo(`/book/${bookId}`)
}
</script>
