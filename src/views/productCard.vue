<template>
  <div class="onecard col-md-4">
    <div v-if="product">
      <div v-for="product in product" :key="product.product_id"></div>
      <div class="d-flex justify-content-center container-fluid">
        <div style="width: 30rem">
          <img
            v-bind:src="product.image"
            class="img-fluid"
            style="width: 30rem"
          />
        </div>
        <div class="card-body">
          <p class="card-text">{{ product.name }}</p>
          <p class="card-text">Description:</p>
          <p class="card-text">{{ product.descriptions }}</p>
          <p class="card-text">Category:</p>
          <p class="card-text">{{ product.category }}</p>
          <p class="card-text">Price: R{{ product.price }}</p>
          <div class="wrap">
            <button
              @click="this.$store.dispatch('addTocart', product)"
              class="button btn btn-dark"
              type="submit"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    products() {
      return this.item.product;
    },
  },
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
  methods: {
    add() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
  },

  data() {
    return {
      product: null,
    };
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
<style scoped>
.onecard {
  padding: 50px;
}
.img-fluid {
  width: 1rem;
  height: 18rem;
  border-radius: 10px;
  transition: 0.2 linear;
}
.card-text {
  padding-left: 10rem;
}

.col-md-4 {
  flex: 0 0 auto;
  width: 100%;
  padding-top: 10rem;
}
.wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  width: 140px;
  height: 45px;
  margin-top: 2rem;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.button:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>
