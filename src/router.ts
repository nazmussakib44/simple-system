import { createWebHistory, createRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./components/About.vue"),
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("./components/PostLists.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
