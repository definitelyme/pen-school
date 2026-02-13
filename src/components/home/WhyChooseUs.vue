<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal'
import {
  GraduationCap,
  Users,
  Heart,
  Shield,
  BookOpen,
  Award
} from 'lucide-vue-next'
import SectionHeading from '../ui/SectionHeading.vue'
import BaseCard from '../ui/BaseCard.vue'

const { elementRef, isVisible } = useScrollReveal()

const features = [
  {
    icon: GraduationCap,
    title: 'Quality Education',
    description: 'Comprehensive curriculum aligned with Nigerian standards, preparing students for academic excellence.'
  },
  {
    icon: Users,
    title: 'Experienced Teachers',
    description: 'Dedicated and qualified educators who are passionate about nurturing young minds.'
  },
  {
    icon: Heart,
    title: 'Caring Environment',
    description: 'A warm, supportive atmosphere where every child feels valued and encouraged to grow.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Top-notch security measures ensuring the safety of all students throughout the school day.'
  },
  {
    icon: BookOpen,
    title: 'Modern Facilities',
    description: 'Well-equipped classrooms, library, computer lab, and spacious playground for holistic learning.'
  },
  {
    icon: Award,
    title: 'Character Building',
    description: 'Strong emphasis on moral values, discipline, and developing responsible citizens.'
  }
]
</script>

<template>
  <section class="section-padding bg-primary-dark relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

    <div class="container-custom relative z-10">
      <SectionHeading
        title="Why Choose Pen Foundation?"
        subtitle="We provide a nurturing environment where children develop the skills and values they need to succeed in life."
        light
      />

      <div
        ref="elementRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        <BaseCard
          v-for="(feature, index) in features"
          :key="feature.title"
          interactive
          :class="[
            'transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <component :is="feature.icon" class="w-8 h-8 text-primary" />
            </div>
            <h3 class="font-display font-bold text-xl text-text-primary mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-text-secondary">
              {{ feature.description }}
            </p>
          </div>
        </BaseCard>
      </div>
    </div>
  </section>
</template>
