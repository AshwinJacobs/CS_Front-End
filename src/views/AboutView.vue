<template>
  <h1 class="fancy">About Us</h1>
  <p>
  This store implements new gadgets for people's needs, for small problems and simply for entertainment and fun.
  Gadgets help us in our daily lives from storing , transfering data into external devices and does not seem to fail anyones needs,
  so welcome to our store and hope you enjoy your visit.
  </p>
</template>
<script>
export default {};
</script>
<style scoped>
.fancy {
  --b: 6px; /* control the border thickness */
  --w: 80px; /* control the width of the line*/
  --g: 15px; /* control the gap */
  --c: #0b486b;

  width: fit-content;
  padding: 0 1em;
  padding-top: 20vh;
  line-height: 1.6em;

  margin-inline: auto;
}

p {
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: red;
  font-size: 2.3rem;
  text-align: justify;
  margin-inline: max(20px, 50% - 800px/2);
}
h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 2.3rem;
}
h2 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.8rem;
}

body {
  font-family: system-ui, sans-serif;
}
</style>
