<template>
  <div class="offcanvas offcanvas-" tabindex="1" id="Cart">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="cartproduct">Offcanvas right</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="productcart">
        <!-- <div > -->
        <div class="card" v-for="product in productcart" :key="product">
          <h2>
            {{ product.productName }}
          </h2>
          <a
            class="btn"
            @click="this.$store.dispatch('deleteFromcart', product)"
          >
            <i class="bi bi-trash3"></i>
          </a>
        </div>
        <button
          class="btn btn-primary"
          @click="this.$store.dispatch('clearCart')"
        >
          Checkout
        </button>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product_id"],
  computed: {
    productcart() {
      return this.$store.state.products;
    },
  },
  mounted() {
    // this.$store.dispatch("getproduct", this.id)
  },
};
</script>
<style></style>
