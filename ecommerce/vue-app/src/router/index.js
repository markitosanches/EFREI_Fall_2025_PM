import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AddProductView from '../views/AddProductView.vue'
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/add-product', name: 'add-product', component: AddProductView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router