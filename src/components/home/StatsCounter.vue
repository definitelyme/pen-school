<script setup>
import { useCounter } from '../../composables/useCounter'
import { Users, Award, Calendar, BookOpen } from 'lucide-vue-next'
import { SCHOOL_STATS } from '../../constants'

const stats = [
  { icon: Users, value: SCHOOL_STATS.students, suffix: '+', label: 'Happy Students' },
  { icon: Award, value: SCHOOL_STATS.teachers, suffix: '', label: 'Qualified Teachers' },
  { icon: Calendar, value: SCHOOL_STATS.yearsInService, suffix: '+', label: 'Years in Service' },
  { icon: BookOpen, value: SCHOOL_STATS.nonTeachingStaff, suffix: '', label: 'Non-Teaching Staff' }
]

// Create counters for each stat
const counters = stats.map(stat => useCounter(stat.value, { duration: 2000 }))
</script>

<template>
  <section class="py-16 bg-secondary">
    <div class="container-custom">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          :ref="el => { if (el) counters[index].elementRef.value = el }"
          class="text-center"
        >
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
            <component :is="stat.icon" class="w-8 h-8 text-primary-dark" />
          </div>
          <p class="text-4xl md:text-5xl font-display font-bold text-primary-dark mb-2">
            {{ counters[index].currentValue.value }}{{ stat.suffix }}
          </p>
          <p class="text-primary-dark/80 font-medium">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
