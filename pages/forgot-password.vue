<template>
    <div class="w-full max-w-xl mx-auto flex flex-col items-center py-28">
        <div class="w-full max-w-lg space-y-7 p-6">

            <NuxtLink to="/register" class="text-center text-sm flex justify-end items-center gap-2">
                العودة إلى تسجيل الدخول
                <Icon name="heroicons:arrow-left" class="w-4 h-4" />
            </NuxtLink>

            <!-- العنوان -->
            <h1 class="text-3xl md:text-4xl font-bold text-right text-black">هل نسيت كلمة المرور؟</h1>
            <p class="text-base text-gray-600">
                لا تقلق، يحدث ذلك معنا جميعًا. أدخل رقم هاتفك أدناه لاستعادة كلمة المرور.
            </p>

            <!-- حقل رقم الجوال -->
            <div class="relative flex">
                <vue-tel-input v-model="phoneNumber" :preferred-countries="['sa', 'ae', 'eg']" :default-country="'sa'"
                    :input-options="{
                        class: 'w-full rounded-sm border outline-none text-right'
                    }" mode="international" class="w-full flex flex-row-reverse px-3 rounded-sm py-1" />
                <label for="" class="absolute text-base -top-[40%] right-4 bg-white z-10">رقم الجوال</label>
            </div>

            <!-- زر تسجيل الدخول -->
            <button @click="$router.push('/confirm-code')" class="w-full bg-green-800 text-white py-2 rounded-sm mb-3 hover:bg-green-900">
                إرسال
            </button>

        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

const phoneNumber = ref('')
</script>
