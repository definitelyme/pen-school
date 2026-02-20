<script setup>
import { Phone } from 'lucide-vue-next'
import BaseCard from './BaseCard.vue'

defineProps({
  staff: {
    type: Object,
    required: true
  },
  variant: {
    type: String,
    default: 'default', // 'default', 'large', 'compact', 'text-only'
    validator: (value) => ['default', 'large', 'compact', 'text-only'].includes(value)
  },
  borderColor: {
    type: String,
    default: 'border-primary'
  },
  showPhone: {
    type: Boolean,
    default: true
  },
  imageSize: {
    type: String,
    default: 'default', // 'default' (96px), 'large' (128px), 'xlarge' (160px)
    validator: (value) => ['default', 'large', 'xlarge'].includes(value)
  }
})
</script>

<template>
  <BaseCard
    interactive
    :padding="variant === 'large' ? 'none' : 'lg'"
    class="overflow-hidden"
  >
    <!-- Large variant with full image -->
    <template v-if="variant === 'large'">
      <div class="aspect-square overflow-hidden">
        <img
          :src="staff.image"
          :alt="staff.name"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>
      <div class="p-6 text-center">
        <h3 class="font-display font-bold text-xl text-text-primary mb-1">
          {{ staff.name }}
        </h3>
        <p class="text-primary font-medium mb-2">{{ staff.role }}</p>
        <p class="text-text-secondary">{{ staff.bio }}</p>
        <a
          v-if="showPhone && staff.phone"
          :href="`tel:${staff.phone}`"
          class="inline-flex items-center gap-1 text-primary text-xs hover:underline mt-3"
        >
          <Phone class="w-3 h-3" />
          {{ staff.phone }}
        </a>
      </div>
    </template>

    <!-- Text-only variant (no image) -->
    <template v-else-if="variant === 'text-only'">
      <div class="text-left">
        <h3 class="font-display font-bold text-base text-text-primary mb-1">
          {{ staff.name }}
        </h3>
        <p class="text-primary font-medium text-sm mb-2">
          {{ staff.role }}
        </p>
        <p class="text-text-secondary text-sm">
          {{ staff.bio }}
        </p>
        <a
          v-if="showPhone && staff.phone"
          :href="`tel:${staff.phone}`"
          class="inline-flex items-center gap-1 text-primary text-xs hover:underline mt-3"
        >
          <Phone class="w-3 h-3" />
          {{ staff.phone }}
        </a>
      </div>
    </template>

    <!-- Default variant with circular image -->
    <template v-else>
      <div class="text-center">
        <img
          :src="staff.image"
          :alt="staff.name"
          :class="[
            'rounded-full object-cover mx-auto mb-4 border-4',
            borderColor,
            variant === 'compact' ? 'w-20 h-20' : 
            imageSize === 'xlarge' ? 'w-40 h-40' :
            imageSize === 'large' ? 'w-32 h-32' : 'w-24 h-24'
          ]"
          loading="lazy"
        />
        <h3 :class="[
          'font-display font-bold text-text-primary mb-1',
          variant === 'compact' ? 'text-base' : 'text-lg'
        ]">
          {{ staff.name }}
        </h3>
        <p :class="[
          'text-primary font-medium mb-2',
          variant === 'compact' ? 'text-xs' : 'text-sm'
        ]">
          {{ staff.role }}
        </p>
        <p :class="[
          'text-text-secondary',
          variant === 'compact' ? 'text-xs' : 'text-sm'
        ]">
          {{ staff.bio }}
        </p>
        <a
          v-if="showPhone && staff.phone"
          :href="`tel:${staff.phone}`"
          class="inline-flex items-center gap-1 text-primary text-xs hover:underline mt-3"
        >
          <Phone class="w-3 h-3" />
          {{ staff.phone }}
        </a>
      </div>
    </template>
  </BaseCard>
</template>
