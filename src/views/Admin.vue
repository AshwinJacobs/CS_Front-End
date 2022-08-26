<template>
  <div class="row">
    <span>
      <ul>
        <li class="active">productS</li>
      </ul>
    </span>
    <input
      class="search-admin"
      type="text"
      v-model="search"
      placeholder="Search by Private/Public products"
    />

    <div class="adform">
      <form @submit.prevent="createproduct()">
        <input type="text" v-model="Image" placeholder="IMG URL" />
        <input type="text" v-model="title" placeholder="Title" />
        <input type="text" v-model="date" placeholder="Date" />
        <input type="text" v-model="type" placeholder="Description" />
        <input type="text" v-model="Description" placeholder="Type" />
        <button type="submit">ADD product</button>
      </form>
    </div>
    <div class="filter-ui">
      <table>
        <tr class="table-header">
          <th>Image</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th class="statusHead">Type</th>
          <th>Delete</th>
        </tr>
        <AdminCard
          v-for="product in filteredproducts"
          :key="product.id"
          :product="product"
        />
      </table>
    </div>
  </div>
</template>

<script>
import AdminCard from "../components/Admintable.vue";
export default {
  components: { AdminCard },
  data() {
    return {
      search: "",
      products: [],
      id: "",
      title: "",
      date: "",
      type: "",
      Img: "",
      Description: "",
    };
  },

  computed: {
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.Type?.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },

  methods: {
    createproduct() {
      return this.$store.dispatch("createproduct", {
        Title: this.title,
        Date: this.date,
        Type: this.type,
        Description: this.Description,
      });
    },
  },
};
</script>
<style scoped>
/* body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  color: #787d80;
  letter-spacing: 0.2px;
} */

tbody,
td,
tfoot,
th,
thead,
tr {
  border-color: inherit;
  border-style: solid;
  border-width: 3px;
  text-align: center;
}

.container {
  width: 100%;
  margin: auto;
  top: 10px;
}

table {
  width: 100%;
  padding-right: 33px;
}
.talk {
  font-size: 25px;
}

th,
td {
  padding-top: 15px;
  text-align: center;
}

th {
  text-align: left;
  background-color: #f2f2f2;
  color: #65696b;
}

tr:hover {
  background-color: #ebf5fb;
  cursor: default;
  border: 1px solid #67b2e4;
}
.search-admin {
  margin-top: 10px;
  margin-left: 42vw;
  font-size: 21px;
  border: 0;
  outline: 0;
  border-bottom: 2px solid black;
  width: 18%;
  font-size: 20px;
  background: transparent;
  color: black;
}
/* .username {
  color: #3498db;
}

.username:hover,
a:hover {
  color: #3498db;
  cursor: pointer;
  text-decoration: underline;
} */

/* .commenter {
  color: #9a9da0;
} */

/* a {
  color: #3498db;
  text-decoration: none;
} */

/* nav {
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid #e9e9e9;
}
nav ul li {
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
}

nav ul li {
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
} */

.active {
  background-color: rgba(64, 63, 77, 0.7);
  backdrop-filter: blur(3px);
  color: white;
  margin-right: 36px;
  text-align: center;
  font-size: 26px;
  margin-top: 55px;
}

.roleHead {
  width: 115px;
}

.statusHead {
  width: 115px;
}

i {
  float: right;
  padding: 0px 15px;
  color: #787d80;
  font-size: 12px;
}

tr.table-header {
  border: 1px solid #bbbebf;
}

.styled-select select {
  background: transparent;
  border: none;
  font-size: 14px;
  font-family: "Source Sans Pro", sans-serif;
  height: 29px;
  padding: 5px; /* If you add too much padding here, the options won't show in IE */
  width: 100%;
}

.styled-select {
  margin-top: 5px;
  width: 200px;
  border-radius: 2px;
  border: 1px solid #9a9da0;
  color: #3b4a53;
}

.filter-ui,
.search-ui {
  display: inline-block;
  padding: 20px;
  left: 20px;
}

.adform {
  margin: 20px;
  gap: 5px;
}

/* input[type="text"] {
  padding: 6px;
  margin-top: 5px;
  font-size: 14px;
  width: 300px;
  border: 1px solid #9a9da0;
  border-radius: 2px;
} */

/* .search-container button {
  padding: 10px 5px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
} */

/* ::-webkit-input-placeholder {
  color: #bbbebf;
  font-size: 13px;
}
::-moz-placeholder {
  color: #bbbebf;
  font-size: 13px;
}
:-ms-input-placeholder {
  color: #bbbebf;
  font-size: 13px;
}
::placeholder {
  color: #bbbebf;
  font-size: 13px;
} */

/* .adform {
  padding-top: 60px;
} */
</style>
