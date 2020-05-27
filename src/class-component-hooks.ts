// This file must be imported before any others!

import { Component } from "vue-property-decorator";
import Component2 from "vue-class-component";

Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);

Component2.registerHooks([
  "beforeRouteEnter",
  "beforeRouteLeave",
  "beforeRouteUpdate",
]);
