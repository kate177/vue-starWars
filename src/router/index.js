import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
   {
      path: '/people',
      name: 'people',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/People.vue'),
      children: [
         {
            path: '/peopleInfo',
            name: 'peopleInfo',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/Info.vue'),
         },
      ]
   },
   {
      path: '/planets',
      name: 'planets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Planets.vue'),
      children: [
         {
            path: '/planetsCard',
            name: 'planetCard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/PlanetsInfo.vue'),
         },
      ]
   },
   {
      path: '/starships',
      name: 'starships',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Starships.vue'),
      children: [
         {
            path: '/starshipsCard',
            name: 'starshipsCard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ '../views/StarshipsInfo.vue'),
         },
      ]
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})

export default router
