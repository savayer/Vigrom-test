import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./auth";

Vue.use(Vuex)

const state = {
  user: null,
  isLoggedIn: false
};

const getters = {
  getUser: state => state.user,
  getIsLoggedIn: state => state.isLoggedIn
};

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setIsLoggedIn(state, flag) {
    state.isLoggedIn = flag
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

