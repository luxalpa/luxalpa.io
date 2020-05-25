import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Test2",
})
export default class Test2 extends Vue {
  render() {
    return <div>This is just another test</div>;
  }
}
