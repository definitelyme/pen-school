<script setup>
defineProps({
  icon: {
    type: Object,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  link: {
    type: String,
    default: null
  },
  iconColor: {
    type: String,
    default: 'text-secondary'
  },
  variant: {
    type: String,
    default: 'default', // 'default', 'footer'
    validator: (value) => ['default', 'footer'].includes(value)
  }
})
</script>

<template>
  <!-- Footer variant -->
  <a
    v-if="variant === 'footer' && link"
    :href="link"
    :target="link?.startsWith('http') ? '_blank' : undefined"
    class="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors"
  >
    <component :is="icon" :class="['w-5 h-5 flex-shrink-0', iconColor]" />
    <span class="text-sm" v-html="content" />
  </a>
  <div
    v-else-if="variant === 'footer'"
    class="flex items-start gap-3"
  >
    <component :is="icon" :class="['w-5 h-5 flex-shrink-0 mt-0.5', iconColor]" />
    <p class="text-white/80 text-sm" v-html="content" />
  </div>

  <!-- Default variant (for contact page) -->
  <component
    v-else
    :is="link ? 'a' : 'div'"
    :href="link"
    :target="link?.startsWith('http') ? '_blank' : undefined"
    class="flex items-start gap-4"
  >
    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
      <component :is="icon" class="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 class="font-display font-bold text-text-primary mb-1">
        {{ title }}
      </h3>
      <p class="text-text-secondary text-sm">{{ content }}</p>
    </div>
  </component>
</template>
