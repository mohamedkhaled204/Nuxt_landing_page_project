<template>
    <div class="w-[95%] md:w-2/3 mx-auto my-8 md:my-16">
        <h1 class="font-bold text-4xl md:text-[53px] text-center mb-6 md:mb-14">باقاتنا المميزة</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div v-for="(packageItem, index) in packages" :key="index"
                class="rounded-3xl py-8 px-4 text-center shadow-lg relative" :class="packageItem.bgColor">
                <!-- Package Title -->
                <h3 class="text-xl font-bold mb-4"
                    :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">
                    {{ packageItem.title }}
                </h3>

                <!-- Package Subtitle -->
                <div class="text-sm mb-6 opacity-90"
                    :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">
                    <p class="text-2xl font-semibold mb-1"
                        :class="index === packages.length - 1 ? 'text-[#FACC15]' : 'text-[#FACC15]'">
                        رخصة معلم ممارس
                    </p>
                    <span class="text-base font-medium">للمعلمين الجدد والخـــريجين الــحديثين</span>
                </div>

                <!-- Price -->
                <div class="pb-4 border-b" :class="index === packages.length - 1 ? 'border-[#0F6E32]' : 'border-white'">
                    <span class="text-xs"
                        :class="index === packages.length - 1 ? 'text-[#FACC15]' : 'text-white'">ريال</span>
                    <span class="text-4xl md:text-5xl font-bold mx-1"
                        :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">{{ packageItem.price
                        }}</span>
                    <span class="text-sm" :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">/
                        mo</span>
                </div>

                <!-- Package Info -->
                <div class="rounded-2xl p-4 my-4 space-y-6">
                    <div class="mb-4">
                        <h4 class="text-right text-lg font-bold mb-2"
                            :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">{{
                            packageItem.infoTitle }}</h4>
                        <p class="text-right text-base font-bold"
                            :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">{{
                            packageItem.infoSubtitle }}</p>
                    </div>
                    <!-- Duration -->
                    <div class="flex justify-between items-center ">
                        <span class="text-base font-bold"
                            :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">{{
                            packageItem.validity }}</span>
                        <span class="text-base"
                            :class="index === packages.length - 1 ? 'text-[#FACC15]' : 'text-[#FACC15]'">{{
                            packageItem.duration }}</span>
                    </div>

                    
                    <!-- Features -->
                    <div class="space-y-2">
                        <p class="text-right text-sm"
                            :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">{{
                            packageItem.accessInfo }}
                        </p>
                        <div v-for="(feature, featureIndex) in packageItem.features" :key="featureIndex"
                            class="flex items-center justify-start gap-2 text-base"
                            :class="index === packages.length - 1 ? 'text-[#0F6E32]' : 'text-white'">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                fill="none">
                                <path
                                    d="M8.66337 0.228516C3.9096 0.228516 0.0559082 4.08221 0.0559082 8.83597C0.0559082 13.5897 3.9096 17.4434 8.66337 17.4434C13.4171 17.4434 17.2708 13.5897 17.2708 8.83597C17.2653 4.0845 13.4148 0.234049 8.66337 0.228516Z"
                                    fill="#FACC15" />
                                <path
                                    d="M13.6318 6.10949L8.72194 12.7724C8.60485 12.9277 8.43024 13.0295 8.23736 13.0549C8.04448 13.0802 7.84949 13.027 7.69622 12.9072L4.19012 10.1041C3.88073 9.85647 3.83063 9.40495 4.07822 9.09556C4.32581 8.78617 4.77734 8.73607 5.08673 8.98366L8.0104 11.3227L12.4769 5.26093C12.6234 5.04115 12.8788 4.91964 13.1417 4.94464C13.4047 4.96964 13.6326 5.13711 13.735 5.38056C13.8374 5.62401 13.7978 5.90404 13.6318 6.10949Z"
                                    fill="white" />
                            </svg>
                            <span>{{ feature.name }}</span>
                        </div>
                    </div>
                </div>

                <!-- CTA Button -->
                <button class="w-full py-2 px-6 rounded-3xl font-bold text-lg transition-all hover:scale-105"
                    :class="packageItem.buttonClass">
                    {{ packageItem.buttonText }}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Feature {
    name: string;
    included: boolean;
}

interface Package {
    title: string;
    subtitle: string;
    price: string;
    infoTitle: string;
    infoSubtitle: string;
    duration: string;
    validity: string;
    accessInfo: string;
    features: Feature[];
    bgColor: string;
    buttonText: string;
    buttonClass: string;
}

// Props to make component dynamic
const props = withDefaults(defineProps<{
    packages?: Package[];
}>(), {
    packages: () => [
        {
            title: "متقدم",
            subtitle: "خطة معلم مبارس للمعلمين الخبراء والخريجين",
            price: "149",
            infoTitle: "خطة معلم مبارس",
            infoSubtitle: "للمعلمين الخبراء والخريجين",
            duration: "5 سنوات",
            validity: "صالحة لمدة",
            accessInfo: "المتطلبـــات:",
            features: [
                { name: "اختبار الاختبار العام", included: true },
                { name: "اختبار الاختبار التخصصي", included: true }
            ],
            bgColor: "bg-[#0F6E32]",
            buttonText: "التقدم للحصول على الرخصة",
            buttonClass: "bg-yellow-400 text-primary hover:bg-yellow-500"
        },
        {
            title: "متقدم",
            subtitle: "خطة معلم مبارس للمعلمين الحاصلين على درجة الاختبار",
            price: "149",
            infoTitle: "خطة معلم مبارس",
            infoSubtitle: "للمعلمين الحاصلين على درجة الاختبار",
            duration: "5 سنوات",
            validity: "صالحة لمدة",
            accessInfo: "المتطلبـــات:",
            features: [
                { name: "اختبار الاختبار العام", included: true },
                { name: "اختبار الاختبار التخصصي", included: true }
            ],
            bgColor: "bg-[#2FBC63]",
            buttonText: "التقدم للحصول على الرخصة",
            buttonClass: "bg-yellow-400 text-primary hover:bg-yellow-500"
        },
        {
            title: "متقدم",
            subtitle: "لخطة معلم مبتدئ متميز للمعلمين الجدد والخريجين",
            price: "149",
            infoTitle: "خطة معلم مبارس",
            infoSubtitle: "للمعلمين الجدد والخريجين الحديثين",
            duration: "شهرين",
            validity: "صالحة لمدة",
            accessInfo: "المتطلبـــات:",
            features: [
                { name: "اختبار الاختبار العام", included: true },
                { name: "اختبار الاختبار التخصصي", included: true }
            ],
            bgColor: "bg-[#C3FFD9]",
            buttonText: "التقدم للحصول على الرخصة",
            buttonClass: "bg-yellow-400 text-primary hover:bg-yellow-500"
        },
    ]
});

const { packages } = toRefs(props);
</script>