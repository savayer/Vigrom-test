<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">Vigrom</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" :active="$route.name === 'Home'">Home</b-nav-item>
        <b-nav-item to="/info" :active="$route.name === 'Info'">Info</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="!isLoggedIn">
        <b-nav-item href="#" @click.prevent="$bvModal.show('sign-in')">Sign in</b-nav-item>
        <b-nav-item href="#" @click.prevent="$bvModal.show('sign-up')">Sign up</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="isLoggedIn">
        <b-nav-item-dropdown right>
          <template #button-content>
            <em>{{ username }}</em>
          </template>
          <b-dropdown-item href="#" @click.prevent="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
  import IsLoggedIn from "../mixins/IsLoggedIn";

  export default {
    name: 'Header',
    mixins: [
      IsLoggedIn
    ],
    computed: {
      username () {
        return this.$store.getters.getUser.name
      }
    },
    methods: {
      logout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>