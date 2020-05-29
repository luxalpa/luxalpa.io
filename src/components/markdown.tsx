import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import marked from "marked";
import { stylesheet } from "typestyle";
import { Theme } from "@/theme";

const styles = stylesheet({
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
});

const NoAsyncContent = "";

@Component({
  name: "Markdown",
})
export class Markdown extends Vue {
  @Prop() content!: string;
  @Prop() src!: string;

  asyncContent: string = NoAsyncContent;

  @Watch("src", { immediate: true })
  async onSrcChanged() {
    if (!this.src) {
      this.asyncContent = NoAsyncContent;
      return;
    }

    this.asyncContent = "Loading ...";

    const response = await fetch(this.src);
    this.asyncContent = await response.text();
  }

  get resolvedContent() {
    let input: string = "Loading ...";

    if (this.content) {
      input = this.content;
    }

    if (this.$slots.default && this.$slots.default[0].text) {
      input = this.$slots.default[0].text!;
    }

    if (this.asyncContent !== NoAsyncContent) {
      input = this.asyncContent;
    }

    return marked(input);
  }

  render() {
    return (
      <div class={styles.content} domPropsInnerHTML={this.resolvedContent} />
    );
  }
}
