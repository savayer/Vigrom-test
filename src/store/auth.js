import firebase from "firebase/app";

export default {
  actions: {
    async login({ commit, dispatch }, data) {
      try {
        const { email, password } = data;
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('setIsLoggedIn', true)
        await dispatch('getUser')
      } catch (error) {
        alert(error)
        throw error;
      }
    },

    async logout({ commit }) {
      try {
        await firebase.auth().signOut();
        commit('setUser', null)
        commit('setIsLoggedIn', false)
      } catch (error) {
        alert(error)
        throw error;
      }
    },

    async signUp({ commit }, data) {
      try {
        const { email, password, name } = data;
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = firebase.auth().currentUser.uid;
        await firebase
          .database()
          .ref(`/users/${uid}/profile`)
          .set({
            name
          });
        commit("setUser", name);
      } catch (error) {
        alert(error)
        throw error;
      }
    },

    async getUser({ commit }) {
      try {
        const uid = firebase.auth().currentUser?.uid;
        if (!uid) {
          commit('setIsLoggedIn', false)
          return
        }
        console.log(uid)
        const snapshot = await firebase
          .database()
          .ref(`/users/${uid}/profile`)
          .once("value");

        commit('setUser', snapshot.val().name);
        commit('setIsLoggedIn', true)
      } catch (error) {
        alert(error)
        throw error;
      }
    },
  }
};
