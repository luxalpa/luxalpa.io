import { Component, Vue } from "vue-property-decorator";
import { stylesheet } from "typestyle";

const styles = stylesheet({});

@Component({
  name: "App",
})
export class App extends Vue {
  render() {
    return (
      <div>
        <router-view />
      </div>
    );
  }
}
