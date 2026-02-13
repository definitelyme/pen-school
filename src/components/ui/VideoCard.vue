<script setup>
import { Play } from 'lucide-vue-next'

defineProps({
  thumbnail: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['play'])
</script>

<template>
  <div
    class="group cursor-pointer"
    @click="emit('play')"
  >
    <!-- Thumbnail Container -->
    <div class="relative aspect-video rounded-2xl overflow-hidden mb-3 shadow-card">
      <img
        :src="thumbnail"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/40" />

      <!-- Play Button -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div
          class="w-16 h-16 md:w-20 md:h-20 rounded-full
                 bg-white/90 backdrop-blur-sm
                 flex items-center justify-center
                 shadow-lg
                 transition-all duration-300
                 group-hover:scale-110 group-hover:bg-white"
        >
          <Play class="w-7 h-7 md:w-8 md:h-8 text-primary fill-primary ml-1" />
        </div>
      </div>
    </div>

    <!-- Title -->
    <h3 class="font-display font-semibold text-text-primary group-hover:text-primary transition-colors">
      {{ title }}
    </h3>
    <p v-if="subtitle" class="text-sm text-text-secondary mt-1">
      {{ subtitle }}
    </p>
  </div>
</template>
