<template>
  <header class="bg-white shadow-sm sticky top-0 z-50 py-2">
    <div class="container-width mx-auto py-3">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center space-x-2 md:space-x-4">
          <img src="../assets/images/سهولة الاختبرا الشعار 2.png" loading="lazy" alt="Logo" />
        </NuxtLink>

        <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Desktop nav -->
        <nav class="hidden md:flex flex-row-reverse space-x-6">
          <NuxtLink
            v-for="link in links"
            :key="link.id"
            :to="link.path"
            :class="[
              'text-lg cursor-pointer font-medium',
              $route.path === link.path ? 'text-primary' : 'text-[#0D0D0D]',
            ]"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Buttons -->
        <div class="items-center gap-3 hidden md:flex">
          <NuxtLink to="/register" class="bg-primary h-[36px] w-[126px] rounded-sm text-white text-sm font-bold flex items-center justify-center">
            إنشاء حساب
          </NuxtLink>
          <NuxtLink to="/login" class="flex items-center justify-center h-[36px] w-[126px] gap-2 bg-[#f4f5f9] text-center border rounded-sm text-sm font-bold">
            تسجيل دخول
          </NuxtLink>
        </div>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isOpen" class="md:hidden mt-2 py-2 space-y-2">
          <div class="flex flex-col-reverse items-center gap-2">
            <NuxtLink
              v-for="link in links"
              :key="link.id"
              :to="link.path"
              @click="isOpen = false"
              :class="[
                'text-lg cursor-pointer font-medium',
                $route.path === link.path ? 'text-primary' : 'text-[#0D0D0D]',
              ]"
            >
              {{ link.label }}
            </NuxtLink>
          </div>

          <div class="mt-4 flex flex-col gap-2 px-3">
            <NuxtLink to="/register" @click="isOpen = false" class="bg-primary rounded-sm py-2 px-7 text-white text-sm font-bold text-center">
              إنشاء حساب
            </NuxtLink>
            <NuxtLink to="/login" @click="isOpen = false"
              class="flex items-center justify-center gap-2 bg-[#f4f5f9] border rounded-sm py-[7px] px-3 text-sm font-bold"
            >
              تسجيل دخول
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const links = [
  { id: "library", label: "مكتبة سهولة", path: "/library" },
  { id: "about", label: "من نحن", path: "/about" },
  { id: "packages", label: "الباقات", path: "/packages" },
  { id: "tests", label: "الاختبارات", path: "/tests" },
  { id: "courses", label: "الدورات", path: "/courses" },
  { id: "home", label: "الرئيسية", path: "/" },
];
</script>
