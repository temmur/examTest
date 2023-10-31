import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/location',
      name: 'location',
      component: ()=> import ('../views/LocationView.vue')
    },
    {
      path: '/for-men',
      name: 'for-men',
      component: ()=> import ('../views/ForMen.vue')
    },
    {
      path: '/formen-single/:slug(\\d+)',
      name: 'for-men-single',
      component: ()=> import ('../views/ForMen/PSingle.vue')
    },
   {
    path: '/:pathMatch(.*)*',
     name: 'NotFound',
     component: ()=> ('../views/ErrorView.vue')
   }
  ],
  linkActiveClass: 'navActiveClass'
})

export default router
