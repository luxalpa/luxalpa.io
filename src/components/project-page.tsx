import { Component, Vue } from "vue-property-decorator";
import { stylesheet } from "typestyle";

const styles = stylesheet({
  page: {
    margin: "70px 15px 15px",
  },
});

@Component({
  name: "ProjectPage",
})
export class ProjectPage extends Vue {
  render() {
    return <div class={styles.page}></div>;
  }
}
