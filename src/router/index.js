import { createRouter, createWebHistory } from 'vue-router'
import CompletedView from '../views/CompletedView.vue'
import HomeView from '../views/HomeView.vue'
import PendingView from '../views/PendingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pending',
      name: 'pending',
      component: PendingView
    },
    {
      path: '/completed',
      name: 'completed',
      component: CompletedView
    },
  ]
})

export default router
