import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  apiBaseUrl: process.env.VUE_APP_API_BASE_URL,
  token: null,
  user: null
};

const getters = {
  apiBaseUrl: state => state.apiBaseUrl,
  token: state => state.token,
  user: state => state.user,
};

const mutations = {
  token(state, token) {
    state.token = token
  },
  user(state, user) {
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
    commit('token', null)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

