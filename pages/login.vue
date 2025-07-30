<template>
    <div class="w-full max-w-xl mx-auto flex flex-col items-center py-28">
        <div class="w-full max-w-md p-6">
            <!-- العنوان -->
            <h1 class="text-2xl font-bold text-center mb-1">تسجيل الدخول</h1>
            <p class="text-sm text-gray-600 text-center mb-6">
                مرحباً بك مرة أخرى، يرجى تسجيل الدخول إلى حسابك
            </p>

            <!-- حقل رقم الجوال أو البريد الإلكتروني -->
            <div class="mb-4">
                <input type="text" placeholder="رقم الجوال أو البريد الإلكتروني"
                    class="w-full border rounded-lg px-3 py-2 text-end outline-none" />
            </div>

            <!-- كلمة المرور -->
            <div class="relative mb-4">
                <input type="password" placeholder="كلمة المرور"
                    class="w-full border rounded-lg px-3 py-2 text-end outline-none pr-10" />
                <Icon name="heroicons:eye-slash" class="absolute left-3 top-2.5 text-gray-500 cursor-pointer" />
            </div>

            <!-- نسيان كلمة المرور -->
            <div class="text-left mb-6">
                <NuxtLink to="/forgot-password" class="text-sm text-red-500 cursor-pointer">نسيت كلمة المرور؟</NuxtLink>
            </div>

            <!-- زر تسجيل الدخول -->
            <button class="w-full bg-green-800 text-white py-2 rounded-lg mb-3 hover:bg-green-900">
                تسجيل الدخول
            </button>

            <!-- إنشاء حساب جديد -->
            <p class="text-center text-sm">
                ليس لديك حساب؟
                <NuxtLink to="/register" class="text-red-500 cursor-pointer">إنشاء حساب جديد</NuxtLink>
            </p>
        </div>
    </div>
</template>