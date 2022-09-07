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
      <button
        type="button"
        data-bs-toggle="modal"
        :data-bs-target="`#editProduct` + product.product_id"
      >
        edit
      </button>
    </td>
    <td>
      <i
        @click="this.$store.dispatch('deleteProduct', product.product_id)"
        class="fa-solid fa-trash-can"
      ></i>
    </td>
    <!-- <td><button @click="deleteproduct(product.id)">Delete</button></td> -->
    <!-- <td class="commenter"><i class="fas fa-angle-down"></i></td>
    <td class="activeUser"><i class="fas fa-angle-down"></i></td> -->
    <editprod :product="product" />
  </tr>
</template>
<script>
import editprod from "./editprod.vue";
export default {
  props: ["product"],
  components: {
    editprod,
  },
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
