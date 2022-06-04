import Vue from 'vue'
import VueRouter from 'vue-router'
import Sales from '../components/Sales'
import Prospecting from '../components/Prospecting'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Sales
  },
  {
    path: '/pres',
    name: 'pres',
    component: Prospecting
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
