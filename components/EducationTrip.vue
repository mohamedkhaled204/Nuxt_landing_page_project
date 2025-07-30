<template>
    <div>
        <div class="w-full md:w-1/2 mx-auto flex flex-col gap-4 md:gap-7 lg:gap-10 mb-2 md:mb-6 text-center">
            <h1 class="font-extrabold text-4xl md:text-[53px]">الرحلة التعليمية</h1>
            <p class="text-base md:text-xl leading-9 font-medium text-[#666666]">
                تم تصميم المحتوى على شكل راحة تعليمية كاملة مكونة من ست محطات رئيسية:
            </p>
        </div>

        <div class="w-[95%] gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto space-y-8">
            <div v-for="(item, index) in items" :key="index" class="flex flex-col items-center gap-2">
                <!-- Odd index: Image first, then content -->
                <template v-if="index % 2 === 0">
                    <div
                        class="flex justify-center items-center w-36 aspect-square rounded-full border-8 bg-[#eceef3] border-primary">
                        <img :src="item.image" :alt="item.mainTitle" class="object-contain w-10 h-10" />
                    </div>
                    <div class="w-[3px] h-20 bg-[#808080] relative flex items-center justify-center">
                        <div class="w-3 h-3 bg-[#808080] rounded-full absolute bottom-0"></div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-bold text-lg md:text-2xl text-[#FACC15] mb-4">
                            {{ item.mainTitle }}
                        </h3>
                        <ul class="list-disc space-y-2 text-right">
                            <li class="text-sm font-medium text-[#3D3D3D]" v-for="(listItem, listIndex) in item.list" :key="listIndex">
                                {{ listItem }}
                            </li>
                        </ul>
                    </div>
                </template>

                <!-- Even index: Content first, then image -->
                <template v-else>
                    <div class="text-center">
                        <h3 class="font-bold text-lg md:text-2xl text-[#FACC15] mb-4">
                            {{ item.mainTitle }}
                        </h3>
                        <ul class="list-disc space-y-2 text-right">
                            <li class="text-sm font-medium text-[#3D3D3D]" v-for="(listItem, listIndex) in item.list" :key="listIndex">
                                {{ listItem }}
                            </li>
                        </ul>
                    </div>
                    <div class="w-[3px] h-20 bg-[#808080] relative flex items-center justify-center">
                        <div class="w-3 h-3 bg-[#808080] rounded-full absolute top-0"></div>
                    </div>
                    <div
                        class="flex justify-center items-center w-36 aspect-square rounded-full border-8 bg-[#eceef3] border-primary">
                        <img :src="item.image" :alt="item.mainTitle" class="object-contain w-10 h-10" />
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import educationbook from "@/assets/images/educationbook.png";
import questionsbank from "@/assets/images/questionsbank.png";
import teacher_17 from "@/assets/images/teacher_17.png";
import send from "@/assets/images/send.png";
import exam from "@/assets/images/exam.png";
import collaboration from "@/assets/images/collaboration.png";

const props = defineProps({
    items: {
        type: Array,
        default: () => [
            {
                image: educationbook,
                mainTitle: "الكتاب المعتمد",
                list: [
                    "كتاب تدريبي معتمد من مكتبة الملك فهد الوطنية",
                    "شامل لجميع محاور الاختبار",
                    "خالي من الحشو، مركز على الفهم والتطبيق",
                ],
            },
            {
                image: questionsbank,
                mainTitle: "بنك الأسئلة الحصرية",
                list: [
                    "يحتوي عــلى 1000+ سؤال مجاب بأدق أسلوب للأسئلة",
                    "مـــــــلف خـــــاص للمشــــــــــتركين فقط",
                    "يغنيك عــــــــــــن النت وكـــــــــثرة المصــــــادر",
                ],
            },
            {
                image: teacher_17,
                mainTitle: "محاضرات مباشرة ومسجلة",
                list: [
                    "محـــــــــاضرات تعلـــــــــيمية مركـــــــــزة",
                    "تشــــــــرح محاور الاختبار بتفصيل وتتاح لك في أي وقت",
                    "تغطــــــــــي الجوانب الكتـــــابية واللفظية والكمية",
                ],
            },
            {
                image: send,
                mainTitle: "قناة التدريب والمراجعة",
                list: [
                    "شــــــــرح مســــــــــــتمر ومكثف من قبل المصادر",
                    "تمــــــــــارين يــــــــــومية طـــــــوال الأســـــبوع",
                    "تواصـــــــــــــــــل مباشــــــــــــــر وســــــريع",
                ],
            },
            {
                image: exam,
                mainTitle: "اختبار أسبوعي محاكي",
                list: [
                    "يســـــــــــــاعدك عـــــلى قياس تقـــــــدمك",
                    "اختبــــار ات شـــــــاملة لكل المواضيـــــع المهمة",
                    "يعــــزز ثقتـــــــــــك قبـــــــل يـــــــوم الاختبار",
                ],
            },
            {
                image: collaboration,
                mainTitle: "الدعم الكامل للمتدرب",
                list: [
                    "طـرح أي ســــتؤال أو فكــــرة غير مفهومة",
                    "تلقـــــــــي ملاحظات مباشــــــــرة من المـــدرب",
                    "دعم مســــــــــتمر حــــــى يـــــوم الاختبار",
                ],
            },
        ],
    },
});
</script>

<style scoped>
ul {
    list-style-type: square;
}
</style>
