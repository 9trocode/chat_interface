import Vue from "vue";
import router from "./router";
import store from "./store/store";
import Vuelidate from "vuelidate";
import App from "@/components/layout/App";
import cookies from "browser-cookies";
import WsPlugin from 'adonis-vue-websocket'
Vue.use(WsPlugin, { adonisWS: window.adonis.Ws });

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  validations: {},
  store,
  router,
  components: { App },
  template: "<App/>"
});

// (async () => {
//   const csrf = cookies.get("XSRF-TOKEN");
//   const response = await fetch("/api/post-example", {
//     method: "post",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       "x-xsrf-token": csrf
//     }
//   });

//   const body = await response.json();

//   console.log(body);
// })();
