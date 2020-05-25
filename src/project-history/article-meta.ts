import { Vue } from "vue-property-decorator";
import { AsyncComponent } from "vue";

export interface Project {
  name: string;
  slug: string;
  abstract: string;
  date: string;
  importfn: AsyncComponent;
}

export const NoProject: Project = {
  name: "",
  slug: "",
  abstract: "",
  date: "",
  importfn: () => {},
};

export function sortProjectsByDate(a: Project, b: Project) {
  return parseInt(a.date) - parseInt(b.date);
}

export const Projects: Project[] = [
  {
    name: "Test Project",
    slug: "test",
    abstract: "This was a test project",
    date: "2007",
    importfn: () => import("@/project-history/test"),
  },
  {
    name: "Other Test Project",
    slug: "test2",
    abstract: "Another test project was created in 2009",
    date: "2009",
    importfn: () => import("@/project-history/test2"),
  },
];
