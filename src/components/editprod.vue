<template>
  <div
    class="modal fade"
    style="color: black !important"
    :id="`editProduct` + product.product_id"
    tabindex="-1"
    :aria-labelledby="product.id + `EditLabel`"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content text-white">
        <div class="modal-header">
          <h5 class="modal-title" :id="`editProductLabel` + product.product_id">
            Modal Title
          </h5>
          <button
            type="button"
            :id="`editProductClose` + product.product_id"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <form method="PUT" @submit.prevent="editProduct">
            <!-- <label class="form-label">ID</label>
            <input
              type="number"
              class="form-control"
              :value="product.id"
              readonly
            /> -->
            <label class="form-label">Product Name</label>
            <input type="text" class="form-control" v-model="product.name" />
            <label class="form-label">Product Image</label>
            <input type="text" class="form-control" v-model="product.image" />
            <label class="form-label">Description</label>
            <textarea
              style="resize: none"
              class="form-control"
              cols="30"
              rows="2"
              v-model="product.descriptions"
            ></textarea>
            <label class="form-label">Category</label>
            <input
              type="text"
              class="form-control"
              v-model="product.category"
            />
            <label class="form-label">Price</label>
            <input type="number" class="form-control" v-model="product.price" />
            <button type="submit" class="btn btn-grad" @click="editProduct">
              Save Changes
            </button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-grad" data-bs-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    editProduct() {
      // e.preventDefault();
      //   let newProduct = {
      //     id: this.product.id,
      //     title: this.product.name,
      //     img: this.product.img,
      //     description: this.product.descriptions,
      //     category: this.product.category,
      //     price: this.product.price,
      //   };
      this.$store.dispatch("updateProduct", this.product);
      //   document.getElementById(`editProductClose` + this.product.id).click();
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #000000 0%,
    #434343 51%,
    #000000 100%
  );
  margin: 10px;
  padding: 10px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-size: 12px;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
</style>
