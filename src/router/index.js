import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
   { path: '/people', name: 'people', component: () => import('../views/People.vue') },
   { path: '/planets', name: 'planets', component: () => import('../views/Planets.vue') },
   { path: '/starships', name: 'starships', component: () => import('../views/Starships.vue') },
   { path: '/people/:id', name: 'peopleInfo', component: () => import('../views/Info.vue') },
   { path: '/planets/:id', name: 'planetsInfo', component: () => import('../views/PlanetsInfo.vue') },
   { path: '/starships/:id', name: 'starshipsInfo', component: () => import('../views/StarshipsInfo.vue') },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes,
   linkActiveClass: 'active-link'
})

export default router
