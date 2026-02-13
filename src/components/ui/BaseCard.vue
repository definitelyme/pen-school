<script setup>
import { computed } from 'vue'

const props = defineProps({
  interactive: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
  }
})

const paddingClasses = computed(() => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  return paddings[props.padding]
})

const classes = computed(() => [
  'bg-surface rounded-2xl shadow-card',
  'transition-all duration-300',
  paddingClasses.value,
  props.interactive ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : ''
])
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
