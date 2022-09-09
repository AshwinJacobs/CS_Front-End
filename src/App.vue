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

body , html {
  overflow-x: hidden;
  background-image: url("https://i.postimg.cc/T1KzCs20/background-1872802-1920.jpg");
  background-position: center;
  background-position-y: 0vh;
  background-size: 180vh;
}
.form-label,
h1 {
  color: rgb(247, 21, 21);
  font-size: 35px;
}
</style>
