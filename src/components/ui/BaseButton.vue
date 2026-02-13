<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'ghost'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const componentType = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-light shadow-button hover:shadow-lg',
    secondary: 'bg-secondary text-text-primary hover:bg-secondary-light hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10'
  }
  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  return sizes[props.size]
})

const classes = computed(() => [
  'inline-flex items-center justify-center gap-2',
  'font-semibold rounded-xl',
  'transition-all duration-300',
  'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
  variantClasses.value,
  sizeClasses.value,
  props.fullWidth ? 'w-full' : '',
  !props.disabled && !props.loading ? 'hover:-translate-y-0.5' : ''
])

const handleClick = (e) => {
  if (!props.disabled && !props.loading) {
    emit('click', e)
  }
}
</script>

<template>
  <component
    :is="componentType"
    :to="to"
    :href="href"
    :class="classes"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="animate-spin w-5 h-5 border-2 border-current border-t-transparent rounded-full" />
    <slot />
  </component>
</template>
