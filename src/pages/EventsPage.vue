<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { eventsData } from '../data/eventsData'
import PageHero from '../components/shared/PageHero.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseBadge from '../components/ui/BaseBadge.vue'
import LightboxModal from '../components/ui/LightboxModal.vue'
import { Calendar, Play } from 'lucide-vue-next'

const { elementRef, isVisible } = useScrollReveal()

const activeFilter = ref('all')

const filters = [
  { id: 'all', label: 'All Events' },
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'past', label: 'Past Events' }
]

const filteredEvents = computed(() => {
  if (activeFilter.value === 'all') return eventsData
  return eventsData.filter(event => event.status === activeFilter.value)
})

const showModal = ref(false)
const activeVideo = ref(null)

const playVideo = (event) => {
  if (event.hasVideo) {
    activeVideo.value = event
    showModal.value = true
  }
}

const closeModal = () => {
  showModal.value = false
  activeVideo.value = null
}
</script>

<template>
  <div>
    <PageHero
      title="Events & News"
      subtitle="Stay connected with the latest happenings at Pen Foundation School"
      image="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&h=600&fit=crop"
    />

    <section class="section-padding bg-background">
      <div class="container-custom">
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-6 py-2.5 rounded-full font-medium transition-all duration-300',
              activeFilter === filter.id
                ? 'bg-primary text-white shadow-button'
                : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- Events Grid -->
        <div
          ref="elementRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <BaseCard
            v-for="(event, index) in filteredEvents"
            :key="event.id"
            interactive
            padding="none"
            :class="[
              'overflow-hidden transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <!-- Event Image -->
            <div class="relative h-52 overflow-hidden">
              <img
                :src="event.image"
                :alt="event.title"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />

              <!-- Status Badge -->
              <div class="absolute top-4 left-4">
                <BaseBadge :variant="event.status === 'upcoming' ? 'success' : 'secondary'">
                  {{ event.status === 'upcoming' ? 'Upcoming' : 'Past' }}
                </BaseBadge>
              </div>

              <!-- Video Play Button -->
              <button
                v-if="event.hasVideo"
                @click.stop="playVideo(event)"
                class="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity"
              >
                <div class="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                  <Play class="w-7 h-7 text-primary fill-primary ml-1" />
                </div>
              </button>
            </div>

            <!-- Event Content -->
            <div class="p-6">
              <div class="flex items-center gap-2 text-text-secondary text-sm mb-3">
                <Calendar class="w-4 h-4" />
                <span>{{ event.dateDisplay }}</span>
                <span v-if="event.hasVideo" class="ml-auto text-primary font-medium text-xs">
                  Video Available
                </span>
              </div>

              <h3 class="font-display font-bold text-lg text-text-primary mb-3">
                {{ event.title }}
              </h3>

              <p class="text-text-secondary text-sm leading-relaxed">
                {{ event.description }}
              </p>
            </div>
          </BaseCard>
        </div>

        <!-- Empty State -->
        <div
          v-if="filteredEvents.length === 0"
          class="text-center py-16"
        >
          <p class="text-text-secondary text-lg">No events found for this filter.</p>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <LightboxModal
      :show="showModal"
      video-mode
      :video-url="activeVideo?.videoUrl"
      :video-title="activeVideo?.videoTitle"
      @close="closeModal"
    />
  </div>
</template>
