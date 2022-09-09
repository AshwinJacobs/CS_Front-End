<template>
  <div><Navbar /></div>
  <router-view />
  <body>
    <div></div>
  </body>
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

body {
  overflow-x: hidden;
  background-image: url("");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  aspect-ratio: 1.5px;
}
.form-label,
h1 {
  color: white;
  font-size: 35px;
}
</style>
