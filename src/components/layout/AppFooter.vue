<script setup>
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'
import { NAV_LINKS, SCHOOL_INFO, CONTACT_INFO, SOCIAL_LINKS } from '../../constants'

const quickLinks = NAV_LINKS

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: SOCIAL_LINKS.facebook },
  { name: 'Instagram', icon: Instagram, href: SOCIAL_LINKS.instagram },
  { name: 'Twitter', icon: Twitter, href: SOCIAL_LINKS.twitter },
]
</script>

<template>
  <footer class="bg-primary-dark text-white">
    <div class="container-custom py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- School Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary font-display font-bold text-lg">
              PF
            </div>
            <div>
              <h3 class="font-display font-bold text-xl">{{ SCHOOL_INFO.name }}</h3>
              <p class="text-sm text-white/70">Nursery, Primary & College</p>
            </div>
          </div>
          <p class="text-white/80 mb-6 max-w-md leading-relaxed">
            Nurturing young minds and building a strong foundation for the future.
            Our commitment to excellence in education has made us a trusted choice for
            families in Lagos, Nigeria.
          </p>
          <div class="flex items-center gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                     hover:bg-white hover:text-primary transition-all duration-300"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-display font-bold text-lg mb-4">Quick Links</h4>
          <nav class="flex flex-col gap-2">
            <RouterLink
              v-for="link in quickLinks"
              :key="link.path"
              :to="link.path"
              class="text-white/80 hover:text-secondary transition-colors duration-200"
            >
              {{ link.name }}
            </RouterLink>
          </nav>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-display font-bold text-lg mb-4">Contact Us</h4>
          <div class="flex flex-col gap-4">
            <div class="flex items-start gap-3">
              <MapPin class="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <p class="text-white/80 text-sm">
                {{ CONTACT_INFO.address.street }},<br />
                {{ CONTACT_INFO.address.city }}, {{ CONTACT_INFO.address.country }}
              </p>
            </div>
            <a :href="CONTACT_INFO.phone.href" class="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
              <Phone class="w-5 h-5 text-secondary flex-shrink-0" />
              <span class="text-sm">{{ CONTACT_INFO.phone.formatted }}</span>
            </a>
            <a :href="CONTACT_INFO.email.href" class="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
              <Mail class="w-5 h-5 text-secondary flex-shrink-0" />
              <span class="text-sm break-all">{{ CONTACT_INFO.email.primary }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-white/10">
      <div class="container-custom py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p class="text-white/60 text-sm text-center sm:text-left">
            © {{ new Date().getFullYear() }} {{ SCHOOL_INFO.name }}. All rights reserved.
          </p>
          <p class="text-white/60 text-sm">
            <span class="text-secondary font-semibold">{{ SCHOOL_INFO.motto }}</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
