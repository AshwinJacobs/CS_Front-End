<template>
  <div class="register container">
    <h1>Register New User</h1>
    <form @submit="register">
      <label for="email" class="form-label">Email</label>
      <input
        type="email"
        @click="reset"
        v-model="email"
        required
        class="form-control"
      />
      <label for="password" @click="reset" class="form-label">Password</label>
      <input type="password" class="form-control" required v-model="password" />
      <label for="text" @click="reset" class="form-label">Name</label>
      <input type="text" class="form-control" required v-model="full_name" />
      <label for="text" @click="reset" class="form-label"
        >Billing Address</label
      >
      <input
        type="text"
        class="form-control"
        required
        v-model="billing_address"
      />
      <label for="text" @click="reset" class="form-label"
        >Shipping Address</label
      >
      <input
        type="text"
        class="form-control"
        required
        v-model="default_shipping_address"
      />
      <label for="text" @click="reset" class="form-label">Country</label>
      <input type="text" class="form-control" required v-model="country" />

      <label for="text" @click="reset" class="form-label">Phone No.</label>
      <input type="number" class="form-control" required v-model="phone" />

      <label for="text" @click="reset" class="form-label">User-type</label>
      <input type="text" class="form-control" required v-model="user_type" />
      <div v-if="clicked">
        <div v-if="user">
          <p>Successfully registered</p>
        </div>
        <div v-else>
          <p>Registering...</p>
        </div>
      </div>
      <div v-else>
        <button class="btn btn-dark w-4 px-5 my-3" type="submit">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      full_name: "",
      billing_address: "",
      default_shipping_address: "",
      country: "",
      phone: "",
      user_type: "",
      clicked: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    register(e) {
      e.preventDefault();
      this.clicked = true;
      const payload = {
        email: this.email,
        password: this.password,
        full_name: this.full_name,
        billing_address: this.billing_address,
        default_shipping_address: this.default_shipping_address,
        country: this.country,
        phone: this.phone,
        user_type: this.user_type,
      };
      this.$store.dispatch("register", payload);
    },
    reset() {
      this.clicked = false;
    },
  },
};
</script>

<style scoped>
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 50%;
  padding-top: 10vh;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
}
.form-label {
  padding-top: 10px;
}
</style>
