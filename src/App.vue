<template>
  <div><Navbar /></div>
  <router-view />
  <v-footer>
    <Footer />
  </v-footer>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
// import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
   background: linear-gradient(
    83deg,
    rgb(15, 108, 136),
    rgb(65, 238, 166),
    rgb(231, 226, 152)
  );
}
</style>
