import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: { title: 'Home | Pen Foundation School' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue'),
    meta: { title: 'About Us | Pen Foundation School' }
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../pages/StaffPage.vue'),
    meta: { title: 'Our Staff | Pen Foundation School' }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../pages/EventsPage.vue'),
    meta: { title: 'Events & News | Pen Foundation School' }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../pages/GalleryPage.vue'),
    meta: { title: 'Gallery | Pen Foundation School' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/ContactPage.vue'),
    meta: { title: 'Contact Us | Pen Foundation School' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Update page title on navigation
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Pen Foundation Nursery & Primary School'
  next()
})

export default router
