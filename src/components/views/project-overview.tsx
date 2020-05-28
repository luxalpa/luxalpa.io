import { Component, Vue } from "vue-property-decorator";
import { stylesheet } from "typestyle";
import { Theme } from "@/theme";
import { Projects, sortProjectsByDate } from "@/project-meta";
import { Markdown } from "@/components/markdown";

const styles = stylesheet({
  box: {
    textAlign: "left",
    margin: "0 -15px",
    display: "block",
    padding: "15px",
    $nest: {
      "&:hover, &:focus": {
        backgroundColor: Theme.hoverColor,
      },
    },
  },
  name: {
    color: "black",
    font: 'bold 12pt "Roboto Slab"',
    marginBottom: "10px",
    display: "inline-block",
  },
  date: {
    float: "right",
    color: "#000",
    font: 'bold 12pt "Roboto Slab"',
  },
  abstract: {
    color: "#333",
    font: '12pt "Roboto Slab"',
  },
  page: {
    width: "600px",
    margin: "35px auto",
  },
  topText: {
    margin: "0 0 15px",
  },
  heading: {
    textAlign: "center",
    font: "bold 20pt Roboto Slab",
    marginBottom: "35px",
    cursor: "default",
  },
});

@Component({
  name: "ProjectOverview",
})
export class ProjectOverview extends Vue {
  render() {
    const projects = [...Projects].sort(sortProjectsByDate);

    return (
      <div class={styles.page}>
        <h1 class={styles.heading}>Projects</h1>
        <div class={styles.topText}>
          <Markdown>
            I have been programming since 2003. This list is an incomplete
            collection of recent programming projects that I did. For a summary
            of my programming history [click here.](/projects/outworldzilla)
          </Markdown>
        </div>
        {projects.reverse().map((project) => (
          <router-link
            to={`/projects/${project.slug}`}
            style={{ textDecoration: "none" }}
            class={styles.box}
          >
            <span class={styles.name}>{project.name}</span>
            <span class={styles.date}>{project.date}</span>
            <br />
            <span class={styles.abstract}>{project.abstract}</span>
          </router-link>
        ))}
      </div>
    );
  }
}
