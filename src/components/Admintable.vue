<template>
  <tr>
    <td class="image">
      <img :src="product.image" />
    </td>
    <td class="date">
      {{ product.Title }}
    </td>
    <td class="email">
      {{ product.Date }}
    </td>
    <td class="email">
      {{ product.Description }}
    </td>
    <td class="email">
      {{ product.Type }}
    </td>
    <td>
      <i @click="deleteproduct(product.id)" class="fa-solid fa-trash-can"></i>
    </td>
    <!-- <td><button @click="deleteproduct(product.id)">Delete</button></td> -->
    <!-- <td class="commenter"><i class="fas fa-angle-down"></i></td>
    <td class="activeUser"><i class="fas fa-angle-down"></i></td> -->
  </tr>
</template>
<script>
export default {
  props: ["product"],
  methods: {
    deleteproduct(id) {
      return this.$store.dispatch("deleteproduct", id);
    },
  },
};
</script>
<style scoped>
img,
svg {
  vertical-align: middle;
  width: 80px;
  height: 50px;
}
</style>
>
