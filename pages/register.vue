<template>
    <div class="w-full w-xl mx-auto flex flex-col items-center py-28 ">
        <div class="w-full max-w-lg space-y-7 p-6">
            <!-- العنوان -->
            <h1 class="text-3xl lg:text-5xl md:text-4xl font-bold text-right text-black">إنشاء حساب</h1>
            <p class="text-base md:text-lg text-gray-600">
                دعنا نعرفك لنتمكن من الوصول إلى حسابك الشخصي
            </p>

            <!-- حقل رقم الجوال -->
            <div class="relative flex">
                <vue-tel-input 
                    v-model="phoneNumber"
                    :preferred-countries="['sa', 'ae', 'eg']"
                    :default-country="'sa'"
                    :input-options="{
                        class: 'w-full rounded-sm border outline-none text-right'
                    }"
                    mode="international"
                    class="w-full flex flex-row-reverse px-3 rounded-sm py-1"
                />
                <label for="" class="absolute text-base -top-[40%] right-4 bg-white z-10">رقم الجوال</label>
            </div>

            <!-- الاسم الأول والاسم الثاني -->
            <div class="flex justify-between gap-2 w-full mb-4">
                <div class="relative w-1/2">
                    <label for="" class="absolute text-base -top-[40%] right-4 bg-white">اسمك الأول</label>
                    <input type="text" placeholder="....................." class="w-full border rounded-sm px-3 py-2 outline-none" />
                </div>
                <div class="relative w-1/2">
                    <label for="" class="absolute text-base -top-[40%] right-4 bg-white">اسمك الثاني</label>
                    <input type="text" placeholder="....................." class="w-full border rounded-sm px-3 py-2 outline-none" />
                </div>
            </div>

            <!-- كلمة المرور -->
            <div class="relative mb-4">
                <label for="" class="absolute text-base -top-[40%] right-4 bg-white">كلمة المرور</label>
                <input type="password"
                    class="w-full border rounded-sm px-3 py-2 outline-none" />
                <Icon name="heroicons:eye-slash" class="absolute left-3 top-2.5 text-gray-500 cursor-pointer" />
            </div>

            <!-- تأكيد كلمة المرور -->
            <div class="relative mb-4">
                <label for="" class="absolute text-base -top-[40%] right-4 bg-white">تأكيد كلمة المرور</label>
                <input type="password" 
                    class="w-full border rounded-sm px-3 py-2 outline-none" />
                <Icon name="heroicons:eye-slash" class="absolute left-3 top-2.5 text-gray-500 cursor-pointer" />
            </div>

            <!-- الشروط والأحكام -->
            <div class="flex items-center mb-4">
                <input type="checkbox" required class="ml-2 cursor-pointer" />
                <p class="text-base text-gray-700">
                    أوافق على جميع
                    <span class="text-red-500 cursor-pointer">الشروط</span>
                    و
                    <span class="text-red-500 cursor-pointer">سياسات الخصوصية</span>
                </p>
            </div>

            <!-- زر إنشاء -->
            <button class="w-full bg-green-800 text-white py-2 rounded-sm mb-3 hover:bg-green-900">
                إنشاء
            </button>

            <!-- تسجيل الدخول -->
            <p class="text-center text-base">
                هل لديك حساب بالفعل؟
                <NuxtLink to="/login" class="text-red-500 cursor-pointer">تسجيل دخول</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

const phoneNumber = ref('')
</script>

<style>
/* Custom styles for vue3-tel-input to match your design */
.vue-tel-input {
    border: 1px solid #d1d5db;
    border-radius: 0.125rem;
}

.vue-tel-input:focus-within {
    border-color: #059669;
    box-shadow: none;
}

.vue-tel-input .vti__dropdown {
    background: white;
    border: none;
}

.vue-tel-input .vti__selection {
    font-size: 1rem;
}

.vue-tel-input .vti__input {
    background: transparent;
    color: #111827;
    font-size: 1rem;
}

.vue-tel-input .vti__input::placeholder {
    color: #9ca3af;
}
</style>
