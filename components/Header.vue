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
          <NuxtLink v-for="link in links" :key="link.id" :to="link.path" :class="[
            'text-lg cursor-pointer  font-medium',
            $route.path === link.path
              ? 'text-primary'
              : 'text-[#0D0D0D]',
          ]">
            {{ link.label }}
          </NuxtLink>
        </nav>
        <div class="items-center gap-3 hidden md:flex">
          <button class="bg-primary rounded-sm py-2 px-7 gap-[2px] text-white text-sm font-bold">
            إنشاء حساب
          </button>
          <button
            class="flex items-center gap-2 bg-[#f4f5f9] border border-[#8080808C] rounded-sm py-[6px] px-3 text-black text-sm font-bold">
            <span class="text-sm font-bold"> تسجيل دخول </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11ZM10 10C11.1046 10 12 9.10457 12 8C12 6.89543 11.1046 6 10 6C8.89543 6 8 6.89543 8 8C8 9.10457 8.89543 10 10 10Z"
                fill="#000" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM13.8344 15.8573C12.733 16.5798 11.4156 17 10 17C8.58441 17 7.26696 16.5798 6.16558 15.8573C6.65726 14.205 8.18791 13 9.99999 13C11.8121 13 13.3427 14.205 13.8344 15.8573ZM14.6713 15.2134C16.1007 13.9318 17 12.0709 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.0709 3.89928 13.9318 5.32864 15.2134C6.04775 13.3343 7.86805 12 9.99999 12C12.1319 12 13.9522 13.3343 14.6713 15.2134Z"
                fill="#000" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile aside -->
      <Transition enter-active-class="transition ease-out duration-100" enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
        leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
        <div v-if="isOpen" class="md:hidden mt-2 py-2 space-y-2">
          <div class="flex flex-col-reverse justify-center items-center gap-2">
            <NuxtLink v-for="link in links" :key="link.id" :to="link.path" @click="isOpen = false" :class="[
              'text-lg cursor-pointer font-medium',
              $route.path === link.path
                ? 'text-primary'
                : 'text-[#0D0D0D]',
            ]">
              {{ link.label }}
            </NuxtLink>
          </div>

          <div class="mt-4 flex flex-col gap-2 px-3">
            <button class="bg-primary rounded-sm py-2 px-7 gap-[2px] text-white text-sm font-bold">
              إنشاء حساب
            </button>
            <button
              class="flex items-center justify-center gap-2 bg-[#f4f5f9] border border-[#8080808C] rounded-sm py-[7px] px-3 text-black text-sm font-bold">
              تسجيل دخول
            </button>
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
  { id: "about", label: "من نحن", path: "/about" },
  { id: "tests", label: "الاختبارات", path: "/tests" },
  { id: "courses", label: "الدورات", path: "/courses" },
  { id: "home", label: "الرئيسية", path: "/" },
];
</script>
