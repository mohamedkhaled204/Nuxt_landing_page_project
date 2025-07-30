<template>
    <div class="w-full max-w-xl mx-auto flex flex-col items-center py-28 ">
        <!-- العنوان -->
        <div class="text-center mb-8">
            <h1 class="text-3xl md:text-5xl font-bold text-black mb-6">تواصل معنا</h1>
            <p class="text-lg md:text-xl text-gray-600">
                نسعد بالإجابة على استفساراتك ومساعدتك في رحلتك نحو الرخصة المهنية. فريقنا جاهز دائمًا لخدمتك.
            </p>
        </div>

        <!-- الحقول -->
        <div class="flex flex-col gap-12 w-full">
            <input type="text"
                class="bg-[#6666661A] text-[#666666] rounded-[18px] h-[53px] outline-none border-none px-6 text-end placeholder:text-base placeholder:text-[#66666652] placeholder:font-light"
                placeholder="Your full name" />

            <input type="email"
                class="bg-[#6666661A] text-[#666666] rounded-[18px] h-[53px] outline-none border-none px-6 text-end placeholder:text-base placeholder:text-[#66666652] placeholder:font-light"
                placeholder="Your email address" />

            <textarea rows="7"
                class="bg-[#6666661A] text-[#666666] rounded-[18px] outline-none border-none px-6 py-3 text-end placeholder:text-base placeholder:text-[#66666652] placeholder:font-light resize-none"
                placeholder="Write a note about your request"></textarea>
        </div>

        <!-- الزر -->
        <button class="bg-primary text-white w-full h-[53px] rounded-[18px] mt-9 hover:opacity-90 transition">
            Send
        </button>
    </div>
</template>
