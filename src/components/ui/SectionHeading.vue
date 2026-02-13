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
  centered: {
    type: Boolean,
    default: true
  },
  light: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div :class="['mb-12', centered ? 'text-center' : '']">
    <h2
      :class="[
        'font-display font-bold mb-4',
        light ? 'text-white' : 'text-text-primary'
      ]"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      :class="[
        'text-lg max-w-2xl',
        centered ? 'mx-auto' : '',
        light ? 'text-white/80' : 'text-text-secondary'
      ]"
    >
      {{ subtitle }}
    </p>
    <slot />
  </div>
</template>
