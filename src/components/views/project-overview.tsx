import { Component, Vue } from "vue-property-decorator";
import { media, stylesheet } from "typestyle";
import { Theme } from "@/theme";
import { Projects, sortProjectsByDate } from "@/project-meta";
import { Markdown } from "@/components/markdown";

const styles = stylesheet({
  box: {
    textAlign: "left",
    margin: "0 -15px",
    display: "block",
    padding: "15px",
    cursor: "pointer",
    $nest: {
      "&:hover, &:focus": {
        backgroundColor: Theme.hoverColor,
      },
    },
  },
  name: {},
  date: {
    color: "#5e5e5e",
    fontWeight: "normal",
  },
  subheading: {
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    color: "black",
    font: 'bold 12pt "Roboto Slab"',
  },
  abstract: {
    color: "#333",
    font: '12pt "Roboto Slab"',
  },
  page: {
    width: "600px",
    margin: "35px auto",
    ...media(
      { minWidth: 0, maxWidth: 685 },
      {
        width: "100%",
        paddingLeft: "35px",
        paddingRight: "35px",
        boxSizing: "border-box",
      }
    ),
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
            I have been programming since 2003. The following is an incomplete
            collection of my recent projects. Click on a project for more
            information.
          </Markdown>
        </div>
        {projects.reverse().map((project) => (
          <router-link
            to={`/projects/${project.slug}`}
            style={{ textDecoration: "none" }}
            class={styles.box}
          >
            <div class={styles.subheading}>
              <span class={styles.name}>{project.name}</span>
              <span class={styles.date}>{project.date}</span>
            </div>
            <span class={styles.abstract}>{project.abstract}</span>
          </router-link>
        ))}
      </div>
    );
  }
}
