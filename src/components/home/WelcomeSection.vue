<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal';
import { staffData } from '../../data/staffData';
import BaseButton from '../ui/BaseButton.vue';

const { elementRef, isVisible } = useScrollReveal()
</script>

<template>
  <section id="welcome" class="section-padding bg-background">
    <div class="container-custom">
      <div
        ref="elementRef"
        :class="[
          'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
          'transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <!-- Image Column -->
        <div class="relative">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              :src="staffData.proprietress.image"
              :alt="`${staffData.proprietress.name} - Head Teacher`"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <!-- Decorative Badge -->
          <div class="absolute -bottom-6 -right-6 bg-secondary text-text-primary p-6 rounded-2xl shadow-xl hidden md:block">
            <p class="font-display font-bold text-2xl">19+</p>
            <p class="text-sm font-medium">Years of Excellence</p>
          </div>
        </div>

        <!-- Content Column -->
        <div>
          <p class="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
            Welcome Message
          </p>
          <h2 class="text-text-primary mb-6">
            From Our Head Teacher
          </h2>

          <div class="space-y-4 text-text-secondary leading-relaxed mb-8">
            <p>
              Dear Parents and Guardians,
            </p>
            <p>
              Welcome to our school, where we believe every child is uniquely gifted and 
              deserving of an education that nurtures their full potential.
            </p>
            <p>
              For nearly two decades, we've been committed to providing a safe, stimulating,
              and caring environment where children develop academically, socially, and morally.
              Our dedicated team of educators works tirelessly to ensure each student receives
              the personalized attention and guidance they need to thrive.
            </p>
            <p>
              At Pen Foundation School, we don't just teach — we inspire. We don't just educate — we
              build character. Our motto, <strong>"Quest For Excellence,"</strong> guides
              everything we do.
            </p>
          </div>

          <div class="flex items-center gap-4 mb-8">
            <img
              :src="staffData.proprietress.headshot"
              :alt="`${staffData.proprietress.name} - Head Teacher`"
              class="w-16 h-16 rounded-full object-cover border-4 border-secondary"
            />
            <div>
              <p class="font-display font-bold text-text-primary"> {{ staffData.proprietress.name }} </p>
              <p class="text-text-secondary text-sm">Proprietress / Head Teacher</p>
            </div>
          </div>

          <BaseButton to="/about" variant="primary">
            Learn More About Us
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
