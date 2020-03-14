import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/find/:type',
    name: 'Find',
    component: Find
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
