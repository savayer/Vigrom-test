import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "@/App.vue";
import router from "@/routes";
import store from "@/store";
import VueCookie from "vue-cookie";
import Vuelidate from "vuelidate";
import axios from 'axios'

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL
console.log(process.env.VUE_APP_API_BASE_URL)
Vue.prototype.$axios = axios

Vue.use(VueCookie)
Vue.use(Vuelidate)
Vue.use(BootstrapVue)

const firebaseConfig = {
  apiKey: "AIzaSyAsSQY573I0uWrUY1ThPMNBhUmhSOHzHEI",
  authDomain: "vigrom-test.firebaseapp.com",
  databaseURL: "https://vigrom-test-default-rtdb.firebaseio.com",
  projectId: "vigrom-test",
  storageBucket: "vigrom-test.appspot.com",
  messagingSenderId: "315909599080",
  appId: "1:315909599080:web:0eb3b2f5429c6ca30870dd"
};
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});