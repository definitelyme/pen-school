<script setup>
import { ref, computed } from 'vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { eventsData } from '../data/eventsData'
import PageHero from '../components/shared/PageHero.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import BaseBadge from '../components/ui/BaseBadge.vue'
import EventDetailModal from '../components/events/EventDetailModal.vue'
import { Calendar, Play, Image as ImageIcon } from 'lucide-vue-next'

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
const activeEvent = ref(null)

const openEventDetail = (event) => {
  if (event.gallery || event.videoPlaylist) {
    activeEvent.value = event
    showModal.value = true
  }
}

const closeModal = () => {
  showModal.value = false
  activeEvent.value = null
}
</script>

<template>
  <div>
    <PageHero
      title="Events & News"
      subtitle="Stay connected with the latest happenings at Pen Foundation School"
      image="https://res.cloudinary.com/dlpk3eltq/image/upload/v1771548700/IMG-20260220-WA0011_uiljy5.jpg"
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
              'overflow-hidden transition-all duration-500 cursor-pointer',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
            @click="openEventDetail(event)"
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

              <!-- Media Indicators -->
              <div class="absolute bottom-4 right-4 flex gap-2">
                <div
                  v-if="event.gallery && event.gallery.length > 0"
                  class="px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-semibold flex items-center gap-1"
                >
                  <ImageIcon class="w-3 h-3" />
                  {{ event.gallery.length }}
                </div>
                <div
                  v-if="event.videoPlaylist && event.videoPlaylist.length > 0"
                  class="px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-semibold flex items-center gap-1"
                >
                  <Play class="w-3 h-3" />
                  {{ event.videoPlaylist.length }}
                </div>
              </div>
            </div>

            <!-- Event Content -->
            <div class="p-6">
              <div class="flex items-center gap-2 text-text-secondary text-sm mb-3">
                <Calendar class="w-4 h-4" />
                <span>{{ event.dateDisplay }}</span>
              </div>

              <h3 class="font-display font-bold text-lg text-text-primary mb-3">
                {{ event.title }}
              </h3>

              <p class="text-text-secondary text-sm leading-relaxed line-clamp-3">
                {{ event.description }}
              </p>

              <button
                v-if="event.gallery || event.videoPlaylist"
                class="mt-4 text-primary font-semibold text-sm hover:underline"
              >
                View Gallery & Videos →
              </button>
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

    <!-- Event Detail Modal -->
    <EventDetailModal
      :show="showModal"
      :event="activeEvent"
      @close="closeModal"
    />
  </div>
</template>
