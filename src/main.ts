import "./class-component-hooks"; // this must be the first import!

import Vue from "vue";
import { App } from "@/app";
import router from "@/router";
import "normalize.css";
import "typeface-roboto-slab";
import "typeface-fira-sans";
import "typeface-fira-code";
import { cssRule } from "typestyle";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

library.add(faChevronLeft, faChevronRight);

Vue.component("font-awesome-icon", FontAwesomeIcon);

cssRule("body", {
  font: "12pt/1.8 Roboto Slab",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
