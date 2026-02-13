<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  currentIndex: {
    type: Number,
    default: 0
  },
  videoMode: {
    type: Boolean,
    default: false
  },
  videoUrl: {
    type: String,
    default: ''
  },
  videoTitle: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close', 'update:currentIndex'])

const activeIndex = ref(props.currentIndex)

watch(() => props.currentIndex, (newVal) => {
  activeIndex.value = newVal
})

watch(() => props.show, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

const close = () => {
  emit('close')
}

const prev = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--
    emit('update:currentIndex', activeIndex.value)
  }
}

const next = () => {
  if (activeIndex.value < props.images.length - 1) {
    activeIndex.value++
    emit('update:currentIndex', activeIndex.value)
  }
}

const handleKeydown = (e) => {
  if (!props.show) return
  if (e.key === 'Escape') close()
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="close"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/90" @click="close" />

        <!-- Modal Content -->
        <div class="modal-content relative z-10 w-full max-w-5xl">
          <!-- Close Button -->
          <button
            @click="close"
            class="absolute -top-12 right-0 text-white/80 hover:text-white
                   p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X class="w-8 h-8" />
          </button>

          <!-- Video Mode -->
          <template v-if="videoMode">
            <div class="aspect-video rounded-xl overflow-hidden bg-black">
              <iframe
                :src="videoUrl"
                :title="videoTitle"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <p v-if="videoTitle" class="text-white text-center mt-4 font-display text-lg">
              {{ videoTitle }}
            </p>
          </template>

          <!-- Image Mode -->
          <template v-else>
            <!-- Navigation Arrows -->
            <button
              v-if="activeIndex > 0"
              @click="prev"
              class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full
                     text-white/80 hover:text-white p-2 rounded-full
                     hover:bg-white/10 transition-colors mr-4"
              aria-label="Previous image"
            >
              <ChevronLeft class="w-10 h-10" />
            </button>

            <button
              v-if="activeIndex < images.length - 1"
              @click="next"
              class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full
                     text-white/80 hover:text-white p-2 rounded-full
                     hover:bg-white/10 transition-colors ml-4"
              aria-label="Next image"
            >
              <ChevronRight class="w-10 h-10" />
            </button>

            <!-- Image -->
            <img
              v-if="images[activeIndex]"
              :src="images[activeIndex].src"
              :alt="images[activeIndex].alt || ''"
              class="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            />

            <!-- Caption -->
            <p
              v-if="images[activeIndex]?.caption"
              class="text-white text-center mt-4 font-medium"
            >
              {{ images[activeIndex].caption }}
            </p>

            <!-- Counter -->
            <p class="text-white/60 text-center mt-2 text-sm">
              {{ activeIndex + 1 }} / {{ images.length }}
            </p>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
