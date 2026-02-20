<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-vue-next'

const props = defineProps({
  show: Boolean,
  event: Object
})

const emit = defineEmits(['close'])

const activeTab = ref('gallery')
const currentImageIndex = ref(0)
const currentVideoIndex = ref(0)
const isPlayingVideo = ref(false)
const isFullscreenImage = ref(false)
const videoPlayer = ref(null)

const nextImage = () => {
  if (props.event?.gallery) {
    currentImageIndex.value = (currentImageIndex.value + 1) % props.event.gallery.length
  }
}

const prevImage = () => {
  if (props.event?.gallery) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? props.event.gallery.length - 1 
      : currentImageIndex.value - 1
  }
}

const playVideo = (index) => {
  currentVideoIndex.value = index
  isPlayingVideo.value = true
  activeTab.value = 'videos'
  nextTick(() => {
    if (videoPlayer.value) {
      videoPlayer.value.load()
      videoPlayer.value.play().catch(() => {
        // Mobile may block autoplay — native controls will still work
      })
    }
  })
}

const closeModal = () => {
  isPlayingVideo.value = false
  isFullscreenImage.value = false
  currentImageIndex.value = 0
  currentVideoIndex.value = 0
  activeTab.value = 'gallery'
  emit('close')
}

const openFullscreenImage = () => {
  isFullscreenImage.value = true
}

const closeFullscreenImage = () => {
  isFullscreenImage.value = false
}

const nextImageFullscreen = () => {
  nextImage()
}

