import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "@/App.vue";
import router from "@/routes";
import store from "@/store";
import VueCookie from "vue-cookie";
import Vuelidate from "vuelidate";
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = store.getters.apiBaseUrl
if (store.getters.token) {
  axios.defaults.headers = {
    Authorization: `Bearer ${store.getters.token.token}`,
    'X-Requested-With': 'XMLHttpRequest'
  }
}
Vue.prototype.$axios = axios

Vue.use(VueCookie)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')