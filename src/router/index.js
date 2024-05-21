import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Index.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/swap",
  },
  {
    path: "/swap",
    name: "swap",
    component: () => import("../views/Swap.vue"),
  },
  {
    path: "/send",
    name: "send",
    component: () => import("../views/Send.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
