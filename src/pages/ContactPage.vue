<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import PageHero from '../components/shared/PageHero.vue'
import ContactForm from '../components/shared/ContactForm.vue'
import BaseCard from '../components/ui/BaseCard.vue'
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'
import { CONTACT_INFO } from '../constants'

const { elementRef, isVisible } = useScrollReveal()

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: CONTACT_INFO.address.full,
    link: CONTACT_INFO.mapUrl
  },
  {
    icon: Phone,
    title: 'Phone',
    content: CONTACT_INFO.phone.formatted,
    link: CONTACT_INFO.phone.href
  },
  {
    icon: Mail,
    title: 'Email',
    content: CONTACT_INFO.email.primary,
    link: CONTACT_INFO.email.href
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: CONTACT_INFO.officeHours,
    link: null
  }
]

const handleFormSubmit = (formData) => {
  console.log('Form submitted:', formData)
}
</script>

<template>
  <div>
    <PageHero
      title="Contact Us"
      subtitle="Get in touch with us for inquiries, enrollment, or to schedule a visit"
      image="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1920&h=600&fit=crop"
    />

    <section class="section-padding bg-background">
      <div class="container-custom">
        <div
          ref="elementRef"
          :class="[
            'grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <!-- Contact Form -->
          <div>
            <h2 class="text-text-primary mb-2">Send Us a Message</h2>
            <p class="text-text-secondary mb-8">
              Have questions about enrollment, curriculum, or anything else?
              Fill out the form below and we'll get back to you shortly.
            </p>

            <ContactForm @submit="handleFormSubmit" />
          </div>

          <!-- Contact Info & Map -->
          <div class="space-y-8">
            <!-- Contact Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BaseCard
                v-for="info in contactInfo"
                :key="info.title"
                :interactive="!!info.link"
                class="group"
              >
                <component
                  :is="info.link ? 'a' : 'div'"
                  :href="info.link"
                  :target="info.link?.startsWith('http') ? '_blank' : undefined"
                  class="flex items-start gap-4"
                >
                  <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <component :is="info.icon" class="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 class="font-display font-bold text-text-primary mb-1">
                      {{ info.title }}
                    </h3>
                    <p class="text-text-secondary text-sm">{{ info.content }}</p>
                  </div>
                </component>
              </BaseCard>
            </div>

            <!-- Map Embed -->
            <BaseCard padding="none" class="overflow-hidden">
              <div class="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.3073619999997!2d3.1833329!3d6.4686111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b879d0a6e7f1b%3A0x5e5e5e5e5e5e5e5e!2sOjo%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Pen Foundation School Location"
                />
              </div>
            </BaseCard>

            <!-- Additional Info -->
            <div class="bg-primary text-white p-6 rounded-2xl shadow-card">
              <h3 class="font-display font-bold text-xl text-white mb-3">Visit Our School</h3>
              <p class="text-white/90 mb-4">
                We welcome prospective parents to visit our campus and see firsthand
                how we nurture young minds. Schedule a tour today!
              </p>
              <div class="flex items-center gap-2 text-secondary">
                <Phone class="w-5 h-5" />
                <a :href="CONTACT_INFO.phone.href" class="font-semibold hover:underline text-secondary">
                  {{ CONTACT_INFO.phone.formatted }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
