import { Component, Prop, Vue } from "vue-property-decorator";
import { classes, stylesheet } from "typestyle";
import { NoProject, Projects, sortProjectsByDate } from "@/project-meta";
import { Theme } from "@/theme";
import { Markdown } from "@/components/markdown";

const styles = stylesheet({
  page: {
    margin: "35px auto",
    display: "flex",
    justifyContent: "center",
    width: "600px",
  },
  content: {
    width: "600px",
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
    justifyContent: "center",
    display: "flex",
  },
});

@Component({
  name: "ProgrammingSummary",
})
export class ProgrammingSummary extends Vue {
  render() {
    return (
      <div class={styles.page}>
        <div>
          <div class={styles.topNav}>
            <Navbar project-slug={this.$route.params.slug} />
          </div>
          <h1 class={styles.heading}>My history as a programmer</h1>
          <Markdown class={styles.content} src={`/programming-summary.md`} />
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
    return (
      <div class={styles.navbar}>
        <router-link class={styles.topnavbtn} to={{ name: "project-overview" }}>
          All projects
        </router-link>
      </div>
    );
  }
}
