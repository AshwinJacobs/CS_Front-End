<template>
  <div class="onecard">
    <div v-if="product">
      <div v-for="product in product" :key="product.product_id"></div>
      <div class="d-flex justify-content-center">
        <div class="card" style="width: 30rem">
          <img
            v-bind:src="product.image"
            class="img-fluid"
            style="width: 30rem"
          />
          <div class="card-body">
            <p class="card-text">{{ product.name }}</p>
            <p class="card-text">R{{ product.price }}</p>
            <p class="card-text">{{ product.descriptions }}</p>
            <p class="card-text">{{ product.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  mounted() {
    fetch(
      "https://capstone-fin.herokuapp.com/products/" + this.$route.params.id
    )
      .then((res) => res.json())
      .then((data) => {
        this.product = data[0];
        console.log(this.product);
      });
    // this.$store.dispatch("getproduct", this.$route.params.id);
  },
  data() {
    return {
      product: null,
    };
  },
  computed: {
    products() {
      return this.item.product;
    },
  },
  // mounted() {
  //   fetch("https://capstone-fin.herokuapp.com/products/" + this.id)
  //     .then((res) => res.json())
  //     .then((data) => (this.product = data));
  // },
  // };

  //   props: ["id"],
  //   computed: {
  //     products() {
  //       return this.$store.state.product;
  //     },
  //   },
};
</script>
<style>
.onecard {
  padding: 50px;
}
</style>
