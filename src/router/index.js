/*
 * @Author: yangzhixin
 * @Date: 2025-04-07 09:13:38
 * @LastEditors: yangzhixin
 * @LastEditTime: 2025-04-07 09:14:08
 * @Description: file content
 * @FilePath: /home/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 