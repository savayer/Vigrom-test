<template>
  <div class="wrapper">
    <Signin />
    <Signup />
    <Header />
    <div class="container mt-5">
      <InfoContent />
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Signin from "@/components/Auth/Signin.vue";
  import Signup from "@/components/Auth/Signup.vue";
  import InfoContent from "@/components/InfoContent.vue";

  export default {
    name: 'Info',
    components: {
      InfoContent,
      Signin,
      Signup,
      Header
    }
  }
</script>