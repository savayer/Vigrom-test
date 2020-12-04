<template>
  <div class="wrapper">
    <Signin />
    <Signup />
    <Header />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Signin from "@/components/Auth/Signin.vue";
  import Signup from "@/components/Auth/Signup.vue";

  export default {
    name: 'Home',
    components: {
      Signin,
      Signup,
      Header
    },
    data: () => ({
      test: 1
    })
  }
</script>