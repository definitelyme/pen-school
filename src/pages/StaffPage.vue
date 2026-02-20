<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import { staffData } from '../data/staffData'
import PageHero from '../components/shared/PageHero.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import StaffCard from '../components/ui/StaffCard.vue'

const { elementRef: directorsRef, isVisible: directorsVisible } = useScrollReveal()
const { elementRef: managementRef, isVisible: managementVisible } = useScrollReveal()
const { elementRef: consultantsRef, isVisible: consultantsVisible } = useScrollReveal()
</script>

<template>
  <div>
    <PageHero
      title="Our Staff"
      subtitle="Meet the dedicated team of educators shaping young minds at Pen Foundation"
      image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&h=600&fit=crop"
    />

    <!-- Directors Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <SectionHeading
          title="Board of Directors"
          subtitle="Strategic leadership and governance"
        />

        <div
          ref="directorsRef"
          class="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6"
        >
          <div
            v-for="(staff, index) in staffData.directors"
            :key="staff.id"
            :class="[
              'transition-all duration-500',
              directorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <StaffCard :staff="staff" variant="large" border-color="border-primary" />
          </div>
        </div>
      </div>
    </section>

    <!-- Management Staff Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <SectionHeading
          title="Management Staff"
          subtitle="Ensuring smooth operations and student welfare"
        />

        <div
          ref="managementRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="(staff, index) in staffData.management"
            :key="staff.id"
            :class="[
              'transition-all duration-500',
              managementVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <StaffCard :staff="staff" border-color="border-secondary" />
          </div>
        </div>
      </div>
    </section>

    <!-- Consultants Section -->
    <section class="section-padding bg-primary/5">
      <div class="container-custom">
        <SectionHeading
          title="Expert Guidance and Coordination"
          subtitle="Providing strategic oversight and professional consultation"
        />

        <div
          ref="consultantsRef"
          class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          <div
            v-for="(staff, index) in staffData.consultants"
            :key="staff.id"
            :class="[
              'transition-all duration-500',
              consultantsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <StaffCard :staff="staff" border-color="border-primary" />
          </div>
        </div>
      </div>
    </section>

    <!-- Team Info Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-text-primary mb-4">Our Dedicated Team</h2>
          <p class="text-text-secondary text-lg leading-relaxed mb-8">
            Beyond our leadership team, we have a dedicated group of qualified teachers 
            and support staff who work tirelessly to ensure every child receives the 
            best education and care. Our team includes experienced educators across all 
            class levels, as well as support staff who maintain a safe, clean, and 
            conducive learning environment.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div class="bg-white p-6 rounded-2xl shadow-card">
              <p class="text-4xl font-display font-bold text-primary mb-2">25</p>
              <p class="text-text-secondary">Qualified Teachers</p>
            </div>
            <div class="bg-white p-6 rounded-2xl shadow-card">
              <p class="text-4xl font-display font-bold text-primary mb-2">10</p>
              <p class="text-text-secondary">Support Staff</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Our Team CTA -->
    <section class="py-16 bg-secondary">
      <div class="container-custom text-center">
        <h2 class="text-primary-dark mb-4">Join Our Team</h2>
        <p class="text-primary-dark/80 text-lg mb-6 max-w-2xl mx-auto">
          Are you passionate about education? We're always looking for dedicated
          teachers and support staff to join our family.
        </p>
        <a
          href="mailto:info@penschoolsgroup.sch.ng"
          class="btn-primary inline-block"
        >
          Send Your CV
        </a>
      </div>
    </section>
  </div>
</template>
