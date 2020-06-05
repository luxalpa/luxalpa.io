import { Component, Prop, Vue } from "vue-property-decorator";
import { classes, media, stylesheet } from "typestyle";
import { NoProject, Projects, sortProjectsByDate } from "@/project-meta";
import { Theme } from "@/theme";
import { Markdown } from "@/components/markdown";

const styles = stylesheet({
  page: {
    margin: "35px auto",
    display: "flex",
    justifyContent: "center",
    width: "600px",
    ...media(
      { minWidth: 0, maxWidth: 685 },
      {
        width: "100%",
        padding: "0 35px",
        boxSizing: "border-box",
      }
    ),
  },
  content: {
    font: "12pt/1.8 Roboto Slab",
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
    marginBottom: "0px",
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
    justifyContent: "space-around",
    display: "flex",
  },
});

@Component({
  name: "ArticleView",
})
export class ArticleView extends Vue {
  smallVersion: boolean = false;

  mounted() {
    window.addEventListener("resize", this.windowResize);
    this.windowResize();
  }

  windowResize() {
    if (window.innerWidth < 470) {
      this.smallVersion = true;
    } else {
      this.smallVersion = false;
    }
  }

  destroyed() {
    window.removeEventListener("resize", this.windowResize);
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
            <Navbar
              project-slug={this.$route.params.slug}
              tiny={this.smallVersion}
            />
          </div>
          <h1 class={styles.heading}>{project.name}</h1>
          <span class={styles.date}>{project.date}</span>
          <Markdown
            class={styles.content}
            src={`/project-history/${this.$route.params.slug}.md`}
          />
          <div class={styles.botNav}>
            <Navbar
              project-slug={this.$route.params.slug}
              tiny={this.smallVersion}
            />
          </div>
        </div>
      </div>
    );
  }
}

@Component
class Navbar extends Vue {
  @Prop() projectSlug!: string;
  @Prop() tiny!: boolean;

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
          {this.tiny ? (
            <font-awesome-icon icon="chevron-left" />
          ) : (
            "Older Project"
          )}
        </router-link>
        <router-link class={styles.topnavbtn} to={{ name: "project-overview" }}>
          All projects
        </router-link>
        <router-link
          class={[newProject == NoProject && styles.disabled, styles.topnavbtn]}
          to={newProject != NoProject ? "/projects/" + newProject.slug : ""}
        >
          {this.tiny ? (
            <font-awesome-icon icon="chevron-right" />
          ) : (
            "Newer Project"
          )}
        </router-link>
      </div>
    );
  }
}
