import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import productCard from "@/views/productCard.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/products",
    name: "products",
    component: () => import("../views/products.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/cart.vue"),
  },

  {
    path: "/AccountView",
    name: "AccountView",
    component: () => import("../views/AccountView.vue"),
  },
  {
    path: "/product/:id",
    name: "productCard",
    component: productCard,
    // props: true,
  },


  {
    path: "/Admin",
    name: "Admin",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
