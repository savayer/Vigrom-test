export default {
  computed: {
    isLoggedIn () {
      return this.$store.getters.getIsLoggedIn
    },
    username () {
      return this.$store.getters.getUser
    }
  }
}