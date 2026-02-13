<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useScrollReveal } from '../composables/useScrollReveal'
import { galleryPhotos } from '../data/galleryData'
import { videosData } from '../data/videosData'
import PageHero from '../components/shared/PageHero.vue'
import VideoCard from '../components/ui/VideoCard.vue'
import LightboxModal from '../components/ui/LightboxModal.vue'
import { Image, Video } from 'lucide-vue-next'

const route = useRoute()
const { elementRef, isVisible } = useScrollReveal()

const activeTab = ref('photos')

// Check for tab query param
onMounted(() => {
  if (route.query.tab === 'videos') {
    activeTab.value = 'videos'
  }
})

const tabs = [
  { id: 'photos', label: 'Photos', icon: Image, count: galleryPhotos.length },
  { id: 'videos', label: 'Videos', icon: Video, count: videosData.length }
]

// Photo Lightbox
const showPhotoLightbox = ref(false)
const currentPhotoIndex = ref(0)

const openPhotoLightbox = (index) => {
  currentPhotoIndex.value = index
  showPhotoLightbox.value = true
}

const closePhotoLightbox = () => {
  showPhotoLightbox.value = false
}

// Video Modal
const showVideoModal = ref(false)
const activeVideo = ref(null)

const playVideo = (video) => {
  activeVideo.value = video
  showVideoModal.value = true
}

const closeVideoModal = () => {
  showVideoModal.value = false
  activeVideo.value = null
}
</script>

<template>
  <div>
    <PageHero
      title="Gallery"
      subtitle="Capturing moments of learning, growth, and celebration at Pen Foundation"
      image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920&h=600&fit=crop"
    />

    <section class="section-padding bg-background">
      <div class="container-custom">
        <!-- Tab Navigation -->
        <div class="flex justify-center gap-4 mb-12">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300',
              activeTab === tab.id
                ? 'bg-primary text-white shadow-button'
                : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary shadow-card'
            ]"
          >
            <component :is="tab.icon" class="w-5 h-5" />
            {{ tab.label }}
            <span
              :class="[
                'px-2 py-0.5 rounded-full text-xs',
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-100'
              ]"
            >
              {{ tab.count }}
            </span>
          </button>
        </div>

        <!-- Photos Grid (Masonry-style) -->
        <div
          v-show="activeTab === 'photos'"
          ref="elementRef"
          class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
        >
          <div
            v-for="(photo, index) in galleryPhotos"
            :key="photo.id"
            @click="openPhotoLightbox(index)"
            :class="[
              'break-inside-avoid cursor-pointer group transition-all duration-500',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            ]"
            :style="{ transitionDelay: `${(index % 8) * 50}ms` }"
          >
            <div class="relative overflow-hidden rounded-2xl shadow-card">
              <img
                :src="photo.src"
                :alt="photo.alt"
                class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div class="absolute bottom-0 left-0 right-0 p-4">
                  <p class="text-white text-sm font-medium">{{ photo.caption }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Videos Grid -->
        <div
          v-show="activeTab === 'videos'"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <div
            v-for="(video, index) in videosData"
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
            <p class="text-text-secondary text-sm mt-2">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Lightbox -->
    <LightboxModal
      :show="showPhotoLightbox"
      :images="galleryPhotos"
      :current-index="currentPhotoIndex"
      @close="closePhotoLightbox"
      @update:current-index="currentPhotoIndex = $event"
    />

    <!-- Video Modal -->
    <LightboxModal
      :show="showVideoModal"
      video-mode
      :video-url="activeVideo?.videoUrl"
      :video-title="activeVideo?.title"
      @close="closeVideoModal"
    />
  </div>
</template>
