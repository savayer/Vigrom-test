<template>
  <b-modal id="sign-up" hide-footer>
    <template #modal-title>
      Sign up
    </template>

    <b-form @submit="register">
      <b-form-group id="group1" label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          required
          placeholder="Name"
        />
      </b-form-group>

      <b-form-group id="group2" label-for="email">
        <b-form-input
          id="email"
          v-model.trim="form.email"
          type="email"
          required
          placeholder="Email"
        />
      </b-form-group>

      <b-form-group id="group3" label-for="pswd">
        <b-form-input
          id="pswd"
          type="password"
          v-model="$v.form.password.$model"
          :state="correctPassword"
          placeholder="Password"
        />

        <b-form-invalid-feedback>
          <div v-if="!$v.form.password.required">Password is required.</div>
          <div v-if="!$v.form.password.minLength">Password must have at least {{ $v.form.password.$params.minLength.min }} letters.</div>
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group id="group4" label-for="confirm-pswd">
        <b-form-input
          id="confirm-pswd"
          type="password"
          v-model="$v.form.confirmPassword.$model"
          :state="correctPassword"
          required
          placeholder="Confirm password"
        />
        <b-form-invalid-feedback>
          <div v-if="!$v.form.confirmPassword.sameAsPassword">Passwords must be identical.</div>
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group class="text-right">
        <b-button type="submit" :disabled="isLoading" variant="primary">Sign up</b-button>
      </b-form-group>
    </b-form>

  </b-modal>
</template>

<script>
  import { required, sameAs, minLength } from 'vuelidate/lib/validators'

  export default {
    name: 'Signup',
    validations: {
      form: {
        name: {
          required
        },
        password: {
          required,
          minLength: minLength(6)
        },
        confirmPassword: {
          sameAsPassword: sameAs('password')
        }
      }
    },
    data() {
      return {
        isLoading: false,
        form: {
          email: '',
          name: '',
          password: '',
          confirmPassword: '',
        }
      }
    },
    computed: {
      correctPassword () {
        if (!this.form.password && !this.form.confirmPassword) {
          return null
        }
        return this.$v.form.confirmPassword.sameAsPassword && this.$v.form.password.required && this.$v.form.password.minLength
      }
    },
    methods: {
      async register (e) {
        e.preventDefault()
        try {
          this.$v.$touch()
          if (!this.$v.$invalid) {
            this.isLoading = true
            await this.$store.dispatch("signUp", this.form)
            this.$bvModal.hide('sign-up')
          }
        } catch (e) {}
        this.isLoading = false
      }
    }
  }
</script>