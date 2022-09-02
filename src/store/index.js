import { createStore } from "vuex";
import router from "../router/index";
export default createStore({
  state: {
    users: null,
    user: null,
    token: null,
    products: null,
    product: null,
    cart: null,
  },
  getters: {},
  mutations: {
    settoken: (state, token) => {
      state.token = token;
    },
    setusers: (state, users) => {
      state.users = users;
    },
    setuser: (state, user) => {
      state.user = user;
    },
    setproducts: (state, products) => {
      state.products = products;
    },
    setproduct: (state, product) => {
      state.product = product;
    },
    setcart: (state, list) => {
      state.cart = list;
    },
  },
  actions: {
    logout: async (context) => {
      context.commit("setusers", null);
      window.location = "/login";
    },
    login: async (context, payload) => {
      let res = await fetch("https://capstone-fin.herokuapp.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
        }),
      });
      let data = await res.json();
      console.log(data);
      if (data.token) {
        context.commit("settoken", data.token);
        // Verify token
        //
        fetch("https://capstone-fin.herokuapp.com/users/users/verify", {
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": data.token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            context.commit("setuser", data.user);
            router.push("/products");
          });
      } else {
        alert(data);
      }
    },
    register: async (context, payload) => {
      const {
        full_name,
        email,
        password,
        billing_address,
        default_shipping_address,
        country,
        phone,
        user_type,
      } = payload;
      fetch("https://capstone-fin.herokuapp.com/users/register", {
        method: "POST",
        body: JSON.stringify({
          full_name: full_name,
          email: email,
          password: password,
          billing_address: billing_address,
          default_shipping_address: default_shipping_address,
          country: country,
          phone: phone,
          user_type: user_type,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          context.commit("setusers", json);
        });
    },
    getproducts: async (context) => {
      fetch("https://capstone-fin.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => context.commit("setproducts", products));
    },
  },
  getProduct: async (context, id) => {
    fetch("https://capstone-fin.herokuapp.com/products/" + id)
      .then((res) => res.json())
      .then((product) => {
        context.commit("setproduct", product);
        console.log(product);
      });
  },
  deleteProduct: async (context, id) => {
    fetch("https://capstone-fin.herokuapp.com/products/" + id, {
      method: "DELETE",
    }).then(() => context.dispatch("getProducts"));
  },
  createProduct: async (context, Product) => {
    fetch("https://capstone-fin.herokuapp.com/products/", {
      method: "POST",
      body: JSON.stringify(Product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
  },
  updateProduct: async (context, Product) => {
    fetch("https://capstone-fin.herokuapp.com/products/" + Product.id, {
      method: "PUT",
      body: JSON.stringify(Product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => context.dispatch("getProducts"));
  },
  //cart
  getcart: async (context, id) => {
    // id = context.state.user.id
    await fetch("https://capstone-fin.herokuapp.com/users/" + id + "/cart", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
      .then((res) => res.json())
      .then((product) => {
        // console.log(data)
        context.commit("setcart", product);
      });
  },
  addTocart: async (context, product, id) => {
    id = context.state.user.id;
    console.log(product);
    await fetch("https://capstone-fin.herokuapp.com/users/" + id + "/cart", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-auth-token": context.state.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getcart", id);
      });
  },

  clearcart: async (context, id) => {
    await fetch("ttps://capstone-fin.herokuapp.com/users/" + id + "/cart", {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  },
  deletecartItem: async (context, list, id) => {
    id = context.state.user.id;
    await fetch(
      "ttps://capstone-fin.herokuapp.com/users/" + id + "/cart/" + list.cartid,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": context.state.token,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        context.dispatch("getcart", id);
      });
  },

  modules: {},
});
