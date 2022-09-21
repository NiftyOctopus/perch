import { createRouter, createWebHistory } from 'vue-router'
import ReferenceView from '../views/ReferenceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ReferenceView
    },
    {
      path: '/about',
      name:  'about',
      component: () => import('../views/ReferenceView.vue')
    }
  ]
})

export default router
