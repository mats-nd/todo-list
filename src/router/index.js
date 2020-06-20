import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Adding from '../pages/add.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/add',
    name: 'add',
    component: Adding
  },
  {
    path: '/note/:id(\\d+)',
    name: 'note_id',
    component: () => import('../pages/note/_id.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
