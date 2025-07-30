<template>
    <footer class="bg-primary text-white py-8">
        <div class="w-[90%] mx-auto py-9">


            <div class="flex flex-col md:flex-row  flex-wrap justify-between gap-12 md:gap-8 text-center md:text-right">

                <!-- About & Contact -->
                <div
                    class="space-y-6 flex flex-col items-center md:items-start flex-1 md:flex-[1_1_45%] lg:flex-[1_1_20%]">
                    <NuxtLink to="/" class="inline-block">
                        <img src="../assets/images/whiteLogo.png" loading="lazy" alt="Logo" />
                    </NuxtLink>
                    <p class="text-base font-semibold leading-relaxed w-3/4 text-center md:text-right">
                        منــصة شاملة للتحضير للحصول عـــلى الرخصة المهنية للتعليم في المملكة العربية السعودية،
                        بدورات معتمدة وامتحانات متطورة.
                    </p>
                    <ul class="space-y-2 text-base font-medium flex flex-col items-center md:items-start">
                        <li class="flex items-center gap-1">
                            <Icon name="heroicons-outline:phone" />
                            <span>920001234</span>
                        </li>
                        <li class="flex items-center gap-1">
                            <Icon name="heroicons-outline:envelope" />
                            <span>info@licenses.edu.sa</span>
                        </li>
                        <li class="flex items-center gap-1">
                            <Icon name="heroicons:map-pin" />
                            <span>الرياض، المملكة العربية السعودية</span>
                        </li>
                    </ul>
                </div>

                <!-- Help -->
                <div class="flex flex-col items-center md:items-start flex-1 md:flex-[1_1_45%] lg:flex-[1_1_20%]">
                    <p class="text-xl font-bold mb-6">المساعدة</p>
                    <ul class="space-y-5 text-base font-normal">
                        <li>
                            <NuxtLink to="/contact">تواصل معنا</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/privacy">سياسة الخصوصية</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/terms">الشروط والاحكام</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Main Links -->
                <div class="flex flex-col items-center md:items-start flex-1 md:flex-[1_1_45%] lg:flex-[1_1_20%]">
                    <p class="text-xl font-bold mb-6">الروابط الرئيسية</p>
                    <ul class="space-y-5 text-base font-normal">
                        <li>
                            <NuxtLink to="/">الصفحة الرئيسية</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/courses">الدورات</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/tests">الاختبارات</NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Apps Section -->
                <div class="flex flex-col items-center md:items-start flex-1 md:flex-[1_1_45%] lg:flex-[1_1_15%]">
                    <p class="text-xl font-bold mb-4">التطبيقات</p>
                    <div class="flex flex-col items-center md:items-start gap-3">
                        <img src="../assets/images/app-store.png" class="w-[141px]" loading="lazy" alt="App Store" />
                        <img src="../assets/images/play-store.png" class="w-[141px]" loading="lazy" alt="Play Store" />
                    </div>
                </div>

            </div>

            <div class="flex flex-col md:flex-row justify-between items-center mt-12">
                <h4 class="text-base font-normal">© 2025 سهولة. جميع الحقوق محفوظة.</h4>

                <div class="flex gap-2 items-center">
                    <img src="../assets/images/knet.png" loading="lazy" alt="knet">
                    <img src="../assets/images/mada_grey.png" loading="lazy" alt="mada_grey">
                    <img src="../assets/images/visa.png" loading="lazy" alt="visa">
                    <img src="../assets/images/mastercard.png" loading="lazy" alt="mastercard">
                </div>

                <div class="flex flex-col items-start gap-4">
                    <p>تابعنا</p>
                    <div class="flex gap-4 justify-center">
                        <NuxtLink to="https://facebook.com" target="_self">
                            <Icon name="fa6-brands:facebook" size="24" />
                        </NuxtLink>
                        <NuxtLink to="https://youtube.com" target="_self">
                            <Icon name="fa6-brands:youtube" size="24" />
                        </NuxtLink>
                        <NuxtLink to="https://linkedin.com" target="_self">
                            <Icon name="fa6-brands:linkedin" size="24" />
                        </NuxtLink>
                        <NuxtLink to="https://snapchat.com" target="_self">
                            <Icon name="fa6-brands:snapchat" size="24" />
                        </NuxtLink>
                        <NuxtLink to="https://twitter.com" target="_self">
                            <Icon name="fa6-brands:x-twitter" size="24" />
                        </NuxtLink>
                        <NuxtLink to="https://telegram.org" target="_self">
                            <Icon name="fa6-brands:telegram" size="24" />
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
