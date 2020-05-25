import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Test",
})
export default class Test extends Vue {
  render() {
    return <div>This is just a test</div>;
  }
}
