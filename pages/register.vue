<template>
    <div class="w-full w-xl mx-auto flex flex-col items-center py-28 ">
        <div class="w-full max-w-md p-6">
            <!-- العنوان -->
            <h1 class="text-2xl font-bold text-center mb-1">إنشاء حساب</h1>
            <p class="text-sm text-gray-600 text-center mb-6">
                دعنا نعرفك لنتمكن من الوصول إلى حسابك الشخصي
            </p>

            <!-- حقل رقم الجوال -->
            <div class="flex mb-4">
                <input type="text" placeholder="رقم الجوال"
                    class="flex-1 border border-l-0 rounded-r-lg px-3 py-2 text-end outline-none" />
                <select class="border rounded-l-lg px-2 bg-gray-100 text-sm outline-none">
                    <option>+966</option>
                </select>
            </div>

            <!-- الاسم الأول والاسم الثاني -->
            <div class="flex gap-2 mb-4">
                <input type="text" placeholder="اسمك الأول"
                    class="flex-1 border rounded-lg px-3 py-2 text-end outline-none" />
                <input type="text" placeholder="اسمك الثاني"
                    class="flex-1 border rounded-lg px-3 py-2 text-end outline-none" />
            </div>

            <!-- كلمة المرور -->
            <div class="relative mb-4">
                <input type="password" placeholder="كلمة المرور"
                    class="w-full border rounded-lg px-3 py-2 text-end outline-none pr-10" />
                <Icon name="heroicons:eye-slash" class="absolute left-3 top-2.5 text-gray-500 cursor-pointer" />
            </div>

            <!-- تأكيد كلمة المرور -->
            <div class="relative mb-4">
                <input type="password" placeholder="تأكيد كلمة المرور"
                    class="w-full border rounded-lg px-3 py-2 text-end outline-none pr-10" />
                <Icon name="heroicons:eye-slash" class="absolute left-3 top-2.5 text-gray-500 cursor-pointer" />
            </div>

            <!-- الشروط والأحكام -->
            <div class="flex items-center mb-4">
                <input type="checkbox" class="ml-2" />
                <p class="text-sm text-gray-700">
                    أوافق على جميع
                    <span class="text-red-500 cursor-pointer">الشروط</span>
                    و
                    <span class="text-red-500 cursor-pointer">سياسات الخصوصية</span>
                </p>
            </div>

            <!-- زر إنشاء -->
            <button class="w-full bg-green-800 text-white py-2 rounded-lg mb-3 hover:bg-green-900">
                إنشاء
            </button>

            <!-- تسجيل الدخول -->
            <p class="text-center text-sm">
                هل لديك حساب بالفعل؟
                <NuxtLink to="/login" class="text-red-500 cursor-pointer">تسجيل دخول</NuxtLink>
            </p>
        </div>
    </div>
</template>
