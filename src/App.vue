<template>
  <div><Navbar /></div>
  <router-view />
  <body>
  <div></div>

  </body>
  <v-Footer>
    <Footer />
  </v-Footer>
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
  overflow-x: hidden;
  background-image: url("https://i.postimg.cc/26yL2FsK/light-5951708-1920.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
 


}
.form-label , h1{
    color: white;
    font-size: 35px;
  }
</style>
