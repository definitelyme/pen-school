<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import { staffData } from '../data/staffData'
import PageHero from '../components/shared/PageHero.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import BaseCard from '../components/ui/BaseCard.vue'

const { elementRef: leadershipRef, isVisible: leadershipVisible } = useScrollReveal()
const { elementRef: teachingRef, isVisible: teachingVisible } = useScrollReveal()
const { elementRef: supportRef, isVisible: supportVisible } = useScrollReveal()
</script>

<template>
  <div>
    <PageHero
      title="Our Staff"
      subtitle="Meet the dedicated team of educators shaping young minds at Pen Foundation"
      image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=600&fit=crop"
    />

    <!-- Leadership Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <SectionHeading
          title="School Leadership"
          subtitle="Experienced leaders guiding our school towards excellence"
        />

        <div
          ref="leadershipRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <BaseCard
            v-for="(staff, index) in staffData.leadership"
            :key="staff.id"
            interactive
            padding="none"
            :class="[
              'overflow-hidden transition-all duration-500',
              leadershipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="aspect-square overflow-hidden">
              <img
                :src="staff.image"
                :alt="staff.name"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="p-6 text-center">
              <h3 class="font-display font-bold text-lg text-text-primary mb-1">
                {{ staff.name }}
              </h3>
              <p class="text-primary font-medium text-sm mb-2">{{ staff.role }}</p>
              <p class="text-text-secondary text-sm">{{ staff.bio }}</p>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Teaching Staff Section -->
    <section class="section-padding bg-primary/5">
      <div class="container-custom">
        <SectionHeading
          title="Teaching Staff"
          subtitle="Passionate educators dedicated to nurturing every student"
        />

        <div
          ref="teachingRef"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <BaseCard
            v-for="(staff, index) in staffData.teaching"
            :key="staff.id"
            interactive
            padding="none"
            :class="[
              'overflow-hidden transition-all duration-500',
              teachingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 75}ms` }"
          >
            <div class="p-6 text-center">
              <img
                :src="staff.image"
                :alt="staff.name"
                class="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-secondary"
                loading="lazy"
              />
              <h3 class="font-display font-bold text-text-primary mb-1">
                {{ staff.name }}
              </h3>
              <p class="text-primary font-medium text-sm mb-2">{{ staff.role }}</p>
              <p class="text-text-secondary text-sm">{{ staff.bio }}</p>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Support Staff Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <SectionHeading
          title="Support Staff"
          subtitle="Ensuring a safe, healthy, and conducive learning environment"
        />

        <div
          ref="supportRef"
          class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <BaseCard
            v-for="(staff, index) in staffData.support"
            :key="staff.id"
            interactive
            padding="none"
            :class="[
              'overflow-hidden transition-all duration-500',
              supportVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="p-6 text-center">
              <img
                :src="staff.image"
                :alt="staff.name"
                class="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-primary"
                loading="lazy"
              />
              <h3 class="font-display font-bold text-text-primary mb-1">
                {{ staff.name }}
              </h3>
              <p class="text-primary font-medium text-sm mb-2">{{ staff.role }}</p>
              <p class="text-text-secondary text-sm">{{ staff.bio }}</p>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Join Our Team CTA -->
    <section class="py-16 bg-secondary">
      <div class="container-custom text-center">
        <h2 class="text-primary-dark mb-4">Join Our Team</h2>
        <p class="text-primary-dark/80 text-lg mb-6 max-w-2xl mx-auto">
          Are you passionate about education? We're always looking for dedicated
          teachers and staff to join our family.
        </p>
        <a
          href="mailto:careers@penfoundationschool.com"
          class="btn-primary inline-block"
        >
          Send Your CV
        </a>
      </div>
    </section>
  </div>
</template>
