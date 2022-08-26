<template>
  <input
    class="SB"
    type="text"
    v-model="search"
    placeholder="Search by category"
  />
  <div class="row">
    <productCard
      v-for="product in filteredproducts"
      :key="product.product_id"
      :product="product"
    />
  </div>
</template>
<script>
import productCard from "../components/productCard.vue";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.category
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
  components: { productCard },
  mounted() {
    this.$store.dispatch("getproducts");
  },
};
</script>
<style scoped>
.row {
  margin-top: 10px;
}
.SB {
  margin-top: 53px;
  margin-left: 42vw;
  font-size: 21px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid black;
  width: 18%;
  font-size: 20px;
  background: transparent;
  color: black;
}
</style>
