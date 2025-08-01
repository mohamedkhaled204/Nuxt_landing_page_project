<template>
    <div class="w-full max-w-xl mx-auto flex flex-col items-center py-28">
        <div class="w-full max-w-lg space-y-7 p-6">

            <NuxtLink to="/register" class="text-center text-sm flex justify-end items-center gap-2">
                العودة إلى تسجيل الدخول
                <Icon name="heroicons:arrow-left" class="w-4 h-4" />
            </NuxtLink>

            <!-- العنوان -->
            <h1 class="text-3xl md:text-4xl font-bold text-right text-black">تأكيد الرمز</h1>
            <p class="text-base text-gray-600">
                تم إرسال رمز التحقق إلى رقم هاتفك.
            </p>

            
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

            <!-- زر تسجيل الدخول -->
            <button @click="$router.push('/')" class="w-full bg-green-800 text-white py-2 rounded-sm mb-3 hover:bg-green-900">
                تعيين كلمة المرور
            </button>

        </div>
    </div>
</template>
