<template>
    <div class="w-full max-w-xl mx-auto flex flex-col items-center py-28">
        <div class="w-full max-w-lg space-y-7 p-6">

            <NuxtLink to="/register" class="text-center text-sm flex justify-end items-center gap-2">
                العودة إلى تسجيل الدخول
                <Icon name="heroicons:arrow-left" class="w-4 h-4" />
            </NuxtLink>

            <!-- العنوان -->
            <h1 class="text-3xl md:text-4xl font-bold text-right text-black">تعيين كلمة مرور</h1>
            <p class="text-base text-gray-600">
                يرجى تعيين كلمة مرور جديدة لحسابك.
            </p>


            <!-- كلمة المرور -->
            <div class="relative mb-4">
                <label for="" class="absolute text-base -top-[40%] right-4 bg-white">كلمة المرور</label>
                <input type="password" class="w-full border rounded-sm px-3 py-2 outline-none" />
                <Icon name="heroicons:eye-slash" class="absolute left-3 top-2.5 text-gray-500 cursor-pointer" />
            </div>

            <!-- تأكيد كلمة المرور -->
            <div class="relative mb-4">
                <label for="" class="absolute text-base -top-[40%] right-4 bg-white">تأكيد كلمة المرور</label>
                <input type="password" class="w-full border rounded-sm px-3 py-2 outline-none" />
                <Icon name="heroicons:eye-slash" class="absolute left-3 top-2.5 text-gray-500 cursor-pointer" />
            </div>

            <!-- زر تسجيل الدخول -->
            <button @click="showPopup = true"
                class="w-full bg-green-800 text-white py-2 rounded-sm mb-3 hover:bg-green-900">
                تعيين كلمة المرور
            </button>

        </div>
    </div>

    <!-- Popup Modal -->
    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div
            class="bg-white rounded-lg p-8 max-w-md w-full mx-4 text-center flex flex-col justify-center items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="59" viewBox="0 0 60 59" fill="none">
                <path
                    d="M27.5345 58.6C42.2732 58.6 54.2213 46.6519 54.2213 31.9132C54.2213 17.1744 42.2732 5.22635 27.5345 5.22635C12.7957 5.22635 0.847656 17.1744 0.847656 31.9132C0.847656 46.6519 12.7957 58.6 27.5345 58.6Z"
                    fill="#B0EF8F" />
                <path
                    d="M22.2854 50.8066L1.95312 28.8646L7.66664 19.5423L22.1911 31.2133L48.3645 0.0402222L59.1519 11.4751L22.2854 50.8066Z"
                    fill="#009045" />
            </svg>
            <h3 class="text-xl font-bold text-gray-900">تم تعيين كلمة المرور بنجاح</h3>
            <p class="text-gray-600">يمكنك الآن تسجيل الدخول والاستمتاع بالخدمة.</p>
            <button @click="$router.push('/login')"
                class="bg-green-800 text-white py-2 w-32 rounded-sm hover:bg-green-900">
                تسجيل الدخول
            </button>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const showPopup = ref(false)

const handleContinue = () => {
    showPopup.value = false
    navigateTo('/')
}
</script>
