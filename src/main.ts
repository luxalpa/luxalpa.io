import Vue from "vue";
import { App } from "@/app";
import router from "@/router";
import "normalize.css";
import "typeface-roboto-slab";
import "typeface-fira-sans";
import "typeface-fira-code";
import { cssRule } from "typestyle";

Vue.config.productionTip = false;

cssRule("body", {
  lineHeight: "1.6",
  font: "",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
