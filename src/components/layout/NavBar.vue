<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Staff', path: '/staff' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
        : 'bg-transparent py-4'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group" @click="closeMobileMenu">
          <div
            class="w-12 h-12 rounded-full bg-primary flex items-center justify-center
                   text-white font-display font-bold text-lg
                   shadow-lg group-hover:scale-105 transition-transform"
          >
            PF
          </div>
          <div class="hidden sm:block">
            <h1
              class="font-display font-bold text-lg leading-tight"
              :class="isScrolled ? 'text-primary' : 'text-white'"
            >
              Pen Foundation
            </h1>
            <p
              class="text-xs font-medium"
              :class="isScrolled ? 'text-text-secondary' : 'text-white/80'"
            >
              Quest For Excellence
            </p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
            :class="[
              isActive(link.path)
                ? 'text-primary bg-primary/10'
                : isScrolled
                  ? 'text-text-primary hover:text-primary hover:bg-primary/5'
                  : 'text-white hover:bg-white/10'
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg transition-colors"
          :class="isScrolled ? 'text-primary hover:bg-primary/10' : 'text-white hover:bg-white/10'"
          aria-label="Toggle menu"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="fixed inset-0 bg-black/50 lg:hidden"
        @click="closeMobileMenu"
      />
    </Transition>

    <!-- Mobile Menu Drawer -->
    <Transition name="slide">
      <div
        v-if="isMobileMenuOpen"
        class="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl lg:hidden"
      >
        <div class="p-6">
          <!-- Close Button -->
          <div class="flex justify-end mb-8">
            <button
              @click="closeMobileMenu"
              class="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Close menu"
            >
              <X class="w-6 h-6" />
            </button>
          </div>

          <!-- Mobile Nav Links -->
          <nav class="flex flex-col gap-2">
            <RouterLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              @click="closeMobileMenu"
              class="px-4 py-3 rounded-xl font-medium transition-all duration-200"
              :class="[
                isActive(link.path)
                  ? 'text-primary bg-primary/10'
                  : 'text-text-primary hover:text-primary hover:bg-primary/5'
              ]"
            >
              {{ link.name }}
            </RouterLink>
          </nav>

          <!-- Mobile CTA -->
          <div class="mt-8 pt-8 border-t border-gray-100">
            <RouterLink
              to="/contact"
              @click="closeMobileMenu"
              class="btn-primary w-full text-center block"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>
