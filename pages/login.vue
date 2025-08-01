<template>
    <div class="w-full max-w-xl mx-auto flex flex-col items-center py-28">
        <div class="w-full max-w-lg space-y-7 p-6">
            <!-- العنوان -->
            <h1 class="text-3xl lg:text-5xl md:text-4xl font-bold text-right text-black">تسجيل دخول</h1>
            <p class="text-base md:text-lg text-gray-600">
                سجّل الدخول إلى حسابك في سهولة
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

            <!-- كلمة المرور -->
            <div class="relative mb-4">
                <label for="" class="absolute text-base -top-[40%] right-4 bg-white">كلمة المرور</label>
                <input type="password" class="w-full border rounded-sm px-3 py-2 outline-none" />
                <Icon name="heroicons:eye-slash" class="absolute left-3 top-2.5 text-gray-500 cursor-pointer" />
            </div>

            <!-- نسيان كلمة المرور -->
            <div class="text-left mb-4 flex text-base font-medium justify-between items-center">
                <div class="flex gap-2">
                    <input type="checkbox" required class="cursor-pointer" />
                    <p class=" text-gray-700">
                        تذكرني
                    </p>
                </div>
                <NuxtLink to="/forgot-password" class="text-base text-red-500 cursor-pointer">نسيت كلمة المرور؟</NuxtLink>
            </div>

            <!-- زر تسجيل الدخول -->
            <button class="w-full bg-green-800 text-white py-2 rounded-lg mb-3 hover:bg-green-900">
                تسجيل الدخول
            </button>

            <!-- إنشاء حساب جديد -->
            <p class="text-center text-base font-bold">
                هل أنت جديد على منصتنا؟
                <NuxtLink to="/register" class="text-red-500 cursor-pointer">إنشاء حساب</NuxtLink>
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
