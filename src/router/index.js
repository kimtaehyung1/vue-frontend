import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Sport from "@/views/Sport.vue";
import SportNews from "@/components/sport/SportNews.vue";
import MemberShip from "@/views/MemberShip.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/sport",
    name: "sport",
    component: Sport,
  },
  {
    path: "/membership",
    name: "membership",
    component: MemberShip,
  },
  {
    path: "/sportNews",
    name: "sportNews",
    component: SportNews,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
