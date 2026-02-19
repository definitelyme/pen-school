<script setup>
import { Analytics } from '@vercel/analytics/vue'
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { onMounted, onUnmounted, ref } from 'vue'
import AppFooter from './components/layout/AppFooter.vue'
import NavBar from './components/layout/NavBar.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'

const showScrollTop = ref(false)

const handleScroll = () => {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <AppFooter />

    <Transition name="fade">
      <ScrollToTop v-if="showScrollTop" />
    </Transition>

    <Analytics />
    <SpeedInsights />
  </div>
</template>
