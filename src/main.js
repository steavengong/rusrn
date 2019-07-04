import CUBE from "cube-ui";
import Vue from "vue";
import App from "./App.vue";

import { createAPI } from "cube-ui";

import MyPopup from "./components/popup";

MyPopup.install = Vue => {
  Vue.component("MyPopup", MyPopup);
  createAPI(Vue, MyPopup, ["change"], true);
};

Vue.config.productionTip = false;

Vue.use(CUBE);
Vue.use(MyPopup);

new Vue({
  render: h => h(App)
}).$mount("#app");
