<template>
  <div class="comments-wrapper mb-5">
    <div class="comments-wrapper__title">
      Comments
    </div>
    <AddComment
      @newComment="newComment"
    />
    <div class="text-center" v-if="isLoading">
      <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
    </div>
    <div v-else class="comments">
      <div v-for="comment in commentsList" :key="comment.id" class="comment">
        <div class="comment__author_name">
          {{ comment.name }}
        </div>
        <small class="comment__date">
          {{ comment.date }}
        </small>
        <div class="comment__text">
          {{ comment.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AddComment from "@/components/Info/AddComment.vue";
  import GetDate from "@/mixins/GetDate";

  export default {
    name: 'Comments',
    components: {
      AddComment
    },
    mixins: [
      GetDate
    ],
    data: () => ({
      isLoading: true,
      commentsList: []
    }),
    methods: {
      newComment (data) {
        this.commentsList.unshift(data)
      }
    },
    async created () {
      try {
        this.isLoading = true
        const { data } = await this.$axios.get('/posts/1/comments')
        this.commentsList = data.map(item => {
          item.date = this.getDate()
          return item
        })
      } catch (e) {
        console.error(e)
      }
      this.isLoading = false
    }
  }
</script>

<style scoped lang="scss">
  .comments-wrapper__title {
    font-weight: bold;
    font-size: 2rem;
  }

  .comment {
    padding: 1rem 0;
    margin-bottom: .5rem;
    border-bottom: 1px solid #e9e9e9;
    &:last-child {
      border: none;
    }
  }
  .comment__author_name {
    font-weight: bold;
    font-size: 1.125rem;
  }

  .comment__text {
    margin-top: 1rem;
  }
</style>