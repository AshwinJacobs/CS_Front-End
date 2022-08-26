<template>
  <div class="wave">
    <v-footer class="wave"> </v-footer>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
html,
body {
  overflow-x: hidden;
}
.contact {
  text-align: center;
}

.wave {
  background-color: rgba(0, 0, 0, 0);
  color: white;
  height: 20vh;
  text-align: center;
  font-size: 12px;
}

.right {
  text-align: center;
}
.copy {
  text-align: center;
}
p {
  margin-top: 0;
  margin-bottom: 7px;
}
</style>
