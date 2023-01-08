import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/notification',
      component: () => import('../views/notification.vue'),
    },
  ]
})

export default router
