import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
  token: null,
  user: null
};

const getters = {
  getApiBaseUrl: state => state.apiBaseUrl,
  getToken: state => state.token,
  getUser: state => state.user,
};

const mutations = {
  setToken(state, token) {
    state.token = token
  },
  setUser(state, user) {
    if (user === null) {
      localStorage.removeItem('user')
    } else {
      localStorage.setItem('user', JSON.stringify(user))
    }

    state.user = user
  }
}

const actions = {
  logout({ commit }) {
    commit('setToken', null)
    commit('setUser', null)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

