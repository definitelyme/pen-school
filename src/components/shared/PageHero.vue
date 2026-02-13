<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&h=600&fit=crop'
  }
})
</script>

<template>
  <section class="relative h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-primary/60" />
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-4">
      <h1 class="text-white font-display mb-2 drop-shadow-lg">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
      <slot />
    </div>
  </section>
</template>
