import "./class-component-hooks"; // this must be the first import!

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
  font: "12pt/1.8 Roboto Slab",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
