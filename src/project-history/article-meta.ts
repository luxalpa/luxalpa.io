import { AsyncComponent } from "vue";

export interface Project {
  name: string;
  slug: string;
  abstract: string;
  date: string;
  importfn: AsyncComponent;
  state: string;
}

export const NoProject: Project = {
  name: "invalid",
  slug: "invalid",
  abstract: "invalid",
  date: "invalid",
  state: "invalid",
  importfn: () => {},
};

export function sortProjectsByDate(a: Project, b: Project) {
  return parseInt(a.date) - parseInt(b.date);
}

export const Projects: Project[] = [
  {
    name: "Dynamaxed",
    slug: "dynamaxed",
    abstract:
      "A project to simplify modding of the Pokemon Series games by providing a graphical editor and abstraction for the Pokemon Reverse Engineering Toolkit (PRET)",
    date: "2019",
    state: "In Progress",
    importfn: () => import("@/project-history/dynamaxed"),
  },
  {
    name: "Other Test Project",
    slug: "test2",
    abstract: "Another test project was created in 2009",
    date: "2009",
    state: "In Progress",
    importfn: () => import("@/project-history/test2"),
  },
];
