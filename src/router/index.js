import { createRouter, createWebHashHistory } from 'vue-router'
import labelpage from '@/pages/labelPage.vue'

const routes = [
  { path: '/', component: labelpage },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
