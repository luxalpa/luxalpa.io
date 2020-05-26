import { Component, Vue } from "vue-property-decorator";
import { Projects, sortProjectsByDate } from "@/project-history/article-meta";
import { stylesheet } from "typestyle";
import { Theme } from "@/theme";

const styles = stylesheet({
  box: {
    width: "600px",
    margin: "0 auto",
    textAlign: "left",
    marginBottom: "15px",
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
    margin: "35px 15px 15px",
  },
  heading: {
    width: "600px",
    margin: "0 auto",
    textAlign: "center",
    font: "bold 20pt Roboto Slab",
    marginBottom: "35px",
    cursor: "default",
  },
});

@Component({
  name: "HomeView",
})
export class HomeView extends Vue {
  render() {
    const projects = [...Projects].sort(sortProjectsByDate);

    return (
      <div class={styles.page}>
        <h1 class={styles.heading}>Projects</h1>
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
