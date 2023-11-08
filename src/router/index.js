import { createRouter, createWebHistory } from "vue-router";
import Sport from "@/views/Sport.vue";
import Blog from "@/views/Blog.vue";
import Layout from "@/views/Layout.vue";
import Neighbor from "@/components/blog/Neighbor.vue";
import SportNews from "@/components/sport/SportNews.vue";
import MemberShip from "@/components/member/MemberShip.vue";

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
  },
  {
    path: "/sport/:ctgy",
    name: "sport",
    component: Sport,
  },
  {
    path: "/blog/:ctgy",
    name: "blog",
    component: Blog,
  },
  {
    path: "/neighbor",
    name: "neighbor",
    component: Neighbor,
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
