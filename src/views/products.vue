<template>
  <input
    class="SB"
    type="text"
    v-model="search"
    placeholder="Search by category"
  />
  <div v-if="products" class="row">
    <productCard
      v-for="product of filteredproducts"
      :key="product.product_id"
      :product="product"
    />
  </div>
  <div v-else>
    <div class="spinner" id="spin"></div>
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
  margin-left: 5rem;
 
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

/* From uiverse.io by @EmmaxPlay */
.spinner {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  
}

.spinner::before,
.spinner:after {
  content: "";
  position: absolute;
  border-radius: inherit;
  
}

.spinner:before {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, #ff00cc 0%, #333399 100%);
  animation: spin8932 0.5s infinite linear;
  margin-left: 57rem;
  margin-top: 25rem;
}

.spinner:after {
  width: 85%;
  height: 85%;
  background-color: #212121;
  top: 50%;
  left: 50%;
  margin-left: 57rem;
  margin-top: 25rem;
  transform: translate(-50%, -50%);
  
}

@keyframes spin8932 {
  to {
    transform: rotate(360deg);
  }
}

</style>
