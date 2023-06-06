import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
// import Vuetify from "vuetify";
import router from "./router";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueColumnsResizableVuetify from 'vue-columns-resizable-vuetify'

// import "vuetify/dist/vuetify.min.css";

// Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.use(VueColumnsResizableVuetify);

new Vue({
  render: (h) => h(App),
  router,
  vuetify
}).$mount("#app");
