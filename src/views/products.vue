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
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
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

/* From uiverse.io by @mrhyddenn */
.loader {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(#ee280e, #15a0f7, #6ed15a);
  animation: animate7712 1.2s linear infinite;
}

@keyframes animate7712 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loader span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: linear-gradient(#ee280e, #15a0f7, #5ad15a);
}

.loader:after {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: #333;
  border: solid #333 10px;
  border-radius: 50%;
}

.loader span:nth-child(1) {
  filter: blur(5px);
}

.loader span:nth-child(2) {
  filter: blur(10px);
}

.loader span:nth-child(3) {
  filter: blur(25px);
}

.loader span:nth-child(4) {
  filter: blur(50px);
}
</style>
