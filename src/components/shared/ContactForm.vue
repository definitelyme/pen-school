<script setup>
import { ref, reactive } from 'vue'
import { Send, Check, AlertCircle } from 'lucide-vue-next'
import BaseButton from '../ui/BaseButton.vue'

const emit = defineEmits(['submit'])

const form = reactive({
  parentName: '',
  email: '',
  phone: '',
  childName: '',
  classLevel: '',
  message: ''
})

const errors = reactive({
  parentName: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const classLevels = [
  'Nursery 1',
  'Nursery 2',
  'Primary 1',
  'Primary 2',
  'Primary 3',
  'Primary 4',
  'Primary 5',
  'Primary 6',
  'General Enquiry'
]

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validatePhone = (phone) => {
  const re = /^[\d\s+()-]{10,}$/
  return re.test(phone)
}

const validate = () => {
  let isValid = true

  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')

  if (!form.parentName.trim()) {
    errors.parentName = 'Please enter your name'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Please enter your email'
    isValid = false
  } else if (!validateEmail(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (form.phone && !validatePhone(form.phone)) {
    errors.phone = 'Please enter a valid phone number'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Please enter your message'
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validate()) return

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  isSubmitting.value = false
  isSubmitted.value = true

  emit('submit', { ...form })

  // Reset form after showing success
  setTimeout(() => {
    Object.keys(form).forEach(key => form[key] = '')
    isSubmitted.value = false
  }, 3000)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-5">
    <!-- Success Message -->
    <Transition name="fade">
      <div
        v-if="isSubmitted"
        class="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3"
      >
        <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
          <Check class="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p class="font-semibold text-blue-800">Message Sent Successfully!</p>
          <p class="text-sm text-blue-600">We'll get back to you as soon as possible.</p>
        </div>
      </div>
    </Transition>

    <!-- Parent Name -->
    <div>
      <label for="parentName" class="block text-sm font-medium text-text-primary mb-2">
        Parent/Guardian Name <span class="text-accent">*</span>
      </label>
      <input
        id="parentName"
        v-model="form.parentName"
        type="text"
        :class="[
          'w-full px-4 py-3 rounded-xl border transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
          errors.parentName ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
        ]"
        placeholder="Enter your full name"
      />
      <p v-if="errors.parentName" class="mt-1 text-sm text-red-500 flex items-center gap-1">
        <AlertCircle class="w-4 h-4" />
        {{ errors.parentName }}
      </p>
    </div>

    <!-- Email & Phone Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label for="email" class="block text-sm font-medium text-text-primary mb-2">
          Email Address <span class="text-accent">*</span>
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          :class="[
            'w-full px-4 py-3 rounded-xl border transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          ]"
          placeholder="your.email@example.com"
        />
        <p v-if="errors.email" class="mt-1 text-sm text-red-500 flex items-center gap-1">
          <AlertCircle class="w-4 h-4" />
          {{ errors.email }}
        </p>
      </div>

      <div>
        <label for="phone" class="block text-sm font-medium text-text-primary mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          v-model="form.phone"
          type="tel"
          :class="[
            'w-full px-4 py-3 rounded-xl border transition-colors duration-200',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
            errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
          ]"
          placeholder="+234 801 234 5678"
        />
        <p v-if="errors.phone" class="mt-1 text-sm text-red-500 flex items-center gap-1">
          <AlertCircle class="w-4 h-4" />
          {{ errors.phone }}
        </p>
      </div>
    </div>

    <!-- Child Name & Class Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label for="childName" class="block text-sm font-medium text-text-primary mb-2">
          Child's Name
        </label>
        <input
          id="childName"
          v-model="form.childName"
          type="text"
          class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                 transition-colors duration-200"
          placeholder="Enter child's name"
        />
      </div>

      <div>
        <label for="classLevel" class="block text-sm font-medium text-text-primary mb-2">
          Class Level
        </label>
        <select
          id="classLevel"
          v-model="form.classLevel"
          class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white
                 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                 transition-colors duration-200 cursor-pointer appearance-none
                 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23555555%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')]
                 bg-[length:1.5rem] bg-[right_0.75rem_center] bg-no-repeat pr-12"
        >
          <option value="">Select class level</option>
          <option v-for="level in classLevels" :key="level" :value="level">
            {{ level }}
          </option>
        </select>
      </div>
    </div>

    <!-- Message -->
    <div>
      <label for="message" class="block text-sm font-medium text-text-primary mb-2">
        Message <span class="text-accent">*</span>
      </label>
      <textarea
        id="message"
        v-model="form.message"
        rows="5"
        :class="[
          'w-full px-4 py-3 rounded-xl border transition-colors duration-200 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
          errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white'
        ]"
        placeholder="How can we help you?"
      />
      <p v-if="errors.message" class="mt-1 text-sm text-red-500 flex items-center gap-1">
        <AlertCircle class="w-4 h-4" />
        {{ errors.message }}
      </p>
    </div>

    <!-- Submit Button -->
    <BaseButton
      type="submit"
      variant="primary"
      size="lg"
      :loading="isSubmitting"
      :disabled="isSubmitted"
      full-width
    >
      <Send class="w-5 h-5" />
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </BaseButton>
  </form>
</template>
