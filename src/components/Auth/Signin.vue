<template>
  <b-modal id="sign-in" hide-footer>
    <template #modal-title>
      Sign in
    </template>

    <b-form @submit="login">
      <b-form-group id="input-group-1" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          placeholder="Email"
        />
      </b-form-group>

      <b-form-group id="input-group-2" label-for="pswd">
        <b-form-input
          id="pswd"
          type="password"
          v-model="form.password"
          required
          placeholder="Password"
        />
      </b-form-group>

      <b-form-group class="text-right">
        <b-button type="submit" :disabled="isLoading" variant="primary">Sign in</b-button>
      </b-form-group>
    </b-form>

  </b-modal>
</template>

<script>
  export default {
    name: 'Signin',
    data() {
      return {
        isLoading: false,
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      async login (e) {
        e.preventDefault()
        try {
          this.isLoading = true
          await this.$store.dispatch("login", this.form)
          this.$bvModal.hide('sign-in')
        } catch (e) {}
        this.isLoading = false
      },
    }
  }
</script>