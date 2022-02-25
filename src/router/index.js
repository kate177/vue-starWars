import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [

   {
      path: '/people',
      name: 'people',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/People.vue')
   },
   {
      path: '/planets',
      name: 'planets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Planets.vue')
   },
   {
      path: '/starships',
      name: 'starships',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Starships.vue')
   }
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router
