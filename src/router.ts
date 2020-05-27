import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { HomeView } from "@/components/views/home-view";
import { Projects } from "@/project-meta";
import { ArticleView } from "@/components/views/article-view";

Vue.use(VueRouter);

function getProjectHistoryRoutes(): RouteConfig[] {
  return Projects.map((project) => ({
    path: `/projects/${project.slug}`,
    name: `Project-${project.slug}`,
    component: ArticleView,
    meta: {
      project,
    },
  }));
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/projects/:slug",
    name: "Project",
    component: ArticleView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});

export default router;
