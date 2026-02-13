<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import WelcomeSection from '../components/home/WelcomeSection.vue'
import WhyChooseUs from '../components/home/WhyChooseUs.vue'
import StatsCounter from '../components/home/StatsCounter.vue'
import EventsPreview from '../components/home/EventsPreview.vue'
import Testimonials from '../components/home/Testimonials.vue'
import VideoHighlights from '../components/home/VideoHighlights.vue'
import CTABanner from '../components/home/CTABanner.vue'
</script>

<template>
  <div>
    <HeroSection />

    <!-- Wave Divider -->
    <div class="relative h-16 bg-background -mt-1">
      <svg
        class="absolute bottom-0 w-full h-16"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="#FFF8F0"
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,40 1440,40 L1440,60 L0,60 Z"
        />
      </svg>
    </div>

    <WelcomeSection />
    <WhyChooseUs />
    <StatsCounter />
    <EventsPreview />
    <Testimonials />
    <VideoHighlights />
    <CTABanner />
  </div>
</template>
