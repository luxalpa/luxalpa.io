import { Component, Vue } from "vue-property-decorator";
import { stylesheet } from "typestyle";
import {
  NoProject,
  Project,
  Projects,
  sortProjectsByDate,
} from "@/project-history/article-meta";
import { Theme } from "@/theme";

const styles = stylesheet({
  page: {
    margin: "35px 15px 15px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  content: {
    width: "500px",
    font: "12pt Roboto Slab",
  },
  heading: {
    font: "bold 20pt Roboto Slab",
    marginTop: "7px",
  },
  date: {
    font: "12pt Roboto Slab",
    color: "#666",
  },
  topNav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "35px",
    marginLeft: "-15px",
    marginRight: "-15px",
    $nest: {
      "& > a": {
        padding: "15px",
        textDecoration: "none",
        color: "black",
        $nest: {
          "&:hover": {
            backgroundColor: Theme.hoverColor,
          },
        },
      },
    },
  },
});

@Component({
  name: "ArticleView",
})
export class ArticleView extends Vue {
  render() {
    const project: Project = this.$route.meta.project;

    const projectList = [...Projects].sort(sortProjectsByDate);

    const projectIdx = projectList.findIndex((value) => value == project);
    const oldProject = projectList[projectIdx - 1] || NoProject;
    const newProject = projectList[projectIdx + 1] || NoProject;

    return (
      <div class={styles.page}>
        <div class={styles.content}>
          <div class={styles.topNav}>
            <router-link
              to={oldProject != NoProject ? "/projects/" + oldProject.slug : ""}
            >
              Older Story
            </router-link>
            <router-link to={"/"}>All Stories</router-link>
            <router-link
              to={newProject != NoProject ? "/projects/" + newProject.slug : ""}
            >
              Newer Story
            </router-link>
          </div>
          <span class={styles.date}>{project.date}</span>
          <h1 class={styles.heading}>{project.name}</h1>
          <router-view />
        </div>
      </div>
    );
  }
}
