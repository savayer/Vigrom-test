<template>
  <b-card
    overlay
    img-src="https://savayer.space/img/slide-3.7f1f0175.jpg"
    img-alt="Card Image"
    text-variant="white"
    bg-variant="#333743"
    class="rounded-0"
  >
    <b-card-title>
      <router-link to="/info" class="text-white font-weight-bold">
        Vue 3 — The New Store
      </router-link>
    </b-card-title>
    <b-card-text>
      Is the Vuex Store still necessary in Vue3? The answer for me is definitely NO! And here is why.
    </b-card-text>
  </b-card>
</template>

<script>
  export default {
    name: 'HomeContent',
  }
</script>