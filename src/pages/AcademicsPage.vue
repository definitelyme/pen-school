<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import PageHero from '../components/shared/PageHero.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import { BookOpen, Users, GraduationCap, Award } from 'lucide-vue-next'
import { CLASS_LEVELS } from '../constants'

const { elementRef, isVisible } = useScrollReveal()

const classLevels = [
  {
    icon: BookOpen,
    category: CLASS_LEVELS.kindergarten.name,
    classes: CLASS_LEVELS.kindergarten.classes,
    ageRange: CLASS_LEVELS.kindergarten.ageRange,
    description: 'A nurturing foundation for early learning through play-based activities and structured lessons that spark curiosity and joy.',
    color: 'bg-secondary/10'
  },
  {
    icon: Users,
    category: CLASS_LEVELS.nursery.name,
    classes: CLASS_LEVELS.nursery.classes,
    ageRange: CLASS_LEVELS.nursery.ageRange,
    description: 'Focused development of basic literacy, numeracy, and social skills in a warm, supportive environment.',
    color: 'bg-primary/10'
  },
  {
    icon: GraduationCap,
    category: CLASS_LEVELS.primary.name,
    classes: CLASS_LEVELS.primary.classes,
    ageRange: CLASS_LEVELS.primary.ageRange,
    description: 'Building strong academic foundations while nurturing critical thinking, creativity, and problem-solving abilities.',
    color: 'bg-accent/10'
  },
  {
    icon: Award,
    category: CLASS_LEVELS.college.name,
    classes: CLASS_LEVELS.college.classes,
    ageRange: CLASS_LEVELS.college.ageRange,
    description: 'Preparing students for senior secondary education with comprehensive subject coverage and continued character development.',
    color: 'bg-secondary-dark/10'
  }
]
</script>

<template>
  <div>
    <PageHero
      title="Our Academics"
      subtitle="Comprehensive education from kindergarten through junior secondary school"
      image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=600&fit=crop"
    />

    <!-- Available Classes Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <SectionHeading
          title="Available Classes"
          subtitle="We offer a complete educational journey from early childhood through junior secondary school"
        />

        <div
          ref="elementRef"
          class="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <BaseCard
            v-for="(level, index) in classLevels"
            :key="level.category"
            interactive
            padding="lg"
            :class="[
              'transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${index * 100}ms` }"
          >
            <div class="flex items-start gap-4 mb-4">
              <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0', level.color]">
                <component :is="level.icon" class="w-7 h-7 text-primary" />
              </div>
              <div class="flex-1">
                <h3 class="font-display font-bold text-xl text-text-primary mb-1">
                  {{ level.category }}
                </h3>
                <p class="text-sm text-text-secondary">{{ level.ageRange }}</p>
              </div>
            </div>

            <p class="text-text-secondary mb-4 leading-relaxed">
              {{ level.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="className in level.classes"
                :key="className"
                class="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {{ className }}
              </span>
            </div>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Curriculum Highlights Section -->
    <section class="section-padding bg-primary-dark">
      <div class="container-custom">
        <SectionHeading
          title="Our Curriculum"
          subtitle="A well-rounded education that prepares students for success"
          light
        />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BaseCard interactive>
            <h3 class="font-display font-bold text-lg text-text-primary mb-2">Core Subjects</h3>
            <p class="text-text-secondary">
              Mathematics, English Language, Basic Science, Social Studies, and more aligned with the Nigerian curriculum.
            </p>
          </BaseCard>

          <BaseCard interactive>
            <h3 class="font-display font-bold text-lg text-text-primary mb-2">Creative Arts</h3>
            <p class="text-text-secondary">
              Music, Art & Craft, Drama, and Cultural Studies to nurture creativity and self-expression.
            </p>
          </BaseCard>

          <BaseCard interactive>
            <h3 class="font-display font-bold text-lg text-text-primary mb-2">Physical Education</h3>
            <p class="text-text-secondary">
              Sports activities, games, and wellness programs to promote healthy physical development.
            </p>
          </BaseCard>

          <BaseCard interactive>
            <h3 class="font-display font-bold text-lg text-text-primary mb-2">Computer Studies</h3>
            <p class="text-text-secondary">
              Basic computer literacy and digital skills preparation for the modern world.
            </p>
          </BaseCard>

          <BaseCard interactive>
            <h3 class="font-display font-bold text-lg text-text-primary mb-2">Moral Education</h3>
            <p class="text-text-secondary">
              Character building, civic education, and values training for responsible citizenship.
            </p>
          </BaseCard>

          <BaseCard interactive>
            <h3 class="font-display font-bold text-lg text-text-primary mb-2">Language Skills</h3>
            <p class="text-text-secondary">
              Strong emphasis on reading, writing, comprehension, and communication skills development.
            </p>
          </BaseCard>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-text-primary mb-4">Ready to Enroll Your Child?</h2>
          <p class="text-text-secondary text-lg mb-8">
            Visit our school to learn more about our programs and meet our dedicated staff.
            We look forward to welcoming your child to our school.
          </p>
          <router-link
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            Contact Us Today
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
