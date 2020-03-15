import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Find from '../views/Find.vue'

import VBodyScrollLock from 'v-body-scroll-lock'

Vue.use(VueRouter);
Vue.use(VBodyScrollLock);

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