const prevImageFullscreen = () => {
  prevImage()
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!props.show) return
  
  if (e.key === 'Escape') {
    if (isFullscreenImage.value) {
      closeFullscreenImage()
    } else {
      closeModal()
    }
  } else if (e.key === 'ArrowLeft') {
    if (isFullscreenImage.value || activeTab.value === 'gallery') {
      prevImage()
    }
  } else if (e.key === 'ArrowRight') {
    if (isFullscreenImage.value || activeTab.value === 'gallery') {
      nextImage()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

// Reset state when modal closes
watch(() => props.show, (newVal) => {
  if (!newVal) {
    isFullscreenImage.value = false
    isPlayingVideo.value = false
  }
})
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show && event"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      @click.self="closeModal"
    >
      <div class="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl flex flex-col">
        <!-- Header -->
        <div class="flex items-center justify-between p-4 md:p-6 border-b border-gray-100 flex-shrink-0">
          <div>
            <h2 class="font-display font-bold text-xl md:text-2xl text-text-primary">{{ event.title }}</h2>
            <p class="text-text-secondary text-sm">{{ event.dateDisplay }}</p>
          </div>
          <button
            @click="closeModal"
            class="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors flex-shrink-0"
          >
            <X class="w-6 h-6 text-text-secondary" />
          </button>
        </div>

        <!-- Tabs -->
        <div class="flex border-b border-gray-100 px-4 md:px-6 flex-shrink-0">
          <button
            v-if="event.gallery && event.gallery.length > 0"
            @click="activeTab = 'gallery'"
            :class="[
              'px-4 md:px-6 py-3 font-semibold text-sm transition-colors relative',
              activeTab === 'gallery'
                ? 'text-primary'
                : 'text-text-secondary hover:text-primary'
            ]"
          >
            Photos ({{ event.gallery.length }})
            <div
              v-if="activeTab === 'gallery'"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            />
          </button>
          <button
            v-if="event.videoPlaylist && event.videoPlaylist.length > 0"
            @click="activeTab = 'videos'"
            :class="[
              'px-4 md:px-6 py-3 font-semibold text-sm transition-colors relative',
              activeTab === 'videos'
                ? 'text-primary'
                : 'text-text-secondary hover:text-primary'
            ]"
          >
            Videos ({{ event.videoPlaylist.length }})
            <div
              v-if="activeTab === 'videos'"
              class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
            />
          </button>
        </div>

        <!-- Content -->
        <div class="overflow-y-auto flex-1">
          <!-- Gallery Tab -->
          <div v-if="activeTab === 'gallery' && event.gallery" class="p-4 md:p-6">
            <!-- Main Image Container - Fixed Height -->
            <div 
              class="relative mb-4 bg-gray-100 rounded-2xl cursor-pointer group" 
              style="height: calc(95vh - 320px); min-height: 400px; max-height: 700px;"
            >
              <img
                :key="event.gallery[currentImageIndex].url"
                :src="event.gallery[currentImageIndex].url"
                :alt="event.gallery[currentImageIndex].alt"
                class="w-full h-full object-contain rounded-2xl"
                loading="eager"
                @click="openFullscreenImage"
                @error="(e) => { console.error('Image load error:', e.target.src); e.target.style.display = 'none' }"
              />
              
              <!-- Fullscreen Hint -->
              <div 
                class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none"
              >
                <div class="bg-white/90 px-4 py-2 rounded-full text-sm font-semibold text-text-primary">
                  Click to view fullscreen
                </div>
              </div>
              
              <!-- Navigation Arrows -->
              <button
                v-if="event.gallery.length > 1"
                @click="prevImage"
                class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronLeft class="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </button>
              <button
                v-if="event.gallery.length > 1"
                @click="nextImage"
                class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <ChevronRight class="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </button>

              <!-- Counter -->
              <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {{ currentImageIndex + 1 }} / {{ event.gallery.length }}
              </div>
            </div>

            <!-- Thumbnail Grid -->
            <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
              <button
                v-for="(image, index) in event.gallery"
                :key="index"
                @click="currentImageIndex = index"
                :class="[
                  'aspect-square rounded-lg overflow-hidden border-2 transition-all flex-shrink-0',
                  currentImageIndex === index
                    ? 'border-primary ring-2 ring-primary/30'
                    : 'border-transparent hover:border-primary/50'
                ]"
              >
                <img
                  :src="image.thumbnail"
                  :alt="image.alt"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            </div>
          </div>

          <!-- Videos Tab -->
          <div v-if="activeTab === 'videos' && event.videoPlaylist" class="p-4 md:p-6">
            <!-- Active Video Player - Fixed Height -->
            <div v-if="isPlayingVideo" class="mb-4">
              <div class="bg-black rounded-2xl overflow-hidden relative" style="height: calc(95vh - 320px); min-height: 400px; max-height: 700px;">
                <video
                  ref="videoPlayer"
                  :key="event.videoPlaylist[currentVideoIndex].url"
                  :src="event.videoPlaylist[currentVideoIndex].url"
                  type="video/mp4"
                  controls
                  playsinline
                  webkit-playsinline
                  preload="auto"
                  class="w-full h-full"
                  style="object-fit: contain;"
                  @error="(e) => console.error('Video error:', e)"
                />
              </div>
              <div class="mt-3">
                <h3 class="font-display font-bold text-base md:text-lg text-text-primary">
                  {{ event.videoPlaylist[currentVideoIndex].title }}
                </h3>
                <p class="text-text-secondary text-sm">
                  Video {{ currentVideoIndex + 1 }} of {{ event.videoPlaylist.length }}
                </p>
              </div>
            </div>

            <!-- Video Playlist -->
            <div class="space-y-2">
              <h4 class="font-display font-bold text-text-primary mb-3">
                {{ isPlayingVideo ? 'Up Next' : 'Video Playlist' }}
              </h4>
              <button
                v-for="(video, index) in event.videoPlaylist"
                :key="index"
                @click="playVideo(index)"
                :class="[
                  'w-full flex items-start gap-3 p-2 md:p-3 rounded-xl transition-all text-left',
                  currentVideoIndex === index && isPlayingVideo
                    ? 'bg-primary/10 border-2 border-primary'
                    : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                ]"
              >
                <div class="relative flex-shrink-0 w-24 md:w-32 h-16 md:h-20 rounded-lg overflow-hidden bg-gray-200">
                  <img
                    :src="video.thumbnail"
                    :alt="video.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/90 flex items-center justify-center">
                      <Play class="w-4 h-4 md:w-5 md:h-5 text-primary fill-primary ml-0.5" />
                    </div>
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="font-semibold text-text-primary text-sm md:text-base mb-1 truncate">
                    {{ video.title }}
                  </p>
                  <p class="text-text-secondary text-xs md:text-sm">
                    Video {{ index + 1 }} of {{ event.videoPlaylist.length }}
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

  <!-- Fullscreen Image Viewer -->
  <Transition name="modal">
    <div
      v-if="isFullscreenImage && event"
      class="fixed inset-0 z-[60] bg-black flex items-center justify-center"
      @click.self="closeFullscreenImage"
    >
      <!-- Close Button -->
      <button
        @click="closeFullscreenImage"
        class="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <X class="w-6 h-6 text-white" />
      </button>

      <!-- Image Counter -->
      <div class="absolute top-4 left-1/2 -translate-x-1/2 md:top-8 bg-black/70 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold z-10">
        {{ currentImageIndex + 1 }} / {{ event.gallery.length }}
      </div>

      <!-- Main Fullscreen Image -->
      <div class="relative w-full h-full flex items-center justify-center p-4 md:p-8">
        <img
          v-if="event.gallery && event.gallery[currentImageIndex]"
          :key="currentImageIndex"
          :src="event.gallery[currentImageIndex].largeUrl || event.gallery[currentImageIndex].url"
          :alt="event.gallery[currentImageIndex].alt"
          class="max-w-full max-h-full object-contain"
          loading="eager"
          @click.stop
          @error="(e) => console.error('Fullscreen image error:', e.target.src)"
        />
      </div>

      <!-- Navigation Arrows -->
      <button
        v-if="event.gallery.length > 1"
        @click="prevImageFullscreen"
        class="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <ChevronLeft class="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>
      <button
        v-if="event.gallery.length > 1"
        @click="nextImageFullscreen"
        class="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
      >
        <ChevronRight class="w-6 h-6 md:w-8 md:h-8 text-white" />
      </button>

      <!-- Keyboard Navigation Hint -->
      <div class="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs md:text-sm">
        Use arrow keys or swipe to navigate
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
