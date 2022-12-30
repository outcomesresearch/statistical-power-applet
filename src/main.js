import Vue from "vue";
import App from "./App.vue";
import OutcomesResearchWrapper from "shared-code";
import VueHead from "vue-head";

Vue.use(OutcomesResearchWrapper);
Vue.use(VueHead);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
