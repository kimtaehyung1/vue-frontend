import { createRouter, createWebHistory } from "vue-router";
import Sport from "@/views/Sport.vue";
import Blog from "@/views/Blog.vue";
import Layout from "@/views/Layout.vue";
import Neighbor from "@/components/blog/Neighbor.vue";
import BlogHots from "@/components/blog/BlogHots.vue";
import WriteBlog from "@/components/blog/WriteBlog.vue";
import SportNews from "@/components/sport/SportNews.vue";
import MemberShip from "@/components/member/MemberShip.vue";
import CharacterSetting from "@/components/member/CharacterSetting.vue";
import MyInfo from "@/components/member/MyInfo.vue";

const member = "/member";

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
    path: "/member",
    name: "member",
    component: MyInfo,
  },
  {
    path: "/blog/blg001/neighbor/:ctgy",
    name: "/blog/blg001/neighbor",
    component: Neighbor,
  },
  {
    path: "/blog/blg001/blogHots/:ctgy",
    name: "/blog/blg001/blogHots",
    component: BlogHots,
  },
  {
    path: "/blog/writeBlog",
    name: "/blog/writeBlog",
    component: WriteBlog,
  },
  {
    path: "/membership",
    name: "membership",
    component: MemberShip,
  },
  {
    path: "/member/characterSetting",
    name: "characterSetting",
    component: CharacterSetting,
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
