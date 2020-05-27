import { Component, Prop, Vue } from "vue-property-decorator";
import { classes, stylesheet } from "typestyle";
import {
  NoProject,
  Project,
  Projects,
  sortProjectsByDate,
} from "@/project-meta";
import { Theme } from "@/theme";
import { NavigationGuard, NavigationGuardNext, Route } from "vue-router";
import { ProjectManager } from "@/project-manager";

const styles = stylesheet({
  page: {
    margin: "35px auto",
    display: "flex",
    justifyContent: "center",
    width: "600px",
  },
  content: {
    width: "600px",
    font: "12pt Roboto Slab",
    lineHeight: "1.8",
    $nest: {
      h1: {
        font: "bold 20pt Fira Sans",
      },
      h2: {
        font: "bold 15pt Fira Sans",
      },
      a: {
        textDecoration: "none",
        color: Theme.linkColor,
        fontWeight: "bold",
        $nest: {
          "&:hover": {
            color: Theme.linkColorHover,
          },
        },
      },
    },
  },
  heading: {
    font: "bold 20pt Roboto Slab",
    marginTop: "7px",
  },
  date: {
    font: "12pt Roboto Slab",
    color: "#666",
  },
  topnavbtn: {
    textDecoration: "none",
    color: Theme.linkColor,
    font: "bold 12pt Roboto Slab",
    $nest: {
      "&:hover": {
        color: Theme.linkColorHover,
      },
    },
  },
  disabled: {
    cursor: "default",
    color: "#888",
    $nest: {
      "&:hover": {
        color: "#888",
      },
    },
  },
  topNav: {
    marginBottom: "35px",
  },
  botNav: {
    marginBottom: "35px",
    marginTop: "35px",
  },
  navbar: {
    justifyContent: "space-between",
    display: "flex",
  },
});

@Component({
  name: "ArticleView",
})
export class ArticleView extends Vue {
  created() {
    ProjectManager.load(this.$route.params.slug);
  }

  async beforeRouteUpdate(to: Route, from: Route, next: NavigationGuardNext) {
    await ProjectManager.load(to.params.slug);
    next();
  }

  get content() {
    if (
      ProjectManager.resolvedMarkdown.hasOwnProperty(this.$route.params.slug)
    ) {
      return ProjectManager.resolvedMarkdown[this.$route.params.slug];
    } else {
      return "Loading ...";
    }
  }

  render() {
    const projectList = [...Projects].sort(sortProjectsByDate);

    const projectIdx = projectList.findIndex(
      (value) => value.slug == this.$route.params.slug
    );

    const project = projectList[projectIdx];

    return (
      <div class={styles.page}>
        <div>
          <div class={styles.topNav}>
            <Navbar project-slug={this.$route.params.slug} />
          </div>
          <span class={styles.date}>{project.date}</span>
          <h1 class={styles.heading}>{project.name}</h1>
          <div domPropsInnerHTML={this.content} class={styles.content} />
          <div class={styles.botNav}>
            <Navbar project-slug={this.$route.params.slug} />
          </div>
        </div>
      </div>
    );
  }
}

@Component
class Navbar extends Vue {
  @Prop() projectSlug!: string;

  render() {
    const projectList = [...Projects].sort(sortProjectsByDate);

    const projectIdx = projectList.findIndex(
      (value) => value.slug == this.projectSlug
    );

    const oldProject = projectList[projectIdx - 1] || NoProject;
    const newProject = projectList[projectIdx + 1] || NoProject;

    return (
      <div class={styles.navbar}>
        <router-link
          to={oldProject != NoProject ? "/projects/" + oldProject.slug : ""}
          class={classes(
            oldProject == NoProject && styles.disabled,
            styles.topnavbtn
          )}
        >
          Older project
        </router-link>
        <router-link class={styles.topnavbtn} to={"/"}>
          All projects
        </router-link>
        <router-link
          class={[newProject == NoProject && styles.disabled, styles.topnavbtn]}
          to={newProject != NoProject ? "/projects/" + newProject.slug : ""}
        >
          Newer project
        </router-link>
      </div>
    );
  }
}
