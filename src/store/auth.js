import firebase from "firebase/app";

export default {
  actions: {
    async login({ dispatch }, data) {
      try {
        const { email, password } = data;
        await firebase.auth().signInWithEmailAndPassword(email, password);
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
        if (!uid) return
        const snapshot = await firebase
          .database()
          .ref(`/users/${uid}/profile`)
          .once("value");

        commit("setUser", snapshot.val().name);
      } catch (error) {
        alert(error)
        throw error;
      }
    },
  }
};
