<template>
  <h1 class="fancy">Main Title</h1>
  <p>
    Croissant tiramisu candy canes danish dragée lemon drops. Tart dessert
    dragée fruitcake bear claw danish gingerbread. Croissant gingerbread
    chocolate cake apple pie sweet roll cotton candy. Jelly jelly icing toffee
    cotton candy. Soufflé tart sweet roll chocolate sesame snaps fruitcake
    carrot cake. Wafer biscuit cotton candy sweet icing.
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
  font-size: 1.3rem;
  text-align: justify;
  margin-inline: max(20px, 50% - 800px/2);
}
h1 {
  font-size: 2.3rem;
}
h2 {
  font-size: 1.8rem;
}

body {
  font-family: system-ui, sans-serif;
}
</style>
