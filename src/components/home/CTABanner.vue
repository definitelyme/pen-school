<script setup>
import { useScrollReveal } from '../../composables/useScrollReveal'
import BaseButton from '../ui/BaseButton.vue'
import { Phone, Mail } from 'lucide-vue-next'
import { CONTACT_INFO } from '../../constants'

const { elementRef, isVisible } = useScrollReveal()
</script>

<template>
  <section class="relative py-20 overflow-hidden">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center bg-fixed"
      style="background-image: url('https://res.cloudinary.com/dlpk3eltq/image/upload/v1771548558/IMG-20260219-WA0002_hpugti.jpg')"
    />

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary/90" />

    <div class="container-custom relative z-10">
      <div
        ref="elementRef"
        :class="[
          'text-center max-w-3xl mx-auto transition-all duration-700',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <h2 class="text-white mb-4">
          Ready to Give Your Child the Best Start?
        </h2>
        <p class="text-white/90 text-lg md:text-xl mb-8">
          Join the family today. Enroll your child for the 2026/2027 academic session
          and watch them grow into confident, capable learners.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <BaseButton to="/contact" variant="secondary" size="lg">
            Start Enrollment
          </BaseButton>
          <BaseButton
            :href="CONTACT_INFO.phone.href"
            variant="outline"
            size="lg"
            class="!border-white !text-white hover:!bg-white hover:!text-primary"
          >
            <Phone class="w-5 h-5" />
            Call Us Now
          </BaseButton>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
          <a :href="CONTACT_INFO.phone.href" class="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone class="w-5 h-5" />
            <span>{{ CONTACT_INFO.phone.formatted }}</span>
          </a>
          <a :href="CONTACT_INFO.email.admissionsHref" class="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail class="w-5 h-5" />
            <span>{{ CONTACT_INFO.email.admissions }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
