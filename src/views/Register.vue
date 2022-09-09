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
      <input
        type="text"
        class="form-control"
        required
        v-model="user_type"
        readonly
      />
      <div v-if="clicked">
        <div v-if="user">
          <p>Registering...</p>
        </div>
        <div v-else>
          <p>Successfully registered</p>

          <router-link class="link-login" to="/login"
            ><div class="wrap">
              <button class="button">Login</button>
            </div></router-link
          >
        </div>
      </div>
      <div v-else class="wrap">
        <button class="button" type="submit">Register</button>
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
      user_type: "user",
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
html,
body {
  height: 100%;
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
