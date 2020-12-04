import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth";

Vue.use(Vuex)

const state = {
  apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
  user: null
};

const getters = {
  getApiBaseUrl: state => state.apiBaseUrl,
  getUser: state => state.user,
};

const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

const actions = {}

const modules = {
  auth
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})

