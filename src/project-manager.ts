import marked from "marked";
import { Vue } from "vue-property-decorator";

export const ProjectManager = Vue.observable(
  new (class {
    resolvedMarkdown: Record<string, string> = {};

    async load(project: string) {
      if (this.resolvedMarkdown.hasOwnProperty(project)) {
        return;
      }

      const response = await fetch(`/project-history/${project}.md`);
      const code = await response.text();
      Vue.set(
        this.resolvedMarkdown,
        project,
        marked(code, {
          smartypants: true,
        })
      );
    }
  })()
);
