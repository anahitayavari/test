<script>
import Template_Navbar from "@/components/template/Template_Navbar.vue";

export default {
  name: "App",
  components:{
    'template_navbar' : Template_Navbar
  }

}
</script>
<template>
  <template_navbar />

  <div class="container-fluid">


    <router-view />

  </div>



</template>

<style scoped>

</style>