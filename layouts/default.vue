<template>
  <div class="min-h-screen flex flex-col" dir="rtl" lang="ar">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    dir: 'rtl',
    lang: 'ar'
  }
})
</script>
