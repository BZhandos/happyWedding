import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useMainStore } from '@/stores/guests'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:hash',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from, next) => {
        const store = useMainStore()
        const GUEST_LIST = store.guestList
        const HASH = to.params.hash
        if (GUEST_LIST[HASH]) {
          next() // Allow navigation
        } else {
          next({ name: 'about' }) // Redirect to "about" page
        }
      }
    },
    {
      path: '/404',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
