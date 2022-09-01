<template>
  <tr>
    <td class="image">
      <img :src="product.image" />
    </td>
    <td class="date">
      {{ product.name }}
    </td>
    <td class="email">
      {{ product.create_date }}
    </td>
    <td class="email">
      {{ product.descriptions }}
    </td>
    <td class="email">
      {{ product.category }}
    </td>
    <td>
      <i
        @click="deleteproduct(product.product_id)"
        class="fa-solid fa-trash-can"
      ></i>
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
