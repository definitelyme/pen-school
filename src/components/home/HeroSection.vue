<script setup>
import { ChevronDown } from 'lucide-vue-next'
import { onMounted, onUnmounted, ref } from 'vue'
import BaseBadge from '../ui/BaseBadge.vue'
import BaseButton from '../ui/BaseButton.vue'

const parallaxOffset = ref(0)

const handleScroll = () => {
  parallaxOffset.value = window.scrollY * 0.4
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollToContent = () => {
  const welcomeSection = document.getElementById('welcome')
  if (welcomeSection) {
    welcomeSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Parallax -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{
        backgroundImage: `url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=1080&fit=crop')`,
        transform: `translateY(${parallaxOffset}px)`
      }"
    />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary-dark/85 via-primary/70 to-primary-light/60" />

    <!-- Decorative Elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
    <div class="absolute bottom-40 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />

    <!-- Content -->
    <div class="relative z-10 container-custom text-center py-20">
      <!-- Main Heading -->
      <h1 class="text-white mb-6 leading-tight animate-fade-up" style="animation-delay: 0.1s">
        Welcome to<br />
        <span class="text-secondary">Pen Foundation School</span>
      </h1>

      <!-- Tagline -->
      <p class="text-white/90 text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light animate-fade-up" style="animation-delay: 0.2s">
        <span class="font-semibold italic">"Quest For Excellence"</span><br />
        <span class="text-lg">Nurturing and mentoring young minds since 2006</span>
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style="animation-delay: 0.3s">
        <BaseButton to="/contact" variant="secondary" size="lg">
          Enroll Your Child
        </BaseButton>
        <BaseButton to="/about" variant="outline" size="lg" class="!border-white !text-white hover:!bg-white hover:!text-primary">
          Learn More
        </BaseButton>
      </div>

      <!-- Stats Preview -->
      <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto animate-fade-up" style="animation-delay: 0.4s">
        <div class="text-center">
          <p class="text-3xl md:text-4xl font-display font-bold text-white">400+</p>
          <p class="text-white/70 text-sm">Happy Students</p>
        </div>
        <div class="text-center">
          <p class="text-3xl md:text-4xl font-display font-bold text-white">25</p>
          <p class="text-white/70 text-sm">Teaching Staffs</p>
        </div>
        <div class="text-center">
          <p class="text-3xl md:text-4xl font-display font-bold text-white">10</p>
          <p class="text-white/70 text-sm">Support Staffs</p>
        </div>
        <div class="text-center">
          <p class="text-3xl md:text-4xl font-display font-bold text-white">19+</p>
          <p class="text-white/70 text-sm">Years of Excellence</p>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <button
      @click="scrollToContent"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white
             animate-bounce cursor-pointer transition-colors"
      aria-label="Scroll to content"
    >
      <ChevronDown class="w-10 h-10" />
    </button>
  </section>
</template>
