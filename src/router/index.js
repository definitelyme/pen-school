import { createRouter, createWebHistory } from 'vue-router'
import { PAGE_TITLES, SCHOOL_INFO } from '../constants'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue'),
    meta: { title: PAGE_TITLES.home }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue'),
    meta: { title: PAGE_TITLES.about }
  },
  {
    path: '/academics',
    name: 'Academics',
    component: () => import('../pages/AcademicsPage.vue'),
    meta: { title: PAGE_TITLES.academics }
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import('../pages/StaffPage.vue'),
    meta: { title: PAGE_TITLES.staff }
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../pages/EventsPage.vue'),
    meta: { title: PAGE_TITLES.events }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../pages/GalleryPage.vue'),
    meta: { title: PAGE_TITLES.gallery }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/ContactPage.vue'),
    meta: { title: PAGE_TITLES.contact }
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
  document.title = to.meta.title || SCHOOL_INFO.fullName
  next()
})

export default router
