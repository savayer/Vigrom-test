<template>
  <div class="container">
    <Header />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";

  export default {
    name: 'Home',
    components: {
      Header
    },
    data: () => ({
      test: 1
    })
  }
</script>