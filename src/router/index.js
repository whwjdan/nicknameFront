import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from "@/components/HelloWorld.vue";
const routes = [
  {
    path: '/',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/NicknameList.vue')
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
