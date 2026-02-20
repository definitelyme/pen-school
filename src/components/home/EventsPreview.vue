<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal'
import { getRecentEvents } from '../../data/eventsData'
import { Calendar, ArrowRight } from 'lucide-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import BaseCard from '../ui/BaseCard.vue'
import BaseBadge from '../ui/BaseBadge.vue'
import BaseButton from '../ui/BaseButton.vue'

const { elementRef, isVisible } = useScrollReveal()
const events = getRecentEvents(3)
</script>

<template>
  <section class="section-padding bg-background">
    <div class="container-custom">
      <SectionHeading
        title="Upcoming Events & News"
        subtitle="Stay updated with the latest happenings"
      />

      <div
        ref="elementRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10"
      >
        <BaseCard
          v-for="(event, index) in events"
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
          <div class="relative h-48 overflow-hidden">
            <img
              :src="event.image"
              :alt="event.title"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-4 left-4">
              <BaseBadge :variant="event.status === 'upcoming' ? 'success' : 'secondary'">
                {{ event.status === 'upcoming' ? 'Upcoming' : 'Past' }}
              </BaseBadge>
            </div>
          </div>

          <!-- Event Content -->
          <div class="p-6">
            <div class="flex items-center gap-2 text-text-secondary text-sm mb-2">
              <Calendar class="w-4 h-4" />
              <span>{{ event.dateDisplay }}</span>
            </div>
            <h3 class="font-display font-bold text-lg text-text-primary mb-2 line-clamp-2">
              {{ event.title }}
            </h3>
            <p class="text-text-secondary text-sm line-clamp-2">
              {{ event.description }}
            </p>
          </div>
        </BaseCard>
      </div>

      <div class="text-center">
        <BaseButton to="/events" variant="outline">
          View All Events
          <ArrowRight class="w-5 h-5" />
        </BaseButton>
      </div>
    </div>
  </section>
</template>
