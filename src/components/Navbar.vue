<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav class="branding">
      <h1 class="cash">products</h1>
      <ul v-show="!mobile" class="navigation">
        <li>
          <router-link class="link" to="/home">Home</router-link>
        </li>
        <li>
          <router-link class="link" to="/about">About</router-link>
        </li>
        <li>
          <router-link class="link" to="/products">All products</router-link>
        </li>
        <li>
          <router-link class="link my-5" to="/cart">Cart</router-link>
        </li>

        <div v-if="User">
          <li>
            <router-link class="link" to="/login" @click="logout"
              >Logout {{ User.full_name }}</router-link
            >
          </li>
        </div>
        <div v-else>
          <li>
            <router-link class="link" to="/login">Login</router-link
            ><span>|</span>
            <router-link class="link" to="/register">Register</router-link>
          </li>
        </div>
      </ul>
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-show="mobile"
          class="fa-solid fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <h1 class="cash">products</h1>
          <!-- <li>
            <router-link class="link" to="/">Home</router-link>
          </li> -->
          <li>
            <router-link class="link" to="/home">Home</router-link>
          </li>
          <li>
            <router-link class="link" to="/about">About</router-link>
          </li>
          <li>
            <router-link class="link" to="/products">All products</router-link>
          </li>
          <li>
            <router-link class="link" to="/cart">Cart</router-link>
          </li>

          <div v-if="user">
            <div class="logout">
              <button type="button" @click="logout">Logout</button>
            </div>
          </div>
          <div v-if="!user">
            <li>
              <router-link class="link" to="/login">Login</router-link>
            </li>
            <li>
              <router-link class="link" to="/register">Register</router-link>
            </li>
          </div>
        </ul>
      </transition>
    </nav>
  </header>

  <cart />
</template>
<script>
import store from "@/store";
import cart from "./Cart.vue";
export default {
  components: {
    cart,
  },
  name: "Navbar,Cart",
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  computed: {
    User() {
      return store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
  },

  methods: {
    logout() {
      this.$store.state.user = null;
      this.$store.state.cart = null;
      localStorage.removeItem("users");
      this.$router.push("./login");
    },
  },
};
</script>

<style>
header {
  width: 100%;
  transition: 0.5s ease all;
  color: #fff;
}
nav {
  display: flex;
  flex-direction: row;
  transition: 0.5s ease all;
  width: 100%;
  margin: 0;
  position: fixed;
  background-color: rgba(29, 27, 27, 0.258);
  z-index: 99;
  height: 50px;
}

ul,
.link {
  font-weight: 500;
  color: #fff;
  list-style: none;
  text-decoration: none;
}

li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}

.link:hover {
  color: skyblue;
  border-color: skyblue;
}

.branding {
  display: flex;
  align-items: center;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
  margin-top: 10px;
}

.cash {
  font-size: 16px;
  font-weight: 500;
  padding-left: 10px;
  padding-top: 5px;
}

i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.5s ease all;
}

icon-active {
  transform: rotate(180deg);
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>
