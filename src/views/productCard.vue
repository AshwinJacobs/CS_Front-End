<template>
  <div class="onecard">
    <div v-if="products">
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 30rem">
          <img
            v-bind:src="products.image"
            class="img-fluid"
            style="width: 30rem"
          />
          <div class="card-body">
            <p class="card-text">{{ products.Title }}</p>
            <p class="card-text">{{ products.Date }}</p>
            <p class="card-text">{{ products.Type }}</p>
            <p class="card-text">{{ products.Description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // props: ["id"],
  // data() {
  //   return {
  //     product: null,
  //   };
  // },
  // mounted() {
  //   fetch("https://capstone-fin.herokuapp.com/products" + this.id)
  //     .then((res) => res.json())
  //     .then((data) => (this.product = data));
  // },

  props: ["id"],
  computed: {
    products() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getproduct", this.$route.params.id);
  },
};
</script>
<style>
.onecard {
  padding: 50px;
}
</style>
