<template>
    <div class="w-full max-w-xl mx-auto flex flex-col items-center py-28">
        <div class="w-full max-w-lg space-y-7 p-6">


            <!-- العنوان -->
            <h1 class="text-3xl md:text-4xl font-bold text-right text-black">تعيين كلمة مرور</h1>
            <p class="text-base text-gray-600">
                يرجى تعيين كلمة مرور جديدة لحسابك.
            </p>


            <!--أدخل الرمز -->
            <div class="relative mb-2">
                <label for="" class="absolute text-base -top-[40%] right-4 bg-white">أدخل الرمز</label>
                <input type="text" class="w-full border rounded-sm px-3 py-2 outline-none" />
            </div>
            <!-- أعد الإرسال -->
            <p class="text-right text-sm mt-0">
                هل لم يصلك الرمز؟
                <button class="text-red-500 cursor-pointer">أعد الإرسال</button>
            </p>


            <!-- زر تسجيل الدخول -->
            <button @click="$router.push('/set-password')"
                class="w-full bg-green-800 text-white py-2 rounded-sm mb-3 hover:bg-green-900">
                تأكيد
            </button>

        </div>
    </div>
</template>

