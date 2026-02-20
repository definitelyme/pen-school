<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { NAV_LINKS, SCHOOL_INFO } from '../../constants'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = NAV_LINKS

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
        ? 'bg-white shadow-md py-2'
        : 'bg-white lg:bg-transparent py-2 lg:py-4 shadow-sm lg:shadow-none'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2 group flex-shrink-0" @click="closeMobileMenu">
          <div class="w-10 h-10 rounded-full bg-white p-1 shadow-md group-hover:scale-105 transition-transform flex-shrink-0">
            <img
              src="/logo.png"
              alt="Pen Foundation School"
              class="w-full h-full object-contain"
            />
          </div>
          <div class="hidden xl:block">
            <h1
              class="font-display font-bold leading-tight whitespace-nowrap"
              :class="isScrolled ? 'text-primary' : 'text-white'"
              style="font-size: 1.5rem;"
            >
              {{ SCHOOL_INFO.name }}
            </h1>
            <p
              class="font-medium whitespace-nowrap"
              :class="isScrolled ? 'text-text-secondary' : 'text-white/80'"
              style="font-size: 0.8rem;"
            >
              {{ SCHOOL_INFO.motto }}
            </p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1 flex-1 justify-end">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-200"
            :class="[
              isActive(link.path)
                ? isScrolled
                  ? 'text-white bg-primary shadow-md'
                  : 'text-primary bg-white shadow-md'
                : isScrolled
                  ? 'text-text-primary hover:text-primary hover:bg-primary/10'
                  : 'text-white hover:bg-white/20'
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg transition-colors text-primary hover:bg-primary/10"
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
        class="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl lg:hidden z-50"
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
              class="px-4 py-3 rounded-xl font-semibold transition-all duration-200"
              :class="[
                isActive(link.path)
                  ? 'text-white bg-primary shadow-md'
                  : 'text-text-primary hover:text-primary hover:bg-primary/10'
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
