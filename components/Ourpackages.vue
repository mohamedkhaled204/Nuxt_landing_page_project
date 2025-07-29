<template>
    <div class="container-width my-5 md:my-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-3/4 mx-auto">
            <PackageCard v-for="pkg in packages.slice(0, 3)" :key="pkg.id" :package-item="pkg" />
        </div>
    </div>
</template>

<script setup lang="ts">
import PackageCard from '~/components/PackageCard.vue'
import PackagesData from '~/components/PackagesData.json'
import Star10 from '~/assets/images/Star10.png'
import Crown from '~/assets/images/Crown.png'

const imageMap = {
  Star10,
  Crown
}

const packages = PackagesData.map(course => ({
  ...course,
  image: imageMap[course.image as keyof typeof imageMap]
}))

const staticConfig = {
    button_color: '#FACC15',
    main_color: '#0F6E32',
    badges: {
        best_seller: 'الأكثر طلبًا',
        default: 'موصى بها'
    },
    button_text: 'اختر هذه الباقة'
}
</script>
