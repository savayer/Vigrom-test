<template>
  <div class="wrapper">
    <Signin />
    <Signup />
    <Header />
    <main class="container mt-5">
      <HomeContent />
    </main>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Signin from "@/components/Auth/Signin.vue";
  import Signup from "@/components/Auth/Signup.vue";
  import HomeContent from "@/components/Home/HomeContent.vue";

  export default {
    name: 'Home',
    components: {
      HomeContent,
      Signin,
      Signup,
      Header
    }
  }
</script>