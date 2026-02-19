<script setup>
import { Award, BookOpen, Eye, Heart, Target, Users } from 'lucide-vue-next'
import PageHero from '../components/shared/PageHero.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { staffData } from '../data/staffData'
import { CORE_VALUES, MISSION_VISION, SCHOOL_INFO } from '../constants'

const { elementRef: storyRef, isVisible: storyVisible } = useScrollReveal()
const { elementRef: valuesRef, isVisible: valuesVisible } = useScrollReveal()

const coreValues = [
  { icon: BookOpen, ...CORE_VALUES[0] },
  { icon: Heart, ...CORE_VALUES[1] },
  { icon: Users, ...CORE_VALUES[2] },
  { icon: Award, ...CORE_VALUES[3] },
  { icon: Target, ...CORE_VALUES[4] },
  { icon: Eye, ...CORE_VALUES[5] }
]
</script>

<template>
  <div>
    <PageHero
      title="About Us"
      subtitle="Discover the story, mission, and values that make Pen Foundation School special"
      image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1920&h=600&fit=crop"
    />

    <!-- Our Story Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div
          ref="storyRef"
          :class="[
            'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700',
            storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div>
            <p class="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Our Story</p>
            <h2 class="text-text-primary mb-6">A Legacy of Educational Excellence</h2>

            <div class="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Founded in {{ SCHOOL_INFO.founded }}, our institution began with a simple yet powerful
                vision: to provide quality education that nurtures the whole child — academically, morally,
                and socially.
              </p>
              <p>
                What started as a small nursery school in Ipaye, Ojo, Lagos has blossomed into a thriving
                educational center serving over 400 students from kindergarten through junior secondary (JSS 3). 
                This growth reflects the trust parents have placed in us and our unwavering dedication to
                academic excellence.
              </p>
              <p>
                Through the years, we've produced outstanding students who excel in
                prestigious secondary schools across the country and beyond. Our alumni make us proud
                as they pursue higher education and successful professional careers.
              </p>
            </div>
          </div>

          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
              alt="Students learning in classroom"
              class="rounded-3xl shadow-2xl"
              loading="lazy"
            />
            <div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block">
              <p class="font-display font-bold text-3xl">{{ SCHOOL_INFO.founded }}</p>
              <p class="text-sm">Year Founded</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="section-padding bg-primary-dark">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Mission -->
          <BaseCard padding="lg">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target class="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 class="font-display font-bold text-xl text-text-primary mb-3">Our Mission</h3>
                <p class="text-text-secondary leading-relaxed">
                  {{ MISSION_VISION.mission }}
                </p>
              </div>
            </div>
          </BaseCard>

          <!-- Vision -->
          <BaseCard padding="lg">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <Eye class="w-7 h-7 text-secondary-dark" />
              </div>
              <div>
                <h3 class="font-display font-bold text-xl text-text-primary mb-3">Our Vision</h3>
                <p class="text-text-secondary leading-relaxed">
                  {{ MISSION_VISION.vision }}
                </p>
              </div>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <SectionHeading
          title="Our Core Values"
          subtitle="The principles that guide everything we do at Pen Foundation School"
        />

        <div
          ref="valuesRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <BaseCard
            v-for="(value, index) in coreValues"
            :key="value.title"
            interactive
            :class="[
              'text-center transition-all duration-500',
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <component :is="value.icon" class="w-7 h-7 text-primary" />
            </div>
            <h3 class="font-display font-bold text-lg text-text-primary mb-2">{{ value.title }}</h3>
            <p class="text-text-secondary">{{ value.description }}</p>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Proprietor Message Section -->
    <section class="section-padding bg-primary/5">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl p-8 md:p-12 shadow-card">
            <div class="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <img
                :src="staffData.proprietress.headshot"
                :alt="`${staffData.proprietress.name} - Head Teacher`"
                class="w-32 h-32 rounded-full object-cover border-4 border-secondary flex-shrink-0"
                loading="lazy"
              />
              <div>
                <blockquote class="text-text-primary text-lg italic leading-relaxed mb-6">
                  "At Pen Foundation School, we believe that every child is a gift with unlimited potential.
                  Our role is not just to teach, but to inspire, nurture, and guide. We are committed
                  to creating an environment where children feel loved, valued, and challenged to be
                  their best. Education is not preparation for life; education is life itself. We
                  invite you to join our family and experience the difference."
                </blockquote>
                <div>
                  <p class="font-display font-bold text-text-primary"> {{ staffData.proprietress.name }} </p>
                  <p class="text-text-secondary">Proprietress / Head Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
