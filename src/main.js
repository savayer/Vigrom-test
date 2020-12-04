import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "@/App.vue";
import router from "@/routes";
import store from "@/store";
import VueCookie from "vue-cookie";
import Vuelidate from "vuelidate";

Vue.use(VueCookie)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')