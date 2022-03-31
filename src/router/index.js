import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../views/MainPage.vue"),
    children: [
      {
        path: "/people",
        name: "people",
        component: () => import("../views/People.vue"),
      },
      {
        path: "/people/:id",
        name: "peopleInfo",
        component: () => import("../views/Info.vue"),
      },
      {
        path: "/planets",
        name: "planets",
        component: () => import("../views/Planets.vue"),
      },
      {
        path: "/planets/:id",
        name: "planetsInfo",
        component: () => import("../views/PlanetsInfo.vue"),
      },
      {
        path: "/starships",
        name: "starships",
        component: () => import("../views/Starships.vue"),
      },
      {
        path: "/starships/:id",
        name: "starshipsInfo",
        component: () => import("../views/StarshipsInfo.vue"),
      },
    ],
  },
  {
    path: "/not-found",
    name: "notFound",
    component: () => import("../views/404.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: { name: "notFound" } },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active-link",
});

export default router;
