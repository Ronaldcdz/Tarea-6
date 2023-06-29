import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '',
    redirect: '/portada/Portada'
  },
  {
    path: '/portada/:id',
    component: () => import('../views/Portada.vue')
  },
  {
    path: '/genderGenerator/:id',
    component: () => import('../views/Gender.vue')
  },
  {
    path: '/ageGenerator/:id',
    component: () => import('../views/Age.vue')
  },
  {
    path: '/findCollege/:id',
    component: () => import('../views/College.vue')
  },
  {
    path: '/weather/:id',
    component: () => import('../views/Weather.vue')
  },
  {
    path: '/news/:id',
    component: () => import('../views/News.vue')
  },
  {
    path: '/contratame/:id',
    component: () => import('../views/Contratame.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
