<template>
  <div class="login container">
    <h1 class="pb-3">Login</h1>
    <form @submit="login">
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
      <div v-if="clicked">
        <div v-if="user">
          <p>Successfully logged in</p>
        </div>
        <div v-else>
          <p>Checking...</p>
        </div>
      </div>
      <div v-else class="wrap">
        <button class="button btn btn-dark" type="submit">Login</button>
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
      clicked: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.clicked = true;
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
    },
    reset() {
      this.clicked = false;
    },
  },
};
</script>

<style scoped>
  .form-label , h1{
    color: white;
    font-size: 35px;
  }
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-top: 20vh;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
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
