<script setup>
import { ChevronUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <button
    @click="scrollToTop"
    class="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full
           bg-primary text-white shadow-lg
           flex items-center justify-center
           hover:bg-primary-light hover:shadow-xl hover:-translate-y-1
           transition-all duration-300
           focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    aria-label="Scroll to top"
  >
    <ChevronUp class="w-6 h-6" />
  </button>
</template>
