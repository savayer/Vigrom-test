<template>
  <b-form @submit="addComment" class="mt-3">
    <b-form-group id="input-group-1" label-for="textarea">
      <b-form-textarea
        id="textarea"
        v-model="comment"
        :placeholder="placeholder"
        rows="3"
        required
        :disabled="!isLoggedIn"
        max-rows="6"
      />
    </b-form-group>
    <b-form-group class="text-right">
      <b-button type="submit" :disabled="!isLoggedIn" variant="outline-primary">Leave the comment</b-button>
    </b-form-group>
  </b-form>
</template>

<script>
  import GetAuthDataMixin from "@/mixins/GetAuthDataMixin";
  import GetDate from "@/mixins/GetDate";

  export default {
    name: 'AddComment',
    mixins: [
      GetAuthDataMixin,
      GetDate
    ],
    data: () => ({
      comment: ''
    }),
    computed: {
      placeholder () {
        if (this.isLoggedIn) {
          return 'Enter your thoughts...'
        }

        return 'You need sign in to leave a comment...'
      }
    },
    methods: {
      addComment (e) {
        e.preventDefault()
        this.$emit('newComment', {
          body: this.comment,
          date: this.getDate(),
          name: this.username
        })

        this.comment = ''
      }
    }
  }
</script>