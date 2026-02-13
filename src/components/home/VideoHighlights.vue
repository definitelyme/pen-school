<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { getHomeVideos } from '../../data/videosData'
import SectionHeading from '../ui/SectionHeading.vue'
import VideoCard from '../ui/VideoCard.vue'
import LightboxModal from '../ui/LightboxModal.vue'
import BaseButton from '../ui/BaseButton.vue'
import { ArrowRight } from 'lucide-vue-next'

const { elementRef, isVisible } = useScrollReveal()
const videos = getHomeVideos()

const showModal = ref(false)
const activeVideo = ref(null)

const playVideo = (video) => {
  activeVideo.value = video
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  activeVideo.value = null
}
</script>

<template>
  <section class="section-padding bg-background">
    <div class="container-custom">
      <SectionHeading
        title="School Life in Action"
        subtitle="Watch highlights from our events, classrooms, and extracurricular activities"
      />

      <div
        ref="elementRef"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10"
      >
        <div
          v-for="(video, index) in videos"
          :key="video.id"
          :class="[
            'transition-all duration-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <VideoCard
            :thumbnail="video.thumbnail"
            :title="video.title"
            :subtitle="video.date"
            @play="playVideo(video)"
          />
        </div>
      </div>

      <div class="text-center">
        <BaseButton to="/gallery?tab=videos" variant="outline">
          View All Videos
          <ArrowRight class="w-5 h-5" />
        </BaseButton>
      </div>
    </div>

    <!-- Video Modal -->
    <LightboxModal
      :show="showModal"
      video-mode
      :video-url="activeVideo?.videoUrl"
      :video-title="activeVideo?.title"
      @close="closeModal"
    />
  </section>
</template>
