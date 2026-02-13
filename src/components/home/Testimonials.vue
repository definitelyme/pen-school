<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { testimonialsData } from '../../data/testimonialsData'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'

const { elementRef, isVisible } = useScrollReveal()

const currentIndex = ref(0)
const isAutoPlaying = ref(true)
let autoPlayInterval = null

const goToSlide = (index) => {
  currentIndex.value = index
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0
    ? testimonialsData.length - 1
    : currentIndex.value - 1
}

const nextSlide = () => {
  currentIndex.value = currentIndex.value === testimonialsData.length - 1
    ? 0
    : currentIndex.value + 1
}

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    if (isAutoPlaying.value) {
      nextSlide()
    }
  }, 5000)
}

const pauseAutoPlay = () => {
  isAutoPlaying.value = false
}

const resumeAutoPlay = () => {
  isAutoPlaying.value = true
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
  }
})
</script>

<template>
  <section class="section-padding bg-primary/5">
    <div class="container-custom">
      <SectionHeading
        title="What Parents Say"
        subtitle="Hear from the families who have entrusted us with their children's education"
      />

      <div
        ref="elementRef"
        :class="[
          'relative max-w-4xl mx-auto transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
        @mouseenter="pauseAutoPlay"
        @mouseleave="resumeAutoPlay"
      >
        <!-- Testimonial Carousel -->
        <div class="relative overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="testimonial in testimonialsData"
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white rounded-3xl p-8 md:p-10 shadow-card text-center">
                <!-- Quote Icon -->
                <div class="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                  <Quote class="w-7 h-7 text-secondary" />
                </div>

                <!-- Quote Text -->
                <blockquote class="text-text-primary text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{{ testimonial.quote }}"
                </blockquote>

                <!-- Author -->
                <div class="flex items-center justify-center gap-4">
                  <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="w-14 h-14 rounded-full object-cover border-4 border-secondary"
                    loading="lazy"
                  />
                  <div class="text-left">
                    <p class="font-display font-bold text-text-primary">
                      {{ testimonial.name }}
                    </p>
                    <p class="text-text-secondary text-sm">
                      {{ testimonial.childClass }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="prevSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12
                 w-12 h-12 rounded-full bg-white shadow-lg
                 flex items-center justify-center
                 text-primary hover:bg-primary hover:text-white
                 transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft class="w-6 h-6" />
        </button>

        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12
                 w-12 h-12 rounded-full bg-white shadow-lg
                 flex items-center justify-center
                 text-primary hover:bg-primary hover:text-white
                 transition-all duration-300"
          aria-label="Next testimonial"
        >
          <ChevronRight class="w-6 h-6" />
        </button>

        <!-- Dots Navigation -->
        <div class="flex items-center justify-center gap-2 mt-8">
          <button
            v-for="(_, index) in testimonialsData"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentIndex === index
                ? 'bg-primary w-8'
                : 'bg-primary/30 hover:bg-primary/50'
            ]"
            :aria-label="`Go to testimonial ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </section>
</template>
