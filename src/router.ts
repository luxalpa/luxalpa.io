import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { HomeView } from "@/components/views/home-view";
import { Projects } from "@/project-history/article-meta";
import { ArticleView } from "@/components/views/article-view";

Vue.use(VueRouter);

function getProjectHistoryRoutes(): RouteConfig[] {
  return Projects.map((project) => ({
    path: project.slug,
    name: `Project-${project.slug}`,
    component: project.importfn,
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
    path: "/projects",
    component: ArticleView,
    children: getProjectHistoryRoutes(),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
