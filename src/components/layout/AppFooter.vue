<script setup>
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Our Staff', path: '/staff' },
  { name: 'Events', path: '/events' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
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
              <h3 class="font-display font-bold text-xl">Pen Foundation</h3>
              <p class="text-sm text-white/70">Nursery & Primary School</p>
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
                Iba Housing Estate Ojo,<br />
                Lagos, Nigeria
              </p>
            </div>
            <a href="tel:+2348012345678" class="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
              <Phone class="w-5 h-5 text-secondary flex-shrink-0" />
              <span class="text-sm">+234 801 234 5678</span>
            </a>
            <a href="mailto:info@penfoundationschool.com" class="flex items-center gap-3 text-white/80 hover:text-secondary transition-colors">
              <Mail class="w-5 h-5 text-secondary flex-shrink-0" />
              <span class="text-sm">info@penfoundationschool.com</span>
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
            © {{ new Date().getFullYear() }} Pen Foundation School. All rights reserved.
          </p>
          <p class="text-white/60 text-sm">
            <span class="text-secondary font-semibold">Quest For Excellence</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
