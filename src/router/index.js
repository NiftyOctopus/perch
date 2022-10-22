import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SumByCatView        from '../views/SumByCatView.vue'
import RecentPurchasesView from '../views/RecentPurchasesView.vue'
import AssignPurchasesView from '../views/AssignPurchasesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        }, {
            path: '/about',
            name:  'about',
            component: () => import('../views/AboutView.vue')
        }, {
            path: '/sum/by-cat',
            name:  'sum-by-cat',
            component: SumByCatView
        }, {
            path: '/recent',
            name:  'recent',
            component: RecentPurchasesView
        }, {
            path: '/assign',
            name:  'assign',
            component: AssignPurchasesView
        }
    ]
})

export default router
